'use client';

import { useState } from 'react';
import { MemoryOutput, OracleOutput, CuriosityOutput, Persona } from '@/types/brain';
import { getPersonaCopy } from '@/lib/utils/persona';
import { PersonaToggle } from '@/components/dashboard/persona-toggle';
import { MemoryCard } from '@/components/dashboard/memory-card';
import { OracleCard } from '@/components/dashboard/oracle-card';
import { CuriosityCard } from '@/components/dashboard/curiosity-card';
import { Badge } from '@/components/ui/badge';
import { Brain, Sparkles } from 'lucide-react';

interface DashboardClientProps {
    memory: MemoryOutput;
    oracle: OracleOutput;
    curiosity: CuriosityOutput;
}

export function DashboardClient({ memory, oracle, curiosity }: DashboardClientProps) {
    const [persona, setPersona] = useState<Persona>('cmo');
    const copy = getPersonaCopy(persona);

    return (
        <div className="min-h-screen bg-slate-50/50 p-6 space-y-8 font-sans">
            {/* Top Bar */}
            <header className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg text-white shadow-blue-200 shadow-lg">
                        <Brain className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Omnify Brain</h1>
                        <p className="text-xs text-slate-500 font-medium">AI Marketing Intelligence Layer</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex gap-4 text-sm">
                        <div className="flex flex-col items-end">
                            <span className="text-xs text-slate-400 font-semibold uppercase">Blended ROAS</span>
                            <span className="font-bold text-slate-800 text-lg">{memory.blended_roas.toFixed(2)}</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="flex flex-col items-end">
                            <span className="text-xs text-slate-400 font-semibold uppercase">LTV Factor</span>
                            <span className="font-bold text-green-600 text-lg">{memory.ltv_factor.toFixed(2)}x</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="flex flex-col items-end">
                            <span className="text-xs text-slate-400 font-semibold uppercase">Risk Level</span>
                            <Badge variant="outline" className={
                                oracle.risk_level === 'red' ? "bg-red-50 text-red-600 border-red-200" :
                                    oracle.risk_level === 'yellow' ? "bg-yellow-50 text-yellow-600 border-yellow-200" :
                                        "bg-green-50 text-green-600 border-green-200"
                            }>
                                {oracle.risk_level.toUpperCase()}
                            </Badge>
                        </div>
                    </div>

                    <div className="h-8 w-px bg-slate-200 hidden md:block" />

                    <PersonaToggle currentPersona={persona} onPersonaChange={setPersona} />
                </div>
            </header>

            {/* Main Grid */}
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-180px)]">
                <div className="h-full">
                    <MemoryCard data={memory} copy={copy} />
                </div>
                <div className="h-full">
                    <OracleCard data={oracle} copy={copy} />
                </div>
                <div className="h-full">
                    <CuriosityCard data={curiosity} copy={copy} />
                </div>
            </main>

            <footer className="text-center text-xs text-slate-400 py-4 flex items-center justify-center gap-2">
                <Sparkles className="h-3 w-3" />
                <span>Omnify Brain v1.0 • Last updated {new Date(memory.processing_timestamp).toLocaleTimeString()}</span>
            </footer>
        </div>
    );
}
