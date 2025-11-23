/**
 * Data Seeding Utility for Omnify Brain MVP
 * Generates realistic demo data for a $65M beauty brand
 */

import {
    Channel,
    ChannelName,
    Campaign,
    Creative,
    DailyMetric,
    Cohort
} from '@/types/brain';
import { subDays, format } from 'date-fns';
import fs from 'fs';
import path from 'path';

/**
 * Generate demo data with specific narrative:
 * - Meta: Winner (ROAS 3.5)
 * - Google: Neutral (ROAS 2.2)
 * - TikTok: Loser (ROAS 1.9, showing decay and fatigue)
 * - LTV Drift: Recent cohorts 12.5% below historical baseline
 */
export function generateDemoData() {
    const today = new Date();
    const channels: ChannelName[] = ['Meta', 'Google', 'TikTok'];

    // ==========================================
    // 1. CAMPAIGNS (3 total)
    // ==========================================

    const campaigns: Campaign[] = [
        {
            id: 'CAM-META-001',
            name: 'Meta - Prospecting - Lookalike 1%',
            channel: 'Meta',
            status: 'active',
            spend: 150000,
            revenue: 525000,
            roas: 3.5
        },
        {
            id: 'CAM-GOOGLE-001',
            name: 'Google - Search - Brand Keywords',
            channel: 'Google',
            status: 'active',
            spend: 90000,
            revenue: 198000,
            roas: 2.2
        },
        {
            id: 'CAM-TIKTOK-001',
            name: 'TikTok - Prospecting - Broad Targeting',
            channel: 'TikTok',
            status: 'active',
            spend: 60000,
            revenue: 114000,
            roas: 1.9
        }
    ];

    // ==========================================
    // 2. CREATIVES (3 total, 1 showing fatigue)
    // ==========================================

    const creatives: Creative[] = [
        {
            id: 'CR-META-001',
            name: 'UGC Video - Before/After Results',
            platform: 'Meta',
            thumbnail_url: '/assets/meta-ugc-001.jpg',
            spend: 75000,
            impressions: 7500000,
            clicks: 90000,
            conversions: 1800,
            cpa: 41.67,
            cvr: 0.02,
            roas: 3.5,
            launch_date: format(subDays(today, 45), 'yyyy-MM-dd')
        },
        {
            id: 'CR-GOOGLE-001',
            name: 'Responsive Search Ad - Premium Serum',
            platform: 'Google',
            thumbnail_url: '/assets/google-rsa-001.jpg',
            spend: 45000,
            impressions: 2250000,
            clicks: 45000,
            conversions: 1125,
            cpa: 40.00,
            cvr: 0.025,
            roas: 2.2,
            launch_date: format(subDays(today, 60), 'yyyy-MM-dd')
        },
        {
            id: 'CR-TIKTOK-001',
            name: 'TikTok Viral Trend - FATIGUED',
            platform: 'TikTok',
            thumbnail_url: '/assets/tiktok-viral-001.jpg',
            spend: 30000,
            impressions: 6000000,
            clicks: 48000,
            conversions: 480,
            cpa: 62.50,
            cvr: 0.01, // Declining CVR
            roas: 1.9,
            launch_date: format(subDays(today, 90), 'yyyy-MM-dd')
        }
    ];

    // ==========================================
    // 3. DAILY METRICS (30 days)
    // ==========================================

    const dailyMetrics: DailyMetric[] = [];

    for (let i = 29; i >= 0; i--) {
        const date = subDays(today, i);
        const dateStr = format(date, 'yyyy-MM-dd');

        // Meta: Stable high performer
        const metaSpend = 5000 + Math.random() * 500;
        const metaRoas = 3.5 + (Math.random() - 0.5) * 0.2; // 3.4 - 3.6
        dailyMetrics.push({
            date: dateStr,
            channel: 'Meta',
            spend: Math.round(metaSpend),
            revenue: Math.round(metaSpend * metaRoas),
            impressions: Math.round(metaSpend * 100),
            clicks: Math.round(metaSpend * 1.2),
            conversions: Math.round(metaSpend * 0.024)
        });

        // Google: Neutral, stable
        const googleSpend = 3000 + Math.random() * 300;
        const googleRoas = 2.2 + (Math.random() - 0.5) * 0.1; // 2.15 - 2.25
        dailyMetrics.push({
            date: dateStr,
            channel: 'Google',
            spend: Math.round(googleSpend),
            revenue: Math.round(googleSpend * googleRoas),
            impressions: Math.round(googleSpend * 75),
            clicks: Math.round(googleSpend * 1.5),
            conversions: Math.round(googleSpend * 0.0375)
        });

        // TikTok: Showing DECAY - was 2.5 at day 30, now 1.75
        const tikTokSpend = 2000 + Math.random() * 200;
        const decayFactor = 1 - (i / 60); // More decay as we get closer to today
        const tikTokBaseRoas = 2.5 - (decayFactor * 0.75); // Decaying from 2.5 to 1.75
        const tikTokRoas = tikTokBaseRoas + (Math.random() - 0.5) * 0.1;
        dailyMetrics.push({
            date: dateStr,
            channel: 'TikTok',
            spend: Math.round(tikTokSpend),
            revenue: Math.round(tikTokSpend * tikTokRoas),
            impressions: Math.round(tikTokSpend * 200),
            clicks: Math.round(tikTokSpend * 2.4),
            conversions: Math.round(tikTokSpend * 0.024)
        });
    }

    // ==========================================
    // 4. COHORTS (6 months, showing LTV drift)
    // ==========================================

    const cohorts: Cohort[] = [];

    for (let monthsAgo = 0; monthsAgo < 6; monthsAgo++) {
        const cohortDate = subDays(today, monthsAgo * 30);
        const monthStr = format(cohortDate, 'yyyy-MM');

        // Recent cohorts (0-1 months ago): Lower LTV ($112)
        // Historical cohorts (4-5 months ago): Higher LTV ($128)
        // Creates 12.5% drift: (128 - 112) / 128 = 0.125

        const isRecent = monthsAgo <= 1;
        const baseLTV = isRecent ? 112 : 128;

        cohorts.push({
            cohort_id: monthStr,
            month: monthStr,
            users: 800 + Math.round(Math.random() * 200),
            ltv_30: Math.round(baseLTV * 0.45),
            ltv_60: Math.round(baseLTV * 0.70),
            ltv_90: Math.round(baseLTV * 0.85),
            ltv_current: baseLTV,
            cac: 45
        });
    }

    // ==========================================
    // 5. AGGREGATED CHANNELS
    // ==========================================

    const aggregatedChannels: Channel[] = [
        {
            channel: 'Meta',
            spend: 150000,
            revenue: 525000,
            roas: 3.5,
            status: 'neutral', // Will be calculated by MEMORY module
            ltv_adjusted_roas: 0
        },
        {
            channel: 'Google',
            spend: 90000,
            revenue: 198000,
            roas: 2.2,
            status: 'neutral',
            ltv_adjusted_roas: 0
        },
        {
            channel: 'TikTok',
            spend: 60000,
            revenue: 114000,
            roas: 1.9,
            status: 'neutral',
            ltv_adjusted_roas: 0
        }
    ];

    return {
        channels: aggregatedChannels,
        campaigns,
        creatives,
        daily_metrics: dailyMetrics,
        cohorts
    };
}

