'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OracleOutput } from '@/types/brain';
import { PersonaType, PERSONAS } from '@/lib/utils/persona';
import { AlertTriangle, TrendingDown, Activity } from 'lucide-react';

interface OracleCardProps {
    data: OracleOutput | null;
    persona: PersonaType;
}

export function OracleCard({ data, persona }: OracleCardProps) {
    const copy = PERSONAS[persona];

    if (!data) return <Card className="h-full"><CardHeader><CardTitle>Loading...</CardTitle></CardHeader></Card>;

    const hasFatigue = data.fatigue_predictions.length > 0;
    const hasDecay = data.roi_decay_alerts.length > 0;
    const hasDrift = data.ltv_drift_alerts.length > 0;

    return (
        <Card className="h-full border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl font-bold text-slate-800">{copy.oracleTitle}</CardTitle>
                        <CardDescription>{copy.oracleSubtitle}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        Prediction
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Fatigue Section */}
                <div>
                    <h4 className="text-sm font-semibold text-slate-500 mb-2 flex items-center gap-2">
                        <Activity className="h-4 w-4" /> Creative Fatigue
                    </h4>
                    {hasFatigue ? (
                        <div className="space-y-2">
                            {data.fatigue_predictions.slice(0, 2).map((pred) => (
                                <div key={pred.creative_id} className="bg-red-50 p-3 rounded-lg border border-red-100">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-medium text-red-900 text-sm">{pred.creative_name}</span>
                                        <Badge variant="outline" className="bg-white text-red-600 border-red-200 text-xs">
                                            {(pred.fatigue_probability_7d * 100).toFixed(0)}% Risk
                                        </Badge>
                                    </div>
                                    <div className="text-xs text-red-700">
                                        Predicted drop: {(pred.predicted_performance_drop * 100).toFixed(0)}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-sm text-slate-400 italic">No fatigue detected</div>
                    )}
                </div>

                {/* Decay Section */}
                <div>
                    <h4 className="text-sm font-semibold text-slate-500 mb-2 flex items-center gap-2">
                        <TrendingDown className="h-4 w-4" /> ROI Decay
                    </h4>
                    {hasDecay ? (
                        <div className="space-y-2">
                            {data.roi_decay_alerts.map((alert) => (
                                <div key={alert.channel} className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-amber-900 text-sm">{alert.channel}</span>
                                        <span className="text-amber-700 font-bold text-sm">
                                            -{(alert.decay_percentage * 100).toFixed(0)}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-sm text-slate-400 italic">No decay detected</div>
                    )}
                </div>

                {/* Drift Section */}
                {hasDrift && (
                    <div className="bg-slate-100 p-3 rounded-lg flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-slate-600" />
                        <div>
                            <div className="text-sm font-medium text-slate-900">LTV Drift Detected</div>
                            <div className="text-xs text-slate-600">
                                Customer quality down {(data.ltv_drift_alerts[0].drift_percentage * 100).toFixed(1)}%
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
