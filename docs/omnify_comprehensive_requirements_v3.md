# Omnify AI Marketing Brain SaaS - Comprehensive Requirements Document V3

## Document Purpose
This document consolidates ALL requirements for Omnify AI Marketing Brain implementation, incorporating validated market research, refined ICP targeting, enhanced personas, and focused MVP strategy. Structured for production-ready development across Claude Code, Cursor, Antigravity, and Emergent.

**Version 3.0 Updates**: Integrated 17 new strategic documents including validated market intelligence, GTM wedge strategy, enhanced personas, ORACLE/CURIOSITY pseudocode, MVP architecture, FACE UI specs, demo package, and data seeds.

---

# SECTION A: EXECUTIVE SUMMARY & STRATEGIC CONTEXT

## A.1 Product Vision & Strategic Positioning

**Requirement A.1.1:** Build an AI Marketing Intelligence Layer (not a replacement platform) that sits atop existing martech stacks to provide autonomous growth intelligence.
> Source: 34.Master Blueprint.pdf - Section 1; 4__Why_Omnify_Is_an_Intelligence_Layer.docx

**Requirement A.1.2:** Position Omnify as a "Brain Layer" providing predictive, prescriptive, and autonomous marketing intelligence that learns and improves over time through compound learning.
> Source: Omnify_Oracle_Competitive_Advantage.pdf; 34.Master Blueprint.pdf

**Requirement A.1.3:** Core value proposition: "The growth brain you've been missing" - transforms reactive marketing into predictive optimization 7-14 days in advance.
> Source: 35.Blueprint B_ The 24-Hour Hackathon Execution Blueprint.pdf - Page 9; 42. 3min_ElevatedDemoScript.pdf

**Requirement A.1.4:** Three fundamental questions the system must answer:
1. What happened with our spend? (MEMORY)
2. What will break next? (ORACLE)
3. What should we do tomorrow? (CURIOSITY)
> Source: 35.Blueprint B - Page 1; 41. MVP Architecture.pdf

**Requirement A.1.5:** The system demonstrates "Compound Learning Moat" - every module improves autonomously over time; prediction, attribution, churn mitigation, budget allocation, and creative fatigue forecasting get smarter with more data.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Page 1

## A.2 Target Market & GTM Wedge Strategy

### A.2.1 Primary ICP (First Wedge - Highest Priority)

**Requirement A.2.1.1:** PRIMARY TARGET: Lower mid-market DTC/subscription brands with $50M-$100M annual revenue (the strategic "first wedge").
> Source: 32. GTMSegment_50-100M_LowerBand_Validation_V4.pdf; 33.GTM Wedge Strategy.pdf - Executive Summary

**Requirement A.2.1.2:** SECONDARY TARGET: Mid-market expansion to $150M-$350M revenue companies after establishing lower band.
> Source: 30. Validated ICP + Subsector Targeting Summary.pdf; 34.Master Blueprint.pdf - Section 3

**Requirement A.2.1.3:** RATIONALE for $50M-$100M focus: This segment experiences identical 80/20 pain points but with higher urgency, 3× faster AI adoption, simpler procurement, fewer internal BI teams, and moves 10× faster than larger companies.
> Source: 33.GTM Wedge Strategy.pdf - Section 1; 34.Master Blueprint.pdf - Section 3

### A.2.2 Business Model & Team Characteristics

**Requirement A.2.2.1:** Target subscription-heavy and hybrid Direct-to-Consumer (DTC) brands (not pure wholesale or retail).
> Source: 30. Validated ICP.pdf - Section 1

**Requirement A.2.2.2:** Team size: 50-1000 employees with marketing teams of 20-120 FTE (lower band typically 20-50 marketing FTE).
> Source: 30. Validated ICP.pdf; 32. GTMSegment_50-100M.pdf - Table

**Requirement A.2.2.3:** Monthly ad spend: $250K+ annually in digital media ($21K+/month minimum), with primary spend on Meta, Google Ads, and TikTok.
> Source: 30. Validated ICP.pdf - Section 1; 32. GTMSegment_50-100M.pdf

**Requirement A.2.2.4:** Tech stack profile: Average 15+ marketing tools including Shopify/Commerce platform, Klaviyo/email platform, HubSpot or Salesforce CRM, TripleWhale or similar analytics, plus Meta/Google/TikTok ad platforms.
> Source: 30. Validated ICP.pdf - Section 1; 33.GTM Wedge Strategy.pdf

### A.2.3 Top 3 Validated Subsectors (The 80/20 Wedge)

**Requirement A.2.3.1:** RANK #1 - Beauty & Skincare: Highest pain concentration due to acute post-iOS14 attribution loss, highest CAC inflation (20% YoY), fastest creative turnover, highest SKU churn, extreme paid-social dependence, and highest operational spend complexity.
> Source: 29. Unified 80-20 Pain Summary.pdf; 30. Validated ICP.pdf - Section 2; 33.GTM Wedge Strategy.pdf - Section 6

**Requirement A.2.3.2:** RANK #2 - Health & Wellness: High churn/LTV drift, omnichannel fragmentation issues, growing TikTok/Instagram dependence, persistent margin challenges, and high LTV sensitivity due to subscription models.
> Source: 29. Unified 80-20 Pain Summary.pdf; 30. Validated ICP.pdf - Section 2

**Requirement A.2.3.3:** RANK #3 - Supplements & Nutraceuticals: Cross-platform attribution confusion, high LTV/CAC drift, compliance complexity, rampant media waste (12%+ average), and growing TikTok volatility.
> Source: 29. Unified 80-20 Pain Summary.pdf; 30. Validated ICP.pdf - Section 2

**Requirement A.2.3.4:** Secondary verticals (Phase 2 expansion): Pet Care Subscriptions, Apparel & Lifestyle Subscriptions (both demonstrate similar pain patterns but slightly lower urgency).
> Source: 30. Validated ICP.pdf; 31. Final Top 5 Personas.pdf

## A.3 Enhanced Buyer Personas (Top 3 Decision Makers)

### A.3.1 Persona #1 - Sarah Martinez, CMO (Primary Buyer)

**Requirement A.3.1.1:** Profile: CMO of $285M Beauty Subscription brand, manages 15+ marketing team, $1.2M+ monthly ad spend across Meta/Google/TikTok, uses HubSpot/Shopify/TripleWhale/Klaviyo stack.
> Source: 31. Final Top 5 Personas.pdf - Persona 1; 36.Enhanced Customer Personas.pdf - 1000X Persona #1

**Requirement A.3.1.2:** Core Pain: Opens six conflicting dashboards every morning (Meta says ROAS 3.2, Google says 1.1, TripleWhale says something else). CEO asks "Why did CAC jump?" and she has no clean answer. Spends 4+ hours weekly preparing board reports.
> Source: 36.Enhanced Customer Personas.pdf - Sarah Martinez section; 04_USER_JOURNEY.md - CMO persona

**Requirement A.3.1.3:** What Sarah Needs FACE to Say:
- "Here's the truth - not what Meta thinks, what actually happened"
- "This is what will break if you don't act"
- "Here's exactly where to move budget tomorrow"
- One screen, one story, CEO-ready
> Source: 36.Enhanced Customer Personas.pdf - Sarah section; 37. FACE UI Wireframe.pdf

**Requirement A.3.1.4:** Emotional Triggers: Doesn't trust dashboards, doesn't trust agency reports, wants LTV-adjusted truth, wants simple narrative ("Where are we winning/losing?"), checks FACE once per day.
> Source: 35.Blueprint B.pdf - Persona A; 36.Enhanced Customer Personas.pdf

**Requirement A.3.1.5:** Decision Authority: Highest budget authority (Score 10/10), controls martech purchasing decisions, reports directly to CEO/Board.
> Source: 33.GTM Wedge Strategy.pdf - Section 5

### A.3.2 Persona #2 - Jason Li, VP Growth (Secondary Buyer)

**Requirement A.3.2.1:** Profile: VP Growth at $220M Cosmetics DTC/Hybrid brand, manages Meta/Google/TikTok spend directly, owns CAC/LTV metrics, reviews creative performance daily.
> Source: 31. Final Top 5 Personas.pdf - Persona 2; 36.Enhanced Customer Personas.pdf - 1000X Persona #2