/**
 * Export demo data to JSON files in src/data/raw/
 */
export function exportDemoData() {
    const RAW_DATA_DIR = path.join(process.cwd(), 'src', 'data', 'raw');

    console.log('🌱 Generating demo data for $65M beauty brand...');

    const data = generateDemoData();

    // Ensure directory exists
    if (!fs.existsSync(RAW_DATA_DIR)) {
        fs.mkdirSync(RAW_DATA_DIR, { recursive: true });
    }

    // Write files
    fs.writeFileSync(
        path.join(RAW_DATA_DIR, 'channels.json'),
        JSON.stringify(data.channels, null, 2)
    );
    fs.writeFileSync(
        path.join(RAW_DATA_DIR, 'campaigns.json'),
        JSON.stringify(data.campaigns, null, 2)
    );
    fs.writeFileSync(
        path.join(RAW_DATA_DIR, 'creatives.json'),
        JSON.stringify(data.creatives, null, 2)
    );
    fs.writeFileSync(
        path.join(RAW_DATA_DIR, 'daily_metrics.json'),
        JSON.stringify(data.daily_metrics, null, 2)
    );
    fs.writeFileSync(
        path.join(RAW_DATA_DIR, 'cohorts.json'),
        JSON.stringify(data.cohorts, null, 2)
    );

    console.log('✅ Demo data generated successfully!');
    console.log('');
    console.log('📊 Data Summary:');
    console.log(`   • Channels: ${data.channels.length} (Meta, Google, TikTok)`);
    console.log(`   • Campaigns: ${data.campaigns.length}`);
    console.log(`   • Creatives: ${data.creatives.length} (1 showing fatigue)`);
    console.log(`   • Daily Metrics: ${data.daily_metrics.length} records (30 days)`);
    console.log(`   • Cohorts: ${data.cohorts.length} months`);
    console.log('');
    console.log('📈 Narrative:');
    console.log('   • Meta: Winner (ROAS 3.5) ✅');
    console.log('   • Google: Neutral (ROAS 2.2) ⚪');
    console.log('   • TikTok: Loser (ROAS 1.9, showing decay) ❌');
    console.log('   • LTV Drift: 12.5% below baseline (Recent: $112, Historical: $128)');
    console.log('');
    console.log(`📁 Output Directory: ${RAW_DATA_DIR}`);
}
