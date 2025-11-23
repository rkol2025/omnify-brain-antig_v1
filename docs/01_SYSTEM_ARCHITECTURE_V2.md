# Omnify AI Marketing Brain - System Architecture V2

## Document Information
- **Version**: 2.0
- **Date**: November 23, 2025  
- **Purpose**: Production-ready system architecture incorporating validated market research and focused MVP strategy
- **Target Audience**: Development teams (Claude Code, Cursor, Gemini Antigravity, Emergent), Sponsors, Technical Stakeholders

**V2 Updates**: Integrated validated ICP targeting ($50M-$100M first wedge), refined to Beauty/Supplements/Wellness subsectors, enhanced buyer personas (Sarah/Jason/Emily), focused MVP on 3+1 modules (MEMORY/ORACLE/CURIOSITY + FACE), complete end-to-end data flow architecture, and competitive positioning analysis.

---

## Executive Summary

Omnify AI Marketing Brain is an **AI Marketing Intelligence Layer** that sits on top of existing martech stacks (HubSpot, Salesforce, Shopify, Meta Ads, Google Ads, TikTok) to provide predictive, prescriptive, and autonomous marketing intelligence. Unlike traditional platforms, Omnify doesn't replace existing tools—it unifies their data and provides 7-14 day advance visibility into marketing performance.

### Core Value Proposition

**Three Critical Questions Answered on One Screen:**
1. **What happened with our spend?** → MEMORY (Attribution & ROI Truth Layer)
2. **What will break next?** → ORACLE (Prediction & Risk Engine)  
3. **What should we do tomorrow?** → CURIOSITY (Decision & Recommendation Engine)
4. **Single Intelligence Surface** → FACE (Executive Dashboard)

> Source: 35.Blueprint B - The 24-Hour Hackathon Execution Blueprint; 41. MVP Architecture

### Strategic Positioning

**"The growth brain you've been missing"** - Transforms reactive marketing into predictive optimization.

**Key Differentiator**: Compound Learning Moat - every module improves autonomously over time through continuous feedback loops. No other CRM offers modular AI that compounds intelligence across campaigns.

> Source: Omnify_Oracle_Competitive_Advantage.pdf; 34.Master Blueprint

### Validated Target Market

#### Primary ICP - The "First Wedge" (Highest Priority)

**Revenue Band**: $50M-$100M annual revenue (strategic entry point)
- **Why this segment**: 3× faster AI adoption, simpler procurement, higher urgency, fewer internal BI teams, 10× faster decision-making vs $150M+ companies
- **Secondary expansion**: $150M-$350M after establishing lower band

**Business Model**: Subscription-heavy and hybrid Direct-to-Consumer (DTC) brands
- **Team Size**: 50-1000 employees, marketing teams of 20-50 FTE (lower band) to 50-120 FTE (upper band)
- **Monthly Ad Spend**: $21K+ monthly ($250K+ annually) across Meta, Google Ads, TikTok
- **Tech Stack**: Average 15+ marketing tools (Shopify, Klaviyo, HubSpot/Salesforce, TripleWhale, Meta/Google/TikTok)

> Source: 33.GTM Wedge Strategy; 30. Validated ICP Summary; 32. GTMSegment_50-100M_LowerBand_Validation_V4

#### Top 3 Validated Subsectors (The 80/20 Wedge)

**Rank #1 - Beauty & Skincare** (First GTM target)
- Highest pain concentration: acute post-iOS14 attribution loss
- Highest CAC inflation (20% YoY), fastest creative turnover (2× other verticals)
- Highest SKU churn, extreme paid-social dependence (70%+ of ad spend)
- Example: $65M-$285M subscription beauty brands

**Rank #2 - Supplements & Nutraceuticals**
- Cross-platform attribution confusion, high LTV/CAC drift
- Rampant media waste (12%+ average), compliance complexity
- Growing TikTok volatility, high subscription churn

**Rank #3 - Health & Wellness**
- High churn/LTV drift, omnichannel fragmentation
- Growing TikTok/Instagram dependence, persistent margin challenges
- High LTV sensitivity due to subscription models

> Source: 29. Unified 80-20 Pain Summary; 30. Validated ICP Summary; 33.GTM Wedge Strategy

#### Enhanced Buyer Personas (Decision Makers)

**Persona #1: Sarah Martinez - CMO (Primary Economic Buyer)**
- Title: CMO of $285M Beauty Subscription brand
- Pain: Opens 6 conflicting dashboards every morning (Meta says ROAS 3.2, Google says 1.1, TripleWhale says something else). CEO asks "Why did CAC jump?" with no clean answer.
- Needs: "Here's the truth - not what Meta thinks. Here's what will break if you don't act. Here's where to move budget tomorrow." One screen, CEO-ready.
- Decision Authority: 10/10 - Controls martech budget, reports to CEO/Board

**Persona #2: Jason Li - VP Growth (Secondary Buyer/Champion)**
- Title: VP Growth at $220M Cosmetics DTC/Hybrid brand
- Pain: Refreshes Meta Ads Manager every 15 minutes. Three monitors. Can't sleep when performance fluctuates without reason.
- Needs: "Creative C12 will fatigue in 3 days. TikTok cohort LTV dropped 8%. Shift $12K from TikTok → Meta tomorrow. Confidence scores on everything."
- Decision Authority: 9/10 - Principal martech decision-maker, owns CAC/LTV

**Persona #3: Emily Chen - Director Performance Marketing (Influencer)**
- Title: Director Performance Marketing at $140M Hybrid brand
- Pain: Lives in Ads Manager. Needs to know which creatives to pause, where to move budget, which campaigns are dying.
- Needs: "Pause Creative C12 now. Move 10% from TikTok to Meta. Google Brand is a winner - increase 6%." Action-first format.
- Decision Authority: 7/10 - Day-to-day execution, exposed to attribution gaps

> Source: 31. Final Top 5 Personas; 36.Enhanced Customer Personas; 04_USER_JOURNEY.md

### Pricing Position

**Tiered SaaS Pricing**:
- **Tier 1 - Starter**: $499/month (target: $50M-$75M companies)
- **Tier 2 - Growth**: $799/month (target: $75M-$150M companies)
- **Tier 3 - Scale**: $1,499/month (target: $150M-$350M companies)

**Positioning**: "Northbeam functionality at 1/3 the price"
- Northbeam pricing: $2K-$5K+/month for attribution only
- Omnify pricing: $499-$1,499/month for attribution + prediction + prescription

**Value Justification**: 
- 10-20% reduction in wasted ad spend = $100K-$300K saved annually for $1M/month spender
- Payback period: 2-4 months

> Source: PainPoint_and_requirements.pdf - Section N; 34.Master Blueprint

---

## 1. High-Level Architecture - MVP Focus (3+1 Modules)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         OMNIFY AI MARKETING BRAIN                        │
│                  (Intelligence Layer - NOT a Replacement)                │
└──────────────────────────────────────────────────────────────────────────┘
                                   │
┌──────────────────────────────────┼─────────────────────────────────────┐
│                      PRESENTATION LAYER                                 │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │              FACE - Single Intelligence Surface                │    │
│  │                 (Desktop/Laptop SPA ≥1280px)                   │    │
│  │  ┌──────────────────────────────────────────────────────────┐ │    │
│  │  │ TOP BAR: MER | ROAS | LTV-ROAS | Risk Level (🟢🟡🔴)    │ │    │
│  │  └──────────────────────────────────────────────────────────┘ │    │
│  │  ┌────────────┐ ┌────────────┐ ┌───────────────────────────┐ │    │
│  │  │  MEMORY    │ │  ORACLE    │ │      CURIOSITY            │ │    │
│  │  │  Card      │ │  Card      │ │      Card                 │ │    │
│  │  │ ────────── │ │ ────────── │ │ ──────────────────────    │ │    │
│  │  │ "What      │ │ "What will │ │ "What should we do?"      │ │    │
│  │  │ happened?" │ │ break?"    │ │ • Top 3 Actions           │ │    │
│  │  │ • Channel  │ │ • Fatigue  │ │ • Expected Impact         │ │    │
│  │  │   ROAS     │ │   Alerts   │ │ • Urgency Badges          │ │    │
│  │  │ • Winners/ │ │ • ROI Decay│ │                           │ │    │
│  │  │   Losers   │ │ • LTV Drift│ │                           │ │    │
│  │  └────────────┘ └────────────┘ └───────────────────────────┘ │    │
│  │                                                                │    │
│  │  ┌──────────────────────────────────────────────────────────┐ │    │
│  │  │ Persona Toggle: [CMO] [VP Growth] [Director Perf]        │ │    │
│  │  │ (Changes microcopy, not data)                            │ │    │
│  │  └──────────────────────────────────────────────────────────┘ │    │
│  └────────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────┼─────────────────────────────────────┘
                                   │