**Requirement A.3.2.2:** Core Pain: Refreshes Meta Ads Manager every 15 minutes, uses three monitors (spreadsheets/creative performance/LTV dashboards), pulse of anxiety when CAC spikes, can't sleep when performance fluctuates without reason.
> Source: 36.Enhanced Customer Personas.pdf - Jason Li section

**Requirement A.3.2.3:** What Jason Needs FACE to Say:
- "Creative C12 will fatigue in 3 days"
- "TikTok cohort LTV dropped 8% this week"
- "Shift $12K from TikTok → Meta tomorrow"
- Confidence scores on every prediction
> Source: 36.Enhanced Customer Personas.pdf - Jason section; 37. FACE UI Wireframe.pdf

**Requirement A.3.2.4:** Workflow: Wants fatigue alerts, budget recommendations, daily checks, tactical execution guidance.
> Source: 35.Blueprint B.pdf - Persona B; 36.Enhanced Customer Personas.pdf

**Requirement A.3.2.5:** Decision Authority: Principal martech decision-maker (Score 9/10), accountable for LTV/CAC, highly exposed to predictive gaps and budget misallocation pain.
> Source: 33.GTM Wedge Strategy.pdf - Section 5

### A.3.3 Persona #3 - Emily Chen, Director Performance Marketing (Influencer)

**Requirement A.3.3.1:** Profile: Director Performance Marketing at $140M Hybrid brand, executes campaigns daily, lives in Ads Manager, manages creative team coordination.
> Source: 31. Final Top 5 Personas.pdf - Persona 3; 36.Enhanced Customer Personas.pdf - 1000X Persona #3

**Requirement A.3.3.2:** Core Pain: Needs to know which creatives to pause, where to move budget, which campaigns are dying, wants tactical flags not strategy documents.
> Source: 35.Blueprint B.pdf - Persona C; 36.Enhanced Customer Personas.pdf

**Requirement A.3.3.3:** What Emily Needs FACE to Say:
- "Pause Creative C12 now"
- "Move 10% from TikTok to Meta"
- "Google Brand is a winner - increase 6%"
- Action-first, explanation second
> Source: 36.Enhanced Customer Personas.pdf - Emily section; 37. FACE UI Wireframe.pdf

**Requirement A.3.3.4:** Decision Authority: Day-to-day execution authority (Score 7/10), directly exposed to attribution blind spots and operational fragmentation.
> Source: 33.GTM Wedge Strategy.pdf - Section 5

## A.4 Core Problem Statement (Validated 80/20 Pains)

### A.4.1 Top 5 Validated Pain Points (Frequency × Severity × Impact)

**Requirement A.4.1.1:** PAIN #1 - Cross-Channel Attribution Loss: Acute post-iOS14 in beauty/wellness/supplements. Multi-platform discovery loops create attribution chaos. This is consistently cited as root of ROI opacity. Attribution model issues cost marketers up to 20% of annual growth.
> Source: 29. Unified 80-20 Pain Summary.pdf - Rank 1; 30. Validated ICP.pdf

**Requirement A.4.1.2:** PAIN #2 - Predictive Gaps (Creative Fatigue, LTV Drift, Churn Spikes): No existing platform predicts creative fatigue or LTV decay. Brands react 7-14 days too late. High SKU turnover in beauty means creative refreshes 2× faster than other verticals.
> Source: 29. Unified 80-20 Pain Summary.pdf - Rank 2; 5__Predictive_Gaps_in_Existing_Tools.docx

**Requirement A.4.1.3:** PAIN #3 - Budget Misallocation / Wasted Spend: $50M-$100M brands suffer 20%-40% media waste due to poor data quality and slow feedback loops. Every wasted dollar hurts more than in upper band. Mid-market brands lose $37B annually.
> Source: 29. Unified 80-20 Pain Summary.pdf - Rank 3; 32. GTMSegment_50-100M.pdf - Table; Mid-Market_Marketing_Crisis.md

**Requirement A.4.1.4:** PAIN #4 - Executive Reporting Friction / Dashboard Overload: CMOs use 6+ conflicting dashboards. HubSpot shows 32% reporting complaints, TripleWhale 30%, Salesforce 24%. Decision bottlenecks and lack of single source of truth.
> Source: 29. Unified 80-20 Pain Summary.pdf - Rank 4; PainPoint_and_requirements.pdf

**Requirement A.4.1.5:** PAIN #5 - No Prescriptive "What to Do Next" AI: Universal gap across all platforms. No tool provides automated, prescriptive recommendations linking creative, media, and analytics. CMOs want directions, not just dashboards.
> Source: 29. Unified 80-20 Pain Summary.pdf - Rank 5; PainPoint_and_requirements.pdf - Page 3

### A.4.2 Pain-to-Module Mapping

**Requirement A.4.2.1:** Cross-Channel Attribution Loss → MEMORY solves by providing unified truth layer across all platforms with LTV-adjusted ROAS.
> Source: 29. Unified 80-20 Pain Summary.pdf - Module Mapping Table

**Requirement A.4.2.2:** Predictive Gaps → ORACLE solves by forecasting creative fatigue, LTV drift, churn risk, and ROI decay 7-14 days in advance.
> Source: 29. Unified 80-20 Pain Summary.pdf - Module Mapping Table

**Requirement A.4.2.3:** Budget Misallocation → CURIOSITY solves by generating specific, scored recommendations on where to shift spend based on MEMORY truth and ORACLE predictions.
> Source: 29. Unified 80-20 Pain Summary.pdf - Module Mapping Table

**Requirement A.4.2.4:** Executive Reporting Friction → FACE solves by providing single-page insights dashboard with persona-specific views (CMO/VP/Director).
> Source: 29. Unified 80-20 Pain Summary.pdf - Module Mapping Table

## A.5 Core Value Deliverables

**Requirement A.5.1:** Autonomous Growth Intelligence: System that learns and evolves with every campaign, predicts issues before they impact revenue, and continuously improves through compound learning.
> Source: RK_20251013_OmniFy_Hackathon - Page 1; 34.Master Blueprint.pdf

**Requirement A.5.2:** Predictive Optimization: Transform reactive marketing into predictive optimization with 7-14 day advance visibility into creative fatigue, LTV trends, and ROI decay.
> Source: 39. ORACLE Pseudocode.pdf; 34.Master Blueprint.pdf

**Requirement A.5.3:** Prescriptive Actions: Convert insights into concrete, executable recommendations with expected impact and confidence scores.
> Source: 40. CURIOSITY Pseudocode.pdf; 34.Master Blueprint.pdf

**Requirement A.5.4:** Executive Clarity: Single-page intelligence surface answering "What happened?", "What's coming?", and "What should we do?" in CEO-ready format.
> Source: 37. FACE UI Wireframe.pdf; 42. 3min_ElevatedDemoScript.pdf

---

# SECTION B: MVP ARCHITECTURE & MODULE SPECIFICATIONS

## B.1 MVP Scope Definition (Focus Strategy)

**Requirement B.1.1:** MVP consists of THREE CORE BRAIN MODULES + ONE DISPLAY LAYER:
1. MEMORY (Attribution & ROI Truth Layer)
2. ORACLE (Prediction & Risk Engine)
3. CURIOSITY (Decision & Recommendation Engine)
4. FACE (Single Intelligence Surface)
> Source: 35.Blueprint B.pdf - Section 1; 41. MVP Architecture.pdf

**Requirement B.1.2:** DEFERRED TO PHASE 2: EYES (Segmentation), VOICE (Creative Repurposing), REFLEXES (Anomaly Detection).
> Source: 35.Blueprint B.pdf; PainPoint_and_requirements.pdf - Section V.4

**Requirement B.1.3:** Definition of Done: Product can answer three questions convincingly on one screen. If yes → MVP is DONE. If not → cut features until this works.
> Source: 35.Blueprint B.pdf - Section 8

**Requirement B.1.4:** All MVP modules use static/mock data with realistic campaign logs, no real integrations required for hackathon/MVP demo.
> Source: 35.Blueprint B.pdf; 44.DataSeeds.pdf

## B.2 End-to-End Data Flow Architecture

