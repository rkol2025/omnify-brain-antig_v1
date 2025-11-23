# Omnify AI Marketing Brain (MVP)

> **The Intelligence Layer for Modern Marketing Teams**

Omnify Brain is an agentic AI system that ingests raw marketing data, processes it through three distinct cognitive modules, and outputs actionable, high-value recommendations. It moves beyond passive analytics to active decision support.

## 🧠 Core Modules

### 1. MEMORY (Attribution & Truth)
*   **Purpose**: Establishes the "Ground Truth" of performance.
*   **Key Functions**: Unified ROAS calculation, Winner/Loser classification, LTV-adjusted revenue modeling.
*   **Output**: A clean, trusted view of what is actually happening, stripped of platform bias.

### 2. ORACLE (Prediction & Risk)
*   **Purpose**: Forecasts future performance and risks.
*   **Key Functions**: Creative Fatigue detection, ROI Decay analysis, LTV Drift monitoring.
*   **Output**: Probabilistic warnings about what *will* happen in the next 7-14 days.

### 3. CURIOSITY (Decision & Action)
*   **Purpose**: Generates profitable actions.
*   **Key Functions**: Budget shifting, Creative pausing/scaling, Retention focus.
*   **Output**: Prioritized, scored recommendations with estimated financial impact.

## ⚡ Key Features

*   **Persona-Adaptive UI**: The FACE Dashboard adapts its language and presentation for CMOs (Strategic), VPs (Analytical), and Directors (Tactical).
*   **Autonomous Orchestration**: A single command runs the entire brain cycle (Data -> Insight -> Action) in milliseconds.
*   **Static Data Serving**: Outputs are generated as static JSON for instant, zero-latency dashboard loading.

## 🛠 Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS + shadcn/ui
*   **Icons**: Lucide React
*   **Runtime**: Node.js

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Seed demo data
npm run seed

# 3. Run the Brain
npm run brain

# 4. Start the Dashboard
npm run dev
```

Visit `http://localhost:3000/dashboard` to see the Brain in action.