┌──────────────────────────────────┼─────────────────────────────────────┐
│                      BRAIN MODULES LAYER (MVP: 3 Modules)               │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │                     MVP THREE-MODULE ARCHITECTURE                  │ │
│  │                                                                    │ │
│  │   ┌─────────┐      ┌─────────┐      ┌──────────┐                 │ │
│  │   │ MEMORY  │──────│ ORACLE  │──────│CURIOSITY │                 │ │
│  │   │         │      │         │      │          │                 │ │
│  │   │ROI/CLV  │ ────▶│Predict. │ ────▶│ Budget   │                 │ │
│  │   │Truth    │Truth │7-14 day │Risks │ Actions  │                 │ │
│  │   │Layer    │      │Forecast │      │(Top 3)   │                 │ │
│  │   └─────────┘      └─────────┘      └──────────┘                 │ │
│  │       │                 │                 │                       │ │
│  │       └─────────────────┴─────────────────┘                       │ │
│  │                         │                                         │ │
│  │               All outputs feed to FACE                            │ │
│  │                                                                    │ │
│  │  ┌──────────────────────────────────────────────────────────────┐ │ │
│  │  │ DEFERRED TO PHASE 2:                                         │ │ │
│  │  │ • EYES (Segmentation/Churn)                                  │ │ │
│  │  │ • VOICE (Creative Repurposing)                               │ │ │
│  │  │ • REFLEXES (Anomaly Detection)                               │ │ │
│  │  └──────────────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────┼─────────────────────────────────────┘
                                   │
┌──────────────────────────────────┼─────────────────────────────────────┐
│                      INTEGRATION LAYER                                  │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │                    n8n WORKFLOW ENGINE                             │ │
│  │  ┌──────────────┐ ┌──────────────┐ ┌─────────────────────────┐   │ │
│  │  │CRM Adapters  │ │Ad Platforms  │ │Commerce Adapters        │   │ │
│  │  │- HubSpot     │ │- Meta Ads    │ │- Shopify                │   │ │
│  │  │- Salesforce  │ │- Google Ads  │ │- Stripe                 │   │ │
│  │  │- Zoho        │ │- TikTok Ads  │ │- Klaviyo                │   │ │
│  │  └──────────────┘ └──────────────┘ └─────────────────────────┘   │ │
│  │                                                                    │ │
│  │  Pattern: Trigger → Pull → Transform → AI Reasoning → Save DB    │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────┼─────────────────────────────────────┘
                                   │
┌──────────────────────────────────┼─────────────────────────────────────┐
│                         DATA LAYER                                      │
│  ┌──────────────────┐  ┌──────────────────┐  ┌────────────────────┐  │
│  │    Supabase      │  │  TimescaleDB     │  │   S3 Storage       │  │
│  │  (PostgreSQL +   │  │  (Time-Series)   │  │  (Media Assets)    │  │
│  │   pgvector)      │  │                  │  │                    │  │
│  │  ─────────────   │  │  ──────────────  │  │  ────────────────  │  │
│  │  • channels      │  │  • daily_metrics │  │  • Creative files  │  │
│  │  • campaigns     │  │  • minute_level  │  │  • Export packs    │  │
│  │  • creatives     │  │    metrics       │  │  • Reports         │  │
│  │  • cohorts       │  │  • anomaly data  │  │                    │  │
│  │  • Knowledge     │  │                  │  │                    │  │
│  │    Graph         │  │                  │  │                    │  │
│  └──────────────────┘  └──────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

> Source: 41. MVP Architecture; 35.Blueprint B; 37. FACE UI Wireframe

---

## 2. End-to-End Data Flow Architecture (The Brain's Logic)

### 2.1 Complete Data Flow (Step-by-Step)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    STEP 1: EXTERNAL DATA SOURCES                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  External Platforms:                                                │
│  • Meta Ads, Google Ads, TikTok Ads (campaign performance)         │
│  • Shopify / Commerce platform (orders/revenue)                    │
│  • Cohort / LTV exports                                            │
│  • CSV Upload / Mock Data (for MVP demo)                           │
│                                                                     │
│                             ↓                                       │
│                  (Ingest via n8n workflows)                         │
│                             ↓                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                  STEP 2: SUPABASE DATABASE (Central Hub)            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Tables:                                                            │
│  • channels (channel_id, channel_name, platform)                   │
│  • campaigns (campaign_id, campaign_name, channel_id, type)        │
│  • creatives (creative_id, campaign_id, creative_name, format)     │
│  • daily_metrics (date, channel_id, campaign_id, creative_id,      │
│                   impressions, clicks, spend, conversions,          │
│                   revenue, frequency, ctr, cpc, cvr, cpa)           │
│  • cohorts (cohort_month, customer_count, ltv_30d, ltv_60d,        │
│             ltv_90d)                                                │
│                                                                     │
│                             ↓                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│              STEP 3: MEMORY - Attribution & ROI Truth Layer         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Processing:                                                        │
│  1. Read daily_metrics, aggregate by channel                        │
│  2. Compute:                                                        │
│     • ROAS = total_revenue / total_spend                           │
│     • LTV-ROAS = (total_revenue * LTV_factor) / total_spend        │
│     • Blended ROAS (all channels combined)                          │
│  3. Mark winners/losers:                                            │
│     • Winner: ROAS > blended_ROAS * 1.15                           │
│     • Loser: ROAS < blended_ROAS * 0.85                            │
│     • Neutral: between thresholds                                   │
│                                                                     │
│  Output: MEMORY_OUTPUT JSON                                         │
│  {                                                                  │
│    "totals": {spend, revenue, roas, ltv_roas},                     │
│    "channels": [{channel_id, spend, revenue, roas, status}]        │
│  }                                                                  │
│                                                                     │
│  Think: "What actually happened?"                                   │
│                                                                     │
│                             ↓                                       │
│          (MEMORY_OUTPUT feeds to ORACLE, CURIOSITY, FACE)           │
│                             ↓                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│            STEP 4: ORACLE - Prediction & Risk Engine               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Inputs:                                                            │
│  • daily_metrics (time series)                                      │
│  • cohorts (LTV trends)                                             │
│  • MEMORY_OUTPUT (truth baseline)                                   │
│                                                                     │
│  Processing (Three Detection Engines):                              │
│                                                                     │
│  ENGINE 1 - Creative Fatigue Detection:                             │
│    • Compare recent_performance (last 7d) vs baseline (14-21d)     │
│    • Flag fatigue if:                                               │
│      - CVR drops > 20% from baseline, OR                           │
│      - CPA increases > 25% from baseline, OR                       │
│      - Frequency > 3.5 (audience saturation)                        │
│    • Calculate fatigue_probability_7d and _14d                      │
│                                                                     │
│  ENGINE 2 - ROI Decay Detection:                                    │
│    • Compare recent_ROAS (last 7d) vs baseline_ROAS (14-21d)      │
│    • Flag decay if:                                                 │
│      - ROAS drops > 15% from baseline, OR                          │
│      - Spend increasing but ROAS flat/declining                    │
│                                                                     │
│  ENGINE 3 - LTV Drift Detection:                                    │
│    • Compare recent cohorts (last 2-3 months) vs historical        │
│    • Flag drift if new cohort LTV < historical avg by > 10%        │
│                                                                     │
│  Risk Aggregation:                                                  │
│    • Count high-severity risks                                      │
│    • If ≥3 high risks → Risk = RED                                 │
│    • If 1-2 moderate risks → Risk = YELLOW                         │
│    • If 0-1 low risks → Risk = GREEN                               │
│                                                                     │
│  Output: ORACLE_OUTPUT JSON                                         │
│  {                                                                  │
│    "creative_fatigue": [{creative_id, fatigue_probability_7d,      │
│                          predicted_drop, confidence}],              │
│    "roi_decay_channels": [{channel_id, decay_severity,             │
│                            roas_trend}],                            │
│    "ltv_drift": {status, drift_percentage, severity},              │
│    "risk_level": "red"|"yellow"|"green"                            │
│  }                                                                  │
│                                                                     │
│  Think: "What will break next?" (7-14 day horizon)                 │
│                                                                     │
│                             ↓                                       │
│          (ORACLE_OUTPUT feeds to CURIOSITY and FACE)                │
│                             ↓                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│          STEP 5: CURIOSITY - Decision & Recommendation Engine       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Inputs:                                                            │
│  • MEMORY_OUTPUT (winners/losers)                                   │
│  • ORACLE_OUTPUT (risks)                                            │
│                                                                     │
│  Processing (Four Action Generators):                               │
│                                                                     │
│  GENERATOR 1 - Shift Budget Actions:                                │
│    • Find losers (by MEMORY) OR decaying channels (by ORACLE)      │
│    • Find winners (high ROAS, not decaying)                         │
│    • Generate: "Shift X% from [source] to [target]"                │
│    • Estimate impact = shift_amount * (target_ROAS - source_ROAS)  │
│                                                                     │
│  GENERATOR 2 - Pause Creative Actions:                              │
│    • Find creatives with fatigue_probability_7d > 0.6               │
│    • Generate: "Pause Creative [ID]"                                │
│    • Estimate impact = daily_spend * predicted_drop * 7 days       │
│                                                                     │
│  GENERATOR 3 - Increase Budget Actions:                             │
│    • Find strong winners (ROAS > blended * 1.2, not decaying)      │
│    • Generate: "Increase [channel] budget by X%"                    │
│    • Estimate impact = increase * (channel_ROAS - blended_ROAS)    │
│                                                                     │
│  GENERATOR 4 - Retention Actions (Optional):                        │
│    • If LTV drift severity = high                                   │
│    • Generate: "Focus on retention/onboarding improvements"         │
│                                                                     │
│  Action Ranking:                                                    │
│    • Score = (impact * 0.4) + (severity * 0.3) +                   │
│              (confidence * 0.2) + (urgency * 0.1)                   │
│    • Return TOP 3 ACTIONS only (highest scores)                     │
│    • Ensure diversity (max 1 "increase" action)                     │
│                                                                     │
│  Output: CURIOSITY_OUTPUT JSON                                      │
│  {                                                                  │
│    "actions": [                                                     │
│      {                                                              │
│        "action_type": "shift_budget"|"pause_creative"|             │
│                       "increase_budget"|"focus_retention",          │
│        "priority": 1|2|3,                                           │
│        "target": {from, to},                                        │
│        "estimated_impact_usd": number,                              │
│        "rationale": string,                                         │
│        "urgency": "high"|"medium"|"low",                            │
│        "confidence": "high"|"medium"|"low"                          │
│      }                                                              │
│    ],                                                               │
│    "total_potential_uplift_usd": number                             │
│  }                                                                  │
│                                                                     │
│  Think: "What should we do tomorrow?"                               │
│                                                                     │
│                             ↓                                       │
│               (CURIOSITY_OUTPUT feeds to FACE)                      │
│                             ↓                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                STEP 6: FACE - Single Intelligence Surface           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FACE is pure display layer - no additional intelligence.           │
│  It renders what the brain has already decided:                     │
│                                                                     │
│  • TOP BAR → Metrics from MEMORY + ORACLE summary                  │
│  • MEMORY CARD → Render MEMORY_OUTPUT                              │
│  • ORACLE CARD → Render ORACLE_OUTPUT                              │
│  • CURIOSITY CARD → Render CURIOSITY_OUTPUT (Top 3 Actions)        │
│  • Creative Snapshot → From ORACLE fatigue list                    │
│                                                                     │
│  Persona Microcopy Adaptation:                                      │
│  • Sarah (CMO): Executive language, focus on impact                │
│  • Jason (VP): Show confidence scores, detailed rationale          │
│  • Emily (Director): Action-first, tactical execution details      │
│                                                                     │
│  Think: "One screen, one story, CEO-ready"                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

