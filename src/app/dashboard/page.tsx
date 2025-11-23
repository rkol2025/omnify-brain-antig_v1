import { getDashboardData } from '@/lib/api';
import { DashboardClient } from '@/components/dashboard/dashboard-client';

export const dynamic = 'force-dynamic'; // Ensure fresh data on every request

export default async function DashboardPage() {
    const data = await getDashboardData();

    return <DashboardClient initialData={data} />;
}
