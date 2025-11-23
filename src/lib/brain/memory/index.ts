/**
 * MEMORY Module - Attribution & ROI Truth Layer
 * Calculates unified ROAS, marks winners/losers, and computes LTV-adjusted revenue
 * 
 * Algorithm:
 * 1. Aggregate daily_metrics by channel
 * 2. Calculate ROAS per channel
 * 3. Calculate blended ROAS
 * 4. Mark winners/losers (±15% from blended)
 * 5. Calculate LTV factor from cohorts
 * 6. Calculate LTV-adjusted ROAS (both blended and per-channel)
 * 7. Sort channels by ROAS descending
 */

import type {
    BrainModule,
    BrainModuleOutput,
    MemoryInput,
    MemoryOutput,
    Channel,
    ChannelName
} from '@/types/brain';

import {
    aggregateByChannel,
    calculateROAS,
    calculateBlendedROAS,
    classifyChannelStatus,
    calculateLTVFactor,
    calculateLTVAdjustedROAS
} from './helpers';

// ==========================================
// VALIDATION
// ==========================================

/**
 * Custom error for MEMORY module validation failures
 */
export class MemoryValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'MemoryValidationError';
    }
}

/**
 * Validates MEMORY module input data
 * Ensures all required data is present and well-formed
 * 
 * @param input - Input data to validate
 * @throws {MemoryValidationError} If validation fails
 */
function validateMemoryInput(input: MemoryInput): void {
    // Check required arrays exist
    if (!input.daily_metrics || !Array.isArray(input.daily_metrics)) {
        throw new MemoryValidationError('daily_metrics is required and must be an array');
    }

    if (!input.cohorts || !Array.isArray(input.cohorts)) {
        throw new MemoryValidationError('cohorts is required and must be an array');
    }

    // Check minimum data requirements
    if (input.daily_metrics.length === 0) {
        throw new MemoryValidationError('daily_metrics cannot be empty');
    }

    if (input.cohorts.length === 0) {
        throw new MemoryValidationError('cohorts cannot be empty for LTV calculations');
    }

    // Validate daily metrics have required fields
    const firstMetric = input.daily_metrics[0];
    if (firstMetric.spend === undefined || firstMetric.revenue === undefined) {
        throw new MemoryValidationError('daily_metrics must contain spend and revenue fields');
    }

    // Check for negative values
    const hasNegativeSpend = input.daily_metrics.some(m => m.spend < 0);
    const hasNegativeRevenue = input.daily_metrics.some(m => m.revenue < 0);

    if (hasNegativeSpend || hasNegativeRevenue) {
        console.warn('[MEMORY] Warning: Found negative spend or revenue values');
    }
}

// ==========================================
// MAIN MODULE
// ==========================================

/**
 * MEMORY Brain Module
 * Processes attribution data and calculates ROI truth
 */
export class MemoryModule implements BrainModule<MemoryInput, MemoryOutput> {
    name = 'MEMORY';
    version = '1.0.0';

    process(input: MemoryInput): MemoryOutput {
        console.log('[MEMORY] Starting processing...');
        console.log(`[MEMORY] Input: ${input.daily_metrics.length} daily metrics, ${input.cohorts.length} cohorts`);

        // Validate input
        validateMemoryInput(input);

        // Step 1: Aggregate daily_metrics by channel
        const channelAggregations = aggregateByChannel(input.daily_metrics);
        console.log(`[MEMORY] Aggregated ${channelAggregations.size} channels from daily metrics`);

        // Step 2 & 3: Calculate ROAS per channel and blended ROAS
        const blendedRoas = calculateBlendedROAS(channelAggregations);
        console.log(`[MEMORY] Blended ROAS: ${blendedRoas}`);

        // Step 4: Calculate LTV factor
        const ltvAnalysis = calculateLTVFactor(input.cohorts);
        console.log(`[MEMORY] LTV Factor: ${ltvAnalysis.ltvFactor} (Recent: $${ltvAnalysis.recentLTV}, Historical: $${ltvAnalysis.historicalLTV})`);

        // Step 5: Calculate LTV-adjusted blended ROAS
        const ltvAdjustedBlendedRoas = calculateLTVAdjustedROAS(blendedRoas, ltvAnalysis.ltvFactor);
        console.log(`[MEMORY] LTV-Adjusted Blended ROAS: ${ltvAdjustedBlendedRoas}`);

        // Step 6: Build channel array with all metrics
        const channels: Channel[] = [];
        let winnersCount = 0;
        let losersCount = 0;
        let neutralCount = 0;

        for (const [channelName, aggregation] of channelAggregations) {
            const roas = calculateROAS(aggregation.totalRevenue, aggregation.totalSpend);
            const status = classifyChannelStatus(roas, blendedRoas);
            const ltvAdjustedRoas = calculateLTVAdjustedROAS(roas, ltvAnalysis.ltvFactor);

            channels.push({
                channel: channelName,
                roas,
                spend: Number(aggregation.totalSpend.toFixed(2)),
                revenue: Number(aggregation.totalRevenue.toFixed(2)),
                status,
                ltv_adjusted_roas: ltvAdjustedRoas
            });

            // Count status distribution
            if (status === 'winner') winnersCount++;
            else if (status === 'loser') losersCount++;
            else neutralCount++;
        }

        // Step 7: Sort channels by ROAS descending
        channels.sort((a, b) => b.roas - a.roas);

        console.log(`[MEMORY] Channel Status: ${winnersCount} winners, ${losersCount} losers, ${neutralCount} neutral`);

        // Build final output
        const output: MemoryOutput = {
            channels,
            blended_roas: blendedRoas,
            ltv_factor: ltvAnalysis.ltvFactor,
            ltv_adjusted_roas: ltvAdjustedBlendedRoas,
            processing_timestamp: new Date().toISOString()
        };

        console.log('[MEMORY] Processing completed successfully');

        return output;
    }
}

// ==========================================
// CONVENIENCE FUNCTION
// ==========================================

/**
 * Process MEMORY module with standardized output wrapper
 * Includes timing metadata and error handling
 * 
 * @param input - MEMORY module input
 * @returns Wrapped output with metadata
 */
export function processMemoryModule(input: MemoryInput): BrainModuleOutput<MemoryOutput> {
    const startTime = Date.now();

    try {
        const module = new MemoryModule();
        const data = module.process(input);
        const processingTimeMs = Date.now() - startTime;

        console.log(`[MEMORY] Total processing time: ${processingTimeMs}ms`);

        return {
            success: true,
            data,
            metadata: {
                processingTimeMs,
                timestamp: new Date().toISOString()
            },
            learningInsights: {
                accuracyMetrics: {
                    channels_processed: data.channels.length,
                    blended_roas: data.blended_roas,
                    ltv_factor: data.ltv_factor
                }
            }
        };
    } catch (error) {
        const processingTimeMs = Date.now() - startTime;

        console.error('[MEMORY] Processing failed:', error);

        // Return failed output
        throw error; // Re-throw for now, can be changed to return failed BrainModuleOutput
    }
}

// Export the module class as default
export default MemoryModule;
