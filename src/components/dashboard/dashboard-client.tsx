'use client';

import { useState } from 'react';
import { DashboardData } from '@/lib/api';
import { PersonaType, DEFAULT_PERSONA } from '@/lib/utils/persona';
import { TopBar } from './top-bar';
import { MemoryCard } from './memory-card';
import { OracleCard } from './oracle-card';
import { CuriosityCard } from './curiosity-card';

interface DashboardClientProps {
    initialData: DashboardData;
}

export function DashboardClient({ initialData }: DashboardClientProps) {
    const [persona, setPersona] = useState<PersonaType>(DEFAULT_PERSONA);
    const { memory, oracle, curiosity } = initialData;

    // Safe defaults if data is missing
    const blendedRoas = memory?.blended_roas || 0;
    const riskLevel = oracle?.risk_level || 'green';

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <TopBar
                currentPersona={persona}
                onPersonaChange={setPersona}
                riskLevel={riskLevel}
                blendedRoas={blendedRoas}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)] min-h-[600px]">
                    {/* Column 1: MEMORY */}
                    <div className="h-full">
                        <MemoryCard data={memory} persona={persona} />
                    </div>

                    {/* Column 2: ORACLE */}
                    <div className="h-full">
                        <OracleCard data={oracle} persona={persona} />
                    </div>

                    {/* Column 3: CURIOSITY */}
                    <div className="h-full">
                        <CuriosityCard data={curiosity} persona={persona} />
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-slate-400">
                    Omnify Brain v1.0 • Last updated: {new Date(initialData.lastUpdated).toLocaleString()}
                </div>
            </main>
        </div>
    );
}
