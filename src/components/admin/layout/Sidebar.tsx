"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Settings,
} from "lucide-react";

import LogoutButton from "./LogoutButton";

const links = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/leads",
    label: "Leads",
    icon: Users,
  },
  {
    href: "/admin/blogs",
    label: "Blogs",
    icon: FileText,
  },
  {
    href: "/admin/careers",
    label: "Careers",
    icon: Briefcase,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      {/* Header */}
      <div className="border-b border-slate-800 p-6">

        <Link href="/admin">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              T
            </div>

            <div>
              <h1 className="text-lg font-bold text-white">
                Tygon Solutions
              </h1>

              <p className="text-sm text-slate-400">
                Admin Panel
              </p>
            </div>

          </div>
        </Link>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">

        {links.map(({ href, label, icon: Icon }) => {
          const active =
            pathname === href ||
            pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span>{label}</span>
            </Link>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">

        <div className="mb-4 rounded-xl bg-slate-900 p-4">

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Version
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            v1.0.0
          </p>

        </div>

        <LogoutButton />

      </div>

    </aside>
  );
}