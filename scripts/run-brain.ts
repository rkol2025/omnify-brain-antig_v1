#!/usr/bin/env node
/**
 * Run Brain Script
 * Executes a complete Omnify Brain cycle
 * 
 * Usage:
 *   npx tsx scripts/run-brain.ts
 * 
 * This script:
 * 1. Creates a BrainOrchestrator instance
 * 2. Runs a complete brain cycle (MEMORY → ORACLE → CURIOSITY)
 * 3. Saves outputs to src/data/outputs/
 * 4. Logs results summary
 */

import { BrainOrchestrator } from '../src/lib/brain/orchestrator';

async function main() {
    try {
        // Create orchestrator
        const orchestrator = new BrainOrchestrator();

        // Run brain cycle
        const result = await orchestrator.runCycle();

        // Success - exit cleanly
        process.exit(0);
    } catch (error) {
        console.error('💥 Brain execution failed:', error);
        process.exit(1);
    }
}

// Run the script
main();
