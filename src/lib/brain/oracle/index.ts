/**
 * ORACLE Module - Prediction & Risk Engine
 * Predicts creative fatigue, ROI decay, and LTV drift 7-14 days in advance
 * 
 * Three Detection Engines:
 * 1. Creative Fatigue Detection - Predicts which creatives will underperform
 * 2. ROI Decay Detection - Detects declining channel ROAS
 * 3. LTV Drift Detection - Identifies customer lifetime value deterioration
 */

import type {
    BrainModule,
    BrainModuleOutput,
    OracleInput,
    OracleOutput,
    FatiguePrediction,
    ROIDecayAlert,
    LTVDriftAlert,
    DailyMetric,
    Creative,
    Cohort,
    ChannelName
} from '@/types/brain';

// ==========================================
// HELPER TYPES
// ==========================================

/**
 * Period-based metrics for comparison
 */
interface PeriodMetrics {
    spend: number;
    revenue: number;
    impressions: number;
    clicks: number;
    conversions: number;
    roas: number;
    cvr: number;
    cpa: number;
}

// ==========================================
// HELPER FUNCTIONS - Date Filtering
// ==========================================

/**
 * Get date string for N days ago from today
 */
function getDaysAgo(days: number): string {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
}

/**
 * Filter daily metrics by date range
 */
function filterMetricsByDateRange(
    metrics: DailyMetric[],
    startDaysAgo: number,
    endDaysAgo: number
): DailyMetric[] {
    const startDate = getDaysAgo(startDaysAgo);
    const endDate = getDaysAgo(endDaysAgo);

    return metrics.filter(m => m.date >= endDate && m.date <= startDate);
}

/**
 * Get recent period metrics (last 7 days)
 */
function getRecentMetrics(metrics: DailyMetric[]): DailyMetric[] {
    return filterMetricsByDateRange(metrics, 0, 7);
}

/**
 * Get baseline period metrics (14-21 days ago)
 */
function getBaselineMetrics(metrics: DailyMetric[]): DailyMetric[] {
    return filterMetricsByDateRange(metrics, 14, 21);
}

// ==========================================
// HELPER FUNCTIONS - Metric Aggregation
// ==========================================

/**
 * Aggregate metrics into a single period summary
 */
function aggregateMetrics(metrics: DailyMetric[]): PeriodMetrics {
    const totals = metrics.reduce(
        (acc, m) => ({
            spend: acc.spend + m.spend,
            revenue: acc.revenue + m.revenue,
            impressions: acc.impressions + m.impressions,
            clicks: acc.clicks + m.clicks,
            conversions: acc.conversions + m.conversions
        }),
        { spend: 0, revenue: 0, impressions: 0, clicks: 0, conversions: 0 }
    );

    return {
        ...totals,
        roas: totals.spend > 0 ? totals.revenue / totals.spend : 0,
        cvr: totals.clicks > 0 ? totals.conversions / totals.clicks : 0,
        cpa: totals.conversions > 0 ? totals.spend / totals.conversions : 0
    };
}

/**
 * Aggregate metrics by channel
 */
function aggregateByChannel(
    metrics: DailyMetric[]
): Map<ChannelName, PeriodMetrics> {
    const channelMap = new Map<ChannelName, DailyMetric[]>();

    for (const metric of metrics) {
        if (!channelMap.has(metric.channel)) {
            channelMap.set(metric.channel, []);
        }
        channelMap.get(metric.channel)!.push(metric);
    }

    const result = new Map<ChannelName, PeriodMetrics>();
    for (const [channel, channelMetrics] of channelMap) {
        result.set(channel, aggregateMetrics(channelMetrics));
    }

    return result;
}

// ==========================================
// ORACLE MODULE CLASS
// ==========================================

/**
 * ORACLE Brain Module
 * Processes risk predictions and alerts
 */
export class OracleModule implements BrainModule<OracleInput, OracleOutput> {
    name = 'ORACLE';
    version = '1.0.0';

