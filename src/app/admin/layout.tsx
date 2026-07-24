import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Sidebar from "@/components/admin/layout/Sidebar";
import Header from "@/components/admin/layout/Header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header session={session} />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}