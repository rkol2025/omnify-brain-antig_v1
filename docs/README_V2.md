# Omnify AI Marketing Brain - Complete Documentation Package V2

## Overview

This documentation package contains everything you need to build the **Omnify AI Marketing Brain MVP** - an AI Intelligence Layer that sits on top of existing CRMs and marketing tools to provide predictive marketing intelligence.

**Version 2.0 Updates**:
- ✅ MVP Focus: 3+1 modules (MEMORY, ORACLE, CURIOSITY, FACE)
- ✅ Validated Personas: Sarah (CMO), Jason (VP Growth), Emily (Director Perf)
- ✅ 24-48 Hour Demo Build: Static JSON approach
- ✅ Subsector Targeting: Beauty, Supplements, Wellness ($50M-$100M)
- ✅ Complete Building Guides: Claude Code, Cursor, Gemini
- ✅ Persona-Specific UI: Same data, different microcopy

**What Omnify Does**:
- Answers **three critical questions** on one screen:
  1. **"What happened?"** → MEMORY (Attribution & ROI Truth Layer)
  2. **"What will break?"** → ORACLE (Prediction & Risk Engine)
  3. **"What should we do?"** → CURIOSITY (Decision & Recommendation Engine)
- **Single Intelligence Surface** → FACE (Executive Dashboard with Persona Toggle)

---

## 📚 Documents Included

### Core Architecture & Requirements

#### 1. System Architecture V2 (`01_SYSTEM_ARCHITECTURE_V2.md`)
**Purpose**: Complete technical architecture with MVP focus

**Contents**:
- MVP Architecture (3+1 modules: MEMORY, ORACLE, CURIOSITY, FACE)
- Validated personas (Sarah/Jason/Emily) with decision authority
- Data flow diagram (static JSON for MVP, production for Phase 2)
- Complete module specifications with acceptance criteria
- Technology stack (Next.js 15, TypeScript, shadcn/ui, static JSON)
- Phased roadmap (MVP demo → Production → Scale)
- Performance targets and success metrics

**Key Sections**:
- Section 1: Executive Summary & Validated Personas
- Section 2: MVP vs Phase 2 Scope (Critical!)
- Section 3: Three Brain Modules (MEMORY, ORACLE, CURIOSITY)
- Section 4: FACE Dashboard with Persona Toggle
- Section 5: Data Flow (Static JSON → Brain Processing → UI Display)

**Use this for**:
- Understanding the complete system
- Sponsor presentations
- Technical planning
- Reference for all AI coding tools

---

#### 2. Requirements Document V2 (`omnify_comprehensive_requirements_v2.md`)
**Purpose**: Complete functional and technical requirements

**Contents**:
- Validated ICP: $50M-$100M Beauty/Supplements/Wellness
- Complete persona profiles with pain points ranked by urgency
- Subsector-specific requirements (Beauty vs Supplements vs Wellness)
- Module-by-module functional requirements
- Non-functional requirements (performance, security, scalability)
- Acceptance criteria for MVP demo
- Success metrics by persona

**Use this for**:
- Product requirements
- Feature prioritization
- QA testing checklists
- Stakeholder alignment

---

#### 3. User Journey Maps V2 (`04_USER_JOURNEY_V2.md`)
**Purpose**: Complete user experience for validated personas

**Contents**:
- **Three Validated Personas**:
  - Sarah Martinez (CMO, $285M Beauty, Decision Authority 10/10)
  - Jason Li (VP Growth, $220M Cosmetics, Decision Authority 9/10)
  - Emily Chen (Director Perf, $140M Supplements, Decision Authority 7/10)
- Complete user journeys:
  - Sarah: Discovery → Decision → 48-hour onboarding → AHA moment
  - Jason: Power user activation → Daily workflow → Champion role
  - Emily: Action-first execution → Daily routine
- 3-minute demo script (complete voiceover)
- Persona-specific UI examples
- Success metrics by persona (90-day results)

**Use this for**:
- UX/UI design
- Feature prioritization
- Demo preparation
- Customer success planning

---

### Development Instructions (AI Coding Tools)

#### 4. Claude Code Instructions V2 (`02_CLAUDE_CODE_INSTRUCTIONS_V2.md`)
**Purpose**: Complete implementation guide for Claude Code CLI

