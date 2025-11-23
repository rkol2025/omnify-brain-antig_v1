import { MemoryModule } from '../src/lib/brain/memory';
import fs from 'fs';
import path from 'path';
import { MemoryInput } from '../src/types/brain';

const RAW_DATA_DIR = path.join(process.cwd(), 'src', 'data', 'raw');

async function main() {
    console.log('🧠 Testing MEMORY Module...');

    // 1. Load Raw Data
    const dailyMetrics = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'daily_metrics.json'), 'utf-8'));
    const channels = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'channels.json'), 'utf-8'));
    const campaigns = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'campaigns.json'), 'utf-8'));
    const creatives = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'creatives.json'), 'utf-8'));
    const cohorts = JSON.parse(fs.readFileSync(path.join(RAW_DATA_DIR, 'cohorts.json'), 'utf-8'));

    const input: MemoryInput = {
        daily_metrics: dailyMetrics,
        channels,
        campaigns,
        creatives,
        cohorts
    };

    // 2. Run Module
    const memory = new MemoryModule();
    const output = memory.process(input);

    // 3. Log Results
    console.log('\n📊 MEMORY Output:');
    console.log('--------------------------------');
    console.log(`Blended ROAS: ${output.blended_roas}`);
    console.log(`LTV Factor:   ${output.ltv_factor}`);
    console.log(`Adj. ROAS:    ${output.ltv_adjusted_roas}`);
    console.log('\nChannel Performance:');
    console.table(output.channels);

    // 4. Save Output (Simulating Orchestrator)
    const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data', 'outputs');
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    fs.writeFileSync(path.join(OUTPUT_DIR, 'memory_output.json'), JSON.stringify(output, null, 2));
    console.log(`\n✅ Saved output to ${path.join(OUTPUT_DIR, 'memory_output.json')}`);
}

main().catch(console.error);
