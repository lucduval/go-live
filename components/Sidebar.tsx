"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitBranch, Globe, Home, Repeat, Server, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Introduction", href: "/", icon: Home },
  { name: "Phase 1: Git & GitHub", href: "/phase-1-git", icon: GitBranch },
  { name: "Phase 2: Vercel", href: "/phase-2-vercel", icon: Server },
  { name: "Phase 3: Domain", href: "/phase-3-domain", icon: Globe },
  { name: "Phase 4: Workflow", href: "/phase-4-workflow", icon: Repeat },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white shadow-sm fixed top-0 left-0 bottom-0 z-10 overflow-y-auto">
      <div className="flex h-16 items-center border-b border-slate-100 px-6">
        <Rocket className="mr-2 h-6 w-6 text-teal-700" />
        <span className="text-lg font-bold text-slate-900">Deploy Flow</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-teal-50 text-teal-700 shadow-sm ring-1 ring-teal-200"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive ? "text-teal-700" : "text-slate-400 group-hover:text-slate-600"
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-slate-100 p-4">
        <div className="rounded-md bg-slate-50 p-4">
          <p className="text-xs font-medium text-slate-500">
            Internal Training Guide
          </p>
          <p className="mt-1 text-xs text-slate-400">v1.0.0</p>
        </div>
      </div>
    </div>
  );
}
