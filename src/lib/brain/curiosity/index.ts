/**
 * CURIOSITY Module - Decision & Recommendation Engine
 * Converts MEMORY truth + ORACLE predictions into Top 3 actionable budget moves
 * 
 * Four Action Generators:
 * 1. Shift Budget - Move spend from losers/decaying to winners
 * 2. Pause Creative - Stop fatigued creatives
 * 3. Increase Budget - Scale strong performers
 * 4. Focus Retention - Address LTV drift
 */

import type {
    BrainModule,
    BrainModuleOutput,
    CuriosityInput,
    CuriosityOutput,
    CuriosityAction,
    MemoryOutput,
    OracleOutput,
    Channel,
    ChannelName
} from '@/types/brain';

// ==========================================
// HELPER TYPES
// ==========================================

/**
 * Action candidate with scoring metadata
 */
interface ActionCandidate extends CuriosityAction {
    score: number;
    impact_normalized: number;
    severity_score: number;
    confidence_score: number;
    urgency_score: number;
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Normalize impacts to 0-1 range
 */
function normalizeImpacts(actions: CuriosityAction[]): Map<CuriosityAction, number> {
    const impacts = actions.map(a => a.estimated_impact_daily || a.estimated_impact_total || 0);
    const maxImpact = Math.max(...impacts, 1); // Avoid division by zero

    const normalized = new Map<CuriosityAction, number>();
    actions.forEach((action, i) => {
        normalized.set(action, impacts[i] / maxImpact);
    });

    return normalized;
}

/**
 * Convert urgency to score (0.0-1.0)
 */
function urgencyToScore(urgency: 'HIGH' | 'MEDIUM' | 'LOW'): number {
    if (urgency === 'HIGH') return 1.0;
    if (urgency === 'MEDIUM') return 0.5;
    return 0.2;
}

/**
 * Calculate confidence score based on data quality
 * For MVP, we use a simplified version based on action type
 */
function calculateConfidence(action: CuriosityAction): number {
    // shift_budget and pause_creative have high confidence (data-driven)
    if (action.action_type === 'shift_budget' || action.action_type === 'pause_creative') {
        return 0.9;
    }
    // increase_budget has medium confidence (assumes ROAS holds)
    if (action.action_type === 'increase_budget') {
        return 0.7;
    }
    // focus_retention has lower confidence (strategic/qualitative)
    return 0.5;
}

// ==========================================
// CURIOSITY MODULE CLASS
// ==========================================

/**
 * CURIOSITY Brain Module
 * Generates actionable recommendations
 */
export class CuriosityModule implements BrainModule<CuriosityInput, CuriosityOutput> {
    name = 'CURIOSITY';
    version = '1.0.0';

    process(input: CuriosityInput): CuriosityOutput {
        console.log('[CURIOSITY] Starting decision generation...');
        console.log(`[CURIOSITY] Input: ${input.memory_output.channels.length} channels, ${input.oracle_output.fatigue_predictions.length} fatigue predictions`);

        // Generate all action candidates
        const candidates: CuriosityAction[] = [];

        candidates.push(...this.generateShiftBudgetActions(input.memory_output, input.oracle_output));
        candidates.push(...this.generatePauseCreativeActions(input.oracle_output));
        candidates.push(...this.generateIncreaseBudgetActions(input.memory_output, input.oracle_output));
        candidates.push(...this.generateRetentionActions(input.oracle_output, input.memory_output));

        console.log(`[CURIOSITY] Generated ${candidates.length} action candidates`);

        // Rank and select Top 3
        const topThree = this.selectTopThree(candidates);

        // Calculate total uplift
        const total_potential_uplift = topThree.reduce(
            (sum, action) => sum + (action.estimated_impact_daily || action.estimated_impact_total || 0),
            0
        );

        console.log(`[CURIOSITY] Selected ${topThree.length} actions with total potential uplift: $${total_potential_uplift}/day`);

        return {
            actions: topThree,
            total_potential_uplift,
            processing_timestamp: new Date().toISOString()
        };
    }