**Contents**:
- **MVP Build Instructions** (24-48 hours):
  - Step 1: TypeScript types (all module interfaces)
  - Step 2: Data seeding (30 days of demo data)
  - Step 3: MEMORY module (ROI calculation, winners/losers)
  - Step 4: ORACLE module (fatigue/decay/drift detection)
  - Step 5: CURIOSITY module (Top 3 budget recommendations)
  - Step 6: Brain orchestrator (runs all 3 modules)
  - Step 7: FACE dashboard (three cards + persona toggle)
- Complete algorithms for each module (copy-paste ready)
- Exact command sequences
- Validation checkpoints
- Troubleshooting guide

**Use this for**:
- Terminal-based development with Claude Code
- Building brain modules (backend logic)
- Running brain processing cycle
- Generating demo data

---

#### 5. Cursor Instructions V2 (`03_CURSOR_INSTRUCTIONS_V2.md`)
**Purpose**: IDE configuration for Cursor AI assistance

**Contents**:
- Project context and architecture
- Simplified directory structure (MVP only)
- Design system (colors, typography, components)
- Brain module standards with TypeScript interfaces
- Persona-specific UI guidelines (microcopy variations)
- Component patterns and examples
- Coding standards (strict TypeScript, no `any`)
- Manual testing checklist

**Use this for**:
- Place in project root as `.cursorrules`
- IDE-based development with Cursor
- UI/component development
- Frontend work

---

#### 6. Gemini Antigravity Instructions V2 (`GEMINI_ANTIGRAVITY_INSTRUCTIONS_V2.md`)
**Purpose**: Complete guide for Gemini with Antigravity extension

**Contents**:
- MVP architecture diagram (ASCII visual)
- Complete module specifications
- TypeScript interfaces (all modules)
- Development workflow (step-by-step)
- Gemini-specific prompting patterns
- Parallel file generation strategies
- Coordination notes (working with Claude/Cursor)

**Use this for**:
- Gemini-based development
- Parallel code generation
- Pattern-based implementation
- Multi-file operations

---

### Building Guides

#### 7. Claude Code Building Guide V2 (`05_CLAUDE_CODE_BUILDING_GUIDE_V2.md`)
**Purpose**: Step-by-step tutorial for beginners

**Contents**:
- **Prerequisites**: Software to install (Node.js, Git, Claude Code)
- **Environment Setup**: Project initialization, folder structure
- **Phase 1: Data Seeding** (Foundation)
  - Create TypeScript types
  - Generate demo data (30 days)
  - Verify JSON files
- **Phase 2: Brain Modules** (Intelligence)
  - Build MEMORY (ROI calculation)
  - Build ORACLE (predictions)
  - Build CURIOSITY (recommendations)
  - Build orchestrator
- **Phase 3: FACE UI** (Display)
  - Create persona utilities
  - Build dashboard components
  - Add persona toggle
  - Connect to brain outputs
- **Testing & Validation**: Manual testing checklist
- **Demo Preparation**: 3-minute demo script practice

**Use this for**:
- Learning how to build Omnify from scratch
- Understanding each step in detail
- Beginner-friendly explanations
- Complete tutorial walkthrough

---

## 🚀 Quick Start Guide

### For 24-48 Hour MVP Demo Build

**Step 1: Read the Architecture**
```bash
# Understand the system first
cat 01_SYSTEM_ARCHITECTURE_V2.md
# Key sections: Executive Summary, MVP Scope, Module Specifications
```

**Step 2: Choose Your Development Tool**

**Option A: Claude Code (Terminal-Based)**
```bash
# Best for: Backend modules, brain logic, data processing
# Read instructions
cat 02_CLAUDE_CODE_INSTRUCTIONS_V2.md

# Follow building guide
cat 05_CLAUDE_CODE_BUILDING_GUIDE_V2.md

# Start building
mkdir omnify-brain-mvp && cd omnify-brain-mvp
claude
# Then follow prompts from Claude Code Instructions V2
```

**Option B: Cursor (IDE-Based)**
```bash
# Best for: UI components, dashboard, frontend work
# Place rules file
cp 03_CURSOR_INSTRUCTIONS_V2.md /path/to/project/.cursorrules

# Open in Cursor
cursor /path/to/project

# Start building UI components
```

