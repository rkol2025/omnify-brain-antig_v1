'use client';

import { Button } from "@/components/ui/button";
import { Persona } from "@/types/brain";
import { cn } from "@/lib/utils";

interface PersonaToggleProps {
    currentPersona: Persona;
    onPersonaChange: (persona: Persona) => void;
}

export function PersonaToggle({ currentPersona, onPersonaChange }: PersonaToggleProps) {
    return (
        <div className="flex items-center space-x-2 bg-muted/50 p-1 rounded-lg border border-border/50">
            <Button
                variant={currentPersona === 'cmo' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPersonaChange('cmo')}
                className={cn("text-xs font-medium transition-all", currentPersona === 'cmo' && "shadow-sm")}
            >
                CMO (Sarah)
            </Button>
            <Button
                variant={currentPersona === 'vp_growth' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPersonaChange('vp_growth')}
                className={cn("text-xs font-medium transition-all", currentPersona === 'vp_growth' && "shadow-sm")}
            >
                VP Growth (Jason)
            </Button>
            <Button
                variant={currentPersona === 'director_perf' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPersonaChange('director_perf')}
                className={cn("text-xs font-medium transition-all", currentPersona === 'director_perf' && "shadow-sm")}
            >
                Director (Emily)
            </Button>
        </div>
    );
}
