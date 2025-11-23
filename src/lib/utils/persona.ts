/**
 * Persona Utility
 * Manages the active persona state and microcopy for the dashboard
 */

export type PersonaType = 'CMO' | 'VP_GROWTH' | 'DIRECTOR_PERF';

export interface PersonaMicrocopy {
    roleName: string;
    memoryTitle: string;
    memorySubtitle: string;
    oracleTitle: string;
    oracleSubtitle: string;
    curiosityTitle: string;
    curiositySubtitle: string;
    actionLabel: string;
}

export const PERSONAS: Record<PersonaType, PersonaMicrocopy> = {
    CMO: {
        roleName: 'CMO (Strategic)',
        memoryTitle: 'Attribution Truth',
        memorySubtitle: 'Unified ROAS & LTV Impact',
        oracleTitle: 'Strategic Risk',
        oracleSubtitle: 'Forward-looking revenue risks',
        curiosityTitle: 'Executive Decisions',
        curiositySubtitle: 'High-impact budget moves',
        actionLabel: 'Approve Budget Shift'
    },
    VP_GROWTH: {
        roleName: 'VP Growth (Tactical)',
        memoryTitle: 'Channel Performance',
        memorySubtitle: 'Efficiency vs Scale Analysis',
        oracleTitle: 'Growth Blockers',
        oracleSubtitle: 'Fatigue & Decay Warnings',
        curiosityTitle: 'Growth Opportunities',
        curiositySubtitle: 'Optimization & Scale Actions',
        actionLabel: 'Execute Changes'
    },
    DIRECTOR_PERF: {
        roleName: 'Director of Performance (Execution)',
        memoryTitle: 'Ad Spend Efficiency',
        memorySubtitle: 'Campaign & Ad Set Metrics',
        oracleTitle: 'Creative & Bid Alerts',
        oracleSubtitle: 'Tactical fixes needed now',
        curiosityTitle: 'Optimization Tasks',
        curiositySubtitle: 'To-do list for today',
        actionLabel: 'Push to Ad Manager'
    }
};

export const DEFAULT_PERSONA: PersonaType = 'CMO';