**Option C: Gemini Antigravity (Parallel Development)**
```bash
# Best for: Generating multiple files simultaneously
# Read instructions
cat GEMINI_ANTIGRAVITY_INSTRUCTIONS_V2.md

# Use Gemini's strengths for parallel code generation
```

**Step 3: Build in Order**
1. ✅ **Data First**: Create types, seed demo data (5 JSON files)
2. ✅ **Brain Modules**: MEMORY → ORACLE → CURIOSITY → Orchestrator
3. ✅ **Run Brain Cycle**: Generate 3 output JSON files
4. ✅ **Build Dashboard**: Three cards + persona toggle
5. ✅ **Test**: Manual testing checklist
6. ✅ **Demo**: Practice 3-minute demo script

**Expected Timeline**:
- Hour 0-4: Setup + Data Seeding + TypeScript Types
- Hour 4-12: MEMORY Module + ORACLE Module
- Hour 12-20: CURIOSITY Module + Orchestrator
- Hour 20-24: FACE Dashboard + Persona Toggle
- **Total: 24-48 hours to demo-ready** ✓

---

### For Sponsor/Investor Presentation

**Step 1: Open System Architecture V2**
```bash
cat 01_SYSTEM_ARCHITECTURE_V2.md
```

**Key Sections to Present**:
1. **Executive Summary** (Slide 1)
   - The Problem: $37B wasted spend, 162-245 tools, attribution chaos
   - The Solution: 3+1 modules on one screen
   - Target Market: $50M-$100M Beauty/Supplements/Wellness

2. **Validated Personas** (Slide 2)
   - Sarah (CMO): Primary buyer, 10/10 decision authority
   - Jason (VP Growth): Champion, 9/10 decision authority
   - Emily (Director Perf): Influencer, 7/10 decision authority

3. **Product Demo** (Slide 3)
   - Show FACE dashboard with three cards
   - Demonstrate persona toggle (same data, different language)
   - Walk through: "What happened?" → "What will break?" → "What to do?"

4. **Competitive Position** (Slide 4)
   - Northbeam: $3,500+/month (attribution only)
   - Omnify: $499-$1,499/month (attribution + predictions + recommendations)
   - Value prop: "Northbeam quality at 1/3 the price"

5. **Go-To-Market** (Slide 5)
   - First Wedge: $50M-$100M Beauty brands
   - Expand: Supplements, Wellness
   - Scale: $100M-$350M mid-market

---

## 📋 Key Technical Decisions (MVP)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Frontend** | Next.js 15 (App Router) | Server components, great DX, Vercel deployment |
| **Language** | TypeScript (strict mode) | Type safety, better developer experience |
| **UI Library** | shadcn/ui + TailwindCSS | Customizable, professional, modern |
| **Data Storage (MVP)** | Static JSON files | Fast demo build, no database setup |
| **Hosting (MVP)** | Vercel (free tier) | Zero-config deployment |
| **Phase 2 Additions** | Supabase + n8n + APIs | Production-ready after MVP validation |

---

## 🎯 MVP Scope (3+1 Modules)

### MVP Includes (Weeks 1-2):
✅ **MEMORY Module**: ROI calculation, winners/losers, LTV-adjusted ROAS  
✅ **ORACLE Module**: Fatigue prediction, ROI decay, LTV drift, risk level  
✅ **CURIOSITY Module**: Top 3 budget recommendations ranked by impact  
✅ **FACE Dashboard**: Three cards, persona toggle, CEO-ready view  
✅ **Demo Data**: 30 days of realistic performance (Meta winner, TikTok loser)  
✅ **Persona Toggle**: CMO/VP Growth/Director Perf microcopy variations  

### Phase 2 Additions (Weeks 3-8):
- ⏳ **EYES Module**: Churn prediction, customer segmentation
- ⏳ **VOICE Module**: Creative repurposing for IG/TikTok
- ⏳ **REFLEXES Module**: Real-time anomaly detection
- ⏳ **Live Integrations**: n8n workflows for Meta, Google, Shopify
- ⏳ **Database**: Supabase (PostgreSQL + RLS)
- ⏳ **Authentication**: Login, signup, multi-tenant
- ⏳ **ML Models**: XGBoost for fatigue, LTV prediction