**Requirement B.2.1:** HIGH-LEVEL FLOW:
Raw channel + revenue data → Supabase (MEMORY layer) → MEMORY computes truth → ORACLE predicts risk → CURIOSITY decides actions → FACE shows everything on one screen.
> Source: 41. MVP Architecture.pdf - Box-and-Arrow Diagram

**Requirement B.2.2:** STEP 1 - External Platforms / Raw Data:
- Meta Ads, Google Ads, TikTok Ads (campaign performance)
- Shopify / Commerce platform (orders/revenue)
- Cohort / LTV exports
- CSV Upload / Mock Data for Hackathon MVP
> Source: 41. MVP Architecture.pdf - Step 1; 44.DataSeeds.pdf

**Requirement B.2.3:** STEP 2 - Supabase Database Schema:
Tables: channels, campaigns, creatives, daily_metrics, cohorts
> Source: 41. MVP Architecture.pdf - Step 2; 44.DataSeeds.pdf - Schema section

**Requirement B.2.4:** STEP 3 - MEMORY Processing:
- Aggregates daily_metrics by channel
- Computes ROAS = revenue / cost
- Computes LTV-ROAS = (revenue * LTV factor) / cost
- Marks winners / losers
- Produces MEMORY_OUTPUT used by ORACLE, CURIOSITY, and FACE
> Source: 41. MVP Architecture.pdf - Step 3

**Requirement B.2.5:** STEP 4 - ORACLE Processing:
Reads daily_metrics (time series), cohorts (LTV trends), and MEMORY_OUTPUT (truth baseline).
Applies rule engine to detect:
- Creative fatigue (CVR/CPA deterioration)
- ROI decay (channels spending more but ROAS dropping)
- LTV drift (cohort LTV declining vs past cohorts)
- Computes global risk_level (green/yellow/red)
Output: ORACLE_OUTPUT with risks + severity + confidence + 72-hour horizon
> Source: 41. MVP Architecture.pdf - Step 4; 39. ORACLE Pseudocode.pdf

**Requirement B.2.6:** STEP 5 - CURIOSITY Processing:
Reads MEMORY_OUTPUT (winners/losers) and ORACLE_OUTPUT (risks).
Generates and scores candidate actions:
1. Shift budget from decaying channels to strong channels
2. Pause fatigued creatives
3. Increase budget on winners
4. Optional: retention actions when LTV drifts
Ranks actions by impact × severity × confidence × urgency.
Returns Top 3 Actions + total potential uplift.
> Source: 41. MVP Architecture.pdf - Step 5; 40. CURIOSITY Pseudocode.pdf

**Requirement B.2.7:** STEP 6 - FACE Display Layer:
Renders what the brain has already decided:
- Top bar metrics (from MEMORY + ORACLE summary)
- MEMORY card (from MEMORY_OUTPUT)
- ORACLE card (from ORACLE_OUTPUT)
- CURIOSITY card (from CURIOSITY_OUTPUT - Top 3 Actions)
- Creative snapshot (from ORACLE fatigue list)
- Persona-specific microcopy (same data, different wording for Sarah/Jason/Emily)
> Source: 41. MVP Architecture.pdf - Step 6; 37. FACE UI Wireframe.pdf

## B.3 MODULE 1: MEMORY - Attribution & ROI Truth Layer

### B.3.1 Purpose & Strategic Importance

**Requirement B.3.1.1:** MEMORY provides unified ROI, CLV, and attribution truth across all channels, solving the "110% attribution problem" where platforms report conflicting metrics.
> Source: 41. MVP Architecture.pdf; 29. Unified 80-20 Pain Summary.pdf

**Requirement B.3.1.2:** Core question answered: "What actually happened?" (not what Meta thinks, not what Google thinks - the truth).
> Source: 35.Blueprint B.pdf - Section 4; 41. MVP Architecture.pdf

### B.3.2 Input Schema

**Requirement B.3.2.1:** Reads from Supabase tables:
- daily_metrics: channel_id, campaign_id, creative_id, date, impressions, clicks, spend, conversions, revenue
- cohorts: cohort_month, customer_count, ltv_30d, ltv_60d, ltv_90d
- channels: channel_id, channel_name, platform
> Source: 44.DataSeeds.pdf - Schema section

### B.3.3 Processing Logic

**Requirement B.3.3.1:** For each channel, aggregate daily_metrics and compute:
- ROAS = total_revenue / total_spend
- LTV-ROAS = (total_revenue * LTV_factor) / total_spend
- Where LTV_factor is derived from cohorts table (e.g., 90-day LTV / 30-day LTV)
> Source: 41. MVP Architecture.pdf - MEMORY section

**Requirement B.3.3.2:** Compute blended metrics across all channels:
- Blended ROAS (total revenue / total spend)
- MER (Marketing Efficiency Ratio)
- Total LTV-adjusted revenue
> Source: 35.Blueprint B.pdf - MEMORY section

**Requirement B.3.3.3:** Mark winners/losers:
- Winner: ROAS > blended_ROAS * 1.15
- Loser: ROAS < blended_ROAS * 0.85
- Neutral: between thresholds
> Source: 41. MVP Architecture.pdf

### B.3.4 Output Schema

**Requirement B.3.4.1:** MEMORY_OUTPUT JSON structure:
```json
{
  "totals": {
    "spend": number,
    "revenue": number,
    "roas": number,
    "ltv_adjusted_revenue": number,
    "ltv_roas": number
  },
  "channels": [
    {
      "channel_id": string,
      "channel_name": string,
      "spend": number,
      "revenue": number,
      "roas": number,
      "ltv_roas": number,
      "status": "winner" | "loser" | "neutral"
    }
  ],
  "timestamp": ISO8601
}
```
> Source: 41. MVP Architecture.pdf; 35.Blueprint B.pdf

### B.3.5 Acceptance Criteria

**Requirement B.3.5.1:** ROI MAPE (Mean Absolute Percentage Error) ≤20%
> Source: PainPoint_and_requirements.pdf - V.1.5

**Requirement B.3.5.2:** CLV RMSE ≤25%
> Source: PainPoint_and_requirements.pdf - V.1.5

**Requirement B.3.5.3:** Unified customer journey data across all platforms for accurate ROI calculation
> Source: PainPoint_and_requirements.pdf - V.1.5

## B.4 MODULE 2: ORACLE - Prediction & Risk Engine

### B.4.1 Purpose & Strategic Importance

**Requirement B.4.1.1:** ORACLE predicts creative fatigue, customer lifetime value, churn risk, and performance trends 7-14 days in advance to enable proactive optimization.
> Source: 39. ORACLE Pseudocode.pdf; RK_20251013_OmniFy_Hackathon - Page 1-2

**Requirement B.4.1.2:** This is the core differentiator that transforms reactive marketing into predictive optimization - the foundation of Omnify's competitive moat.
> Source: RK_20251013_OmniFy_Hackathon - Page 2; Omnify_Oracle_Competitive_Advantage.pdf

**Requirement B.4.1.3:** Core question answered: "What will break next?" (7-14 day advance warning)
> Source: 35.Blueprint B.pdf - Section 5; 41. MVP Architecture.pdf

### B.4.2 Three Detection Engines

**Requirement B.4.2.1:** ENGINE 1 - Creative Fatigue Detection:
Input: daily_metrics time series for each creative
Logic:
- For each creative, compute recent_performance (last 7 days) vs baseline_performance (prior 14-21 days)
- Detect deterioration in CVR (Conversion Rate) and CPA (Cost Per Acquisition)
- Flag creative as "fatigued" if:
  * CVR drops > 20% from baseline, OR
  * CPA increases > 25% from baseline, OR
  * Frequency > 3.5 (audience saturation)
- Calculate fatigue_probability_7d and fatigue_probability_14d
- Estimate predicted_performance_drop percentage
Output: List of creatives with fatigue risk, probability scores, recommended action
> Source: 39. ORACLE Pseudocode.pdf - Sections 1-3; RK_20251013_OmniFy_Hackathon - Page 2

**Requirement B.4.2.2:** ENGINE 2 - ROI Decay Detection:
Input: daily_metrics time series aggregated by channel
Logic:
- For each channel, compute recent_ROAS (last 7 days) vs baseline_ROAS (prior 14-21 days)
- Flag channel as "decaying" if:
  * ROAS drops > 15% from baseline, OR
  * Spend increasing but ROAS flat or declining
