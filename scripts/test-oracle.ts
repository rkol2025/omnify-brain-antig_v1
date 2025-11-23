import { OracleModule } from '../src/lib/brain/oracle';
import fs from 'fs';
import path from 'path';
import { OracleInput } from '../src/types/brain';

const RAW_DATA_DIR = path.join(process.cwd(), 'src', 'data', 'raw');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data', 'outputs');

async function main() {
    console.log('🔮 Testing ORACLE Module...');

    // 1. Load Data
    const dailyMetrics = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'daily_metrics.json'), 'utf-8'));
    const creatives = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'creatives.json'), 'utf-8'));
    const cohorts = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'cohorts.json'), 'utf-8'));

    // Load Memory Output (Simulating Orchestrator flow)
    const memoryOutput = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, 'memory_output.json'), 'utf-8'));

    const input: OracleInput = {
        memory_output: memoryOutput,
        daily_metrics: dailyMetrics,
        creatives,
        cohorts
    };

    // 2. Run Module
    const oracle = new OracleModule();
    const output = oracle.process(input);

    // 3. Log Results
    console.log('\n📊 ORACLE Output:');
    console.log('--------------------------------');
    console.log(`Risk Level: ${output.risk_level.toUpperCase()}`);

    console.log('\n⚠️  Fatigue Predictions:');
    console.table(output.fatigue_predictions.map(f => ({
        id: f.creative_id,
        prob_7d: f.fatigue_probability_7d,
        action: f.recommended_action
    })));

    console.log('\n📉 ROI Decay Alerts:');
    console.table(output.roi_decay_alerts);

    console.log('\n📉 LTV Drift Alerts:');
    console.table(output.ltv_drift_alerts);

    // 4. Save Output
    fs.writeFileSync(path.join(OUTPUT_DIR, 'oracle_output.json'), JSON.stringify(output, null, 2));
    console.log(`\n✅ Saved output to ${path.join(OUTPUT_DIR, 'oracle_output.json')}`);
}

main().catch(console.error);