---

## 💰 Pricing Strategy

| Tier | Price | Modules Included | Target Customer |
|------|-------|------------------|-----------------|
| **Starter** | $499/mo | MEMORY + Basic ORACLE | Growing DTC, 3 platforms |
| **Growth** | $799/mo | MEMORY + Full ORACLE + CURIOSITY | Established mid-market, 6 platforms |
| **Pro** | $1,499/mo | All 7 modules + Auto-Execute | Large mid-market, all platforms |
| **Enterprise** | Custom | White-label + SLA | Multi-brand, enterprise needs |

**Positioning**: "Northbeam functionality at 1/3 the price"

**Competitive Comparison**:
- **Northbeam**: $3,500+/month (attribution only, no predictions)
- **TripleWhale**: $1,200+/month (attribution only, no predictions)
- **Omnify**: $499-$1,499/month (attribution + predictions + recommendations)

---

## ✅ Target Acceptance Criteria (MVP Demo)

### Dashboard Performance
| Metric | Target | Status |
|--------|--------|--------|
| Dashboard load time | <2 seconds | ✅ Critical |
| Persona toggle speed | <100ms | ✅ Critical |
| Brain cycle runtime | <5 seconds | ✅ Critical |
| TypeScript type errors | 0 | ✅ Critical |

### Brain Module Accuracy (Phase 2 - ML Models)
| Module | Metric | Target |
|--------|--------|--------|
| ORACLE | Fatigue prediction AUC (7-day) | ≥0.75 |
| ORACLE | LTV prediction RMSE | ≤25% |
| MEMORY | ROI MAPE | ≤20% |
| EYES | Churn prediction AUC (30-day) | ≥0.70 |
| EYES | Silhouette score | ≥0.45 |
| REFLEXES | Detection latency | ≤1 second |

### Dashboard Quality (Phase 2 - Production)
| Metric | Target |
|--------|--------|
| Lighthouse performance | ≥90 |
| Accessibility (a11y) | ≥95 |
| First Contentful Paint | <1.5s |
| Time to Interactive | <3s |

---

## 🧠 Three Brain Modules - Quick Reference

### MEMORY Module (Attribution & ROI)
**Input**: Channels, campaigns, creatives, daily metrics, cohorts  
**Output**: Unified ROAS, winners/losers, LTV-adjusted ROAS  
**Algorithm**: Aggregate → Calculate ROAS → Mark winners/losers → LTV factor  

**Example Output**:
```json
{
  "channels": [
    { "channel": "Meta", "roas": 3.5, "status": "winner" },
    { "channel": "TikTok", "roas": 1.9, "status": "loser" }
  ],
  "blended_roas": 2.65
}
```

---

### ORACLE Module (Prediction Engine)
**Input**: Channels, campaigns, creatives, daily metrics, cohorts  
**Output**: Fatigue predictions, ROI decay alerts, LTV drift alerts, risk level  
**Engines**: (1) Fatigue detection, (2) Decay detection, (3) LTV drift detection  

**Example Output**:
```json
{
  "fatigue_predictions": [
    {
      "creative_id": "C12",
      "fatigue_probability_7d": 0.82,
      "key_risk_factors": ["cvr_drop", "frequency_high"]
    }
  ],
  "risk_level": "yellow"
}
```

---

### CURIOSITY Module (Recommendation Engine)
**Input**: MEMORY output + ORACLE output  
**Output**: Top 3 actions ranked by impact/urgency/confidence  
**Generators**: (1) Shift budget, (2) Pause creative, (3) Increase budget, (4) Retention  

**Example Output**:
```json
{
  "actions": [
    {
      "priority": 1,
      "action_type": "shift_budget",
      "from_channel": "TikTok",
      "to_channel": "Meta",
      "estimated_impact_daily": 1280,
      "urgency": "HIGH"
    }
  ],
  "total_potential_uplift": 3680
}
```

---

## 👥 Validated Personas - Quick Reference

### Sarah Martinez - CMO (Primary Economic Buyer)
- **Company**: $285M Beauty subscription
- **Decision Authority**: 10/10
- **Pain**: Attribution chaos, board reporting hell, reactive optimization
- **Job-to-be-Done**: "Here's the truth - not what Meta thinks. Here's what will break. Here's where to move budget."