- Calculate decay severity (high/medium/low)
Output: List of channels with ROI decay, severity scores, trend indicators
> Source: 39. ORACLE Pseudocode.pdf - Section 4

**Requirement B.4.2.3:** ENGINE 3 - LTV Drift Detection:
Input: cohorts table with monthly cohort LTV data
Logic:
- Compare recent cohorts (last 2-3 months) against historical baseline cohorts
- Flag LTV drift if new cohort LTV < historical average by > 10%
- Identify if drift is accelerating or stabilizing
Output: LTV drift status, cohort comparison, trend direction
> Source: 39. ORACLE Pseudocode.pdf - Section 5

### B.4.3 Risk Aggregation

**Requirement B.4.3.1:** Compute Global Risk Level:
- Count: number of fatigued creatives, decaying channels, LTV drift severity
- If ≥3 high-severity risks → Risk = RED
- If 1-2 moderate risks → Risk = YELLOW
- If 0-1 low risks → Risk = GREEN
> Source: 39. ORACLE Pseudocode.pdf - Section 7

### B.4.4 Output Schema

**Requirement B.4.4.1:** ORACLE_OUTPUT JSON structure:
```json
{
  "creative_fatigue": [
    {
      "creative_id": string,
      "platform": string,
      "fatigue_probability_7d": 0.0-1.0,
      "fatigue_probability_14d": 0.0-1.0,
      "predicted_performance_drop": percentage,
      "recommended_action": string,
      "confidence": "high" | "medium" | "low",
      "urgency": "high" | "medium" | "low",
      "time_horizon": "72h"
    }
  ],
  "roi_decay_channels": [
    {
      "channel_id": string,
      "channel_name": string,
      "decay_severity": "high" | "medium" | "low",
      "roas_trend": "declining" | "stable" | "improving",
      "recommended_action": string,
      "confidence": "high" | "medium" | "low"
    }
  ],
  "ltv_drift": {
    "status": "drifting" | "stable" | "improving",
    "recent_cohort_ltv": number,
    "baseline_cohort_ltv": number,
    "drift_percentage": number,
    "severity": "high" | "medium" | "low"
  },
  "risk_level": "red" | "yellow" | "green",
  "timestamp": ISO8601
}
```
> Source: 39. ORACLE Pseudocode.pdf - Section 7; 41. MVP Architecture.pdf

### B.4.5 Acceptance Criteria

**Requirement B.4.5.1:** Fatigue prediction AUC ≥0.75 (7-day forecast)
> Source: RK_20251013_OmniFy_Hackathon - Page 2; PainPoint_and_requirements.pdf

**Requirement B.4.5.2:** LTV prediction RMSE ≤25%
> Source: RK_20251013_OmniFy_Hackathon - Page 2; PainPoint_and_requirements.pdf

**Requirement B.4.5.3:** Demonstrate measurable improvement in prediction accuracy over time (compound learning moat)
> Source: RK_20251013_OmniFy_Hackathon - Page 2; Omnify_Oracle_Competitive_Advantage.pdf

## B.5 MODULE 3: CURIOSITY - Decision & Recommendation Engine

### B.5.1 Purpose & Strategic Importance

**Requirement B.5.1.1:** CURIOSITY converts MEMORY truth + ORACLE predictions into concrete, high-impact actions with estimated impact and urgency scoring.
> Source: 40. CURIOSITY Pseudocode.pdf - Overview; 35.Blueprint B.pdf

**Requirement B.5.1.2:** Solves the #5 pain point: "No Prescriptive 'What to Do Next' AI" - provides specific budget moves with rationale.
> Source: 29. Unified 80-20 Pain Summary.pdf - Rank 5; 40. CURIOSITY Pseudocode.pdf

**Requirement B.5.1.3:** Core question answered: "What should we do tomorrow?" (Top 3 specific actions)
> Source: 35.Blueprint B.pdf - Section 6; 41. MVP Architecture.pdf

### B.5.2 Four Action Generators

**Requirement B.5.2.1:** GENERATOR 1 - Shift Budget Actions:
Input: MEMORY_OUTPUT (winners/losers), ORACLE_OUTPUT (decaying channels)
Logic:
- Identify channels marked as "loser" by MEMORY OR flagged as "decaying" by ORACLE
- Identify channels marked as "winner" by MEMORY AND not decaying
- For each loser/decaying channel:
  * Calculate shift_amount (e.g., 10% of current spend)
  * Target channel = highest-ROAS winner not at capacity
  * Estimate impact = shift_amount * (target_ROAS - source_ROAS)
- Score action by impact × urgency × confidence
Output: List of shift_budget actions sorted by score
> Source: 40. CURIOSITY Pseudocode.pdf - Section 2

**Requirement B.5.2.2:** GENERATOR 2 - Pause Creative Actions:
Input: ORACLE_OUTPUT (creative_fatigue list)
Logic:
- For each creative with fatigue_probability_7d > 0.6:
  * Action = pause_creative
  * Estimate impact = current_daily_spend * predicted_performance_drop * 7 days
  * Urgency = "high" if probability > 0.8, "medium" otherwise
- Score action by impact × urgency × confidence
Output: List of pause_creative actions sorted by score
> Source: 40. CURIOSITY Pseudocode.pdf - Section 3

**Requirement B.5.2.3:** GENERATOR 3 - Increase Budget Actions:
Input: MEMORY_OUTPUT (winners)
Logic:
- Identify channels with ROAS > blended_ROAS * 1.2 (clear winners)
- Ensure channel is NOT flagged as decaying by ORACLE
- For each strong winner:
  * Calculate increase_amount (e.g., 5-10% of current spend)
  * Estimate impact = increase_amount * (channel_ROAS - blended_ROAS)
  * Urgency = "medium" (opportunity, not emergency)
- Score action by impact × confidence
Output: List of increase_budget actions sorted by score
> Source: 40. CURIOSITY Pseudocode.pdf - Section 4

**Requirement B.5.2.4:** GENERATOR 4 - Retention/LTV Focus Actions (Optional):
Input: ORACLE_OUTPUT (ltv_drift status)
Logic:
- If LTV drift severity = "high":
  * Action = focus_retention or segment_engagement
  * Recommendation = review onboarding, increase retention campaigns
  * Urgency = "high"
Output: Optional retention action if LTV drifting
> Source: 40. CURIOSITY Pseudocode.pdf - Section 5

### B.5.3 Action Ranking & Selection

**Requirement B.5.3.1:** Scoring function:
score = (estimated_impact_usd * 0.4) + (severity_weight * 0.3) + (confidence_weight * 0.2) + (urgency_weight * 0.1)
Where:
- severity_weight: high=3, medium=2, low=1
- confidence_weight: high=3, medium=2, low=1
- urgency_weight: high=3, medium=2, low=1
> Source: 40. CURIOSITY Pseudocode.pdf - Section 6

**Requirement B.5.3.2:** Return TOP 3 ACTIONS only (highest scores), ensuring action diversity:
- Maximum 1 "increase_budget" action
- Prefer shift_budget and pause_creative (higher urgency)
> Source: 40. CURIOSITY Pseudocode.pdf - Section 7; 35.Blueprint B.pdf

### B.5.4 Output Schema

**Requirement B.5.4.1:** CURIOSITY_OUTPUT JSON structure:
```json
{
  "actions": [
    {
      "action_type": "shift_budget" | "pause_creative" | "increase_budget" | "focus_retention",
      "priority": 1 | 2 | 3,
      "target": {
        "from": string (channel_id or creative_id),
        "to": string (channel_id, optional)
      },
      "amount": {
        "current": number,
        "recommended": number,
        "change_percent": number
      },
      "estimated_impact_usd": number,
      "rationale": string,
      "urgency": "high" | "medium" | "low",
      "severity": "high" | "medium" | "low",
      "confidence": "high" | "medium" | "low",
      "score": number
    }
  ],
  "total_potential_uplift_usd": number,
  "timestamp": ISO8601
}
```
> Source: 40. CURIOSITY Pseudocode.pdf - Section 8; 35.Blueprint B.pdf - CURIOSITY output

### B.5.5 Acceptance Criteria

**Requirement B.5.5.1:** Allocation regret ≤15% vs oracle (optimal hindsight allocation)
> Source: PainPoint_and_requirements.pdf - V.2.3

