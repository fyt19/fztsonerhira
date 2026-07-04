"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  LogOut,
  Activity,
  Settings,
} from "lucide-react";
import { logoutAction } from "@/actions/auth";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin/dashboard", label: "Genel Bakış", icon: LayoutDashboard },
  {
    href: "/admin/dashboard/appointments",
    label: "Randevular",
    icon: Calendar,
  },
  { href: "/admin/dashboard/posts", label: "Blog Yönetimi", icon: FileText },
  { href: "/admin/dashboard/settings", label: "Site İçeriği", icon: Settings },
];

export function AdminSidebar({ adminName }: { adminName: string }) {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-white">
      <div className="flex items-center gap-2.5 border-b border-slate-100 px-6 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
          <Activity className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-navy-900">Admin Panel</p>
          <p className="text-xs text-slate-400">{adminName}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4" aria-label="Admin menü">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-teal-50 text-teal-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-navy-900",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-100 p-4">
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Çıkış Yap
          </button>
        </form>
      </div>
    </aside>
  );
}
