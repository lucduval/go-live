import { ArrowRight, GitBranch, RefreshCw, Server } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
          The Modern Deployment Workflow
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Forget FTP. Forget manual server uploads. Welcome to the era of
          Git-based deployments.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 my-12">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-12 w-12 rounded-lg bg-teal-50 flex items-center justify-center">
            <GitBranch className="h-6 w-6 text-teal-700" />
          </div>
          <h3 className="font-semibold text-slate-900">1. Push Code</h3>
          <p className="text-sm text-slate-500 mt-2">
            You simply push your changes to a specific branch on GitHub.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-12 w-12 rounded-lg bg-teal-50 flex items-center justify-center">
            <RefreshCw className="h-6 w-6 text-teal-700" />
          </div>
          <h3 className="font-semibold text-slate-900">2. Auto-Build</h3>
          <p className="text-sm text-slate-500 mt-2">
            Vercel detects the change, clones your repo, and builds the app.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-12 w-12 rounded-lg bg-teal-50 flex items-center justify-center">
            <Server className="h-6 w-6 text-teal-700" />
          </div>
          <h3 className="font-semibold text-slate-900">3. Go Live</h3>
          <p className="text-sm text-slate-500 mt-2">
            Once built, your new version is instantly available globally.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-900 p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4 !mt-0">
            Ready to start?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl">
            This guide will walk you through taking a local Next.js MVP and
            deploying it to a production-grade URL with HTTPS, CDN, and
            CI/CD pipeline included.
          </p>
          <Link
            href="/phase-1-git"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-500"
          >
            Start Phase 1: Git <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-teal-900/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-indigo-900/30 blur-3xl" />
      </div>
    </div>
  );
}