    process(input: OracleInput): OracleOutput {
        console.log('[ORACLE] Starting risk analysis...');
        console.log(`[ORACLE] Input: ${input.daily_metrics.length} daily metrics, ${input.creatives.length} creatives, ${input.cohorts.length} cohorts`);

        // Run three detection engines
        const fatigue_predictions = this.detectCreativeFatigue(input);
        const roi_decay_alerts = this.detectROIDecay(input);
        const ltv_drift_alerts = this.detectLTVDrift(input);

        // Aggregate risk level
        const risk_level = this.calculateRiskLevel(
            fatigue_predictions,
            roi_decay_alerts,
            ltv_drift_alerts
        );

        console.log(`[ORACLE] Risk Level: ${risk_level.toUpperCase()}`);
        console.log(`[ORACLE] Found ${fatigue_predictions.length} fatigue predictions, ${roi_decay_alerts.length} decay alerts, ${ltv_drift_alerts.length} drift alerts`);

        return {
            fatigue_predictions,
            roi_decay_alerts,
            ltv_drift_alerts,
            risk_level,
            processing_timestamp: new Date().toISOString()
        };
    }

    // ==========================================
    // ENGINE 1: CREATIVE FATIGUE DETECTION
    // ==========================================

    /**
     * Detect creative fatigue risk
     * 
     * Algorithm:
     * 1. For each creative, compare baseline (14-21 days ago) vs recent (last 7 days)
     * 2. Flag if: CVR drop >20%, CPA increase >25%, or high frequency
     * 3. Calculate fatigue probability based on number of flags
     * 4. Estimate performance drop and recommend action
     */
    private detectCreativeFatigue(input: OracleInput): FatiguePrediction[] {
        console.log('[ORACLE] Running Creative Fatigue Detection...');

        const predictions: FatiguePrediction[] = [];

        // Note: In MVP, we use static creative metrics from seed data
        // In production, we would track creative-level daily metrics
        for (const creative of input.creatives) {
            const riskFactors: string[] = [];
            let flagCount = 0;

            // Flag 1: Low CVR (simulates CVR drop >20%)
            // Threshold: CVR < 1.5% indicates fatigue
            if (creative.cvr < 0.015) {
                riskFactors.push('cvr_drop');
                flagCount++;
            }

            // Flag 2: High CPA (simulates CPA increase >25%)
            // Threshold: CPA > $60 indicates inefficiency
            if (creative.cpa > 60) {
                riskFactors.push('cpa_increase');
                flagCount++;
            }

            // Flag 3: High frequency (simulates >3.5 frequency)
            // Proxy: High impressions relative to conversions
            const impressionsPerConversion = creative.conversions > 0
                ? creative.impressions / creative.conversions
                : Infinity;

            if (impressionsPerConversion > 20000) {
                riskFactors.push('frequency_high');
                flagCount++;
            }

            // Calculate fatigue probability based on flag count
            // 0 flags = 0.0, 1 flag = 0.4, 2 flags = 0.7, 3 flags = 0.95
            let fatigue_probability_7d = 0.0;
            if (flagCount === 1) fatigue_probability_7d = 0.4;
            else if (flagCount === 2) fatigue_probability_7d = 0.7;
            else if (flagCount >= 3) fatigue_probability_7d = 0.95;

            // Only include creatives with fatigue risk
            if (fatigue_probability_7d >= 0.4) {
                // 14-day probability is 10% higher (capped at 1.0)
                const fatigue_probability_14d = Math.min(1.0, fatigue_probability_7d * 1.1);

                // Estimate performance drop (20% for 1 flag, 40% for 2, 60% for 3)
                const predicted_performance_drop = flagCount * 0.2;

                // Recommend action based on probability
                let recommended_action = 'Monitor closely';
                if (fatigue_probability_7d > 0.8) {
                    recommended_action = 'Pause within 72 hours';
                } else if (fatigue_probability_7d > 0.6) {
                    recommended_action = 'Refresh creative within 1 week';
                }

                predictions.push({
                    creative_id: creative.id,
                    creative_name: creative.name,
                    platform: creative.platform,
                    fatigue_probability_7d: Number(fatigue_probability_7d.toFixed(2)),
                    fatigue_probability_14d: Number(fatigue_probability_14d.toFixed(2)),
                    predicted_performance_drop: Number(predicted_performance_drop.toFixed(2)),
                    key_risk_factors: riskFactors,
                    recommended_action
                });
            }
        }

        // Sort by probability descending
        predictions.sort((a, b) => b.fatigue_probability_7d - a.fatigue_probability_7d);

        console.log(`[ORACLE] Detected ${predictions.length} creatives at risk of fatigue`);

        return predictions;
    }

