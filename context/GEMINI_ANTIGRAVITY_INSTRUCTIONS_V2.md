# Gemini Antigravity Instructions V2
# Omnify AI Marketing Brain - MVP Build Guide

**Version**: 2.0  
**Date**: November 23, 2025  
**Purpose**: Complete technical instructions for building Omnify AI Marketing Brain MVP (24-48 hour demo build)  
**Focus**: 3+1 modules (MEMORY, ORACLE, CURIOSITY, FACE) with static JSON data

---

## YOUR MISSION

You are building **Omnify AI Marketing Brain MVP** - an AI Intelligence Layer that sits ON TOP of existing CRMs and marketing tools to provide predictive marketing intelligence. This is NOT a replacement CRM. Think of it as a "smart brain" that answers three critical questions on one screen:

1. **"What happened?"** → MEMORY (Attribution & ROI Truth Layer)
2. **"What will break?"** → ORACLE (Prediction & Risk Engine)
3. **"What should we do?"** → CURIOSITY (Decision & Recommendation Engine)

Plus:
4. **"Single Intelligence Surface"** → FACE (Executive Dashboard with Persona Toggle)

### CRITICAL UNDERSTANDING

**What Omnify IS:**
- A Brain Layer / Intelligence Layer
- Provides predictions 7-14 days in advance
- Learns and improves over time (compound learning moat)
- Executive dashboard for CMOs with persona-specific views
- **MVP**: Static JSON demo (no live integrations yet)

**What Omnify is NOT:**
- NOT a replacement CRM
- NOT asking users to switch tools
- NOT another marketing automation platform
- NOT requiring database setup for MVP demo

**MVP Scope**:
- ✅ 3+1 modules: MEMORY, ORACLE, CURIOSITY, FACE
- ✅ Static JSON data (30 days of demo performance)
- ✅ Persona toggle (CMO/VP Growth/Director Perf)
- ✅ Single dashboard page
- ❌ No auth/login (Phase 2)
- ❌ No database/Supabase (Phase 2)
- ❌ No n8n integrations (Phase 2)
- ❌ No EYES, VOICE, REFLEXES modules (Phase 2)

> Source: 01_SYSTEM_ARCHITECTURE_V2.md - MVP vs Phase 2 Scope

---

## TARGET CUSTOMER (Validated Personas)

### Primary Persona: Sarah Martinez - CMO
- **Company**: $285M Beauty subscription brand
- **Decision Authority**: 10/10 (Controls martech budget)
- **Pain**: Attribution chaos across 6 dashboards, board reporting hell, reactive optimization
- **Job-to-be-Done**: "Here's the truth - not what Meta thinks. Here's what will break. Here's where to move budget."

### Secondary Persona: Jason Li - VP Growth  
- **Company**: $220M Cosmetics DTC/Hybrid
- **Decision Authority**: 9/10 (Principal martech decision-maker)
- **Pain**: Dashboard fatigue, creative fatigue blindness, LTV drift anxiety
- **Job-to-be-Done**: "Give me confidence scores, give me predictions, let me execute."

### Influencer Persona: Emily Chen - Director Performance Marketing
- **Company**: $140M Supplements hybrid
- **Decision Authority**: 7/10 (Influences decision, will champion)
- **Pain**: Execution chaos, no actionable insights, attribution confusion
- **Job-to-be-Done**: "Tell me what to do NOW. Don't make me think."

**Subsector Focus**: Beauty ($50M-$100M first wedge), Supplements, Wellness

> Source: 31_Final_Top_5_Personas.pdf; 36_Enhanced_Customer_Personas.pdf

### Pricing Tiers (Post-Demo)
- Starter: $499/month (Attribution + Basic Predictions)
- Growth: $799/month (Full ORACLE + CURIOSITY)
- Pro: $1,499/month (Advanced Models + Auto-Execute)
- **Positioning**: "Northbeam quality at 1/3 the price"

---

## MVP SYSTEM ARCHITECTURE

