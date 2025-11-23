# Omnify Brain - System Architecture

## High-Level Data Flow

```mermaid
graph TD
    Raw[Raw Data (JSON)] -->|Ingest| Orch[Brain Orchestrator]
    
    subgraph "The Brain"
        Orch -->|Step 1| Mem[MEMORY Module]
        Mem -->|Truth| Ora[ORACLE Module]
        Mem -->|Truth| Cur[CURIOSITY Module]
        Ora -->|Predictions| Cur
    end
    
    Cur -->|Actions| Out[Output JSON]
    Out -->|Serve| API[Next.js API Route]
    API -->|Display| UI[FACE Dashboard]
```

## Module Details

### 1. MEMORY Module (`src/lib/brain/memory`)
The foundation of the system. It normalizes disparate data sources into a single truth.
*   **Inputs**: Daily Metrics, Campaigns, Creatives, Cohorts.
*   **Logic**:
    *   Aggregates spend/revenue by channel.
    *   Calculates Blended ROAS.
    *   Computes `LTV Factor` (Projected LTV / CAC).
*   **Outputs**: Channel Status (`winner`, `neutral`, `loser`), LTV-adjusted ROAS.

### 2. ORACLE Module (`src/lib/brain/oracle`)
The predictive engine. It uses statistical thresholds to identify trends before they become obvious.
*   **Inputs**: MEMORY Output, Daily Metrics (Time Series).
*   **Engines**:
    *   **Fatigue Detection**: Analyzes CVR drops and CPA spikes to predict creative death.
    *   **ROI Decay**: Compares 7-day vs 21-day ROAS to spot efficiency loss.
    *   **LTV Drift**: Compares recent cohorts vs historical baselines.
*   **Outputs**: Risk Level (`RED`, `YELLOW`, `GREEN`), Fatigue Probabilities.

### 3. CURIOSITY Module (`src/lib/brain/curiosity`)
The strategic engine. It turns insights into money.
*   **Inputs**: MEMORY Truth, ORACLE Predictions.
*   **Generators**:
    *   `ShiftBudget`: Losers -> Winners.
    *   `PauseCreative`: High Fatigue Risk -> Pause.
    *   `IncreaseBudget`: High Efficiency + Low Risk -> Scale.
*   **Scoring**: `(Impact * 0.4) + (Severity * 0.3) + (Confidence * 0.2) + (Urgency * 0.1)`
*   **Outputs**: Top 3 Actions, Total Potential Uplift ($).

## Directory Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API Routes (Data Serving)
│   └── dashboard/        # Dashboard Page
├── components/           # React Components
│   ├── dashboard/        # Brain-specific Cards
│   └── ui/               # shadcn/ui primitives
├── data/
│   ├── raw/              # Seeded Input Data
│   └── outputs/          # Generated Brain Outputs
├── lib/
│   ├── brain/            # Core Logic Modules
│   │   ├── memory/
│   │   ├── oracle/
│   │   ├── curiosity/
│   │   └── orchestrator.ts
│   └── utils/            # Helpers (Persona, Seeding)
└── types/                # Shared TypeScript Interfaces
```
