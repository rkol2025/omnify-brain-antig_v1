/**
 * Brain Orchestrator
 * Coordinates execution of MEMORY, ORACLE, and CURIOSITY modules
 * 
 * Data Flow:
 * 1. Load raw data from src/data/raw/
 * 2. MEMORY: Process attribution and ROI truth
 * 3. ORACLE: Generate predictions from MEMORY output + raw data
 * 4. CURIOSITY: Create recommendations from MEMORY + ORACLE outputs
 * 5. Save all outputs to src/data/outputs/
 */

import fs from 'fs';
import path from 'path';
import { MemoryModule } from './memory';
import { OracleModule } from './oracle';
import { CuriosityModule } from './curiosity';
import type {
    MemoryInput,
    MemoryOutput,
    OracleInput,
    OracleOutput,
    CuriosityInput,
    CuriosityOutput,
    Channel,
    Campaign,
    Creative,
    DailyMetric,
    Cohort
} from '@/types/brain';

/**
 * Raw data loaded from filesystem
 */
interface RawData {
    channels: Channel[];
    campaigns: Campaign[];
    creatives: Creative[];
    daily_metrics: DailyMetric[];
    cohorts: Cohort[];
}

/**
 * Brain cycle result with all module outputs
 */
export interface BrainCycleResult {
    memory: MemoryOutput;
    oracle: OracleOutput;
    curiosity: CuriosityOutput;
    execution_time_ms: number;
    timestamp: string;
}

/**
 * Brain Orchestrator
 * Manages sequential execution of all brain modules
 */
export class BrainOrchestrator {
    private rawDataDir: string;
    private outputDataDir: string;
    private publicOutputDir: string;

    constructor() {
        this.rawDataDir = path.join(process.cwd(), 'src', 'data', 'raw');
        this.outputDataDir = path.join(process.cwd(), 'src', 'data', 'outputs');
        this.publicOutputDir = path.join(process.cwd(), 'public', 'data', 'outputs');
    }

    /**
     * Load raw data from JSON files
     * Reads all 5 input files from src/data/raw/
     */
    private loadRawData(): RawData {
        console.log('📂 Loading raw data from:', this.rawDataDir);

        const rawData: RawData = {
            channels: this.loadJSON<Channel[]>('channels.json'),
            campaigns: this.loadJSON<Campaign[]>('campaigns.json'),
            creatives: this.loadJSON<Creative[]>('creatives.json'),
            daily_metrics: this.loadJSON<DailyMetric[]>('daily_metrics.json'),
            cohorts: this.loadJSON<Cohort[]>('cohorts.json')
        };

        console.log('✅ Loaded raw data:');
        console.log(`   • Channels: ${rawData.channels.length}`);
        console.log(`   • Campaigns: ${rawData.campaigns.length}`);
        console.log(`   • Creatives: ${rawData.creatives.length}`);
        console.log(`   • Daily Metrics: ${rawData.daily_metrics.length}`);
        console.log(`   • Cohorts: ${rawData.cohorts.length}`);

        return rawData;
    }

    /**
     * Load and parse a JSON file
     */
    private loadJSON<T>(filename: string): T {
        const filepath = path.join(this.rawDataDir, filename);

        if (!fs.existsSync(filepath)) {
            throw new Error(`Required file not found: ${filepath}`);
        }

        const content = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(content) as T;
    }

    /**
     * Save outputs to JSON files
     * Writes all 3 output files to src/data/outputs/
     */
    private saveOutputs(result: BrainCycleResult): void {
        console.log('');
        console.log('💾 Saving outputs to:', this.outputDataDir);

        // Ensure output directory exists
        if (!fs.existsSync(this.outputDataDir)) {
            fs.mkdirSync(this.outputDataDir, { recursive: true });
        }

        // Save MEMORY output
        this.saveJSON('memory_output.json', result.memory);
        console.log(`   ✅ Saved memory_output.json`);

        // Save ORACLE output
        this.saveJSON('oracle_output.json', result.oracle);
        console.log(`   ✅ Saved oracle_output.json`);

        // Save CURIOSITY output
        this.saveJSON('curiosity_output.json', result.curiosity);
        console.log(`   ✅ Saved curiosity_output.json`);

        // Copy to public directory
        this.copyToPublic();
    }