**Requirement B.5.5.2:** Generate 2-3 specific budget moves for MVP with clear rationale
> Source: PainPoint_and_requirements.pdf - V.2.2

**Requirement B.5.5.3:** Each recommendation includes "what to change, why, expected impact"
> Source: PainPoint_and_requirements.pdf - V.2.2; 40. CURIOSITY Pseudocode.pdf

**Requirement B.5.5.4:** Decision latency ≤300ms, RAM ≤512MB
> Source: RK_20251013_OmniFy_Hackathon - CURIOSITY constraints

## B.6 MODULE 4: FACE - Single Intelligence Surface

### B.6.1 Purpose & Strategic Importance

**Requirement B.6.1.1:** FACE is the single-page executive dashboard that displays all brain module outputs in a CEO-ready format, solving the "6 conflicting dashboards" problem.
> Source: 37. FACE UI Wireframe.pdf; 35.Blueprint B.pdf - Section 6

**Requirement B.6.1.2:** One screen answers three questions:
- What happened? (MEMORY card)
- What will happen next? (ORACLE card)
- What should we do next? (CURIOSITY card)
> Source: 37. FACE UI Wireframe.pdf - Summary; 35.Blueprint B.pdf

**Requirement B.6.1.3:** Persona-specific views: Same data, different microcopy optimized for Sarah (CMO), Jason (VP Growth), Emily (Director Perf).
> Source: 37. FACE UI Wireframe.pdf - Section 2; 35.Blueprint B.pdf - Personas

### B.6.2 Layout & Components

**Requirement B.6.2.1:** TOP BAR - Executive Summary Metrics:
- MER (Marketing Efficiency Ratio)
- Blended ROAS
- LTV-ROAS
- Global Risk Level (green/yellow/red indicator)
- "Here's what changed this week" narrative
> Source: 37. FACE UI Wireframe.pdf - Top Bar; 35.Blueprint B.pdf - Section 6.A

**Requirement B.6.2.2:** MEMORY CARD - Attribution Truth:
Display: Channel-by-channel ROAS, revenue, spend, LTV-adjusted metrics
Format: Table with winner/loser badges, sortable columns
Persona customization:
- Sarah (CMO): Emphasize LTV-ROAS, total revenue, executive summary
- Jason (VP): Emphasize channel comparison, ROAS trends
- Emily (Director): Emphasize tactical numbers, quick scannability
> Source: 37. FACE UI Wireframe.pdf - MEMORY section; 35.Blueprint B.pdf

**Requirement B.6.2.3:** ORACLE CARD - Predictive Alerts:
Display: 7-14 day predictions with confidence scores
- Creative fatigue warnings (which creatives, when, probability)
- ROI decay alerts (which channels, severity)
- LTV drift status (cohort trends)
Format: Alert cards with urgency indicators (red/yellow/green)
Persona customization:
- Sarah: "What will break if you don't act"
- Jason: "Creative C12 will fatigue in 3 days"
- Emily: Tactical flags with creative IDs
> Source: 37. FACE UI Wireframe.pdf - ORACLE section; 36.Enhanced Customer Personas.pdf

**Requirement B.6.2.4:** CURIOSITY CARD - Top 3 Actions:
Display: Exactly 3 recommended actions, prioritized by score
Each action shows:
- Action type icon (shift/pause/increase)
- One-line description: "Shift 10% TikTok → Meta"
- Expected impact: "+$2.4K revenue"
- Urgency badge
- Accept/Reject buttons (for future user feedback loop)
Persona customization:
- Sarah: Focus on expected impact ($), simplified language
- Jason: Show confidence scores, detailed rationale
- Emily: Action-first format, tactical execution details
> Source: 37. FACE UI Wireframe.pdf - CURIOSITY section; 40. CURIOSITY Pseudocode.pdf

**Requirement B.6.2.5:** CREATIVE SNAPSHOT (Optional):
Display: Visual thumbnails of creatives flagged by ORACLE with fatigue probability
> Source: 37. FACE UI Wireframe.pdf - Section 6

### B.6.3 UI/UX Requirements

**Requirement B.6.3.1:** Desktop/laptop-first SPA (Single Page Application), optimized for ≥1280px width.
> Source: 37. FACE UI Wireframe.pdf - Purpose; PainPoint_and_requirements.pdf

**Requirement B.6.3.2:** Persona Toggle: Switch between CMO/VP Growth/Director views (changes microcopy, not data).
> Source: 37. FACE UI Wireframe.pdf - Section 2; 35.Blueprint B.pdf

**Requirement B.6.3.3:** NO backend required for MVP: All data comes from MEMORY/ORACLE/CURIOSITY JSON outputs loaded statically.
> Source: 35.Blueprint B.pdf - Section 6; 41. MVP Architecture.pdf

**Requirement B.6.3.4:** Use charts, filters, narratives, and badges for consent/drift/safety indicators.
> Source: 37. FACE UI Wireframe.pdf - Output specs

### B.6.4 Technical Constraints & Performance

**Requirement B.6.4.1:** Lighthouse Performance Score ≥90
> Source: 37. FACE UI Wireframe.pdf - Constraints; PainPoint_and_requirements.pdf

**Requirement B.6.4.2:** Accessibility (a11y) Score ≥95
> Source: 37. FACE UI Wireframe.pdf - Constraints; PainPoint_and_requirements.pdf

**Requirement B.6.4.3:** No backend infrastructure required for MVP demo
> Source: 37. FACE UI Wireframe.pdf - Constraints

**Requirement B.6.4.4:** Runs via npm/yarn commands: `npm install && npm run dev`
> Source: 37. FACE UI Wireframe.pdf - Acceptance

**Requirement B.6.4.5:** UI harness pass with persona-appropriate copy validated
> Source: 37. FACE UI Wireframe.pdf - Acceptance

### B.6.5 Scoring Criteria

**Requirement B.6.5.1:** Scoring breakdown:
- UX: 25% (Intuitive navigation, clear hierarchy, persona fit)
- Clarity: 25% (Executive comprehension, actionable insights)
- Performance: 20% (Lighthouse scores, load times)
- A11y: 15% (Accessibility compliance)
- Governance: 15% (Safety badges, consent indicators)
> Source: 37. FACE UI Wireframe.pdf - Scoring

---

# SECTION C: DATA ARCHITECTURE & SEEDS

## C.1 Supabase Database Schema

**Requirement C.1.1:** Table: channels
```sql
CREATE TABLE channels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  channel_id VARCHAR(50) UNIQUE NOT NULL,
  channel_name VARCHAR(100) NOT NULL,
  platform VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```
> Source: 44.DataSeeds.pdf - Schema section

**Requirement C.1.2:** Table: campaigns
```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  campaign_id VARCHAR(50) UNIQUE NOT NULL,
  campaign_name VARCHAR(200) NOT NULL,
  channel_id VARCHAR(50) REFERENCES channels(channel_id),
  campaign_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```
> Source: 44.DataSeeds.pdf - Schema section

**Requirement C.1.3:** Table: creatives
```sql
CREATE TABLE creatives (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  creative_id VARCHAR(50) UNIQUE NOT NULL,
  campaign_id VARCHAR(50) REFERENCES campaigns(campaign_id),
  creative_name VARCHAR(200),
  format VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```
> Source: 44.DataSeeds.pdf - Schema section

**Requirement C.1.4:** Table: daily_metrics
```sql
CREATE TABLE daily_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  channel_id VARCHAR(50) REFERENCES channels(channel_id),
  campaign_id VARCHAR(50) REFERENCES campaigns(campaign_id),
  creative_id VARCHAR(50) REFERENCES creatives(creative_id),
  impressions INTEGER,
  clicks INTEGER,
  spend DECIMAL(10,2),
  conversions INTEGER,
  revenue DECIMAL(10,2),
  frequency DECIMAL(4,2),
  ctr DECIMAL(5,4),
  cpc DECIMAL(5,2),
  cvr DECIMAL(5,4),
  cpa DECIMAL(7,2),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(date, channel_id, campaign_id, creative_id)
);
```
> Source: 44.DataSeeds.pdf - Schema section