```
┌──────────────────────────────────────────────────────────────────┐
│                  OMNIFY AI MARKETING BRAIN MVP                   │
│                  (24-48 Hour Demo Build)                         │
└──────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────┼─────────────────────────────────┐
│         PRESENTATION LAYER (FACE Dashboard)                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Single Dashboard Page with Three Cards                  │  │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────┐            │  │
│  │  │  MEMORY   │  │  ORACLE   │  │ CURIOSITY │            │  │
│  │  │  (Truth)  │  │  (Risks)  │  │ (Actions) │            │  │
│  │  └───────────┘  └───────────┘  └───────────┘            │  │
│  │  Persona Toggle: [CMO] [VP] [Director]                  │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────┬─────────────────────────────────┘
                              │
┌─────────────────────────────┼─────────────────────────────────┐
│               BRAIN MODULES LAYER (TypeScript)                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  THREE BRAIN MODULES                                   │    │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                │    │
│  │  │ MEMORY  │  │ ORACLE  │  │CURIOSITY│                │    │
│  │  │ ROI/    │  │Fatigue/ │  │Budget   │                │    │
│  │  │Winners  │  │Decay/   │  │Recs     │                │    │
│  │  │Losers   │  │LTV Drift│  │Top 3    │                │    │
│  │  └────┬────┘  └────┬────┘  └────┬────┘                │    │
│  │       └────────────┼─────────────┘                     │    │
│  │                    │                                    │    │
│  │           ┌────────┴────────┐                          │    │
│  │           │  ORCHESTRATOR   │                          │    │
│  │           │  (Runs all 3)   │                          │    │
│  │           └─────────────────┘                          │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────┬─────────────────────────────────┘
                              │
┌─────────────────────────────┼─────────────────────────────────┐
│                    DATA LAYER (Static JSON)                     │
│  ┌──────────────────┐         ┌──────────────────┐            │
│  │   INPUT DATA     │         │  OUTPUT DATA     │            │
│  │   (Raw)          │         │  (Processed)     │            │
│  │                  │         │                  │            │
│  │ • channels.json  │  ━━━━━▶ │ • memory_        │            │
│  │ • campaigns.json │         │   output.json    │            │
│  │ • creatives.json │         │ • oracle_        │            │
│  │ • daily_         │         │   output.json    │            │
│  │   metrics.json   │         │ • curiosity_     │            │
│  │ • cohorts.json   │         │   output.json    │            │
│  └──────────────────┘         └──────────────────┘            │
│                                                                 │
│  Location: src/data/raw/     Location: src/data/outputs/      │
└─────────────────────────────────────────────────────────────────┘
```

**Key Simplifications for MVP**:
- ❌ No Supabase / PostgreSQL
- ❌ No n8n integrations
- ❌ No auth system
- ✅ Static JSON files only
- ✅ Single dashboard page
- ✅ 3 brain modules + 1 UI

---

## TECHNOLOGY STACK (MVP)

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | Next.js 15 (App Router) | Server components, great DX, Vercel deployment |
| Language | TypeScript (strict mode) | Type safety, better DX |
| UI Library | shadcn/ui + TailwindCSS | Customizable, professional look |
| Data Storage | Static JSON files | Fast MVP, no database setup |
| Hosting | Vercel (free tier) | Zero-config deployment |
| **Phase 2** | Supabase + n8n + APIs | Add after validating MVP |

---

## THE THREE BRAIN MODULES - MVP SPECIFICATIONS

### Module 1: MEMORY - Attribution & ROI Truth Layer

**Purpose**: Calculate unified ROAS, mark winners/losers, compute LTV-adjusted revenue.

**Inputs** (from src/data/raw/):
```typescript
interface MemoryInput {
  channels: Channel[];        // Meta, Google, TikTok
  campaigns: Campaign[];      // Campaign metadata
  creatives: Creative[];      // Creative assets
  daily_metrics: DailyMetric[]; // 30 days of performance
  cohorts: Cohort[];          // Customer cohort LTV data
}
```

**Processing Algorithm**:
1. **Aggregate by Channel**: Sum spend/revenue from daily_metrics per channel
2. **Calculate ROAS**: For each channel, ROAS = total_revenue / total_spend
3. **Calculate Blended ROAS**: Average across all channels
4. **Mark Winners/Losers**:
   - Winner: ROAS > blended_roas * 1.15
   - Loser: ROAS < blended_roas * 0.85
   - Neutral: Otherwise
5. **Calculate LTV Factor**: recent_cohort_ltv / historical_baseline_ltv
6. **Compute LTV-Adjusted ROAS**: roas * ltv_factor