    // ==========================================
    // ENGINE 2: ROI DECAY DETECTION
    // ==========================================

    /**
     * Detect ROI decay by channel
     * 
     * Algorithm:
     * 1. Compare baseline ROAS (14-21 days ago) vs recent ROAS (last 7 days)
     * 2. Calculate decay percentage
     * 3. Classify severity: High (>30%), Medium (15-30%), Low (<15%)
     * 4. Only flag channels with decay >15%
     */
    private detectROIDecay(input: OracleInput): ROIDecayAlert[] {
        console.log('[ORACLE] Running ROI Decay Detection...');

        const alerts: ROIDecayAlert[] = [];

        // Get baseline and recent periods
        const baselineMetrics = getBaselineMetrics(input.daily_metrics);
        const recentMetrics = getRecentMetrics(input.daily_metrics);

        // Aggregate by channel
        const baselineByChannel = aggregateByChannel(baselineMetrics);
        const recentByChannel = aggregateByChannel(recentMetrics);

        // Compare each channel
        for (const [channel, baseline] of baselineByChannel) {
            const recent = recentByChannel.get(channel);

            if (!recent || baseline.roas === 0) {
                continue;
            }

            // Calculate decay percentage
            const decay_percentage = (baseline.roas - recent.roas) / baseline.roas;

            // Only flag if decay > 15% (0.15)
            if (decay_percentage > 0.15) {
                // Classify severity
                let decay_severity: 'high' | 'medium' | 'low';
                if (decay_percentage > 0.30) {
                    decay_severity = 'high';
                } else if (decay_percentage >= 0.15) {
                    decay_severity = 'medium';
                } else {
                    decay_severity = 'low';
                }

                // Determine trend
                let trend: 'declining' | 'stable' | 'improving';
                if (decay_percentage > 0.05) {
                    trend = 'declining';
                } else if (decay_percentage < -0.05) {
                    trend = 'improving';
                } else {
                    trend = 'stable';
                }

                alerts.push({
                    channel,
                    recent_roas: Number(recent.roas.toFixed(2)),
                    baseline_roas: Number(baseline.roas.toFixed(2)),
                    decay_percentage: Number(decay_percentage.toFixed(2)),
                    decay_severity,
                    trend
                });
            }
        }

        console.log(`[ORACLE] Detected ${alerts.length} channels with ROI decay`);

        return alerts;
    }

    // ==========================================
    // ENGINE 3: LTV DRIFT DETECTION
    // ==========================================

