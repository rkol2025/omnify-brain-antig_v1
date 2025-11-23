'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { PersonaType, PERSONAS } from '@/lib/utils/persona';
import { Brain, ShieldAlert } from 'lucide-react';

interface TopBarProps {
    currentPersona: PersonaType;
    onPersonaChange: (persona: PersonaType) => void;
    riskLevel: 'red' | 'yellow' | 'green';
    blendedRoas: number;
}

export function TopBar({ currentPersona, onPersonaChange, riskLevel, blendedRoas }: TopBarProps) {
    return (
        <div className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo & Brand */}
                <div className="flex items-center gap-2">
                    <div className="bg-slate-900 p-1.5 rounded-lg">
                        <Brain className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900">Omnify<span className="text-slate-400 font-normal">Brain</span></span>
                </div>

                {/* Metrics Ticker */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-500">Blended ROAS</span>
                        <span className="font-bold text-slate-900">{blendedRoas.toFixed(2)}</span>
                    </div>
                    <div className="h-4 w-px bg-slate-200" />
                    <div className="flex items-center gap-2">
                        <span className="text-slate-500">Risk Level</span>
                        <Badge
                            variant="outline"
                            className={`
                                ${riskLevel === 'red' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                                ${riskLevel === 'yellow' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                                ${riskLevel === 'green' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                            `}
                        >
                            {riskLevel.toUpperCase()}
                        </Badge>
                    </div>
                </div>

                {/* Persona Toggle */}
                <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">View As</span>
                    <Select value={currentPersona} onValueChange={(val) => onPersonaChange(val as PersonaType)}>
                        <SelectTrigger className="w-[240px] bg-white border-slate-200 shadow-sm">
                            <SelectValue placeholder="Select Persona" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="CMO">{PERSONAS.CMO.roleName}</SelectItem>
                            <SelectItem value="VP_GROWTH">{PERSONAS.VP_GROWTH.roleName}</SelectItem>
                            <SelectItem value="DIRECTOR_PERF">{PERSONAS.DIRECTOR_PERF.roleName}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