> Source: 41. MVP Architecture - Complete Flow; 39. ORACLE Pseudocode; 40. CURIOSITY Pseudocode; 35.Blueprint B

### 2.2 Example Data Flow (Realistic Scenario)

**Demo Scenario**: $65M Beauty subscription brand

**STEP 1 - Raw Data (daily_metrics)**:
- Meta: $10K spend/day, $35K revenue/day, ROAS 3.5 (stable last 14 days)
- Google: $5K spend/day, $11K revenue/day, ROAS 2.2 (stable)
- TikTok: $8K spend/day, $15K revenue/day, ROAS 1.9 (was 2.8 two weeks ago)
- Creative C12 on TikTok: CVR declining from 0.08 to 0.05 over 14 days

**STEP 2 - MEMORY Processing**:
- Blended ROAS = (35K + 11K + 15K) / (10K + 5K + 8K) = 2.65
- Meta status: "winner" (3.5 > 2.65 * 1.15 = 3.05 ✓)
- Google status: "neutral" (2.2 is between 2.25 and 3.05)
- TikTok status: "loser" (1.9 < 2.65 * 0.85 = 2.25 ✓)

**STEP 3 - ORACLE Processing**:
- Creative C12: CVR dropped 37% → HIGH fatigue risk, probability_7d = 0.82
- TikTok channel: ROAS dropped from 2.8 to 1.9 (32% drop) → HIGH decay risk
- Cohorts: Recent 90-day LTV = 112, Historical avg = 128 → 12.5% drift → MEDIUM risk
- Global risk_level = "YELLOW" (2 high risks detected)

**STEP 4 - CURIOSITY Processing**:
- Action 1: "Shift 10% ($800/day) from TikTok → Meta" 
  * Impact = $800 * (3.5 - 1.9) = $1,280/day additional revenue
  * Urgency: HIGH, Confidence: HIGH, Score: 9.2
- Action 2: "Pause Creative C12"
  * Impact = prevent $2,400 waste over 7 days
  * Urgency: HIGH, Confidence: HIGH, Score: 8.8
- Action 3: "Increase Google Brand +6% ($300/day)"
  * Impact = $300 * (2.2 - 2.65) = -$135... wait, this is negative
  * SKIP this action, replace with retention action
- Action 3 (revised): "Focus on retention - LTV drifting 12.5%"
  * Impact = Qualitative (prevent churn acceleration)
  * Urgency: MEDIUM, Confidence: MEDIUM, Score: 6.5

**STEP 5 - FACE Display**:
- Sarah (CMO) sees: "Meta is your hero. TikTok is bleeding. Creative C12 needs to go. Expected impact: +$1,280/day if you shift budget today."
- Jason (VP Growth) sees: "TikTok ROAS decayed 32% in 14 days (confidence: 92%). Creative C12 fatigue probability: 82% within 7 days. Recommended: Shift $800/day to Meta (ROAS 3.5)."
- Emily (Director) sees: "🔴 PAUSE C12 NOW. 🔴 Move 10% TikTok→Meta. 🟡 Watch LTV drift."

> Source: 44.DataSeeds; 43.Demo Package - Demo Flow; 41. MVP Architecture

---

## 3. The Three Brain Modules - Detailed Architecture

### 3.1 MEMORY - Attribution & ROI Truth Layer

**Purpose**: Unified ROI, CLV, and attribution across all channels, solving the "110% attribution problem" where platforms report conflicting metrics.

**Core Question Answered**: "What actually happened?" (not what Meta thinks, not what Google thinks - the truth)

```
┌─────────────────────────────────────────────────────────────────────┐
│                           MEMORY MODULE                             │
├─────────────────────────────────────────────────────────────────────┤
│ INPUTS                                                              │
│ ├── daily_metrics (from Supabase)                                   │
│ │   └── date, channel_id, campaign_id, creative_id,                │
│ │       impressions, clicks, spend, conversions, revenue            │
│ ├── cohorts (from Supabase)                                         │
│ │   └── cohort_month, customer_count, ltv_30d, ltv_60d, ltv_90d    │
│ └── channels (from Supabase)                                        │
│     └── channel_id, channel_name, platform                          │
├─────────────────────────────────────────────────────────────────────┤
│ PROCESSING LOGIC                                                    │
│                                                                     │
│ 1. Aggregate by Channel:                                            │
│    FOR each channel:                                                │
│      total_spend = SUM(daily_metrics.spend)                         │
│      total_revenue = SUM(daily_metrics.revenue)                     │
│                                                                     │
│ 2. Compute Core Metrics:                                            │
│    ROAS = total_revenue / total_spend                               │
│    LTV_factor = cohorts.ltv_90d / cohorts.ltv_30d                   │
│    LTV_ROAS = (total_revenue * LTV_factor) / total_spend            │
│                                                                     │
│ 3. Compute Blended Metrics:                                         │
│    blended_ROAS = SUM(all_revenue) / SUM(all_spend)                │
│    MER = total_revenue / total_marketing_spend                      │
│                                                                     │
│ 4. Mark Winners/Losers:                                             │
│    IF ROAS > blended_ROAS * 1.15 THEN status = "winner"            │
│    ELSE IF ROAS < blended_ROAS * 0.85 THEN status = "loser"        │
│    ELSE status = "neutral"                                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ OUTPUT SCHEMA (MEMORY_OUTPUT)                                       │
│                                                                     │
│ {                                                                   │
│   "totals": {                                                       │
│     "spend": 500000,                                                │
│     "revenue": 1325000,                                             │
│     "roas": 2.65,                                                   │
│     "ltv_adjusted_revenue": 1593000,                                │
│     "ltv_roas": 3.19                                                │
│   },                                                                │
│   "channels": [                                                     │
│     {                                                               │
│       "channel_id": "META_001",                                     │
│       "channel_name": "Meta",                                       │
│       "spend": 300000,                                              │
│       "revenue": 1050000,                                           │
│       "roas": 3.5,                                                  │
│       "ltv_roas": 4.2,                                              │
│       "status": "winner"                                            │
│     },                                                              │
│     {                                                               │
│       "channel_id": "TIKTOK_001",                                   │
│       "channel_name": "TikTok",                                     │
│       "spend": 120000,                                              │
│       "revenue": 228000,                                            │
│       "roas": 1.9,                                                  │
│       "ltv_roas": 2.28,                                             │
│       "status": "loser"                                             │
│     }                                                               │
│   ],                                                                │
│   "timestamp": "2025-11-23T10:00:00Z"                               │
│ }                                                                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ ACCEPTANCE CRITERIA                                                 │
│ ├── ROI MAPE (Mean Absolute Percentage Error) ≤20%                  │
│ ├── CLV RMSE ≤25%                                                   │
│ ├── Process 100K records in ≤2 minutes                              │
│ ├── RAM ≤1GB                                                        │
│ └── Unified customer journey data across all platforms              │
├─────────────────────────────────────────────────────────────────────┤
│ TECHNOLOGY STACK                                                    │
│ • Python / Node.js                                                  │
│ • Supabase SDK for database reads                                  │
│ • Time-decay attribution model (custom implementation)              │
└─────────────────────────────────────────────────────────────────────┘
```

> Source: 41. MVP Architecture - MEMORY section; PainPoint_and_requirements.pdf - V.1.5

### 3.2 ORACLE - Prediction & Risk Engine (CORE DIFFERENTIATOR)

**Purpose**: Predict creative fatigue, LTV drift, churn risk, and ROI decay 7-14 days in advance to enable proactive optimization.

**Strategic Importance**: This is the core differentiator that transforms reactive marketing into predictive optimization - the foundation of Omnify's competitive moat.

**Core Question Answered**: "What will break next?" (7-14 day advance warning)