    /**
     * Detect LTV drift
     * 
     * Algorithm:
     * 1. Extract recent cohorts (last 2-3 months)
     * 2. Extract historical baseline (6-12 months ago)
     * 3. Calculate average LTV for each period
     * 4. Calculate drift percentage
     * 5. Classify severity: High (>20%), Medium (10-20%), Low (<10%)
     */
    private detectLTVDrift(input: OracleInput): LTVDriftAlert[] {
        console.log('[ORACLE] Running LTV Drift Detection...');

        const alerts: LTVDriftAlert[] = [];

        if (input.cohorts.length === 0) {
            console.warn('[ORACLE] No cohorts available for LTV drift analysis');
            return alerts;
        }

        // Sort cohorts by month descending (most recent first)
        const sortedCohorts = [...input.cohorts].sort((a, b) =>
            b.month.localeCompare(a.month)
        );

        // Recent cohorts: last 2-3 months (indices 0-2)
        const recentCohorts = sortedCohorts.slice(0, Math.min(3, sortedCohorts.length));

        // Historical baseline: 6-12 months ago (indices 6-12)
        const historicalCohorts = sortedCohorts.slice(6, Math.min(12, sortedCohorts.length));

        if (recentCohorts.length === 0 || historicalCohorts.length === 0) {
            console.warn('[ORACLE] Insufficient cohort data for LTV drift analysis');
            return alerts;
        }

        // Calculate average LTV for recent cohorts
        const recent_ltv = recentCohorts.reduce((sum, c) => sum + c.ltv_current, 0) / recentCohorts.length;

        // Calculate average LTV for historical cohorts
        const historical_ltv = historicalCohorts.reduce((sum, c) => sum + c.ltv_current, 0) / historicalCohorts.length;

        // Calculate drift percentage
        const drift_percentage = (historical_ltv - recent_ltv) / historical_ltv;

        // Only flag if drift > 10% (0.10)
        if (drift_percentage > 0.10) {
            // Classify severity
            let drift_severity: 'high' | 'medium' | 'low';
            if (drift_percentage > 0.20) {
                drift_severity = 'high';
            } else if (drift_percentage >= 0.10) {
                drift_severity = 'medium';
            } else {
                drift_severity = 'low';
            }

            alerts.push({
                recent_ltv: Number(recent_ltv.toFixed(0)),
                historical_ltv: Number(historical_ltv.toFixed(0)),
                drift_percentage: Number(drift_percentage.toFixed(3)),
                drift_severity
            });

            console.log(`[ORACLE] LTV Drift detected: ${drift_severity} severity (${(drift_percentage * 100).toFixed(1)}% decline)`);
        } else {
            console.log('[ORACLE] No significant LTV drift detected');
        }

        return alerts;
    }

    // ==========================================
    // RISK AGGREGATION
    // ==========================================

    /**
     * Calculate overall risk level
     * 
     * Rules:
     * - Red: ≥3 high-severity risks
     * - Yellow: ≥1 high-severity OR ≥2 medium-severity
     * - Green: Otherwise
     */
    private calculateRiskLevel(
        fatigue: FatiguePrediction[],
        decay: ROIDecayAlert[],
        drift: LTVDriftAlert[]
    ): 'red' | 'yellow' | 'green' {
        let highRisks = 0;
        let mediumRisks = 0;

        // Count fatigue risks (probability >0.8 = high, >0.5 = medium)
        for (const prediction of fatigue) {
            if (prediction.fatigue_probability_7d > 0.8) {
                highRisks++;
            } else if (prediction.fatigue_probability_7d > 0.5) {
                mediumRisks++;
            }
        }

        // Count decay risks
        for (const alert of decay) {
            if (alert.decay_severity === 'high') {
                highRisks++;
            } else if (alert.decay_severity === 'medium') {
                mediumRisks++;
            }
        }

        // Count drift risks
        for (const alert of drift) {
            if (alert.drift_severity === 'high') {
                highRisks++;
            } else if (alert.drift_severity === 'medium') {
                mediumRisks++;
            }
        }

        console.log(`[ORACLE] Risk Summary: ${highRisks} high, ${mediumRisks} medium`);

        // Determine risk level
        if (highRisks >= 3) {
            return 'red';
        } else if (highRisks >= 1 || mediumRisks >= 2) {
            return 'yellow';
        } else {
            return 'green';
        }
    }
}

// ==========================================
// CONVENIENCE FUNCTION
// ==========================================

/**
 * Process ORACLE module with standardized output wrapper
 * Includes timing metadata and error handling
 */
export function processOracleModule(input: OracleInput): BrainModuleOutput<OracleOutput> {
    const startTime = Date.now();

    try {
        const module = new OracleModule();
        const data = module.process(input);
        const processingTimeMs = Date.now() - startTime;

        console.log(`[ORACLE] Total processing time: ${processingTimeMs}ms`);

        return {
            success: true,
            data,
            metadata: {
                processingTimeMs,
                timestamp: new Date().toISOString()
            },
            learningInsights: {
                accuracyMetrics: {
                    fatigue_predictions_count: data.fatigue_predictions.length,
                    roi_decay_alerts_count: data.roi_decay_alerts.length,
                    ltv_drift_alerts_count: data.ltv_drift_alerts.length
                }
            }
        };
    } catch (error) {
        const processingTimeMs = Date.now() - startTime;

        console.error('[ORACLE] Processing failed:', error);

        throw error;
    }
}

// Export the module class as default
export default OracleModule;