    /**
     * Copy outputs to public directory for static access
     */
    private copyToPublic(): void {
        console.log('');
        console.log('🌍 Syncing to public directory:', this.publicOutputDir);

        if (!fs.existsSync(this.publicOutputDir)) {
            fs.mkdirSync(this.publicOutputDir, { recursive: true });
        }

        const files = ['memory_output.json', 'oracle_output.json', 'curiosity_output.json'];

        for (const file of files) {
            const srcPath = path.join(this.outputDataDir, file);
            const destPath = path.join(this.publicOutputDir, file);

            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log(`   ✅ Synced ${file}`);
            }
        }
    }

    /**
     * Save data to a JSON file
     */
    private saveJSON(filename: string, data: any): void {
        const filepath = path.join(this.outputDataDir, filename);
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8');
    }

    /**
     * Run a complete brain cycle
     * Executes MEMORY → ORACLE → CURIOSITY in sequence
     * 
     * @returns Brain cycle result with all outputs
     */
    async runCycle(): Promise<BrainCycleResult> {
        const cycleStartTime = Date.now();
        const timestamp = new Date().toISOString();

        console.log('');
        console.log('═══════════════════════════════════════════');
        console.log('🧠 OMNIFY BRAIN CYCLE STARTED');
        console.log('═══════════════════════════════════════════');
        console.log(`Timestamp: ${timestamp}`);
        console.log('');

        try {
            // Step 1: Load raw data
            const rawData = this.loadRawData();

            console.log('');
            console.log('───────────────────────────────────────────');

            // Step 2: Run MEMORY module
            console.log('');
            console.log('[1/3] MEMORY MODULE');
            console.log('───────────────────────────────────────────');
            const memoryStartTime = Date.now();

            const memoryModule = new MemoryModule();
            const memoryInput: MemoryInput = {
                channels: rawData.channels,
                campaigns: rawData.campaigns,
                creatives: rawData.creatives,
                daily_metrics: rawData.daily_metrics,
                cohorts: rawData.cohorts
            };
            const memoryOutput = memoryModule.process(memoryInput);

            const memoryDuration = Date.now() - memoryStartTime;
            console.log(`✅ MEMORY completed in ${memoryDuration}ms`);

            console.log('');
            console.log('───────────────────────────────────────────');

            // Step 3: Run ORACLE module
            console.log('');
            console.log('[2/3] ORACLE MODULE');
            console.log('───────────────────────────────────────────');
            const oracleStartTime = Date.now();

            const oracleModule = new OracleModule();
            const oracleInput: OracleInput = {
                memory_output: memoryOutput,
                daily_metrics: rawData.daily_metrics,
                creatives: rawData.creatives,
                cohorts: rawData.cohorts
            };
            const oracleOutput = oracleModule.process(oracleInput);

            const oracleDuration = Date.now() - oracleStartTime;
            console.log(`✅ ORACLE completed in ${oracleDuration}ms`);

            console.log('');
            console.log('───────────────────────────────────────────');

            // Step 4: Run CURIOSITY module
            console.log('');
            console.log('[3/3] CURIOSITY MODULE');
            console.log('───────────────────────────────────────────');
            const curiosityStartTime = Date.now();

            const curiosityModule = new CuriosityModule();
            const curiosityInput: CuriosityInput = {
                memory_output: memoryOutput,
                oracle_output: oracleOutput
            };
            const curiosityOutput = curiosityModule.process(curiosityInput);

            const curiosityDuration = Date.now() - curiosityStartTime;
            console.log(`✅ CURIOSITY completed in ${curiosityDuration}ms`);

            // Calculate total execution time
            const execution_time_ms = Date.now() - cycleStartTime;

            // Build result
            const result: BrainCycleResult = {
                memory: memoryOutput,
                oracle: oracleOutput,
                curiosity: curiosityOutput,
                execution_time_ms,
                timestamp
            };

            // Save outputs
            this.saveOutputs(result);

            // Print summary
            console.log('');
            console.log('═══════════════════════════════════════════');
            console.log('🎉 BRAIN CYCLE COMPLETED SUCCESSFULLY');
            console.log('═══════════════════════════════════════════');
            console.log(`Total Execution Time: ${execution_time_ms}ms`);
            console.log('');
            console.log('📊 Results Summary:');
            console.log(`   • Blended ROAS: ${memoryOutput.blended_roas}`);
            console.log(`   • LTV Factor: ${memoryOutput.ltv_factor}`);
            console.log(`   • Risk Level: ${oracleOutput.risk_level.toUpperCase()}`);
            console.log(`   • Fatigue Predictions: ${oracleOutput.fatigue_predictions.length}`);
            console.log(`   • ROI Decay Alerts: ${oracleOutput.roi_decay_alerts.length}`);
            console.log(`   • LTV Drift Alerts: ${oracleOutput.ltv_drift_alerts.length}`);
            console.log(`   • Top Actions: ${curiosityOutput.actions.length}`);
            console.log(`   • Potential Uplift: $${curiosityOutput.total_potential_uplift}/day`);
            console.log('');

            return result;

        } catch (error) {
            console.error('');
            console.error('═══════════════════════════════════════════');
            console.error('❌ BRAIN CYCLE FAILED');
            console.error('═══════════════════════════════════════════');
            console.error('Error:', error);
            console.error('');
            throw error;
        }
    }
}

/**
 * Create and return a new Brain Orchestrator instance
 */
export function createOrchestrator(): BrainOrchestrator {
    return new BrainOrchestrator();
}

export default BrainOrchestrator;