**Requirement C.1.5:** Table: cohorts
```sql
CREATE TABLE cohorts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cohort_month VARCHAR(7) NOT NULL,
  customer_count INTEGER NOT NULL,
  ltv_30d DECIMAL(10,2),
  ltv_60d DECIMAL(10,2),
  ltv_90d DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(cohort_month)
);
```
> Source: 44.DataSeeds.pdf - Schema section

## C.2 Sample Data Seeds

**Requirement C.2.1:** Dataset Profile: $65M Beauty subscription brand (matches validated ICP first wedge).
> Source: 44.DataSeeds.pdf - Page 1

**Requirement C.2.2:** Channels Seed Data:
- Meta (channel_id: "META_001", platform: "Meta")
- Google (channel_id: "GOOGLE_001", platform: "Google")
- TikTok (channel_id: "TIKTOK_001", platform: "TikTok")
> Source: 44.DataSeeds.pdf - Channels section

**Requirement C.2.3:** Demo Narrative Alignment:
- Meta = hero channel (highest ROAS, consistent performer)
- Google = solid channel (stable, good ROAS)
- TikTok = problem child (ROI decay, creative fatigue issues)
This matches the 3-minute demo script pitch.
> Source: 44.DataSeeds.pdf - Narrative alignment; 42. 3min_ElevatedDemoScript.pdf

**Requirement C.2.4:** daily_metrics must show patterns that trigger ORACLE detection:
- Creative C12 on TikTok: CVR declining from 0.08 to 0.05 over 14 days (fatigue signal)
- TikTok channel: ROAS dropping from 2.8 to 1.9 over 14 days (decay signal)
- Meta channel: ROAS stable at 3.5-3.8 (winner signal)
- Google channel: ROAS stable at 2.2-2.5 (solid signal)
> Source: 44.DataSeeds.pdf - Daily metrics patterns; 39. ORACLE Pseudocode.pdf

**Requirement C.2.5:** cohorts must show LTV drift pattern:
- 2024-10: LTV_90d = 128
- 2024-11: LTV_90d = 119
- 2024-12: LTV_90d = 115
- 2025-01: LTV_90d = 112
This demonstrates the "LTV softening" signal that ORACLE detects.
> Source: 44.DataSeeds.pdf - Cohorts section; 39. ORACLE Pseudocode.pdf

**Requirement C.2.6:** Expected CURIOSITY outputs from this data:
1. "Shift 10% from TikTok → Meta" (due to TikTok decay + Meta winner status)
2. "Pause Creative C12" (due to detected fatigue)
3. "Increase Google Brand +6%" (due to solid performance)
> Source: 44.DataSeeds.pdf - Expected outputs; 40. CURIOSITY Pseudocode.pdf

---

# SECTION D: DEMO & PRESENTATION REQUIREMENTS

## D.1 3-Minute Demo Script

**Requirement D.1.1:** Demo structure follows exact flow:
00:00-00:15 - Opening Hook
00:15-00:45 - STEP 1: Data Foundation
00:45-01:15 - STEP 2: MEMORY - Attribution Truth
01:15-01:45 - STEP 3: ORACLE - Predictive Alerts
01:45-02:15 - STEP 4: CURIOSITY - Recommended Actions
02:15-02:50 - STEP 5: FACE - Single Intelligence Surface
02:50-03:00 - Closing (Transformation statement)
> Source: 43.Demo Package.pdf - Demo Flow Card

**Requirement D.1.2:** Opening Hook Script:
"Brands spend millions but fly blind. Omnify gives your marketing an intelligent brain — one place where reality becomes clear."
Show: FACE full screen zoomed out for emotional alignment.
> Source: 43.Demo Package.pdf - Opening section; 42. 3min_ElevatedDemoScript.pdf

**Requirement D.1.3:** MEMORY Demonstration:
Script: "This is the real truth — spend, revenue, and LTV-adjusted ROAS. Not what Meta thinks. Not what Google thinks. What actually happened."
Show: MEMORY card with channel breakdown, winners/losers highlighted.
Goal: Establish trust through attribution clarity.
> Source: 43.Demo Package.pdf - STEP 2; 35.Blueprint B.pdf - Section 9.2

**Requirement D.1.4:** ORACLE Demonstration:
Script: "These are your risks for next week — fatigue, LTV drift, ROI decay. You see the problems before they cost you revenue."
Show: ORACLE card with Creative C12 fatigue alert (7-day probability), TikTok decay warning, LTV drift status.
Goal: Show predictive power and advance visibility.
> Source: 43.Demo Package.pdf - STEP 3; 35.Blueprint B.pdf - Section 9.3

**Requirement D.1.5:** CURIOSITY Demonstration:
Script: "And CURIOSITY tells you the smartest three moves to make tomorrow. Shift this. Pause that. Lean here. With impact and urgency built in."
Show: CURIOSITY card with Top 3 Actions:
- "Shift 10% TikTok → Meta" (+$2.4K impact)
- "Pause Creative C12" (prevent waste)
- "Increase Google Brand +6%" (+$1.8K opportunity)
Goal: Close decision loop, solve operator pain.
> Source: 43.Demo Package.pdf - STEP 4; 35.Blueprint B.pdf - Section 9.4

**Requirement D.1.6:** FACE Demonstration:
Script: "All of this flows into FACE — a single, elegant screen that answers: What happened? What's coming? What should we do tomorrow?"
Show: Full FACE UI, toggle between CMO → VP Growth → Director personas to show microcopy adaptation.
Goal: Show simplicity, power, inevitability.
> Source: 43.Demo Package.pdf - STEP 5; 37. FACE UI Wireframe.pdf

**Requirement D.1.7:** Closing Script:
"Brands lose 10–20% of spend because they can't see clearly or react fast enough. Omnify changes that forever. It reveals the truth. It illuminates what's ahead. It directs your smartest next moves. Omnify — clarity you can trust, foresight you can feel, growth you can prove."
Goal: Emotional imprint + premium value anchor.
> Source: 43.Demo Package.pdf - Closing; 42. 3min_ElevatedDemoScript.pdf

## D.2 Live Demo Technical Setup

**Requirement D.2.1:** Browser: Full screen mode, load FACE UI with pre-populated static JSON scenario.
> Source: 43.Demo Package.pdf - Live Demo Cue Sheet

**Requirement D.2.2:** Preset scenario: "Beauty Brand - $150M - Week Summary" with all module outputs loaded.
> Source: 43.Demo Package.pdf - Live Demo Cue Sheet

**Requirement D.2.3:** Persona toggle default: CMO view, zoom level 110% for clarity.
> Source: 43.Demo Package.pdf - Live Demo Cue Sheet

**Requirement D.2.4:** Practice exact click sequence:
- Click MEMORY card to expand channel details
- Click ORACLE card to show fatigue predictions
- Click CURIOSITY card to reveal action rationale
- Toggle persona selector to demonstrate microcopy changes
> Source: 43.Demo Package.pdf - Live Demo Cue Sheet

## D.3 Demo Package Slide Deck

**Requirement D.3.1:** Slide 1: Problem Statement
Visual: Frustrated CMO with six conflicting dashboards
Text: "Mid-market brands spend millions but fly blind"
> Source: 43.Demo Package.pdf - Slide Deck section

**Requirement D.3.2:** Slide 2: The Omnify Solution
Visual: Brain graphic connected to marketing tools
Text: "One intelligent brain. Three critical answers."
> Source: 43.Demo Package.pdf - Slide Deck section

**Requirement D.3.3:** Slide 3: Module Overview
Visual: MEMORY → ORACLE → CURIOSITY → FACE flow diagram
Text: Brief description of each module's purpose
> Source: 43.Demo Package.pdf - Slide Deck section

**Requirement D.3.4:** Slide 4: Live Demo Transition
Visual: FACE UI screenshot
Text: "Let me show you how it works"
> Source: 43.Demo Package.pdf - Slide Deck section

**Requirement D.3.5:** Slide 5: Impact & Differentiation
Visual: Comparison table vs HubSpot/Salesforce/Zoho/Microsoft
Text: Key differentiators (predictive, prescriptive, compound learning, 1/3 price)
> Source: 43.Demo Package.pdf - Slide Deck section; Omnify_Oracle_Competitive_Advantage.pdf

**Requirement D.3.6:** Slide 6: Call to Action
Visual: Contact info, demo request form
Text: "Ready to see Omnify work for your brand?"
> Source: 43.Demo Package.pdf - Slide Deck section