**Outputs** (to src/data/outputs/memory_output.json):
```json
{
  "channels": [
    {
      "channel": "Meta",
      "roas": 3.5,
      "spend": 300000,
      "revenue": 1050000,
      "status": "winner"
    },
    {
      "channel": "TikTok",
      "roas": 1.9,
      "spend": 120000,
      "revenue": 228000,
      "status": "loser"
    }
  ],
  "blended_roas": 2.65,
  "ltv_factor": 1.02,
  "ltv_adjusted_roas": 2.70
}
```

**Acceptance Criteria**:
- Winners/losers marked correctly (>15% above/below blended)
- Blended ROAS calculation accurate
- LTV factor between 0.8-1.5

> Source: 02_CLAUDE_CODE_INSTRUCTIONS_V2.md - Section "MEMORY Module"

---

### Module 2: ORACLE - Prediction & Risk Engine

**Purpose**: Predict creative fatigue, ROI decay, and LTV drift 7-14 days in advance.

**Inputs** (from src/data/raw/):
```typescript
interface OracleInput {
  channels: Channel[];
  campaigns: Campaign[];
  creatives: Creative[];
  daily_metrics: DailyMetric[];
  cohorts: Cohort[];
}
```

**Processing - Three Detection Engines**:

#### Engine 1: Creative Fatigue Detection
1. **Baseline Period**: Days 14-21 ago
2. **Recent Period**: Last 7 days
3. **Compare Metrics**:
   - CVR drop >20% → Flag fatigue
   - CPA increase >25% → Flag fatigue
   - Frequency >3.5 → Flag saturation
4. **Calculate Probabilities**:
   - fatigue_probability_7d: 0.0-1.0 (higher if multiple flags)
   - fatigue_probability_14d: fatigue_probability_7d * 1.1 (slightly higher)

#### Engine 2: ROI Decay Detection
1. **Baseline Period**: Days 14-21 ago
2. **Recent Period**: Last 7 days
3. **Compare ROAS by Channel**:
   - ROAS drop >15% → Flag decay
   - Spending more but ROAS declining → Flag decay
4. **Severity**:
   - High: Drop >30%
   - Medium: Drop 15-30%
   - Low: Drop <15%

#### Engine 3: LTV Drift Detection
1. **Recent Cohorts**: Last 2-3 months
2. **Historical Baseline**: 6-12 months ago
3. **Compare LTV**:
   - Recent < Historical * 0.9 → Flag drift
4. **Severity**:
   - High: Drift >20%
   - Medium: Drift 10-20%
   - Low: Drift <10%

#### Risk Aggregation
1. Count high-severity risks across all three engines
2. **Risk Level**:
   - Red: ≥3 high risks
   - Yellow: ≥1 high OR ≥2 medium risks
   - Green: Otherwise

**Outputs** (to src/data/outputs/oracle_output.json):
```json
{
  "fatigue_predictions": [
    {
      "creative_id": "C12",
      "platform": "TikTok",
      "fatigue_probability_7d": 0.82,
      "fatigue_probability_14d": 0.93,
      "predicted_performance_drop": 0.37,
      "key_risk_factors": ["cvr_drop", "frequency_high"],
      "recommended_action": "Pause within 72 hours"
    }
  ],
  "roi_decay_alerts": [
    {
      "channel": "TikTok",
      "recent_roas": 1.9,
      "baseline_roas": 2.8,
      "decay_percentage": 0.32,
      "decay_severity": "high",
      "trend": "declining"
    }
  ],
  "ltv_drift_alerts": [
    {
      "recent_ltv": 112,
      "historical_ltv": 128,
      "drift_percentage": 0.125,
      "drift_severity": "medium"
    }
  ],
  "risk_level": "yellow"
}
```

**Acceptance Criteria**:
- Fatigue probability between 0.0-1.0
- Decay severity is 'high' | 'medium' | 'low'
- Risk level is 'red' | 'yellow' | 'green'

> Source: 02_CLAUDE_CODE_INSTRUCTIONS_V2.md - Section "ORACLE Module"

---

### Module 3: CURIOSITY - Decision & Recommendation Engine

**Purpose**: Convert MEMORY truth + ORACLE predictions into Top 3 actionable budget moves.

**Inputs**:
```typescript
interface CuriosityInput {
  memory_output: MemoryOutput;  // From MEMORY module
  oracle_output: OracleOutput;  // From ORACLE module
}
```

**Processing - Four Action Generators**:

#### Generator 1: Shift Budget Actions
1. **Find Sources**: Losers OR channels with ROI decay
2. **Find Targets**: Winners WITHOUT decay
3. **Generate Action**: "Shift X% from [source] to [target]"
4. **Calculate Impact**: shift_amount * (target_ROAS - source_ROAS)
5. **Urgency**: HIGH if source is loser + decaying

#### Generator 2: Pause Creative Actions
1. **Find Fatigued Creatives**: fatigue_probability >0.6
2. **Estimate Impact**: daily_spend * predicted_drop * 7 days
3. **Generate Action**: "Pause Creative [ID]"
4. **Urgency**: HIGH if probability >0.8, MEDIUM otherwise

#### Generator 3: Increase Budget Actions
1. **Find Strong Winners**: ROAS > blended * 1.2 AND NOT decaying
2. **Generate Action**: "Increase [channel] by X%"
3. **Estimate Impact**: increase_amount * channel_ROAS
4. **Urgency**: MEDIUM (scale opportunity)

#### Generator 4: Retention Actions
1. **Check LTV Drift**: If severity = high/medium
2. **Generate Action**: "Focus on retention"
3. **Urgency**: MEDIUM (strategic fix)

**Action Ranking**:
1. **Score Formula**: (impact × 0.4) + (severity × 0.3) + (confidence × 0.2) + (urgency × 0.1)
2. **Sort**: By score descending
3. **Select Top 3**: With diversity (max 1 "increase" action)

**Outputs** (to src/data/outputs/curiosity_output.json):
```json
{
  "actions": [
    {
      "priority": 1,
      "action_type": "shift_budget",
      "from_channel": "TikTok",
      "to_channel": "Meta",
      "shift_percentage": 0.10,
      "shift_amount_daily": 800,
      "estimated_impact_daily": 1280,
      "urgency": "HIGH",
      "rationale": "TikTok ROAS declining 32%, Meta stable at 3.5"
    },
    {
      "priority": 2,
      "action_type": "pause_creative",
      "creative_id": "C12",
      "platform": "TikTok",
      "estimated_impact_total": 2400,
      "urgency": "HIGH",
      "rationale": "Creative C12 at 82% fatigue risk, CVR dropped 37%"
    },
    {
      "priority": 3,
      "action_type": "focus_retention",
      "urgency": "MEDIUM",
      "rationale": "LTV drifting 12.5% below baseline, review onboarding"
    }
  ],
  "total_potential_uplift": 3680
}
```

**Acceptance Criteria**:
- Top 3 actions ranked correctly by score
- Expected impact is positive number
- Total uplift is sum of individual impacts
- Diversity constraint enforced (max 1 increase)

> Source: 02_CLAUDE_CODE_INSTRUCTIONS_V2.md - Section "CURIOSITY Module"

---

### Module 4: FACE - Executive Dashboard UI

**Purpose**: Display all brain outputs on one screen with persona-specific microcopy.

**Key Features**:
1. **Top Bar**: MER, ROAS, LTV-ROAS, Risk Level (🔴/🟡/🟢)
2. **Three Cards Side-by-Side**:
   - MEMORY Card (channel breakdown)
   - ORACLE Card (risk alerts)
   - CURIOSITY Card (top 3 actions)
3. **Persona Toggle**: [CMO] [VP Growth] [Director Perf]
4. **Microcopy Changes**: Same data, different language per persona

**Persona-Specific Microcopy**:

| Element | CMO (Sarah) | VP Growth (Jason) | Director Perf (Emily) |
|---------|-------------|-------------------|----------------------|
| MEMORY Title | "What Happened" | "Channel Performance" | "TRUTH" |
| MEMORY Subtitle | "Here's the truth - not what Meta thinks" | "Unified ROAS with confidence intervals" | "Who's winning, who's dying" |
| ORACLE Title | "What Will Break" | "Risk Predictions" | "ALERTS" |
| ORACLE Subtitle | "Here's what's coming" | "7-14 day forecasts with probability scores" | "What's breaking right now" |
| CURIOSITY Title | "What To Do" | "Recommended Actions" | "ACTIONS" |
| CURIOSITY Subtitle | "Here are your moves" | "Top 3 budget moves ranked by expected impact" | "What to do TODAY" |

**Acceptance Criteria**:
- Dashboard loads in <2 seconds
- Persona toggle works smoothly (no re-fetch)
- Microcopy changes per persona
- Colors correct (🟢 green for winners, 🔴 red for losers)
- No console errors