    // ==========================================
    // GENERATOR 1: SHIFT BUDGET ACTIONS
    // ==========================================

    /**
     * Generate budget shift actions
     * Move spend from losers/decaying channels to winners
     */
    private generateShiftBudgetActions(
        memory: MemoryOutput,
        oracle: OracleOutput
    ): CuriosityAction[] {
        console.log('[CURIOSITY] Generating shift budget actions...');

        const actions: CuriosityAction[] = [];

        // Find sources: losers OR channels with ROI decay
        const loserChannels = memory.channels.filter(c => c.status === 'loser');
        const decayingChannels = oracle.roi_decay_alerts.map(a => a.channel);

        const sources = new Set<Channel>();
        loserChannels.forEach(c => sources.add(c));
        decayingChannels.forEach(channelName => {
            const channel = memory.channels.find(c => c.channel === channelName);
            if (channel) sources.add(channel);
        });

        // Find targets: winners WITHOUT decay
        const targets = memory.channels.filter(c =>
            c.status === 'winner' && !decayingChannels.includes(c.channel)
        );

        if (sources.size === 0 || targets.length === 0) {
            console.log('[CURIOSITY] No shift budget actions possible (no valid sources or targets)');
            return actions;
        }

        // Sort sources by ROAS ascending (worst first)
        const sortedSources = Array.from(sources).sort((a, b) => a.roas - b.roas);

        // Sort targets by ROAS descending (best first)
        const sortedTargets = targets.sort((a, b) => b.roas - a.roas);

        // Generate action: worst source → best target
        const source = sortedSources[0];
        const target = sortedTargets[0];

        if (source.channel !== target.channel) {
            // Calculate shift amount (10% of source spend, daily)
            const shift_percentage = 0.10;
            const shift_amount_daily = Math.round((source.spend * shift_percentage) / 30);

            // Calculate impact: shift_amount * (target_ROAS - source_ROAS)
            const estimated_impact_daily = Math.round(shift_amount_daily * (target.roas - source.roas));

            // Determine urgency
            const isDecaying = decayingChannels.includes(source.channel);
            const urgency: 'HIGH' | 'MEDIUM' = (source.status === 'loser' && isDecaying) ? 'HIGH' : 'MEDIUM';

            // Build rationale
            let rationale = `Shift 10% from ${source.channel} (ROAS ${source.roas}) to ${target.channel} (ROAS ${target.roas})`;
            if (isDecaying) {
                const decayAlert = oracle.roi_decay_alerts.find(a => a.channel === source.channel);
                if (decayAlert) {
                    rationale = `${source.channel} ROAS declining ${(decayAlert.decay_percentage * 100).toFixed(0)}%, ${target.channel} stable at ${target.roas}`;
                }
            }

            actions.push({
                priority: 0, // Set later
                action_type: 'shift_budget',
                from_channel: source.channel,
                to_channel: target.channel,
                shift_percentage,
                shift_amount_daily,
                estimated_impact_daily,
                urgency,
                rationale
            });

            console.log(`[CURIOSITY] Shift action: ${source.channel} → ${target.channel} ($${shift_amount_daily}/day, impact $${estimated_impact_daily}/day)`);
        }

        return actions;
    }

    // ==========================================
    // GENERATOR 2: PAUSE CREATIVE ACTIONS
    // ==========================================