### Jason Li - VP Growth (Secondary Buyer/Champion)
- **Company**: $220M Cosmetics DTC/Hybrid
- **Decision Authority**: 9/10
- **Pain**: Dashboard fatigue, creative fatigue blindness, LTV drift anxiety
- **Job-to-be-Done**: "Give me confidence scores, give me predictions, let me execute."

### Emily Chen - Director Performance Marketing (Influencer)
- **Company**: $140M Supplements hybrid
- **Decision Authority**: 7/10
- **Pain**: Execution chaos, no actionable insights, attribution confusion
- **Job-to-be-Done**: "Tell me what to do NOW. Don't make me think."

> Source: 31_Final_Top_5_Personas.pdf; 36_Enhanced_Customer_Personas.pdf

---

## 📊 Success Metrics by Persona (90-Day Results)

### Sarah (CMO) Success Metrics
| Metric | Before Omnify | After Omnify | Target |
|--------|--------------|--------------|--------|
| Time on reporting | 4+ hours/week | <1 hour/week | 75% reduction ✓ |
| Confidence in attribution | 30% | 78% | 2.5× improvement ✓ |
| Wasted spend reduction | $0 | $180K saved | 15-20% target ✓ |

### Jason (VP Growth) Success Metrics
| Metric | Before Omnify | After Omnify | Target |
|--------|--------------|--------------|--------|
| Dashboards checked daily | 6+ | 1 | 83% reduction ✓ |
| CAC | $52 | $47 | -10% ✓ |
| LTV/CAC Ratio | 4.6× | 5.2× | Improve ✓ |

### Emily (Director Perf) Success Metrics
| Metric | Before Omnify | After Omnify | Target |
|--------|--------------|--------------|--------|
| Morning dashboard review | 45-60 min | 5-10 min | 80% reduction ✓ |
| Daily action clarity | Low | High | Clear actions ✓ |
| Budget move confidence | 40% | 85% | 2× improvement ✓ |

---

## 🗂️ File Organization

```
omnify-brain-mvp/
├── README.md (this file)
├── 01_SYSTEM_ARCHITECTURE_V2.md
├── 02_CLAUDE_CODE_INSTRUCTIONS_V2.md
├── 03_CURSOR_INSTRUCTIONS_V2.md
├── 04_USER_JOURNEY_V2.md
├── 05_CLAUDE_CODE_BUILDING_GUIDE_V2.md
├── GEMINI_ANTIGRAVITY_INSTRUCTIONS_V2.md
├── omnify_comprehensive_requirements_v2.md
├── docs/
│   └── reference/ (Additional PDFs)
│       ├── 29_Unified_8020_Pain_Summary.pdf
│       ├── 30_Validated_ICP_Subsector_Targeting.pdf
│       ├── 31_Final_Top_5_Personas.pdf
│       ├── 36_Enhanced_Customer_Personas.pdf
│       ├── 37_FACE_UI_Wireframe.pdf
│       ├── 42_3min_ElevatedDemoScript.pdf
│       └── 43_Demo_Package.pdf
└── src/ (Will be created during build)
```

---

## 🎬 3-Minute Demo Script (Quick Reference)

**Opening (15 seconds)**:
"I'm going to show you Omnify AI Marketing Brain - the intelligence layer that transforms reactive marketing into predictive optimization."

**Section 1: The Problem (30 seconds)**:
"You're a CMO at a $150M beauty brand. Every morning you open six dashboards. Meta says ROAS 3.2. Google says 1.1. TripleWhale says 2.4. Which is right?"

**Section 2: The Solution (90 seconds)**:
"Omnify answers three questions on one screen."

[Show dashboard]

- **Question 1**: "What happened? Here's the truth." [Point to MEMORY card]
- **Question 2**: "What will break? Here's what's coming." [Point to ORACLE card]
- **Question 3**: "What should we do? Here are your moves." [Point to CURIOSITY card]

**Section 3: Persona Adaptation (30 seconds)**:
"Different roles see different views." [Click persona toggle buttons]

**Closing (15 seconds)**:
"Northbeam charges $3,500/month for attribution alone. Omnify: $499-$1,499/month for attribution + prediction + recommendations."

> Source: 42_3min_ElevatedDemoScript.pdf

---

