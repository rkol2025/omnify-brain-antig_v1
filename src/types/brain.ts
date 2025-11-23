/**
 * Persona types for the Omnify Brain Dashboard
 * Each persona sees the same data with different microcopy
 */
export type Persona = 'cmo' | 'vp_growth' | 'director_perf';

/**
 * Supported marketing channels
 */
export type ChannelName = 'Meta' | 'Google' | 'TikTok' | 'LinkedIn' | 'Email';

/**
 * Channel performance summary
 * Contains aggregated metrics and performance status
 */
export interface Channel {
    /** Channel name */
    channel: ChannelName;
    /** Return on Ad Spend (Revenue / Spend) */
    roas: number;
    /** Total spend in dollars */
    spend: number;
    /** Total revenue in dollars */
    revenue: number;
    /** Performance status relative to blended ROAS */
    status: 'winner' | 'neutral' | 'loser';
    /** LTV-adjusted ROAS (roas * ltv_factor) */
    ltv_adjusted_roas: number;
}

/**
 * Campaign metadata and performance
 */
export interface Campaign {
    /** Unique campaign identifier */
    id: string;
    /** Campaign name */
    name: string;
    /** Parent channel */
    channel: ChannelName;
    /** Campaign status */
    status: 'active' | 'paused';
    /** Campaign spend in dollars */
    spend: number;
    /** Campaign revenue in dollars */
    revenue: number;
    /** Campaign ROAS */
    roas: number;
}

/**
 * Creative asset with performance metrics
 */
export interface Creative {
    /** Unique creative identifier */
    id: string;
    /** Creative name/description */
    name: string;
    /** Platform where creative is running */
    platform: ChannelName;
    /** Thumbnail URL for visual reference */
    thumbnail_url: string;
    /** Creative spend in dollars */
    spend: number;
    /** Total impressions */
    impressions: number;
    /** Total clicks */
    clicks: number;
    /** Total conversions */
    conversions: number;
    /** Cost per acquisition */
    cpa: number;
    /** Conversion rate (conversions / clicks) */
    cvr: number;
    /** Creative ROAS */
    roas: number;
    /** ISO date string of when creative was launched */
    launch_date: string;
}

/**
 * Daily performance metrics by channel
 * Used for time-series analysis and trend detection
 */
export interface DailyMetric {
    /** ISO date string (YYYY-MM-DD) */
    date: string;
    /** Channel for this metric */
    channel: ChannelName;
    /** Daily spend in dollars */
    spend: number;
    /** Daily revenue in dollars */
    revenue: number;
    /** Daily impressions */
    impressions: number;
    /** Daily clicks */
    clicks: number;
    /** Daily conversions */
    conversions: number;
}

/**
 * Customer cohort with LTV metrics
 * Used to detect LTV drift over time
 */
export interface Cohort {
    /** Cohort identifier (YYYY-MM) */
    cohort_id: string;
    /** Month string (YYYY-MM) */
    month: string;
    /** Number of users in cohort */
    users: number;
    /** Lifetime value at 30 days */
    ltv_30: number;
    /** Lifetime value at 60 days */
    ltv_60: number;
    /** Lifetime value at 90 days */
    ltv_90: number;
    /** Current lifetime value */
    ltv_current: number;
    /** Customer acquisition cost for this cohort */
    cac: number;
}

// ==========================================
// MEMORY MODULE TYPES
// ==========================================

/**
 * Input data for MEMORY module
 * Contains all raw data needed for attribution analysis
 */
export interface MemoryInput {
    /** Channel summaries (can be empty, calculated from daily_metrics) */
    channels: Channel[];
    /** Campaign data */
    campaigns: Campaign[];
    /** Creative assets */
    creatives: Creative[];
    /** Daily performance metrics */
    daily_metrics: DailyMetric[];
    /** Customer cohorts */
    cohorts: Cohort[];
}

/**
 * Output from MEMORY module
 * Contains unified attribution and ROI truth
 */
export interface MemoryOutput {
    /** Channel performance summaries with winner/loser status */
    channels: Channel[];
    /** Blended ROAS across all channels */
    blended_roas: number;
    /** LTV factor (recent LTV / baseline LTV) */
    ltv_factor: number;
    /** LTV-adjusted blended ROAS */
    ltv_adjusted_roas: number;
    /** ISO timestamp of processing */
    processing_timestamp: string;
}

// ==========================================
// ORACLE MODULE TYPES
// ==========================================

/**
 * Creative fatigue prediction
 * Predicts which creatives will underperform in next 7-14 days
 */
export interface FatiguePrediction {
    /** Creative ID being analyzed */
    creative_id: string;
    /** Creative name for display */
    creative_name: string;
    /** Platform where creative is running */
    platform: ChannelName;
    /** Probability of fatigue in next 7 days (0.0-1.0) */
    fatigue_probability_7d: number;
    /** Probability of fatigue in next 14 days (0.0-1.0) */
    fatigue_probability_14d: number;
    /** Expected performance drop as percentage (0.0-1.0) */
    predicted_performance_drop: number;
    /** Key factors contributing to fatigue risk */
    key_risk_factors: string[];
    /** Recommended action to take */
    recommended_action: string;
}

