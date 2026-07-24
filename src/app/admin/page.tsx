import DashboardCard from "@/components/admin/dashboard/DashboardCard";

async function getDashboard() {
  const res = await fetch(
    "http://localhost:3000/api/admin/dashboard",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function DashboardPage() {
  const stats = await getDashboard();

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold text-white">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Total Leads"
          value={stats.totalLeads}
        />

        <DashboardCard
          title="Pending"
          value={stats.pendingLeads}
        />

        <DashboardCard
          title="Emailed"
          value={stats.emailedLeads}
        />

        <DashboardCard
          title="Failed"
          value={stats.failedLeads}
        />
      </div>
    </>
  );
}