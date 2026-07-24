import { connectDB } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import LeadsClient from "@/components/admin/leads/LeadsClient";

export default async function LeadsPage() {
  await connectDB();

  const leads = await Lead.find({})
    .sort({ createdAt: -1 })
    .lean();

  return (
    <LeadsClient
      leads={JSON.parse(JSON.stringify(leads))}
    />
  );
}