> Source: 37_FACE_UI_Wireframe.pdf; 36_Enhanced_Customer_Personas.pdf

---

## PROJECT DIRECTORY STRUCTURE (MVP Simplified)

```
omnify-brain-mvp/
├── src/
│   ├── app/
│   │   ├── page.tsx             # Landing page (optional)
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Main dashboard (FACE module)
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── table.tsx
│   │   └── dashboard/           # Dashboard components
│   │       ├── memory-card.tsx
│   │       ├── oracle-card.tsx
│   │       ├── curiosity-card.tsx
│   │       └── persona-toggle.tsx
│   ├── lib/
│   │   ├── brain/               # Brain modules logic
│   │   │   ├── types.ts         # Shared interfaces
│   │   │   ├── orchestrator.ts  # Runs all modules
│   │   │   ├── memory/
│   │   │   │   └── index.ts     # MEMORY module
│   │   │   ├── oracle/
│   │   │   │   └── index.ts     # ORACLE module
│   │   │   └── curiosity/
│   │   │       └── index.ts     # CURIOSITY module
│   │   └── utils/
│   │       ├── seed-data.ts     # Demo data generation
│   │       ├── persona.ts       # Persona microcopy utilities
│   │       └── cn.ts            # Tailwind class merger
│   ├── types/
│   │   └── brain.ts             # All TypeScript types
│   ├── data/
│   │   ├── raw/                 # Input data
│   │   │   ├── channels.json
│   │   │   ├── campaigns.json
│   │   │   ├── creatives.json
│   │   │   ├── daily_metrics.json
│   │   │   └── cohorts.json
│   │   └── outputs/             # Brain outputs
│   │       ├── memory_output.json
│   │       ├── oracle_output.json
│   │       └── curiosity_output.json
│   └── public/
│       └── data/
│           └── outputs/         # Symlink to src/data/outputs/
├── scripts/
│   ├── seed-demo.ts             # Generate demo data
│   └── run-brain.ts             # Execute brain cycle
├── docs/
│   └── reference/
│       ├── 01_SYSTEM_ARCHITECTURE_V2.md
│       ├── 02_CLAUDE_CODE_INSTRUCTIONS_V2.md
│       └── 04_USER_JOURNEY_V2.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── .gitignore
```

**Key Simplifications**:
- ❌ No `(auth)` route group
- ❌ No API routes (static JSON only)
- ❌ No separate module pages
- ✅ Single dashboard page
- ✅ Three-card layout
- ✅ Persona toggle on same page

---

## TYPESCRIPT INTERFACES (Module Base)

```typescript
// src/lib/brain/types.ts

export interface BrainModule<TInput, TOutput> {
  name: string;
  version: string;
  process(input: TInput): TOutput;
}

export interface BrainModuleOutput<T> {
  success: boolean;
  data: T;
  metadata: {
    processingTimeMs: number;
    timestamp: string;
  };
  learningInsights?: {
    accuracyMetrics?: Record<string, number>;
    improvementSuggestions?: string[];
  };
}
```

```typescript
// src/types/brain.ts

export type Persona = 'cmo' | 'vp_growth' | 'director_perf';

export interface Channel {
  channel: string;
  roas: number;
  spend: number;
  revenue: number;
  status: 'winner' | 'neutral' | 'loser';
}

export interface MemoryOutput {
  channels: Channel[];
  blended_roas: number;
  ltv_factor: number;
  ltv_adjusted_roas: number;
}

export interface FatiguePrediction {
  creative_id: string;
  platform: string;
  fatigue_probability_7d: number;
  fatigue_probability_14d: number;
  predicted_performance_drop: number;
  key_risk_factors: string[];
  recommended_action: string;
}

export interface ROIDecayAlert {
  channel: string;
  recent_roas: number;
  baseline_roas: number;
  decay_percentage: number;
  decay_severity: 'high' | 'medium' | 'low';
  trend: 'declining' | 'stable' | 'improving';
}

export interface LTVDriftAlert {
  recent_ltv: number;
  historical_ltv: number;
  drift_percentage: number;
  drift_severity: 'high' | 'medium' | 'low';
}

export interface OracleOutput {
  fatigue_predictions: FatiguePrediction[];
  roi_decay_alerts: ROIDecayAlert[];
  ltv_drift_alerts: LTVDriftAlert[];
  risk_level: 'red' | 'yellow' | 'green';
}

export interface CuriosityAction {
  priority: number;
  action_type: 'shift_budget' | 'pause_creative' | 'increase_budget' | 'focus_retention';
  urgency: 'HIGH' | 'MEDIUM' | 'LOW';
  rationale: string;
  estimated_impact_daily?: number;
  estimated_impact_total?: number;
  // ... action-specific fields
}

export interface CuriosityOutput {
  actions: CuriosityAction[];
  total_potential_uplift: number;
}

export interface PersonaMicrocopy {
  memoryTitle: string;
  memorySubtitle: string;
  oracleTitle: string;
  oracleSubtitle: string;
  curiosityTitle: string;
  curiositySubtitle: string;
}
```