```
┌─────────────────────────────────────────────────────────────────────┐
│                           ORACLE MODULE                             │
├─────────────────────────────────────────────────────────────────────┤
│ INPUTS                                                              │
│ ├── daily_metrics (time series from Supabase)                       │
│ ├── cohorts (LTV trend data from Supabase)                          │
│ └── MEMORY_OUTPUT (truth baseline)                                  │
├─────────────────────────────────────────────────────────────────────┤
│ PROCESSING - THREE DETECTION ENGINES                                │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ENGINE 1: CREATIVE FATIGUE DETECTION                            │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ FOR each creative:                                              │ │
│ │                                                                 │ │
│ │   1. Define Time Windows:                                       │ │
│ │      recent = last 7 days                                       │ │
│ │      baseline = prior 14-21 days                                │ │
│ │                                                                 │ │
│ │   2. Compute Metrics:                                           │ │
│ │      recent_CVR = recent_conversions / recent_clicks            │ │
│ │      baseline_CVR = baseline_conversions / baseline_clicks      │ │
│ │      recent_CPA = recent_spend / recent_conversions             │ │
│ │      baseline_CPA = baseline_spend / baseline_conversions       │ │
│ │      recent_frequency = recent_impressions / audience_size      │ │
│ │                                                                 │ │
│ │   3. Detect Deterioration:                                      │ │
│ │      cvr_drop = (baseline_CVR - recent_CVR) / baseline_CVR      │ │
│ │      cpa_increase = (recent_CPA - baseline_CPA) / baseline_CPA  │ │
│ │                                                                 │ │
│ │   4. Flag Fatigue If:                                           │ │
│ │      • cvr_drop > 0.20 (CVR dropped > 20%), OR                 │ │
│ │      • cpa_increase > 0.25 (CPA increased > 25%), OR           │ │
│ │      • recent_frequency > 3.5 (audience saturation)            │ │
│ │                                                                 │ │
│ │   5. Calculate Probabilities:                                   │ │
│ │      fatigue_probability_7d = weighted_score(cvr_drop,          │ │
│ │                                              cpa_increase,       │ │
│ │                                              frequency)          │ │
│ │      fatigue_probability_14d = fatigue_probability_7d * 0.7     │ │
│ │                                                                 │ │
│ │   6. Estimate Impact:                                           │ │
│ │      predicted_performance_drop = cvr_drop * 100 (as %)         │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ENGINE 2: ROI DECAY DETECTION                                   │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ FOR each channel:                                               │ │
│ │                                                                 │ │
│ │   1. Define Time Windows:                                       │ │
│ │      recent = last 7 days                                       │ │
│ │      baseline = prior 14-21 days                                │ │
│ │                                                                 │ │
│ │   2. Compute ROAS:                                              │ │
│ │      recent_ROAS = recent_revenue / recent_spend                │ │
│ │      baseline_ROAS = baseline_revenue / baseline_spend          │ │
│ │                                                                 │ │
│ │   3. Detect Decay:                                              │ │
│ │      roas_drop = (baseline_ROAS - recent_ROAS) / baseline_ROAS │ │
│ │                                                                 │ │
│ │   4. Flag Decay If:                                             │ │
│ │      • roas_drop > 0.15 (ROAS dropped > 15%), OR               │ │
│ │      • (recent_spend > baseline_spend AND                      │ │
│ │         recent_ROAS <= baseline_ROAS) (spending more, getting  │ │
│ │         same/worse ROAS)                                        │ │
│ │                                                                 │ │
│ │   5. Calculate Severity:                                        │ │
│ │      IF roas_drop > 0.25 THEN severity = "high"                │ │
│ │      ELSE IF roas_drop > 0.15 THEN severity = "medium"         │ │
│ │      ELSE severity = "low"                                      │ │
│ │                                                                 │ │
│ │   6. Determine Trend:                                           │ │
│ │      roas_trend = "declining" | "stable" | "improving"          │ │
│ │      (based on 3-week moving average slope)                     │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ENGINE 3: LTV DRIFT DETECTION                                   │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ 1. Define Cohort Windows:                                       │ │
│ │    recent_cohorts = last 2-3 months                             │ │
│ │    historical_baseline = prior 6-12 months average              │ │
│ │                                                                 │ │
│ │ 2. Compute LTV Metrics:                                         │ │
│ │    recent_avg_ltv = AVG(recent_cohorts.ltv_90d)                │ │
│ │    baseline_avg_ltv = AVG(historical_cohorts.ltv_90d)          │ │
│ │                                                                 │ │
│ │ 3. Detect Drift:                                                │ │
│ │    drift_percentage = (baseline_ltv - recent_ltv) / baseline_ltv│ │
│ │                                                                 │ │
│ │ 4. Flag Drift If:                                               │ │
│ │    • drift_percentage > 0.10 (LTV dropped > 10%)               │ │
│ │                                                                 │ │
│ │ 5. Calculate Severity:                                          │ │
│ │    IF drift_percentage > 0.15 THEN severity = "high"           │ │
│ │    ELSE IF drift_percentage > 0.10 THEN severity = "medium"    │ │
│ │    ELSE severity = "low"                                        │ │
│ │                                                                 │ │
│ │ 6. Determine Status:                                            │ │
│ │    IF drift detected AND accelerating THEN "drifting"          │ │
│ │    ELSE IF drift detected but stabilizing THEN "stable"        │ │
│ │    ELSE "improving"                                             │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ RISK AGGREGATION                                                │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ 1. Count Risks:                                                 │ │
│ │    high_severity_count = COUNT(fatigue: high, decay: high,     │ │
│ │                                ltv_drift: high)                 │ │
│ │    moderate_count = COUNT(fatigue: medium, decay: medium,      │ │
│ │                           ltv_drift: medium)                    │ │
│ │                                                                 │ │
│ │ 2. Compute Global Risk Level:                                   │ │
│ │    IF high_severity_count >= 3 THEN risk_level = "red"         │ │
│ │    ELSE IF high_severity_count >= 1 OR                         │ │
│ │            moderate_count >= 2 THEN risk_level = "yellow"      │ │
│ │    ELSE risk_level = "green"                                    │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ OUTPUT SCHEMA (ORACLE_OUTPUT)                                       │
│                                                                     │
│ {                                                                   │
│   "creative_fatigue": [                                             │
│     {                                                               │
│       "creative_id": "C12",                                         │
│       "platform": "TikTok",                                         │
│       "fatigue_probability_7d": 0.82,                               │
│       "fatigue_probability_14d": 0.93,                              │
│       "predicted_performance_drop": 37,                             │
│       "recommended_action": "Pause creative immediately",           │
│       "confidence": "high",                                         │
│       "urgency": "high",                                            │
│       "time_horizon": "72h"                                         │
│     }                                                               │
│   ],                                                                │
│   "roi_decay_channels": [                                           │
│     {                                                               │
│       "channel_id": "TIKTOK_001",                                   │
│       "channel_name": "TikTok",                                     │
│       "decay_severity": "high",                                     │
│       "roas_trend": "declining",                                    │
│       "baseline_roas": 2.8,                                         │
│       "recent_roas": 1.9,                                           │
│       "recommended_action": "Reduce spend or investigate",          │
│       "confidence": "high"                                          │
│     }                                                               │
│   ],                                                                │
│   "ltv_drift": {                                                    │
│     "status": "drifting",                                           │
│     "recent_cohort_ltv": 112,                                       │
│     "baseline_cohort_ltv": 128,                                     │
│     "drift_percentage": 12.5,                                       │
│     "severity": "medium"                                            │
│   },                                                                │
│   "risk_level": "yellow",                                           │
│   "timestamp": "2025-11-23T10:05:00Z"                               │
│ }                                                                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ ACCEPTANCE CRITERIA                                                 │
│ ├── Fatigue prediction AUC ≥0.75 (7-day forecast)                   │
│ ├── LTV prediction RMSE ≤25%                                        │
│ ├── Demonstrate measurable improvement over time (compound learning)│
│ ├── Train: ≤10 minutes on 500K records                              │
│ ├── RAM: ≤4 GB                                                      │
│ └── Real-time scoring: ≤500ms                                       │
├─────────────────────────────────────────────────────────────────────┤
│ TECHNOLOGY STACK                                                    │
│ • Python (primary)                                                  │
│ • scikit-learn, XGBoost, LightGBM (ML models)                       │
│ • Prophet (time-series forecasting)                                 │
│ • statsmodels (statistical analysis)                                │
│ • Supabase SDK for data reads                                      │
└─────────────────────────────────────────────────────────────────────┘
```

> Source: 39. ORACLE Pseudocode; RK_20251013_OmniFy_Hackathon - ORACLE section; 41. MVP Architecture

### 3.3 CURIOSITY - Decision & Recommendation Engine

**Purpose**: Convert MEMORY truth + ORACLE predictions into concrete, high-impact actions with estimated impact and urgency scoring.

**Solves Pain Point #5**: "No Prescriptive 'What to Do Next' AI" - provides specific budget moves with rationale instead of just dashboards.

