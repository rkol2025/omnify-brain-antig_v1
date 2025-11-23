'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CuriosityOutput } from '@/types/brain';
import { PersonaType, PERSONAS } from '@/lib/utils/persona';
import { ArrowRight, DollarSign, PauseCircle, TrendingUp } from 'lucide-react';

interface CuriosityCardProps {
    data: CuriosityOutput | null;
    persona: PersonaType;
}

export function CuriosityCard({ data, persona }: CuriosityCardProps) {
    const copy = PERSONAS[persona];

    if (!data) return <Card className="h-full"><CardHeader><CardTitle>Loading...</CardTitle></CardHeader></Card>;

    return (
        <Card className="h-full border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-white to-amber-50/30">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl font-bold text-slate-800">{copy.curiosityTitle}</CardTitle>
                        <CardDescription>{copy.curiositySubtitle}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        Decision
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="mb-6">
                    <div className="text-sm text-slate-500 mb-1">Total Potential Uplift</div>
                    <div className="text-3xl font-bold text-green-600 flex items-center gap-1">
                        <DollarSign className="h-6 w-6" />
                        {data.total_potential_uplift.toLocaleString()}
                        <span className="text-sm font-normal text-slate-500 ml-1">/ day</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {data.actions.map((action) => (
                        <div key={action.priority} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-amber-400 transition-colors" />

                            <div className="flex justify-between items-start mb-2 pl-2">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="h-6 w-6 rounded-full flex items-center justify-center p-0 bg-slate-100 text-slate-600">
                                        {action.priority}
                                    </Badge>
                                    <span className="font-semibold text-slate-800">
                                        {action.action_type === 'shift_budget' && 'Shift Budget'}
                                        {action.action_type === 'pause_creative' && 'Pause Creative'}
                                        {action.action_type === 'increase_budget' && 'Scale Winner'}
                                        {action.action_type === 'focus_retention' && 'Fix Retention'}
                                    </span>
                                </div>
                                <Badge variant={action.urgency === 'HIGH' ? 'destructive' : 'secondary'} className="text-xs">
                                    {action.urgency}
                                </Badge>
                            </div>

                            <p className="text-sm text-slate-600 mb-3 pl-2 leading-relaxed">
                                {action.rationale}
                            </p>

                            <div className="flex justify-between items-center pl-2">
                                <div className="text-sm font-medium text-green-600">
                                    +${(action.estimated_impact_daily || action.estimated_impact_total || 0).toLocaleString()} impact
                                </div>
                                <Button size="sm" className="h-8 bg-slate-900 hover:bg-slate-800 text-xs">
                                    {copy.actionLabel} <ArrowRight className="ml-1 h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
