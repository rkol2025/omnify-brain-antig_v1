#!/usr/bin/env node
/**
 * Data Seeding Script for Omnify Brain MVP
 * Generates realistic demo data for a $65M beauty brand
 * 
 * Usage:
 *   npx tsx scripts/seed-demo.ts
 */

import { exportDemoData } from '../src/lib/utils/seed-data';

async function main() {
    try {
        exportDemoData();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
}

main();