---

# SECTION E: COMPETITIVE POSITIONING & DIFFERENTIATION

## E.1 Core Competitive Advantages

**Requirement E.1.1:** Compound Learning Moat: Every module improves autonomously over time. No other CRM offers continuous, modular AI that compounds intelligence across campaigns.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 1; 34.Master Blueprint.pdf

**Requirement E.1.2:** Predictive Optimization (Not Reactive): Predicts creative fatigue, churn, and LTV 7-14 days beforehand. Competes directly against platforms stuck in "rearview reporting."
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 1; 5__Predictive_Gaps.docx

**Requirement E.1.3:** Autonomous Execution: Automated, explainable decisions—budget, content, segmentation, anomaly reactions—minimize manual ops.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 1

**Requirement E.1.4:** Cross-Module Integration: Unified intelligence—creative, ROI, segment, anomaly, and predictive alerts—feeds into one AI-powered cockpit for directors.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 1

**Requirement E.1.5:** Governance & Safety at Core: Consent, drift, multilingual ops, FinOps, and compliance baked into each module.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 1

**Requirement E.1.6:** Plug-and-Play for Commerce, Social, Analytics: Native connections to Shopify, Stripe, Meta, TikTok, YouTube, etc.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 1

## E.2 Competitive Comparison (0-10 Scale)

**Requirement E.2.1:** Salesforce Ranking: 4/10
Weaknesses: Lacks predictive optimization, requires Datorama add-on ($50K+ annually), dashboard bloat, reporting complexity (24% complaint rate), no creative fatigue detection.
Strengths: Robust CRM, enterprise scale.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 2; PainPoint_and_requirements.pdf

**Requirement E.2.2:** HubSpot Ranking: 5/10
Weaknesses: Enterprise features locked behind $5K/month tier, reporting limitations (32% complaint rate), no built-in attribution or predictive capabilities, workflow complexity.
Strengths: Mid-market focused, good automation.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 2; PainPoint_and_requirements.pdf

**Requirement E.2.3:** Microsoft (Dynamics) Ranking: 4/10
Weaknesses: Complex configuration, limited social integrations, no creative fatigue prediction, reporting gaps, expensive add-ons.
Strengths: Enterprise integration, Microsoft ecosystem.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 2

**Requirement E.2.4:** Zoho Ranking: 5/10
Weaknesses: Limited AI capabilities, no predictive features, integration challenges, reporting constraints.
Strengths: Cost-effective, mid-market friendly.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 2

**Requirement E.2.5:** Omnify Ranking: 9.5/10 (Target)
Strengths: All six differentiators above, affordable ($499-$1,499/month vs $5K+ competitors), intelligence layer approach (no replacement needed), 48-hour deployment.
Gaps (0.5 deduction): Brand recognition (new entrant), enterprise case studies (building), integration ecosystem depth (expanding).
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 2; 34.Master Blueprint.pdf

## E.3 Musk-Style Critique Summary

**Requirement E.3.1:** "1000X the plan for Omnify/Oracle to take over the market" validation:
Elon Musk would critique competitors for being "incrementally better" while Omnify is "exponentially different" through true predictive AI, not reactive analytics.
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Elon Musk Critique section

**Requirement E.3.2:** Key Musk principles embedded in Omnify:
- First principles thinking: Focus on core pain (attribution, prediction, prescription) not feature bloat
- 10× better, not 10% better: Predictive vs reactive is a category leap
- Vertical integration: Own the intelligence layer, don't depend on platform APIs for insights
- Speed: 48-hour deployment vs 6-month enterprise implementations
> Source: Omnify_Oracle_Competitive_Advantage.pdf - Musk Critique section; 34.Master Blueprint.pdf

---

# SECTION F: PRICING & BUSINESS MODEL

## F.1 Tiered Pricing Strategy

**Requirement F.1.1:** TIER 1 - Starter ($499/month):
- Target: $50M-$75M revenue companies
- Includes: MEMORY + ORACLE + basic CURIOSITY (3 actions/day) + FACE
- Limits: 2 platform integrations, 100K events/month
- Positioning: Entry point for lower mid-market
> Source: PainPoint_and_requirements.pdf - Section N.1A; 34.Master Blueprint.pdf

**Requirement F.1.2:** TIER 2 - Growth ($799/month):
- Target: $75M-$150M revenue companies
- Includes: Full MEMORY + ORACLE + CURIOSITY (10 actions/day) + FACE + EYES
- Limits: 4 platform integrations, 500K events/month
- Positioning: Standard mid-market package
> Source: PainPoint_and_requirements.pdf - Section N.1A

**Requirement F.1.3:** TIER 3 - Scale ($1,499/month):
- Target: $150M-$350M revenue companies
- Includes: All modules (MEMORY + ORACLE + EYES + VOICE + CURIOSITY + REFLEXES + FACE)
- Limits: Unlimited integrations, 2M events/month
- Add-ons: White-label reporting, API access, custom ML models
- Positioning: Enterprise-grade intelligence at mid-market price
> Source: PainPoint_and_requirements.pdf - Section N.1A

**Requirement F.1.4:** Value Proposition: "Northbeam functionality at 1/3 the price"
Northbeam pricing: $2K-$5K+/month for attribution
Omnify pricing: $499-$1,499/month for attribution + prediction + prescription
> Source: PainPoint_and_requirements.pdf - Section N; 34.Master Blueprint.pdf

**Requirement F.1.5:** Positioning within mid-market budgets:
Analytics/intelligence typically represents 10%-25% of total martech stack cost.
HubSpot/Salesforce users spending ~$7K/month on core CRM have room for $1,500 intelligence add-on.
> Source: 4__Why_Omnify_Is_an_Intelligence_Layer.docx; PainPoint_and_requirements.pdf

## F.2 ROI Justification for Buyers

**Requirement F.2.1:** Expected customer outcomes (used in sales materials):
- 10-20% reduction in wasted ad spend (saves $100K-$300K annually for $1M/month spender)
- 7-14 day advance warning prevents revenue drops (estimated $50K-$150K saved per incident)
- 4+ hours/week saved in reporting (valued at $50K-$100K annually for CMO time)
- Payback period: 2-4 months
> Source: 34.Master Blueprint.pdf; Mid-Market_Marketing_Crisis.md; 42. 3min_ElevatedDemoScript.pdf

---

# SECTION G: IMPLEMENTATION CONSTRAINTS & TECHNICAL STACK

## G.1 MVP Technical Stack (24-Hour Hackathon)

**Requirement G.1.1:** Frontend: React/Next.js (static SPA), no backend required for MVP.
> Source: 35.Blueprint B.pdf - Section 6; 37. FACE UI Wireframe.pdf

**Requirement G.1.2:** Database: Supabase (PostgreSQL) for schema and seed data.
> Source: 44.DataSeeds.pdf - Schema; 01_SYSTEM_ARCHITECTURE.md

**Requirement G.1.3:** Brain Modules: Python or Node.js scripts reading/writing JSON.
> Source: 35.Blueprint B.pdf - Module implementation; 41. MVP Architecture.pdf

**Requirement G.1.4:** Data Files: CSV/Parquet seed data loaded into Supabase.
> Source: 44.DataSeeds.pdf; 35.Blueprint B.pdf

**Requirement G.1.5:** Harness: Simple Python/Node script to orchestrate module execution and collect outputs.
> Source: 35.Blueprint B.pdf; 2Day_Marathon_Omnify_Oracle.pdf

## G.2 Production Technical Stack (Post-MVP)

**Requirement G.2.1:** Frontend: Next.js 15 (App Router) with TypeScript, shadcn/ui components, TailwindCSS.
> Source: 01_SYSTEM_ARCHITECTURE.md; 02_CLAUDE_CODE_INSTRUCTIONS.md

**Requirement G.2.2:** Backend: tRPC for type-safe APIs, Supabase for database + auth + real-time.
> Source: 01_SYSTEM_ARCHITECTURE.md

**Requirement G.2.3:** Integration Layer: n8n (self-hosted) for workflow automation and API connections.
> Source: 01_SYSTEM_ARCHITECTURE.md; PainPoint_and_requirements.pdf