## 🔄 Development Workflow (Recommended Sequence)

### Week 1: Foundation (MVP Core)
- [ ] Day 1-2: Read all documentation, understand architecture
- [ ] Day 3-4: Setup project, create TypeScript types, seed demo data
- [ ] Day 5-7: Build MEMORY module, test outputs

### Week 2: Intelligence (Brain Modules)
- [ ] Day 8-10: Build ORACLE module (three detection engines)
- [ ] Day 11-12: Build CURIOSITY module (four action generators)
- [ ] Day 13-14: Build orchestrator, test full brain cycle

### Week 3: UI (Dashboard)
- [ ] Day 15-16: Build FACE dashboard (three cards)
- [ ] Day 17-18: Add persona toggle, test microcopy variations
- [ ] Day 19-21: Polish UI, fix bugs, optimize performance

### Week 4: Demo Prep
- [ ] Day 22-23: Practice 3-minute demo script
- [ ] Day 24-25: Create demo video, prepare sponsor deck
- [ ] Day 26-28: Final testing, bug fixes, deployment to Vercel

**Result**: Demo-ready MVP in 4 weeks ✓

---

## 📞 Support & Contact

This documentation package is designed to be comprehensive and self-contained. Each document can be used independently or together as a complete system specification.

**For Questions**:
- Read System Architecture V2 first (most comprehensive)
- Check Building Guide V2 for step-by-step tutorial
- Review User Journey V2 for persona-specific use cases

**For AI Coding Tools**:
- Claude Code: Use `02_CLAUDE_CODE_INSTRUCTIONS_V2.md`
- Cursor: Use `03_CURSOR_INSTRUCTIONS_V2.md`
- Gemini: Use `GEMINI_ANTIGRAVITY_INSTRUCTIONS_V2.md`

---

## 📈 Next Steps After MVP

### Phase 2: Production-Ready (Weeks 5-8)
1. **Add Database**: Migrate from static JSON to Supabase (PostgreSQL + RLS)
2. **Add Authentication**: Login, signup, multi-tenant support
3. **Add Live Integrations**: n8n workflows for Meta, Google, Shopify
4. **Add ML Models**: Train XGBoost for fatigue, LTV prediction
5. **Add EYES Module**: Customer segmentation, churn prediction

### Phase 3: Scale (Weeks 9-12)
1. **Add VOICE Module**: Creative repurposing for social platforms
2. **Add REFLEXES Module**: Real-time anomaly detection
3. **Add Auto-Execute**: Autonomous budget moves (with approval flow)
4. **Add Billing**: Stripe integration for subscriptions
5. **Add Monitoring**: Sentry (errors), PostHog (analytics)

### Phase 4: Enterprise (Weeks 13-16)
1. **White-Label**: Custom branding for enterprise customers
2. **API Access**: Allow customers to build on Omnify
3. **Advanced Integrations**: Salesforce, Microsoft Dynamics, Adobe
4. **SLA & Support**: Enterprise-grade uptime guarantees
5. **Multi-Brand**: Support holding companies with multiple brands

---

## 🏆 Competitive Advantage

**Why Omnify Wins**:
1. **Price**: $499-$1,499/mo vs $3,500+/mo (Northbeam)
2. **Predictions**: 7-14 day advance visibility (competitors are reactive)
3. **Recommendations**: Top 3 actions with expected impact (competitors show data, not actions)
4. **Personas**: Same data, different language (CMO/VP/Director views)
5. **Learning Loop**: System gets smarter over time (compound moat)

**Market Gap**:
- Attribution tools (Northbeam, TripleWhale): $3,500+/month, no predictions
- CRMs (HubSpot, Salesforce): Not marketing-focused, no AI predictions
- Ad platforms (Meta, Google): Siloed data, platform-specific
- **Omnify**: Unified intelligence layer with predictions at 1/3 the price ✓

---

*Omnify AI Marketing Brain - Documentation Package V2*  
*Version 2.0 | November 23, 2025*  
*MVP Focus: 3+1 Modules | Validated Personas | 24-48 Hour Demo Build*

**Ready to build? Start with `01_SYSTEM_ARCHITECTURE_V2.md` → Then choose your development tool → Follow the Building Guide V2 → Ship your demo in 24-48 hours! 🚀**
