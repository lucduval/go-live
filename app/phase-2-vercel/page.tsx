import { Alert } from "@/components/ui/Alert";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function Phase2Vercel() {
    return (
        <div className="max-w-3xl">
            <div className="mb-8">
                <div className="text-sm font-semibold text-teal-700 mb-2">Phase 2</div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Connecting the Engine (Vercel)
                </h1>
                <p className="text-lg text-slate-600">
                    Vercel will act as our build engine and hosting server. It connects directly to GitHub.
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            1
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Import Project
                        </h2>
                    </div>
                    <p className="pl-11 text-slate-600 mb-4">
                        Log into your Vercel dashboard and click <strong>Add New Project</strong>. Select your GitHub repository from the list.
                    </p>
                    <div className="pl-11 mb-6">
                        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-400">
                            <div className="text-center">
                                <ImageIcon className="mx-auto h-10 w-10 mb-2 opacity-50" />
                                <span className="text-sm">Screenshot: Vercel Import Screen</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            2
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Environment Variables
                        </h2>
                    </div>
                    <div className="pl-11">
                        <Alert type="warning" title="Critical Step about Secrets">
                            Files like <code>.env</code> are ignored by Git (for security).
                            They do NOT exist on GitHub. You must manually add these secrets
                            in Vercel before deploying.
                        </Alert>

                        <p className="text-slate-600 my-4">
                            Expand the <strong>Environment Variables</strong> section and add your keys:
                        </p>

                        <div className="overflow-hidden rounded-lg border border-slate-200">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-500 font-medium">
                                    <tr>
                                        <th className="px-4 py-3">Key</th>
                                        <th className="px-4 py-3">Value</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 font-mono text-slate-700">OPENAI_API_KEY</td>
                                        <td className="px-4 py-3 font-mono text-slate-400">sk-proj-1234...</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-mono text-slate-700">DATABASE_URL</td>
                                        <td className="px-4 py-3 font-mono text-slate-400">postgres://...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            3
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Deploy
                        </h2>
                    </div>
                    <p className="pl-11 text-slate-600">
                        Click <strong>Deploy</strong>. Watch the build logs. Within minutes, you should see the success screen!
                    </p>
                </section>
            </div>

            <div className="mt-16 flex justify-end border-t border-slate-200 pt-8">
                <Link
                    href="/phase-3-domain"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
                >
                    Next: Custom Domain <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
