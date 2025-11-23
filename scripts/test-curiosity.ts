import { CuriosityModule } from '../src/lib/brain/curiosity';
import fs from 'fs';
import path from 'path';
import { CuriosityInput } from '../src/types/brain';

const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data', 'outputs');

async function main() {
    console.log('💡 Testing CURIOSITY Module...');

    // 1. Load Inputs (Simulating Orchestrator)
    const memoryOutput = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, 'memory_output.json'), 'utf-8'));
    const oracleOutput = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, 'oracle_output.json'), 'utf-8'));

    const input: CuriosityInput = {
        memory_output: memoryOutput,
        oracle_output: oracleOutput
    };

    // 2. Run Module
    const curiosity = new CuriosityModule();
    const output = curiosity.process(input);

    // 3. Log Results
    console.log('\n📊 CURIOSITY Output:');
    console.log('--------------------------------');
    console.log(`Total Potential Uplift: $${output.total_potential_uplift}/day`);

    console.log('\n🚀 Top 3 Actions:');
    output.actions.forEach(action => {
        console.log(`\n[#${action.priority}] ${action.action_type.toUpperCase()} (${action.urgency})`);
        console.log(`Rationale: ${action.rationale}`);
        console.log(`Impact:    $${action.estimated_impact_daily}/day`);
        if (action.action_type === 'shift_budget') {
            console.log(`Details:   Shift $${action.shift_amount_daily} from ${action.from_channel} to ${action.to_channel}`);
        }
    });

    // 4. Save Output
    fs.writeFileSync(path.join(OUTPUT_DIR, 'curiosity_output.json'), JSON.stringify(output, null, 2));
    console.log(`\n✅ Saved output to ${path.join(OUTPUT_DIR, 'curiosity_output.json')}`);
}

main().catch(console.error);