---

## KEY PERFORMANCE TARGETS (MVP Demo)

| Metric | Target | Notes |
|--------|--------|-------|
| Dashboard Load Time | <2 seconds | First paint |
| Persona Toggle Speed | <100ms | Instant feel |
| Brain Cycle Runtime | <5 seconds | All 3 modules |
| Type Check | 0 errors | npm run type-check |
| **Phase 2 Targets** | | |
| Fatigue Prediction AUC | ≥0.75 (7-day) | ML model trained |
| LTV RMSE | ≤25% | ML model trained |
| ROI MAPE | ≤20% | Attribution engine |
| Dashboard Lighthouse | ≥90 | Performance audit |

---

## DEVELOPMENT WORKFLOW (Step-by-Step)

### Step 1: Initialize Project

```bash
# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install shadcn
npx shadcn@latest init

# Install dependencies
npm install zod clsx tailwind-merge date-fns lucide-react recharts

# Create folder structure
mkdir -p src/lib/brain/{memory,oracle,curiosity}
mkdir -p src/data/{raw,outputs}
mkdir -p src/types
mkdir -p scripts
```

### Step 2: Create TypeScript Types

```bash
# Create src/types/brain.ts with ALL module types
# Reference: 02_CLAUDE_CODE_INSTRUCTIONS_V2.md - TypeScript Types section

# Verify types
npm run type-check
```

### Step 3: Seed Demo Data

```bash
# Create src/lib/utils/seed-data.ts
# This generates 30 days of realistic demo data

# Run seeding script
npx tsx scripts/seed-demo.ts

# Verify output
ls src/data/raw/
# Should show: channels.json, campaigns.json, creatives.json, daily_metrics.json, cohorts.json
```

### Step 4: Build Brain Modules

```bash
# Create modules in order:
# 1. src/lib/brain/memory/index.ts
# 2. src/lib/brain/oracle/index.ts
# 3. src/lib/brain/curiosity/index.ts
# 4. src/lib/brain/orchestrator.ts

# Run brain cycle
npx tsx scripts/run-brain.ts

# Verify output
ls src/data/outputs/
# Should show: memory_output.json, oracle_output.json, curiosity_output.json
```

### Step 5: Build FACE Dashboard

```bash
# Create persona utilities
# src/lib/utils/persona.ts

# Install shadcn components
npx shadcn@latest add button card badge skeleton table

# Create dashboard page
# src/app/dashboard/page.tsx

# Create symlink for JSON access
ln -s ../src/data/outputs public/data/outputs

# Start dev server
npm run dev

# Open http://localhost:3000/dashboard
```

---

## IMPORTANT NOTES FOR GEMINI DEVELOPMENT

### 1. Use Gemini's Strengths

**Gemini excels at**:
- **Parallel file generation**: Generate multiple files simultaneously
- **Pattern recognition**: Apply consistent patterns across codebase
- **Code synthesis**: Create complete implementations from specs
- **Type inference**: Strong TypeScript type generation

**Leverage these for MVP**:
```
"Generate all three brain modules (memory, oracle, curiosity) simultaneously following the exact algorithms in docs/reference/02_CLAUDE_CODE_INSTRUCTIONS_V2.md"
```

### 2. This is a Brain Layer, NOT a CRM Replacement

Always design with integration in mind. Even though MVP uses static JSON, the architecture should support future live integrations.

### 3. 24-48 Hour Demo Target

Onboarding must be fast. Every decision should prioritize "demo-ready" over "production-perfect."

### 4. Learning Loop is the Moat (Phase 2)

Every module should feed data back for continuous improvement. For MVP, include `learningInsights` in outputs even if not displayed in UI.

