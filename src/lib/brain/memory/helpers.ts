/**
 * MEMORY Module Helper Functions
 * Support functions for attribution and ROI calculations
 */

import type { DailyMetric, Cohort, ChannelName } from '@/types/brain';

/**
 * Channel aggregation result
 * Stores totals for spend and revenue per channel
 */
export interface ChannelAggregation {
    totalSpend: number;
    totalRevenue: number;
}

// ==========================================
// STEP 1: AGGREGATION
// ==========================================

/**
 * Aggregate daily metrics by channel
 * Sums spend and revenue for each channel across all days
 * 
 * @param metrics - Array of daily metrics
 * @returns Map of channel names to aggregated spend/revenue
 */
export function aggregateByChannel(metrics: DailyMetric[]): Map<ChannelName, ChannelAggregation> {
    const channelMap = new Map<ChannelName, ChannelAggregation>();

    for (const metric of metrics) {
        const current = channelMap.get(metric.channel) || { totalSpend: 0, totalRevenue: 0 };

        channelMap.set(metric.channel, {
            totalSpend: current.totalSpend + metric.spend,
            totalRevenue: current.totalRevenue + metric.revenue
        });
    }

    return channelMap;
}

// ==========================================
// STEP 2: ROAS CALCULATION
// ==========================================

/**
 * Calculate ROAS (Return on Ad Spend) for a channel
 * Formula: ROAS = Revenue / Spend
 * 
 * @param revenue - Total revenue
 * @param spend - Total spend
 * @returns ROAS value, rounded to 2 decimal places
 */
export function calculateROAS(revenue: number, spend: number): number {
    if (spend === 0) {
        console.warn('[MEMORY] Warning: Zero spend detected, returning 0 ROAS');
        return 0;
    }

    const roas = revenue / spend;
    return Number(roas.toFixed(2));
}

// ==========================================
// STEP 3: BLENDED ROAS CALCULATION
// ==========================================

/**
 * Calculate blended ROAS across all channels
 * Formula: Blended ROAS = Total Revenue / Total Spend
 * 
 * @param channelAggregations - Map of channel aggregations
 * @returns Blended ROAS value, rounded to 2 decimal places
 */
export function calculateBlendedROAS(channelAggregations: Map<ChannelName, ChannelAggregation>): number {
    let totalSpend = 0;
    let totalRevenue = 0;

    for (const aggregation of channelAggregations.values()) {
        totalSpend += aggregation.totalSpend;
        totalRevenue += aggregation.totalRevenue;
    }

    if (totalSpend === 0) {
        console.warn('[MEMORY] Warning: Zero total spend, returning 0 blended ROAS');
        return 0;
    }

    const blendedRoas = totalRevenue / totalSpend;
    return Number(blendedRoas.toFixed(2));
}

// ==========================================
// STEP 4: WINNER/LOSER CLASSIFICATION
// ==========================================

/**
 * Classify channel status based on ROAS performance
 * 
 * Classification logic:
 * - Winner: ROAS > Blended ROAS * 1.15 (15% above blended)
 * - Loser: ROAS < Blended ROAS * 0.85 (15% below blended)
 * - Neutral: Otherwise
 * 
 * @param channelRoas - ROAS for the channel
 * @param blendedRoas - Blended ROAS across all channels
 * @returns Channel status
 */
export function classifyChannelStatus(
    channelRoas: number,
    blendedRoas: number
): 'winner' | 'neutral' | 'loser' {
    const winnerThreshold = blendedRoas * 1.15;
    const loserThreshold = blendedRoas * 0.85;

    if (channelRoas > winnerThreshold) {
        return 'winner';
    } else if (channelRoas < loserThreshold) {
        return 'loser';
    } else {
        return 'neutral';
    }
}

// ==========================================
// STEP 5: LTV FACTOR CALCULATION
// ==========================================

/**
 * LTV analysis result
 */
export interface LTVAnalysis {
    /** LTV factor (recent LTV / historical LTV) */
    ltvFactor: number;
    /** Average recent cohort LTV */
    recentLTV: number;
    /** Average historical cohort LTV */
    historicalLTV: number;
}

/**
 * Calculate LTV factor from cohort data
 * Compares recent cohorts (last 2 months) vs historical baseline (6-12 months ago)
 * 
 * Algorithm:
 * 1. Sort cohorts by date descending (most recent first)
 * 2. Recent cohorts: indices 0-1 (last 2 months)
 * 3. Historical baseline: indices 4-5 (6 months ago range, adjusted for available data)
 * 4. Calculate average LTV for each group
 * 5. LTV Factor = Recent LTV / Historical LTV
 * 
 * @param cohorts - Array of customer cohorts
 * @returns LTV analysis with factor and breakdown
 */
export function calculateLTVFactor(cohorts: Cohort[]): LTVAnalysis {
    if (cohorts.length === 0) {
        console.warn('[MEMORY] Warning: No cohorts provided, returning default LTV factor of 1.0');
        return {
            ltvFactor: 1.0,
            recentLTV: 0,
            historicalLTV: 0
        };
    }

    // Sort cohorts by month descending (most recent first)
    const sortedCohorts = [...cohorts].sort((a, b) => b.month.localeCompare(a.month));

    // Recent cohorts: last 2 months (indices 0-1)
    const recentCohorts = sortedCohorts.slice(0, Math.min(2, sortedCohorts.length));

    // Historical baseline: if we have 6+ cohorts, use indices 4-5 (roughly 5-6 months ago)
    // Otherwise, use the oldest available cohorts
    let baselineCohorts: Cohort[];
    if (sortedCohorts.length >= 6) {
        baselineCohorts = sortedCohorts.slice(4, 6);
    } else if (sortedCohorts.length >= 4) {
        // Use the 2 oldest cohorts if we have at least 4 total
        baselineCohorts = sortedCohorts.slice(-2);
    } else {
        // Not enough data for proper baseline, use all non-recent as baseline
        baselineCohorts = sortedCohorts.slice(2);
    }

    // Calculate average LTV for recent cohorts
    const recentLTV = recentCohorts.length > 0
        ? recentCohorts.reduce((sum, c) => sum + c.ltv_current, 0) / recentCohorts.length
        : 0;

    // Calculate average LTV for baseline cohorts
    const historicalLTV = baselineCohorts.length > 0
        ? baselineCohorts.reduce((sum, c) => sum + c.ltv_current, 0) / baselineCohorts.length
        : 0;

    // Calculate LTV factor (guard against division by zero)
    let ltvFactor = 1.0;
    if (historicalLTV > 0) {
        ltvFactor = recentLTV / historicalLTV;
    } else {
        console.warn('[MEMORY] Warning: Historical LTV is zero, using default LTV factor of 1.0');
    }

    return {
        ltvFactor: Number(ltvFactor.toFixed(2)),
        recentLTV: Number(recentLTV.toFixed(0)),
        historicalLTV: Number(historicalLTV.toFixed(0))
    };
}

// ==========================================
// STEP 6: LTV-ADJUSTED ROAS CALCULATION
// ==========================================

/**
 * Calculate LTV-adjusted ROAS
 * Adjusts ROAS based on customer lifetime value trends
 * 
 * Formula: LTV-Adjusted ROAS = ROAS * LTV Factor
 * 
 * @param roas - Original ROAS value
 * @param ltvFactor - LTV factor (recent LTV / historical LTV)
 * @returns LTV-adjusted ROAS, rounded to 2 decimal places
 */
export function calculateLTVAdjustedROAS(roas: number, ltvFactor: number): number {
    const adjusted = roas * ltvFactor;
    return Number(adjusted.toFixed(2));
}