**Requirement G.2.4:** AI/ML: OpenAI + Claude APIs for reasoning, scikit-learn for predictions.
> Source: 01_SYSTEM_ARCHITECTURE.md

**Requirement G.2.5:** Hosting: Vercel (frontend) + VPS (n8n, background jobs).
> Source: 01_SYSTEM_ARCHITECTURE.md

## G.3 Performance Requirements

**Requirement G.3.1:** MEMORY: Process 100K daily_metrics records in ≤2 minutes, RAM ≤1GB.
> Source: RK_20251013_OmniFy_Hackathon - MEMORY constraints

**Requirement G.3.2:** ORACLE: Fatigue detection on 10K creatives in ≤5 minutes, RAM ≤2GB.
> Source: RK_20251013_OmniFy_Hackathon - ORACLE constraints

**Requirement G.3.3:** CURIOSITY: Decision latency ≤300ms, RAM ≤512MB.
> Source: RK_20251013_OmniFy_Hackathon - CURIOSITY constraints

**Requirement G.3.4:** FACE: Lighthouse score ≥90, a11y ≥95, First Contentful Paint ≤1.5s.
> Source: 37. FACE UI Wireframe.pdf - Constraints; PainPoint_and_requirements.pdf

## G.4 MVP Definition of Done

**Requirement G.4.1:** DONE = The product can answer three questions on one screen:
1. What happened with our spend? (MEMORY works)
2. What will break next? (ORACLE predicts)
3. What should we do tomorrow? (CURIOSITY recommends)
If yes → MVP is DONE. If not → cut features until this works.
> Source: 35.Blueprint B.pdf - Section 8

**Requirement G.4.2:** All brain modules pass harness integration tests with realistic data.
> Source: 35.Blueprint B.pdf; 2Day_Marathon_Omnify_Oracle.pdf

**Requirement G.4.3:** FACE UI renders correctly with persona toggle working.
> Source: 37. FACE UI Wireframe.pdf; 35.Blueprint B.pdf

**Requirement G.4.4:** 3-minute demo executes smoothly with preset scenario.
> Source: 43.Demo Package.pdf; 42. 3min_ElevatedDemoScript.pdf

---

# SECTION H: DEFERRED FEATURES (PHASE 2 & 3)

## H.1 EYES - Customer Segmentation Module (Phase 2)

**Requirement H.1.1:** Purpose: Cluster users and score churn (30/60/90 days).
> Source: PainPoint_and_requirements.pdf - V.4.1

**Requirement H.1.2:** Acceptance: Silhouette ≥0.45 and AUC ≥0.70 (d30).
> Source: PainPoint_and_requirements.pdf - V.4.1

**Requirement H.1.3:** Deferral Rationale: Lower pain ranking, complexity, not MVP-critical.
> Source: PainPoint_and_requirements.pdf - V.4.1; 35.Blueprint B.pdf

## H.2 VOICE - Creative Repurposing Studio (Phase 2)

**Requirement H.2.1:** Purpose: Repurpose content (Video/Image/Text) to 3 safe, on-brand variants (IG/TikTok primary).
> Source: PainPoint_and_requirements.pdf - V.4.2

**Requirement H.2.2:** Acceptance: ≥95% brand-safety and produce English/Spanish multilingual content.
> Source: PainPoint_and_requirements.pdf - V.4.2

**Requirement H.2.3:** Deferral Rationale: Low complaint frequency (4%), not in 80/20 pain.
> Source: PainPoint_and_requirements.pdf - V.4.2; 29. Unified 80-20 Pain Summary.pdf

## H.3 REFLEXES - Real-Time Anomaly Detection (Phase 3)

**Requirement H.3.1:** Purpose: Detect minute-level spikes/drops and propose two low-risk actions.
> Source: PainPoint_and_requirements.pdf - V.4.3

**Requirement H.3.2:** Acceptance: Precision ≥0.80 & Recall ≥0.80; latency ≤1s.
> Source: PainPoint_and_requirements.pdf - V.4.3

**Requirement H.3.3:** Deferral Rationale: Operational polish, not MVP-critical.
> Source: PainPoint_and_requirements.pdf - V.4.3; 35.Blueprint B.pdf

---

# SUMMARY: REQUIREMENTS COUNT BY SECTION

| Section | Category | Count |
|---------|----------|-------|
| A | Executive Summary & Strategic Context | 63 |
| B | MVP Architecture & Module Specifications | 95 |
| C | Data Architecture & Seeds | 15 |
| D | Demo & Presentation Requirements | 20 |
| E | Competitive Positioning & Differentiation | 15 |
| F | Pricing & Business Model | 8 |
| G | Implementation Constraints & Technical Stack | 15 |
| H | Deferred Features (Phase 2 & 3) | 9 |
| **TOTAL** | | **240** |

---

# CHANGELOG V3.0 (Major Strategic Update)

## New Strategic Foundations:
1. **GTM Wedge Strategy**: Primary focus on $50M-$100M lower mid-market as strategic "first wedge" (Documents 32, 33)
2. **Validated ICP**: Refined to Beauty & Skincare (#1), Supplements (#2), Health & Wellness (#3) with externally validated pain data (Documents 28, 29, 30)
3. **Enhanced Personas**: Three detailed personas (Sarah Martinez CMO, Jason Li VP Growth, Emily Chen Director) with emotional triggers and FACE UI requirements (Documents 31, 36)
4. **MVP Focus**: Simplified to 3 core modules (MEMORY, ORACLE, CURIOSITY) + FACE display layer for 24-hour hackathon feasibility (Document 35)

## Complete Technical Specifications Added:
5. **ORACLE Pseudocode**: Complete algorithm for creative fatigue detection, ROI decay, and LTV drift (Document 39)
6. **CURIOSITY Pseudocode**: Complete algorithm for action generation, scoring, and Top 3 selection (Document 40)
7. **MVP Architecture**: End-to-end data flow from Supabase → MEMORY → ORACLE → CURIOSITY → FACE (Document 41)
8. **FACE UI Specs**: Detailed layout, persona views, component requirements, performance constraints (Document 37)

## Demo & Market Positioning:
9. **3-Minute Demo Script**: Complete presentation flow with exact timing and scripts (Documents 42, 43)
10. **Customer Journey Map**: Detailed UX story and touchpoints for each persona (Document 38)
11. **Data Seeds**: Complete sample dataset with patterns that trigger all detection engines (Document 44)
12. **Master Blueprint**: Unified strategic narrative connecting market research to product design (Document 34)
13. **Competitive Analysis**: Detailed 0-10 rankings of Salesforce/HubSpot/Microsoft/Zoho with gap analysis (Omnify Oracle Competitive Advantage document)

## Removed/Restructured:
- Consolidated 7-module documentation into focused 3+1 MVP structure
- Moved EYES, VOICE, REFLEXES to "Deferred Features" section
- Streamlined from 408 requirements (V2) to 240 focused MVP requirements (V3)
- Removed generic "subscription companies" language, replaced with specific subsector targeting

## Sources Incorporated (17 New Documents):
- 28. Unified Market Intelligence Validation V3
- 29. Unified 80-20 Pain Summary & Module Mapping
- 30. Validated ICP + Subsector Targeting Summary
- 31. Final Top 5 Personas (Validated for MVP Build)
- 32. GTMSegment_50-100M_LowerBand_Validation V4
- 33. GTM Wedge Strategy — $50-100M Lower Mid-Market
- 34. Master Blueprint
- 35. Blueprint B: The 24-Hour Hackathon Execution Blueprint
- 36. Enhanced Customer Personas
- 37. FACE UI Wireframe → UI
- 38. Customer Journey Map → UX + story
- 39. ORACLE Pseudocode → Dev
- 40. CURIOSITY Pseudocode → Dev
- 41. MVP Architecture — MEMORY + ORACLE + CURIOSITY all in one picture
- 42. 3min_ElevatedDemoScript
- 43. Demo Package: Flow Card, Script Cues, Slide Deck
- 44. DataSeeds_Memory_Oracle_Curiosity_MVP_V1

---

*Document Version 3.0 - Updated November 23, 2025*
*Strategic restructuring based on validated market research and focused MVP strategy.*
*Engineered for Claude Code, Cursor, Antigravity, and Emergent parallel development.*
*All requirements extracted from 44 source documents with complete traceability.*
