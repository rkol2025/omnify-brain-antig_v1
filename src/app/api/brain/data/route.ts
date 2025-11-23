import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { MemoryOutput, OracleOutput, CuriosityOutput } from '@/types/brain';

export const dynamic = 'force-dynamic';

export async function GET() {
    const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data', 'outputs');

    try {
        const memoryPath = path.join(OUTPUT_DIR, 'memory_output.json');
        const oraclePath = path.join(OUTPUT_DIR, 'oracle_output.json');
        const curiosityPath = path.join(OUTPUT_DIR, 'curiosity_output.json');

        // Check if files exist
        if (!fs.existsSync(memoryPath) || !fs.existsSync(oraclePath) || !fs.existsSync(curiosityPath)) {
            return NextResponse.json({ error: 'Brain data not found' }, { status: 404 });
        }

        const memory = JSON.parse(fs.readFileSync(memoryPath, 'utf-8')) as MemoryOutput;
        const oracle = JSON.parse(fs.readFileSync(oraclePath, 'utf-8')) as OracleOutput;
        const curiosity = JSON.parse(fs.readFileSync(curiosityPath, 'utf-8')) as CuriosityOutput;

        return NextResponse.json({ memory, oracle, curiosity });
    } catch (error) {
        console.error('Error reading brain data:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
