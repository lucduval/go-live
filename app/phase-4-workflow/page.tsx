import Link from "next/link";
import { ArrowRight, CheckCircle2, GitCommit, Play, RefreshCw, UploadCloud } from "lucide-react";

export default function Phase4Workflow() {
    return (
        <div className="max-w-3xl">
            <div className="mb-8">
                <div className="text-sm font-semibold text-teal-700 mb-2">Phase 4</div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Maintenance Mode (The CI/CD Loop)
                </h1>
                <p className="text-lg text-slate-600">
                    Congratulations! You are now set up. Here is your new daily workflow
                    for making changes. You never need to touch the server manually again.
                </p>
            </div>

            <div className="relative py-8">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200" />

                <div className="relative z-10 space-y-12">

                    <div className="flex gap-6">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 ring-4 ring-white">
                            <Play className="h-5 w-5 text-white ml-0.5" />
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Write Code</h3>
                            <p className="text-slate-600">
                                You build features and fix bugs on your local machine (`localhost`).
                                Everything stays local until you are ready.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 ring-4 ring-white">
                            <GitCommit className="h-5 w-5 text-white" />
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Commit & Push</h3>
                            <p className="text-slate-600">
                                When a feature is done, you commit it and push to GitHub.
                            </p>
                            <div className="mt-4 rounded-md bg-slate-100 p-3 font-mono text-sm text-slate-700 border border-slate-200 inline-block">
                                git push origin main
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 ring-4 ring-white">
                            <RefreshCw className="h-5 w-5 text-white" />
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-bold text-teal-700 mb-2">Automated Deploy</h3>
                            <p className="text-slate-600">
                                Vercel detects the push, spins up a build server, runs your build command,
                                and if successful, replaces the live site.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-sm text-teal-700 font-medium">
                                <CheckCircle2 className="h-4 w-4" />
                                Done in ~60 seconds
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-16 border-t border-slate-200 pt-8 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    You are now a Deployment Pro
                </h2>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                    Share this guide with other team members to standardize our deployment process.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-teal-600 shadow-lg shadow-teal-700/20"
                >
                    <UploadCloud className="h-5 w-5" />
                    Back to Start
                </Link>
            </div>
        </div>
    );
}