/**
 * ROI decay alert for a channel
 * Detects when channel ROAS is declining
 */
export interface ROIDecayAlert {
    /** Channel showing decay */
    channel: ChannelName;
    /** Recent ROAS (last 7 days) */
    recent_roas: number;
    /** Baseline ROAS (14-21 days ago) */
    baseline_roas: number;
    /** Decay percentage (0.0-1.0) */
    decay_percentage: number;
    /** Severity of decay */
    decay_severity: 'high' | 'medium' | 'low';
    /** Trend direction */
    trend: 'declining' | 'stable' | 'improving';
}

/**
 * LTV drift alert
 * Detects when customer quality is deteriorating
 */
export interface LTVDriftAlert {
    /** Recent cohort average LTV */
    recent_ltv: number;
    /** Historical baseline LTV */
    historical_ltv: number;
    /** Drift percentage (0.0-1.0) */
    drift_percentage: number;
    /** Severity of drift */
    drift_severity: 'high' | 'medium' | 'low';
}

/**
 * Input data for ORACLE module
 */
export interface OracleInput {
    /** Output from MEMORY module for context */
    memory_output: MemoryOutput;
    /** Daily metrics for trend analysis */
    daily_metrics: DailyMetric[];
    /** Creative data for fatigue detection */
    creatives: Creative[];
    /** Cohort data for LTV drift detection */
    cohorts: Cohort[];
}

/**
 * Output from ORACLE module
 * Contains predictions and risk assessments
 */
export interface OracleOutput {
    /** Creative fatigue predictions */
    fatigue_predictions: FatiguePrediction[];
    /** ROI decay alerts by channel */
    roi_decay_alerts: ROIDecayAlert[];
    /** LTV drift alerts */
    ltv_drift_alerts: LTVDriftAlert[];
    /** Overall risk level */
    risk_level: 'red' | 'yellow' | 'green';
    /** ISO timestamp of processing */
    processing_timestamp: string;
}

// ==========================================
// CURIOSITY MODULE TYPES
// ==========================================

/**
 * Recommended action from CURIOSITY module
 * Each action is prioritized, scored, and includes impact estimates
 */
export interface CuriosityAction {
    /** Action priority (1 = highest) */
    priority: number;
    /** Type of action to take */
    action_type: 'shift_budget' | 'pause_creative' | 'increase_budget' | 'focus_retention';
    /** Urgency level */
    urgency: 'HIGH' | 'MEDIUM' | 'LOW';
    /** Human-readable explanation of why this action is recommended */
    rationale: string;

    // Action-specific fields
    /** Source channel for budget shift */
    from_channel?: ChannelName;
    /** Target channel for budget shift or increase */
    to_channel?: ChannelName;
    /** Percentage of budget to shift (0.0-1.0) */
    shift_percentage?: number;
    /** Daily dollar amount to shift */
    shift_amount_daily?: number;
    /** Creative ID to pause */
    creative_id?: string;
    /** Platform for creative actions */
    platform?: ChannelName;
    /** Percentage to increase budget (0.0-1.0) */
    increase_percentage?: number;
    /** Estimated daily impact in dollars */
    estimated_impact_daily?: number;
    /** Estimated total impact in dollars (for one-time actions) */
    estimated_impact_total?: number;
}

/**
 * Input data for CURIOSITY module
 */
export interface CuriosityInput {
    /** Output from MEMORY module */
    memory_output: MemoryOutput;
    /** Output from ORACLE module */
    oracle_output: OracleOutput;
}

/**
 * Output from CURIOSITY module
 * Contains prioritized actionable recommendations
 */
export interface CuriosityOutput {
    /** Top 3 recommended actions */
    actions: CuriosityAction[];
    /** Total potential daily uplift from all actions */
    total_potential_uplift: number;
    /** ISO timestamp of processing */
    processing_timestamp: string;
}

// ==========================================
// SHARED TYPES
// ==========================================

/**
 * Base interface for all Brain modules
 * Ensures consistent structure across MEMORY, ORACLE, and CURIOSITY
 */
export interface BrainModule<TInput, TOutput> {
    /** Module name (e.g., "MEMORY", "ORACLE", "CURIOSITY") */
    name: string;
    /** Module version */
    version: string;
    /** Process input and return output */
    process(input: TInput): TOutput;
}

/**
 * Standardized output wrapper for Brain modules
 * Provides consistent metadata and learning insights across all modules
 */
export interface BrainModuleOutput<T> {
    /** Whether the module executed successfully */
    success: boolean;

    /** The actual output data from the module */
    data: T;

    /** Metadata about the execution */
    metadata: {
        /** Processing time in milliseconds */
        processingTimeMs: number;

        /** ISO timestamp of when processing completed */
        timestamp: string;
    };

    /**
     * Optional learning insights
     * Used for compound learning across executions (Phase 2+)
     */
    learningInsights?: {
        /** Accuracy metrics for model validation */
        accuracyMetrics?: Record<string, number>;

        /** Suggestions for model improvement */
        improvementSuggestions?: string[];
    };
}
