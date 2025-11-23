/**
 * Brain Module Type Definitions
 * Shared interfaces for the Brain orchestration system
 */

/**
 * Base interface for Brain modules
 * All modules (MEMORY, ORACLE, CURIOSITY) implement this interface
 * 
 * @template TInput - Input type for the module
 * @template TOutput - Output type for the module
 * 
 * @example
 * ```typescript
 * class MemoryModule implements BrainModule<MemoryInput, MemoryOutput> {
 *   name = 'MEMORY';
 *   version = '1.0.0';
 *   
 *   process(input: MemoryInput): MemoryOutput {
 *     // Processing logic
 *     return output;
 *   }
 * }
 * ```
 */
export interface BrainModule<TInput, TOutput> {
    /** Module name identifier (e.g., "MEMORY", "ORACLE", "CURIOSITY") */
    name: string;

    /** Semantic version of the module */
    version: string;

    /**
     * Process input data and return output
     * This is the core processing function of the module
     * 
     * @param input - Typed input data for the module
     * @returns Processed output data
     */
    process(input: TInput): TOutput;
}

/**
 * Standardized output wrapper for Brain modules
 * Provides consistent metadata and learning insights across all modules
 * 
 * @template T - The actual output data type
 * 
 * @example
 * ```typescript
 * const output: BrainModuleOutput<MemoryOutput> = {
 *   success: true,
 *   data: memoryResult,
 *   metadata: {
 *     processingTimeMs: 234,
 *     timestamp: new Date().toISOString()
 *   }
 * };
 * ```
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

/**
 * Orchestrator configuration options
 * Controls how the Brain orchestrator executes modules
 */
export interface OrchestratorConfig {
    /** Enable verbose logging */
    verbose?: boolean;

    /** Maximum processing time per module in milliseconds */
    timeoutMs?: number;

    /** Enable learning insights collection (Phase 2+) */
    enableLearning?: boolean;

    /** Save outputs to filesystem */
    saveOutputs?: boolean;
}

/**
 * Orchestrator execution result
 * Contains outputs from all modules plus metadata
 * 
 * @template TMemory - Memory module output type
 * @template TOracle - Oracle module output type
 * @template TCuriosity - Curiosity module output type
 */
export interface OrchestratorResult<TMemory, TOracle, TCuriosity> {
    /** Output from MEMORY module */
    memory: TMemory;

    /** Output from ORACLE module */
    oracle: TOracle;

    /** Output from CURIOSITY module */
    curiosity: TCuriosity;

    /** Total execution time in milliseconds */
    totalExecutionTimeMs: number;

    /** ISO timestamp of orchestration start */
    timestamp: string;
}