    /**
     * Generate pause creative actions
     * Stop fatigued creatives before performance degrades
     */
    private generatePauseCreativeActions(oracle: OracleOutput): CuriosityAction[] {
        console.log('[CURIOSITY] Generating pause creative actions...');

        const actions: CuriosityAction[] = [];

        for (const prediction of oracle.fatigue_predictions) {
            // Only generate action if probability > 0.6
            if (prediction.fatigue_probability_7d > 0.6) {
                // Estimate impact: prevent wasted spend on degrading creative
                // Assumption: Average daily spend of $500 per creative
                const estimated_daily_spend = 500;
                const estimated_impact_total = Math.round(
                    estimated_daily_spend * prediction.predicted_performance_drop * 7
                );

                // Determine urgency
                const urgency: 'HIGH' | 'MEDIUM' = prediction.fatigue_probability_7d > 0.8 ? 'HIGH' : 'MEDIUM';

                // Build rationale
                const prob_pct = (prediction.fatigue_probability_7d * 100).toFixed(0);
                const drop_pct = (prediction.predicted_performance_drop * 100).toFixed(0);
                const factors = prediction.key_risk_factors.join(', ');
                const rationale = `Creative ${prediction.creative_id} at ${prob_pct}% fatigue risk, predicted ${drop_pct}% drop (${factors})`;

                actions.push({
                    priority: 0,
                    action_type: 'pause_creative',
                    creative_id: prediction.creative_id,
                    platform: prediction.platform,
                    estimated_impact_total,
                    urgency,
                    rationale
                });

                console.log(`[CURIOSITY] Pause action: ${prediction.creative_id} (${prob_pct}% fatigue, save $${estimated_impact_total})`);
            }
        }

        return actions;
    }

    // ==========================================
    // GENERATOR 3: INCREASE BUDGET ACTIONS
    // ==========================================

    /**
     * Generate increase budget actions
     * Scale strong performers while maintaining efficiency
     */
    private generateIncreaseBudgetActions(
        memory: MemoryOutput,
        oracle: OracleOutput
    ): CuriosityAction[] {
        console.log('[CURIOSITY] Generating increase budget actions...');

        const actions: CuriosityAction[] = [];
        const decayingChannels = oracle.roi_decay_alerts.map(a => a.channel);

        // Find strong winners: ROAS > blended * 1.2 AND not decaying
        const strongWinners = memory.channels.filter(c =>
            c.roas > memory.blended_roas * 1.2 &&
            !decayingChannels.includes(c.channel)
        );

        for (const winner of strongWinners) {
            // Calculate increase (20% of current spend, daily)
            const increase_percentage = 0.20;
            const increase_amount_daily = Math.round((winner.spend * increase_percentage) / 30);

            // Estimate impact (conservative: assume 80% efficiency on scale)
            const estimated_impact_daily = Math.round(increase_amount_daily * winner.roas * 0.8);

            const rationale = `Scale ${winner.channel} (ROAS ${winner.roas}, ${(winner.roas / memory.blended_roas * 100 - 100).toFixed(0)}% above blended) while efficiency is high`;

            actions.push({
                priority: 0,
                action_type: 'increase_budget',
                to_channel: winner.channel,
                increase_percentage,
                estimated_impact_daily,
                urgency: 'MEDIUM', // Scale opportunities are always medium priority
                rationale
            });

            console.log(`[CURIOSITY] Increase action: ${winner.channel} +20% (impact $${estimated_impact_daily}/day)`);
        }

        return actions;
    }

    // ==========================================
    // GENERATOR 4: RETENTION ACTIONS
    // ==========================================

    /**
     * Generate retention focus action
     * Address LTV drift if severity is high or medium
     */
    private generateRetentionActions(
        oracle: OracleOutput,
        memory: MemoryOutput
    ): CuriosityAction[] {
        console.log('[CURIOSITY] Generating retention actions...');

        const actions: CuriosityAction[] = [];

        // Check for LTV drift
        if (oracle.ltv_drift_alerts.length > 0) {
            const drift = oracle.ltv_drift_alerts[0];

            // Only generate if severity is high or medium
            if (drift.drift_severity === 'high' || drift.drift_severity === 'medium') {
                // Estimate impact: drift affects all revenue
                // Calculate potential monthly impact
                const total_monthly_revenue = memory.channels.reduce((sum, c) => sum + c.revenue, 0);
                const estimated_impact_total = Math.round(total_monthly_revenue * drift.drift_percentage * 0.5); // 50% recoverable

                // Urgency matches severity
                const urgency: 'HIGH' | 'MEDIUM' = drift.drift_severity === 'high' ? 'HIGH' : 'MEDIUM';

                const drift_pct = (drift.drift_percentage * 100).toFixed(1);
                const rationale = `LTV drifting ${drift_pct}% below baseline, review onboarding and retention programs`;

                actions.push({
                    priority: 0,
                    action_type: 'focus_retention',
                    estimated_impact_total,
                    urgency,
                    rationale
                });

                console.log(`[CURIOSITY] Retention action: ${drift_pct}% LTV drift (${drift.drift_severity} severity)`);
            }
        }

        return actions;
    }