**Core Question Answered**: "What should we do tomorrow?" (Top 3 specific, executable actions)

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CURIOSITY MODULE                            │
├─────────────────────────────────────────────────────────────────────┤
│ INPUTS                                                              │
│ ├── MEMORY_OUTPUT (winners/losers/truth)                            │
│ └── ORACLE_OUTPUT (risks/predictions)                               │
├─────────────────────────────────────────────────────────────────────┤
│ PROCESSING - FOUR ACTION GENERATORS                                 │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ GENERATOR 1: SHIFT BUDGET ACTIONS                               │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ Purpose: Move budget from underperformers to winners            │ │
│ │                                                                 │ │
│ │ 1. Identify Source Channels (to reduce):                        │ │
│ │    sources = channels WHERE:                                    │ │
│ │      (MEMORY.status = "loser") OR                              │ │
│ │      (ORACLE.roi_decay includes channel)                        │ │
│ │                                                                 │ │
│ │ 2. Identify Target Channels (to increase):                      │ │
│ │    targets = channels WHERE:                                    │ │
│ │      (MEMORY.status = "winner") AND                            │ │
│ │      (channel NOT IN ORACLE.roi_decay) AND                     │ │
│ │      (channel.spend < capacity_threshold)                       │ │
│ │                                                                 │ │
│ │ 3. For Each Source Channel:                                     │ │
│ │    shift_amount = source.spend * DEFAULT_SHIFT_PERCENT (10%)   │ │
│ │    target = highest_ROAS channel from targets list              │ │
│ │                                                                 │ │
│ │    estimated_impact = shift_amount *                            │ │
│ │                      (target.ROAS - source.ROAS)                │ │
│ │                                                                 │ │
│ │    IF estimated_impact > MIN_IMPACT_THRESHOLD:                  │ │
│ │      CREATE ACTION:                                             │ │
│ │        action_type = "shift_budget"                             │ │
│ │        from = source.channel_id                                 │ │
│ │        to = target.channel_id                                   │
│ │        amount = shift_amount                                    │
│ │        estimated_impact_usd = estimated_impact                  │ │
│ │        urgency = ORACLE.decay_severity (if applicable)          │ │
│ │        confidence = "high" (based on MEMORY truth)              │ │
│ │        rationale = "TikTok ROAS declining, Meta consistently    │ │
│ │                     strong"                                     │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ GENERATOR 2: PAUSE CREATIVE ACTIONS                             │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ Purpose: Stop fatigued creatives before waste accelerates       │ │
│ │                                                                 │ │
│ │ 1. Identify Fatigued Creatives:                                 │ │
│ │    fatigued = ORACLE.creative_fatigue WHERE:                    │ │
│ │      fatigue_probability_7d > HIGH_THRESHOLD (0.6)              │ │
│ │                                                                 │ │
│ │ 2. For Each Fatigued Creative:                                  │ │
│ │    daily_spend = creative.average_daily_spend                   │ │
│ │    predicted_drop = ORACLE.predicted_performance_drop           │ │
│ │                                                                 │ │
│ │    estimated_impact = daily_spend * (predicted_drop / 100) * 7  │ │
│ │                      (waste prevented over 7 days)              │ │
│ │                                                                 │ │
│ │    IF estimated_impact > MIN_IMPACT_THRESHOLD:                  │ │
│ │      CREATE ACTION:                                             │ │
│ │        action_type = "pause_creative"                           │ │
│ │        target = creative.creative_id                            │ │
│ │        estimated_impact_usd = estimated_impact                  │ │
│ │        urgency = IF probability > 0.8 THEN "high" ELSE "medium"│ │
│ │        confidence = ORACLE.confidence                           │ │
│ │        rationale = "CVR dropped 37% in 14 days, fatigue risk    │ │
│ │                     82%"                                        │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ GENERATOR 3: INCREASE BUDGET ACTIONS                            │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ Purpose: Scale up clear winners (opportunity, not emergency)    │ │
│ │                                                                 │ │
│ │ 1. Identify Strong Winners:                                     │ │
│ │    winners = channels WHERE:                                    │ │
│ │      (MEMORY.ROAS > MEMORY.blended_ROAS * GOOD_MULTIPLIER)      │ │
│ │       (e.g., 1.2) AND                                           │ │
│ │      (channel NOT IN ORACLE.roi_decay) AND                     │ │
│ │      (channel.spend > MIN_SPEND_FOR_ACTION)                     │ │
│ │                                                                 │ │
│ │ 2. For Each Strong Winner:                                      │ │
│ │    increase_amount = channel.spend *                            │ │
│ │                      DEFAULT_INCREASE_PERCENT (5-10%)           │ │
│ │                                                                 │ │
│ │    estimated_impact = increase_amount *                         │ │
│ │                      MAX(channel.ROAS - blended_ROAS, 0)        │ │
│ │                                                                 │ │
│ │    IF estimated_impact > MIN_IMPACT_THRESHOLD:                  │ │
│ │      CREATE ACTION:                                             │ │
│ │        action_type = "increase_budget"                          │ │
│ │        target = channel.channel_id                              │ │
│ │        increase_percent = DEFAULT_INCREASE_PERCENT              │ │
│ │        estimated_impact_usd = estimated_impact                  │ │
│ │        urgency = "medium" (opportunity, not emergency)          │ │
│ │        confidence = "high"                                      │ │
│ │        rationale = "Consistently outperforming blended ROAS by  │ │
│ │                     30%"                                        │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ GENERATOR 4: RETENTION/LTV ACTIONS (Optional)                   │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ Purpose: Flag when LTV drift requires strategic attention       │ │
│ │                                                                 │ │
│ │ IF ORACLE.ltv_drift.severity = "high":                          │ │
│ │   CREATE ACTION:                                                │ │
│ │     action_type = "focus_retention"                             │ │
│ │     estimated_impact_usd = QUALITATIVE                          │ │
│ │     urgency = "high"                                            │ │
│ │     confidence = "medium"                                       │ │
│ │     rationale = "New cohort LTV down 12.5% vs historical avg.   │ │
│ │                  Review onboarding, increase retention          │ │
│ │                  campaigns"                                     │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ACTION RANKING & SELECTION                                      │ │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ │                                                                 │ │
│ │ 1. Score Each Action:                                           │ │
│ │    score = (estimated_impact_usd * 0.4) +                       │ │
│ │            (severity_weight * 0.3) +                            │ │
│ │            (confidence_weight * 0.2) +                          │ │
│ │            (urgency_weight * 0.1)                               │ │
│ │                                                                 │ │
│ │    WHERE:                                                       │ │
│ │      severity_weight: high=3, medium=2, low=1                   │ │
│ │      confidence_weight: high=3, medium=2, low=1                 │ │
│ │      urgency_weight: high=3, medium=2, low=1                    │ │
│ │                                                                 │ │
│ │ 2. Sort Actions by Score (descending)                           │ │
│ │                                                                 │ │
│ │ 3. Select Top 3 with Diversity Constraints:                     │ │
│ │    • Maximum 1 "increase_budget" action                         │ │
│ │    • Prefer "shift_budget" and "pause_creative" (higher urgency)│ │
│ │    • If <3 actions meet threshold, return what exists           │ │
│ │                                                                 │ │
│ │ 4. Calculate Total Potential Uplift:                            │ │
│ │    total_uplift = SUM(top3_actions.estimated_impact_usd)        │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ OUTPUT SCHEMA (CURIOSITY_OUTPUT)                                    │
│                                                                     │
│ {                                                                   │
│   "actions": [                                                      │
│     {                                                               │
│       "action_type": "shift_budget",                                │
│       "priority": 1,                                                │
│       "target": {                                                   │
│         "from": "TIKTOK_001",                                       │
│         "to": "META_001"                                            │
│       },                                                            │
│       "amount": {                                                   │
│         "current": 8000,                                            │
│         "recommended": 7200,                                        │
│         "change_percent": -10                                       │
│       },                                                            │
│       "estimated_impact_usd": 1280,                                 │
│       "rationale": "TikTok ROAS declined 32% in 14 days while Meta  │
│                     maintains 3.5 ROAS. Shifting 10% reduces waste  │
│                     and capitalizes on strong performer.",          │
│       "urgency": "high",                                            │
│       "severity": "high",                                           │
│       "confidence": "high",                                         │
│       "score": 9.2                                                  │
│     },                                                              │
│     {                                                               │
│       "action_type": "pause_creative",                              │
│       "priority": 2,                                                │
│       "target": {                                                   │
│         "creative_id": "C12",                                       │
│         "platform": "TikTok"                                        │
│       },                                                            │
│       "estimated_impact_usd": 2400,                                 │
│       "rationale": "Creative C12 CVR dropped 37% over 14 days.      │
│                     Fatigue probability 82% within 7 days. Pausing  │
│                     prevents $2.4K waste over next week.",          │
│       "urgency": "high",                                            │
│       "severity": "high",                                           │
│       "confidence": "high",                                         │
│       "score": 8.8                                                  │
│     },                                                              │
│     {                                                               │
│       "action_type": "focus_retention",                             │
│       "priority": 3,                                                │
│       "target": {                                                   │
│         "area": "Customer Onboarding & Retention"                   │
│       },                                                            │
│       "estimated_impact_usd": null,                                 │
│       "rationale": "New cohort 90-day LTV declined 12.5% vs         │
│                     historical average. Review onboarding flow,     │
│                     increase retention campaign spend.",            │
│       "urgency": "medium",                                          │
│       "severity": "medium",                                         │
│       "confidence": "medium",                                       │
│       "score": 6.5                                                  │
│     }                                                               │
│   ],                                                                │
│   "total_potential_uplift_usd": 3680,                               │
│   "timestamp": "2025-11-23T10:10:00Z"                               │
│ }                                                                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ ACCEPTANCE CRITERIA                                                 │
│ ├── Allocation regret ≤15% vs oracle (optimal hindsight)            │
│ ├── Generate 2-3 specific budget moves with clear rationale         │
│ ├── Each recommendation includes "what, why, expected impact"       │
│ ├── Decision latency ≤300ms                                         │
│ ├── RAM ≤512MB                                                      │
│ └── Output always includes confidence scores                        │
├─────────────────────────────────────────────────────────────────────┤
│ TECHNOLOGY STACK                                                    │
│ • Python (primary)                                                  │
│ • Thompson Sampling (Multi-Armed Bandit) - custom implementation    │
│ • Supabase SDK for data reads                                      │
│ • JSON output for FACE consumption                                  │
└─────────────────────────────────────────────────────────────────────┘
```

> Source: 40. CURIOSITY Pseudocode; PainPoint_and_requirements.pdf - V.2; 41. MVP Architecture

---

## 4. FACE - Single Intelligence Surface (Display Layer)

**Purpose**: Single-page executive dashboard that displays all brain module outputs in CEO-ready format, solving the "6 conflicting dashboards" problem.

**Core Value**: One screen answers three questions in persona-specific language.

```
┌─────────────────────────────────────────────────────────────────────┐
│                          FACE MODULE (UI/UX)                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ TOP BAR - Executive Summary (Always Visible)                 │  │
│  ├───────────────────────────────────────────────────────────────┤  │
│  │                                                               │  │
│  │  MER: 2.4 | ROAS: 2.65 | LTV-ROAS: 3.19 | Risk: 🟡 YELLOW    │  │
│  │                                                               │  │
│  │  "Here's what changed this week: TikTok ROAS declined 32%,   │  │
│  │   Creative C12 fatiguing, Meta holding strong at 3.5"        │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌────────────────────┬────────────────────┬─────────────────────┐  │
│  │  MEMORY CARD       │   ORACLE CARD      │   CURIOSITY CARD    │  │
│  │  (What happened?)  │   (What's coming?) │   (What to do?)     │  │
│  ├────────────────────┼────────────────────┼─────────────────────┤  │
│  │                    │                    │                     │  │
│  │ Channel Breakdown: │ 🔴 HIGH RISKS:     │ TOP 3 ACTIONS:      │  │
│  │                    │                    │                     │  │
│  │ 🟢 Meta            │ • Creative C12     │ 1. 🔴 Shift 10%     │  │
│  │   $300K → $1.05M   │   Fatigue: 82%     │    TikTok → Meta    │  │
│  │   ROAS: 3.5 ✓      │   (7-day)          │    Impact: +$1.28K/d│  │
│  │                    │                    │    Urgency: HIGH    │  │
│  │ 🟡 Google          │ • TikTok ROI Decay │                     │  │
│  │   $80K → $176K     │   From 2.8 → 1.9   │ 2. 🔴 Pause C12     │  │
│  │   ROAS: 2.2        │   (14 days)        │    Prevent: $2.4K   │  │
│  │                    │                    │    Urgency: HIGH    │  │
│  │ 🔴 TikTok          │ 🟡 MEDIUM RISKS:   │                     │  │
│  │   $120K → $228K    │                    │ 3. 🟡 Focus on      │  │
│  │   ROAS: 1.9 ✗      │ • LTV Drift 12.5%  │    Retention        │  │
│  │                    │   (Recent cohorts) │    LTV declining    │  │
│  │                    │                    │    Urgency: MEDIUM  │  │
│  │ [Sort by ROAS ↓]   │ [View Details →]   │                     │  │
│  │                    │                    │ Total Uplift: $3.7K │  │
│  │                    │                    │                     │  │
│  └────────────────────┴────────────────────┴─────────────────────┘  │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ CREATIVE SNAPSHOT (Optional - from ORACLE fatigue list)      │  │
│  ├───────────────────────────────────────────────────────────────┤  │
│  │                                                               │  │
│  │  [C12 Thumbnail] 🔴 82% fatigue risk | CVR: 0.05 (was 0.08)  │  │
│  │  [C08 Thumbnail] 🟢 Healthy | CVR: 0.11 (stable)             │  │
│  │  [C15 Thumbnail] 🟡 43% fatigue risk | CVR: 0.07 (was 0.09)  │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ PERSONA TOGGLE                                                │  │
│  ├───────────────────────────────────────────────────────────────┤  │
│  │                                                               │  │
│  │  [●  CMO  ] [  VP Growth  ] [  Director Perf  ]              │  │
│  │                                                               │  │
│  │  (Clicking changes microcopy, not data)                      │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ PERSONA-SPECIFIC MICROCOPY EXAMPLES                                 │
│                                                                     │
│ SARAH (CMO) sees:                                                   │
│ • "Here's the truth - not what Meta thinks. TikTok is bleeding."   │
│ • "What will break if you don't act: C12 will cost $2.4K in waste."│
│ • "Move $800/day from TikTok to Meta. Expected impact: +$1.28K/day"│
│                                                                     │
│ JASON (VP GROWTH) sees:                                             │
│ • "TikTok ROAS decayed 32% in 14 days (confidence: 92%)."          │
│ • "Creative C12 fatigue probability: 82% within 7 days (CVR -37%)" │
│ • "Recommended: Shift $800/day to Meta (ROAS 3.5, stable 14d)."    │
│                                                                     │
│ EMILY (DIRECTOR PERF) sees:                                         │
│ • "🔴 PAUSE C12 NOW"                                                │
│ • "🔴 Move 10% TikTok→Meta TODAY"                                  │
│ • "🟡 Watch LTV drift - may need retention campaign"               │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ TECHNICAL REQUIREMENTS                                              │
│                                                                     │
│ Platform: Desktop/laptop-first SPA (≥1280px width)                  │
│ Framework: React/Next.js with static JSON loading (MVP)             │
│ No backend: All data loaded from MEMORY/ORACLE/CURIOSITY JSON files │
│                                                                     │
│ Performance:                                                        │
│ • Lighthouse Performance Score ≥90                                  │
│ • Accessibility (a11y) Score ≥95                                    │
│ • First Contentful Paint ≤1.5s                                      │
│                                                                     │
│ UI Components:                                                      │
│ • Charts (line charts for trends)                                   │
│ • Filters (date range, channel selection)                           │
│ • Narrative text (persona-specific explanations)                    │
│ • Badges (risk level, winner/loser status)                          │
│ • Accept/Reject buttons (for future user feedback loop)             │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ DATA FLOW (Display Only - No Intelligence)                          │
│                                                                     │
│ 1. Load JSON files:                                                 │
│    • memory_output.json                                             │
│    • oracle_output.json                                             │
│    • curiosity_output.json                                          │
│                                                                     │
│ 2. Render components:                                               │
│    • TOP BAR: Extract totals + risk_level                           │
│    • MEMORY CARD: Map channels array to table rows                  │
│    • ORACLE CARD: Map creative_fatigue + roi_decay to alert cards   │
│    • CURIOSITY CARD: Map top 3 actions to action cards              │
│                                                                     │
│ 3. Apply persona microcopy:                                         │
│    • Read persona_toggle state (CMO/VP/Director)                    │
│    • Replace card titles, button text, explanations                 │
│    • Data remains identical                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

> Source: 37. FACE UI Wireframe; 36.Enhanced Customer Personas; 35.Blueprint B - Section 6

---

## 5. Database Schema (Supabase PostgreSQL)

### 5.1 Core MVP Tables

```sql
-- =============================================================================
-- CORE TABLES (MVP)
-- =============================================================================

-- Profiles (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  company_name TEXT,
  company_revenue_range TEXT CHECK (company_revenue_range IN 
    ('50M-75M', '75M-100M', '100M-150M', '150M-200M', '200M-350M')),
  monthly_ad_spend_range TEXT CHECK (monthly_ad_spend_range IN 
    ('20K-50K', '50K-100K', '100K-200K', '200K+')),
  role TEXT CHECK (role IN ('cmo', 'vp_growth', 'director_perf', 'marketing_manager')),
  tier TEXT CHECK (tier IN ('starter', 'growth', 'scale')) DEFAULT 'starter',
  industry_subsector TEXT CHECK (industry_subsector IN 
    ('beauty_skincare', 'supplements_nutra', 'health_wellness', 'pet_care', 'apparel_lifestyle')),
  onboarding_completed BOOLEAN DEFAULT FALSE,
  connected_platforms JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Organizations (multi-tenant support)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  revenue_band TEXT,
  primary_subsector TEXT,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- PLATFORM INTEGRATIONS
-- =============================================================================

-- Channels (normalized)
CREATE TABLE channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  channel_id VARCHAR(50) UNIQUE NOT NULL,
  channel_name VARCHAR(100) NOT NULL,
  platform VARCHAR(50) NOT NULL CHECK (platform IN 
    ('meta', 'google', 'tiktok', 'youtube', 'linkedin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Campaigns
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  campaign_id VARCHAR(50) UNIQUE NOT NULL,
  campaign_name VARCHAR(200) NOT NULL,
  channel_id VARCHAR(50) REFERENCES channels(channel_id),
  campaign_type VARCHAR(50),
  status TEXT CHECK (status IN ('active', 'paused', 'completed', 'draft')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Creatives
CREATE TABLE creatives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  creative_id VARCHAR(50) UNIQUE NOT NULL,
  campaign_id VARCHAR(50) REFERENCES campaigns(campaign_id),
  creative_name VARCHAR(200),
  format VARCHAR(50) CHECK (format IN ('image', 'video', 'carousel', 'text')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- METRICS (MEMORY Module)
-- =============================================================================

-- Daily Metrics (core data for MEMORY + ORACLE)
CREATE TABLE daily_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  channel_id VARCHAR(50) REFERENCES channels(channel_id),
  campaign_id VARCHAR(50) REFERENCES campaigns(campaign_id),
  creative_id VARCHAR(50) REFERENCES creatives(creative_id),
  
  -- Performance metrics
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  spend DECIMAL(10,2) DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  revenue DECIMAL(10,2) DEFAULT 0,
  
  -- Calculated metrics
  frequency DECIMAL(4,2),
  ctr DECIMAL(5,4),
  cpc DECIMAL(5,2),
  cvr DECIMAL(5,4),
  cpa DECIMAL(7,2),
  roas DECIMAL(5,2),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(date, organization_id, channel_id, campaign_id, creative_id)
);

-- Create index for performance
CREATE INDEX idx_daily_metrics_date ON daily_metrics(date DESC);
CREATE INDEX idx_daily_metrics_channel ON daily_metrics(channel_id);
CREATE INDEX idx_daily_metrics_org ON daily_metrics(organization_id);

-- Cohorts (for LTV tracking)
CREATE TABLE cohorts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  cohort_month VARCHAR(7) NOT NULL, -- Format: YYYY-MM
  customer_count INTEGER NOT NULL,
  ltv_30d DECIMAL(10,2),
  ltv_60d DECIMAL(10,2),
  ltv_90d DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, cohort_month)
);

-- =============================================================================
-- BRAIN MODULE OUTPUTS (Cached)
-- =============================================================================

-- MEMORY Outputs (cached for quick FACE loading)
CREATE TABLE memory_outputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  computed_at TIMESTAMPTZ NOT NULL,
  output_data JSONB NOT NULL, -- Full MEMORY_OUTPUT JSON
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ORACLE Outputs (cached predictions)
CREATE TABLE oracle_outputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  computed_at TIMESTAMPTZ NOT NULL,
  output_data JSONB NOT NULL, -- Full ORACLE_OUTPUT JSON
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CURIOSITY Outputs (cached recommendations)
CREATE TABLE curiosity_outputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  computed_at TIMESTAMPTZ NOT NULL,
  output_data JSONB NOT NULL, -- Full CURIOSITY_OUTPUT JSON
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Feedback on Actions (for future learning loop)
CREATE TABLE action_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  curiosity_output_id UUID REFERENCES curiosity_outputs(id),
  action_priority INTEGER, -- 1, 2, or 3
  user_decision TEXT CHECK (user_decision IN ('accepted', 'rejected', 'ignored')),
  user_id UUID REFERENCES profiles(id),
  decided_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- INDEXES & PERFORMANCE OPTIMIZATION
-- =============================================================================

CREATE INDEX idx_memory_outputs_org_time ON memory_outputs(organization_id, computed_at DESC);
CREATE INDEX idx_oracle_outputs_org_time ON oracle_outputs(organization_id, computed_at DESC);
CREATE INDEX idx_curiosity_outputs_org_time ON curiosity_outputs(organization_id, computed_at DESC);
```

> Source: 44.DataSeeds - Schema section; 01_SYSTEM_ARCHITECTURE.md - Database section

---

## 6. Integration Architecture (n8n Workflow Engine)

### 6.1 Integration Layer Design

**Purpose**: n8n serves as the central integration hub that pulls data from external platforms (Meta, Google, TikTok, Shopify) and saves to Supabase for brain module processing.

**Why n8n**:
- Visual workflow builder (easier maintenance vs custom code)
- 400+ pre-built connectors (Meta Ads, Google Ads, HubSpot, Shopify, etc.)
- Self-hosted option (cost-effective, ~$30-50/month VPS vs $0-200/month SaaS)
- Built-in error handling, retry logic, scheduling
- No-code/low-code for non-technical team members

```
┌─────────────────────────────────────────────────────────────────────┐
│                        n8n WORKFLOW PATTERN                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  WORKFLOW: Daily Metrics Sync                                       │
│                                                                     │
│  [Schedule Trigger: Daily 6am] ────────────┐                        │
│                                            │                        │
│                                            ↓                        │
│                          [Meta Ads API: Get Campaign Performance]   │
│                                            │                        │
│                                            ↓                        │
│                          [Transform: Map to Omnify Schema]          │
│                                            │                        │
│                                            ↓                        │
│                          [Supabase: Insert daily_metrics]           │
│                                            │                        │
│                                            ↓                        │
│                          [If Error: Send Slack Alert]               │
│                                                                     │
│  ──────────────────────────────────────────────────────────────────  │
│                                                                     │
│  WORKFLOW: AI Reasoning (Optional enrichment)                       │
│                                                                     │
│  [New daily_metrics inserted] ─────────────┐                        │
│                                            │                        │
│                                            ↓                        │
│                          [OpenAI/Claude API: Analyze trends]        │
│                                            │                        │
│                                            ↓                        │
│                          [Save insights to notes table]             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

> Source: 01_SYSTEM_ARCHITECTURE.md - Integration section; PainPoint_and_requirements.pdf - V.3

### 6.2 Priority Connectors (MVP)

**Phase 1 - MVP Connectors** (Must have for launch):
1. **Meta Ads**: Campaign performance, creative metrics
2. **Google Ads**: Campaign performance, search terms
3. **TikTok Ads**: Campaign performance, trending creatives
4. **Shopify**: Orders, revenue, product data
5. **HubSpot OR Salesforce**: Contact/deal data (choose based on customer)

**Phase 2 - Expansion Connectors**:
6. Klaviyo (email performance)
7. Stripe (subscription/payment data)
8. YouTube (video ad performance)
9. LinkedIn Ads (B2B if needed)

> Source: 01_SYSTEM_ARCHITECTURE.md; RK_20251013_OmniFy_Hackathon

---

## 7. Technology Stack Summary

### 7.1 Development Stack (Production)

| Layer | Technology | Purpose | Rationale |
|-------|------------|---------|-----------|
| **Frontend** | Next.js 15 (App Router) + TypeScript | React framework with SSR | Server components, great DX, Vercel deployment |
| **UI Library** | shadcn/ui + TailwindCSS | Component library | Customizable, professional look, copy-paste components |
| **Backend** | Next.js API Routes + tRPC | Type-safe APIs | End-to-end type safety with TypeScript |
| **Database** | Supabase (PostgreSQL + pgvector) | Primary data store | Auth, RLS, real-time, embeddings support, generous free tier |
| **Time-Series** | TimescaleDB (optional Phase 2) | Minute-level metrics | Hypertables for performance on time-series data |
| **Integration** | n8n (self-hosted) | Workflow automation | Visual builder, 400+ connectors, cost-effective |
| **AI/ML** | OpenAI GPT-4 + Claude + scikit-learn | LLM reasoning + ML | Best-in-class for reasoning + traditional ML predictions |
| **Model Tracking** | MLflow | ML lifecycle management | Track experiments, models, deployments |
| **Hosting** | Vercel (frontend) + VPS (n8n, jobs) | Deployment | Optimal cost/performance balance |
| **Monitoring** | Sentry + PostHog + Better Stack | Observability | Error tracking, product analytics, logs |

> Source: 01_SYSTEM_ARCHITECTURE.md - Technology Stack; 02_CLAUDE_CODE_INSTRUCTIONS.md

### 7.2 AI/ML Stack (Brain Modules)

| Module | Algorithm/Model | Framework | Purpose |
|--------|----------------|-----------|---------|
| **ORACLE** | XGBoost, LightGBM, Prophet | scikit-learn, statsmodels | Fatigue prediction, LTV forecasting, time-series |
| **EYES** (Phase 2) | K-means, Decision Trees | scikit-learn | Customer segmentation, churn scoring |
| **VOICE** (Phase 2) | GPT-4/Claude + FFmpeg | OpenAI API, Anthropic API | Content repurposing, variant generation |
| **CURIOSITY** | Thompson Sampling (MAB) | Custom Python | Budget allocation optimization |
| **MEMORY** | Time-decay attribution | Custom Python/SQL | Multi-touch attribution calculation |
| **REFLEXES** (Phase 3) | Z-score, IQR, Isolation Forest | scikit-learn | Anomaly detection |

> Source: 01_SYSTEM_ARCHITECTURE.md - AI/ML Stack

---

## 8. Competitive Positioning & Differentiation

### 8.1 Core Competitive Advantages

**1. Compound Learning Moat**  
Every module improves autonomously over time through continuous feedback loops. No other CRM offers modular AI that compounds intelligence across campaigns.

**2. Predictive Optimization (Not Reactive)**  
Predicts creative fatigue, churn, and LTV 7-14 days beforehand. Competes directly against platforms stuck in "rearview reporting."

**3. Autonomous Execution**  
Automated, explainable decisions—budget, content, segmentation—minimize manual ops.

**4. Cross-Module Integration**  
Unified intelligence—creative, ROI, segment, anomaly, and predictive alerts—feeds into one AI-powered cockpit.

**5. Governance & Safety at Core**  
Consent, drift, multilingual ops, FinOps, and compliance baked into each module.

**6. Intelligence Layer (Not Replacement)**  
Sits atop existing tools—no migration required. Integrates with HubSpot, Salesforce, Shopify, etc.

> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 1

### 8.2 Competitive Comparison (0-10 Scale)

| Platform | Score | Strengths | Weaknesses | Source |
|----------|-------|-----------|------------|--------|
| **Salesforce** | 4/10 | Robust CRM, enterprise scale | Lacks predictive optimization, requires Datorama add-on ($50K+), dashboard bloat, reporting complexity (24% complaints), no creative fatigue detection | Omnify_Oracle_Competitive_Advantage.pdf; PainPoint_and_requirements.pdf |
| **HubSpot** | 5/10 | Mid-market focused, good automation | Enterprise features locked behind $5K/month tier, reporting limitations (32% complaints), no attribution/predictive, workflow complexity | Omnify_Oracle_Competitive_Advantage.pdf; PainPoint_and_requirements.pdf |
| **Microsoft Dynamics** | 4/10 | Enterprise integration, MS ecosystem | Complex configuration, limited social integrations, no creative fatigue, reporting gaps, expensive add-ons | Omnify_Oracle_Competitive_Advantage.pdf |
| **Zoho** | 5/10 | Cost-effective, mid-market friendly | Limited AI capabilities, no predictive features, integration challenges, reporting constraints | Omnify_Oracle_Competitive_Advantage.pdf |
| **Omnify** | 9.5/10 (Target) | All six differentiators above, affordable ($499-$1,499 vs $5K+), intelligence layer approach, 48-hour deployment | Brand recognition (new entrant), enterprise case studies (building), integration ecosystem depth (expanding) | Omnify_Oracle_Competitive_Advantage.pdf; 34.Master Blueprint |

> Source: Omnify_Oracle_Competitive_Advantage.pdf - Section 2

### 8.3 Why Omnify Wins (Musk-Style Critique)

Elon Musk would critique competitors for being "incrementally better" while Omnify is "exponentially different" through true predictive AI, not reactive analytics.

**Key Musk Principles Embedded:**
- **First principles thinking**: Focus on core pain (attribution, prediction, prescription) not feature bloat
- **10× better, not 10% better**: Predictive vs reactive is a category leap
- **Vertical integration**: Own the intelligence layer, don't depend on platform APIs for insights
- **Speed**: 48-hour deployment vs 6-month enterprise implementations

> Source: Omnify_Oracle_Competitive_Advantage.pdf - Musk Critique section

---

## 9. Deployment Architecture & Cost Estimation

### 9.1 Production Deployment

```
┌─────────────────────────────────────────────────────────────────────┐
│                      PRODUCTION DEPLOYMENT                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                    VERCEL (Frontend)                       │    │
│  │  • Next.js App Router deployment                           │    │
│  │  • Edge Functions (API Routes)                             │    │
│  │  • Automatic HTTPS, CDN, Zero-config                       │    │
│  │  • Preview deployments for each PR                         │    │
│  └────────────────────────────────────────────────────────────┘    │
│                              │                                     │
│                              ↓                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                 SUPABASE (Database + Auth)                 │    │
│  │  • PostgreSQL + pgvector                                   │    │
│  │  • Row Level Security (RLS)                                │    │
│  │  • Real-time subscriptions                                 │    │
│  │  • Storage for media assets                                │    │
│  └────────────────────────────────────────────────────────────┘    │
│                              │                                     │
│                              ↓                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │              VPS - Hostinger/DigitalOcean                  │    │
│  │  • n8n (self-hosted workflow engine)                       │    │
│  │  • Background cron jobs (MEMORY/ORACLE/CURIOSITY)          │    │
│  │  • Python ML model training scripts                        │    │
│  │  • MLflow tracking server                                  │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

> Source: 01_SYSTEM_ARCHITECTURE.md - Deployment section

### 9.2 Monthly Operating Costs

**Growth Stage (100-500 customers)**:

| Service | Estimated Cost | Notes |
|---------|---------------|-------|
| Vercel Pro | $20/month | Frontend hosting |
| Supabase Pro | $25/month | Database + Auth + Storage |
| VPS (Hostinger/DO) | $30-50/month | n8n + background jobs |
| OpenAI API | $100-300/month | GPT-4 for reasoning ($0.03/1K tokens) |
| Claude API | $50-100/month | Claude for analysis |
| n8n Cloud (optional) | $0 | Self-hosted on VPS |
| Monitoring (Sentry, PostHog) | $0-50/month | Free tiers initially |
| Email (Resend) | $20/month | Transactional emails |
| **Total** | **$245-565/month** | |

**Per-Customer Costs**:
- Average AI API cost: ~$5-15/month per customer
- Target gross margin: 70-80%

**At Scale (1000 customers)**:
- Revenue: $499K-$1,499K/month (depending on tier mix)
- COGS: ~$10K-$20K/month (infrastructure + AI APIs)
- Gross Margin: ~98% (typical SaaS economics)

> Source: 01_SYSTEM_ARCHITECTURE.md - Cost Estimation section

---

## 10. Phased Implementation Roadmap

### Phase 1: MVP (Weeks 1-4) ✅ Focus

**Goal**: Prove the core value proposition with 3+1 modules

- [x] **FACE**: Basic executive dashboard (static SPA for demo)
- [x] **MEMORY**: ROI calculation + channel attribution  
- [x] **ORACLE**: Fatigue prediction engine (rule-based for MVP)
- [x] **CURIOSITY**: Budget recommendations (Top 3 actions)
- [x] **Integration**: CSV data upload (manual for demo)
- [x] **Database**: Supabase schema setup (channels, campaigns, creatives, daily_metrics, cohorts)
- [x] **Demo Package**: 3-minute pitch, slide deck, preset scenario

**Deliverables**:
- Functional demo answering "What happened?", "What's coming?", "What to do?"
- $65M Beauty brand scenario with realistic data seeds
- Persona toggle working (CMO/VP/Director microcopy changes)

> Source: 35.Blueprint B - The 24-Hour Hackathon Execution Blueprint

### Phase 2: Production MVP (Weeks 5-8)

**Goal**: Make it production-ready with real integrations

- [ ] **Integration Layer**: n8n workflows for Meta Ads, Google Ads, Shopify
- [ ] **Authentication**: Supabase Auth with RLS policies
- [ ] **Multi-tenant**: Organizations table + proper data isolation
- [ ] **ORACLE ML**: Replace rules with actual XGBoost/LightGBM models
- [ ] **CURIOSITY MAB**: Implement Thompson Sampling algorithm
- [ ] **MEMORY Enhancement**: Add CLV prediction (90-day forecast)
- [ ] **FACE Enhancement**: Add date range filters, export to PDF

**Target Customers**: 5-10 pilot customers ($50M-$100M Beauty/Supplements brands)

### Phase 3: Advanced Modules (Weeks 9-12)

**Goal**: Add differentiated features

- [ ] **EYES**: Customer segmentation + churn scoring (K-means, decision trees)
- [ ] **VOICE**: Basic creative repurposing (image resize, text variants)
- [ ] **REFLEXES**: Anomaly detection (Z-score, IQR on minute-level metrics)
- [ ] **Learning Progress Visualization**: Show how models improve over time
- [ ] **Mobile App**: React Native app for on-the-go alerts (Phase 2 extension)

### Phase 4: Autonomous Operations (Weeks 13-16)

**Goal**: Enable true autonomous marketing

- [ ] **Auto-execution**: Approved recommendations automatically execute via platform APIs
- [ ] **Feedback Loop**: User accept/reject decisions improve CURIOSITY scoring
- [ ] **Cross-module Intelligence**: EYES insights inform ORACLE predictions
- [ ] **Enterprise Features**: White-label reporting, API access, custom ML models
- [ ] **Scale Tier Launch**: $1,499/month package with all 7 modules

> Source: 01_SYSTEM_ARCHITECTURE.md - Phased Roadmap; 34.Master Blueprint

---

## Appendices

### A. Key Design Decisions & Rationale

**Decision 1: Why Intelligence Layer vs Replacement Platform?**  
- **Problem**: Mid-market companies already invested $7K+/month in HubSpot/Salesforce. High switching costs.
- **Solution**: Sit on top of existing tools, provide intelligence without requiring replacement.
- **Validated by**: 4__Why_Omnify_Is_an_Intelligence_Layer.docx

**Decision 2: Why Focus on $50M-$100M First (not $150M+)?**  
- **Problem**: $150M+ companies have internal BI teams, slower procurement, complex requirements.
- **Solution**: Target $50M-$100M with higher urgency, 3× faster adoption, simpler procurement.
- **Validated by**: 32. GTMSegment_50-100M_LowerBand_Validation_V4; 33.GTM Wedge Strategy

**Decision 3: Why Beauty & Skincare as #1 Subsector?**  
- **Problem**: All subsectors have similar pains, but which has highest urgency?
- **Solution**: Beauty has highest CAC inflation (20% YoY), fastest creative turnover, highest SKU churn.
- **Validated by**: 29. Unified 80-20 Pain Summary; 30. Validated ICP Summary

**Decision 4: Why 3+1 Modules for MVP (not all 7)?**  
- **Problem**: Building all 7 modules takes 16+ weeks, too long to validate market fit.
- **Solution**: Focus on 3 modules that answer the core questions + 1 display layer. Defer EYES/VOICE/REFLEXES.
- **Validated by**: 35.Blueprint B; PainPoint_and_requirements.pdf - V.4 Deferred Features

### B. Environment Variables

See `.env.example` in repository root for complete list.

### C. Module Interface Definitions

See `/docs/API_SPECIFICATION.md` for detailed tRPC schemas.

### D. n8n Workflow Exports

See `/n8n-workflows/` directory for JSON exports of integration workflows.

---

*Document prepared for Omnify AI Marketing Brain development*  
*Architecture Version: 2.0 | November 23, 2025*  
*Incorporating validated market research, focused MVP strategy, and production-ready specifications*