### 5. CMO Persona First

All UI/UX decisions should prioritize the executive view. But implement persona toggle from day 1.

### 6. Predictive, Not Reactive

The key differentiator is 7-14 day advance predictions. Make sure ORACLE outputs are forward-looking.

### 7. Explainability Required

Every CURIOSITY recommendation needs a clear "why" in the rationale field.

---

## COORDINATION NOTES

When working in parallel with other AI assistants (Claude Code, Cursor):

1. **Use consistent naming conventions** as defined in this document
2. **Follow the directory structure** exactly
3. **Implement strict TypeScript** - no `any` types
4. **Use @/ import alias** for all imports
5. **Console.log with module prefix** - e.g., `[MEMORY]`, `[ORACLE]`, `[CURIOSITY]`
6. **Export brain outputs to JSON** - always write to src/data/outputs/
7. **Document assumptions** - if algo is unclear, document your interpretation

---

## MVP SUCCESS CRITERIA

Your MVP is **demo-ready** when:

✅ **Data Flow Works**:
- [ ] Seed script generates 5 JSON files in src/data/raw/
- [ ] Brain cycle generates 3 JSON files in src/data/outputs/
- [ ] Dashboard loads data from /data/outputs/

✅ **Brain Intelligence Works**:
- [ ] MEMORY calculates ROAS and marks winners/losers correctly
- [ ] ORACLE detects fatigue/decay/drift and sets risk level
- [ ] CURIOSITY generates Top 3 actions with impact estimates

✅ **Dashboard Works**:
- [ ] Three cards display side-by-side (MEMORY | ORACLE | CURIOSITY)
- [ ] Persona toggle changes microcopy (not data)
- [ ] Top bar shows MER, ROAS, LTV-ROAS, Risk (🔴/🟡/🟢)
- [ ] Colors are correct (green for winners, red for losers)
- [ ] No console errors in browser

✅ **Demo-Ready**:
- [ ] Can run full 3-minute demo
- [ ] Data makes sense (Meta winner, TikTok loser)
- [ ] Predictions are believable (82% fatigue probability)
- [ ] Actions are clear ("Shift 10% TikTok → Meta")
- [ ] Dashboard loads in <2 seconds

**Time to Demo-Ready**: 24-48 hours ✓

---

## GEMINI-SPECIFIC PROMPTING PATTERNS

### Good Prompts for Gemini

```
"Generate src/lib/brain/memory/index.ts following the exact algorithm in docs/reference/02_CLAUDE_CODE_INSTRUCTIONS_V2.md section 'MEMORY Module'. Include:
1. Full TypeScript types
2. All helper methods (aggregateByChannel, calculateROAS, markWinnersLosers)
3. Console.log statements for debugging
4. Error handling
Show me the complete implementation."
```

```
"Create all three dashboard components (memory-card.tsx, oracle-card.tsx, curiosity-card.tsx) in src/components/dashboard/. Each should:
1. Accept typed props
2. Use shadcn Card, Badge components
3. Display data with appropriate colors (green/yellow/red)
4. Show skeleton loader while loading
Generate all three files simultaneously."
```

### Bad Prompts

```
"Make it better"
"Add features"
"Fix bugs"
```

---

## PHASE 2 ROADMAP (Post-Demo)

After validating MVP demo:

**Week 1-2: Authentication & Database**
- Add Supabase (PostgreSQL + RLS)
- Implement auth (login/signup)
- Migrate from JSON to database

**Week 3-4: Live Integrations**
- Add n8n workflows
- Connect Meta Ads, Google Ads, Shopify
- Real-time data sync

**Week 5-6: ML Models**
- Train XGBoost fatigue model
- Train LTV prediction model
- Replace rule-based ORACLE

**Week 7-8: Additional Modules**
- EYES (segmentation & churn)
- VOICE (creative repurposing)
- REFLEXES (anomaly detection)

**Week 9-12: Production Polish**
- Performance optimization
- Error monitoring (Sentry)
- Analytics (PostHog)
- Billing (Stripe)

> Source: 01_SYSTEM_ARCHITECTURE_V2.md - Phased Roadmap

---

*Gemini Antigravity Instructions V2 - Omnify AI Marketing Brain MVP*  
*24-48 Hour Demo Build | 3+1 Modules | Static JSON Approach*  
*Version 2.0 | November 2025*
