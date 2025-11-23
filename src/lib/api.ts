/**
 * Data Access Layer
 * Reads brain module outputs from the filesystem
 */

import fs from 'fs';
import path from 'path';
import { MemoryOutput, OracleOutput, CuriosityOutput } from '@/types/brain';

const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data', 'outputs');

export async function getMemoryOutput(): Promise<MemoryOutput | null> {
    try {
        const filePath = path.join(OUTPUT_DIR, 'memory_output.json');
        if (!fs.existsSync(filePath)) return null;
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Failed to read memory output:', error);
        return null;
    }
}

export async function getOracleOutput(): Promise<OracleOutput | null> {
    try {
        const filePath = path.join(OUTPUT_DIR, 'oracle_output.json');
        if (!fs.existsSync(filePath)) return null;
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Failed to read oracle output:', error);
        return null;
    }
}

export async function getCuriosityOutput(): Promise<CuriosityOutput | null> {
    try {
        const filePath = path.join(OUTPUT_DIR, 'curiosity_output.json');
        if (!fs.existsSync(filePath)) return null;
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Failed to read curiosity output:', error);
        return null;
    }
}

export interface DashboardData {
    memory: MemoryOutput | null;
    oracle: OracleOutput | null;
    curiosity: CuriosityOutput | null;
    lastUpdated: string;
}

export async function getDashboardData(): Promise<DashboardData> {
    const [memory, oracle, curiosity] = await Promise.all([
        getMemoryOutput(),
        getOracleOutput(),
        getCuriosityOutput()
    ]);

    return {
        memory,
        oracle,
        curiosity,
        lastUpdated: new Date().toISOString()
    };
}
