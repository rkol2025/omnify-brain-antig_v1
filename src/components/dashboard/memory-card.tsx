'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MemoryOutput } from '@/types/brain';
import { PersonaType, PERSONAS } from '@/lib/utils/persona';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface MemoryCardProps {
    data: MemoryOutput | null;
    persona: PersonaType;
}

export function MemoryCard({ data, persona }: MemoryCardProps) {
    const copy = PERSONAS[persona];

    if (!data) return <Card className="h-full"><CardHeader><CardTitle>Loading...</CardTitle></CardHeader></Card>;

    return (
        <Card className="h-full border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl font-bold text-slate-800">{copy.memoryTitle}</CardTitle>
                        <CardDescription>{copy.memorySubtitle}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Truth Layer
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-sm text-slate-500 mb-1">Blended ROAS</div>
                        <div className="text-2xl font-bold text-slate-900">{data.blended_roas.toFixed(2)}</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-sm text-slate-500 mb-1">LTV Factor</div>
                        <div className={`text-2xl font-bold ${data.ltv_factor < 1 ? 'text-amber-600' : 'text-green-600'}`}>
                            {data.ltv_factor.toFixed(2)}x
                        </div>
                    </div>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Channel</TableHead>
                                <TableHead className="text-right">ROAS</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.channels.map((channel) => (
                                <TableRow key={channel.channel}>
                                    <TableCell className="font-medium">{channel.channel}</TableCell>
                                    <TableCell className="text-right">{channel.roas.toFixed(2)}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge
                                            variant={channel.status === 'winner' ? 'default' : channel.status === 'loser' ? 'destructive' : 'secondary'}
                                            className={channel.status === 'winner' ? 'bg-green-600 hover:bg-green-700' : ''}
                                        >
                                            {channel.status.toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
