# Setup & Installation Guide

This guide will help you set up the Omnify Brain MVP locally.

## Prerequisites
*   **Node.js**: Version 18.0.0 or higher
*   **npm**: Version 9.0.0 or higher

## Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Demo

The Omnify Brain operates in two parts: the **Brain Cycle** (backend logic) and the **Dashboard** (frontend UI).

### Step 1: Generate Data
First, we need to create realistic marketing data for the demo.
```bash
npm run seed
```
*This generates JSON files in `src/data/raw/` representing Channels, Campaigns, Creatives, and Cohorts.*

### Step 2: Run the Brain
Execute the AI modules to process the data and generate insights.
```bash
npm run brain
```
*This runs the Orchestrator, which executes MEMORY -> ORACLE -> CURIOSITY and saves the results to `src/data/outputs/` and `public/data/outputs/`.*

### Step 3: Launch the Dashboard
Start the Next.js development server.
```bash
npm run dev
```
*Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) in your browser.*

## Development Commands

*   **Type Check**: `npm run type-check` - Verify TypeScript types.
*   **Build**: `npm run build` - Create a production build.
*   **Lint**: `npm run lint` - Check for code style issues.

## Troubleshooting

**"Brain data not found" Error on Dashboard**
*   **Cause**: The Brain Orchestrator hasn't run yet.
*   **Fix**: Run `npm run brain` in your terminal.

**Missing UI Components**
*   **Cause**: shadcn/ui components not installed.
*   **Fix**: Run `npx shadcn@latest add [component-name]`.