    // ==========================================
    // RANKING & SELECTION
    // ==========================================

    /**
     * Rank actions and select Top 3
     * Applies scoring algorithm and diversity constraint
     */
    private selectTopThree(candidates: CuriosityAction[]): CuriosityAction[] {
        if (candidates.length === 0) {
            console.log('[CURIOSITY] No candidates to rank');
            return [];
        }

        // Normalize impacts
        const normalizedImpacts = normalizeImpacts(candidates);

        // Score each candidate
        const scoredCandidates: ActionCandidate[] = candidates.map(action => {
            const impact_normalized = normalizedImpacts.get(action) || 0;
            const urgency_score = urgencyToScore(action.urgency);
            const confidence_score = calculateConfidence(action);
            const severity_score = urgency_score; // Simplified: use urgency as severity

            // Score formula: (impact × 0.4) + (severity × 0.3) + (confidence × 0.2) + (urgency × 0.1)
            const score = (
                (impact_normalized * 0.4) +
                (severity_score * 0.3) +
                (confidence_score * 0.2) +
                (urgency_score * 0.1)
            );

            return {
                ...action,
                score,
                impact_normalized,
                severity_score,
                confidence_score,
                urgency_score
            };
        });

        // Sort by score descending
        scoredCandidates.sort((a, b) => b.score - a.score);

        // Select Top 3 with diversity constraint (max 1 increase_budget)
        const selected: CuriosityAction[] = [];
        let increaseCount = 0;

        for (const candidate of scoredCandidates) {
            if (selected.length >= 3) break;

            // Enforce diversity constraint
            if (candidate.action_type === 'increase_budget') {
                if (increaseCount >= 1) {
                    console.log(`[CURIOSITY] Skipping ${candidate.action_type} due to diversity constraint`);
                    continue;
                }
                increaseCount++;
            }

            // Remove scoring metadata
            const { score, impact_normalized, severity_score, confidence_score, urgency_score, ...cleanAction } = candidate;

            // Assign priority
            selected.push({
                ...cleanAction,
                priority: selected.length + 1
            });

            console.log(`[CURIOSITY] Selected #${selected.length}: ${cleanAction.action_type} (score: ${score.toFixed(3)})`);
        }

        return selected;
    }
}

// ==========================================
// CONVENIENCE FUNCTION
// ==========================================

/**
 * Process CURIOSITY module with standardized output wrapper
 */
export function processCuriosityModule(input: CuriosityInput): BrainModuleOutput<CuriosityOutput> {
    const startTime = Date.now();

    try {
        const module = new CuriosityModule();
        const data = module.process(input);
        const processingTimeMs = Date.now() - startTime;

        console.log(`[CURIOSITY] Total processing time: ${processingTimeMs}ms`);

        return {
            success: true,
            data,
            metadata: {
                processingTimeMs,
                timestamp: new Date().toISOString()
            },
            learningInsights: {
                accuracyMetrics: {
                    actions_generated: data.actions.length,
                    total_potential_uplift: data.total_potential_uplift
                }
            }
        };
    } catch (error) {
        const processingTimeMs = Date.now() - startTime;

        console.error('[CURIOSITY] Processing failed:', error);

        throw error;
    }
}

// Export the module class as default
export default CuriosityModule;
