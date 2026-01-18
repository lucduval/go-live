import { Alert } from "@/components/ui/Alert";
import { DNSRecord } from "@/components/ui/DNSRecord";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Phase3Domain() {
    return (
        <div className="max-w-3xl">
            <div className="mb-8">
                <div className="text-sm font-semibold text-teal-700 mb-2">Phase 3</div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Professional Polish (Custom Domain)
                </h1>
                <p className="text-lg text-slate-600">
                    Moving from <code>project-name.vercel.app</code> to <code>your-brand.com</code> establishes trust.
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            1
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Vercel Settings
                        </h2>
                    </div>
                    <p className="pl-11 text-slate-600 mb-4">
                        In your Vercel Project dashboard, go to <strong>Settings</strong> → <strong>Domains</strong>.
                    </p>
                    <ul className="pl-11 list-disc list-inside text-slate-600 space-y-2 mb-4">
                        <li>Type in your domain (e.g., <code>coolapp.com</code>).</li>
                        <li>Click <strong>Add</strong>.</li>
                        <li>Vercel will show an "Invalid Configuration" error. This is normal.</li>
                    </ul>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            2
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            DNS Configuration
                        </h2>
                    </div>
                    <p className="pl-11 text-slate-600 mb-4">
                        Log into your registrar (GoDaddy, Namecheap, etc.) and add these two records to point to Vercel:
                    </p>
                    <div className="pl-11 space-y-4">
                        <DNSRecord type="A" name="@" value="76.76.21.21" />
                        <DNSRecord type="CNAME" name="www" value="cname.vercel-dns.com" />
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            3
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Verification
                        </h2>
                    </div>
                    <div className="pl-11">
                        <Alert type="info" title="Propagation Time">
                            DNS changes can take up to 24 hours to propagate globally,
                            though it often happens in minutes.
                        </Alert>
                        <p className="text-slate-600 mt-4">
                            Return to the Vercel Domains tab. Once the records are found,
                            the error will turn into a green success checkmark. Your site is live!
                        </p>
                    </div>
                </section>
            </div>

            <div className="mt-16 flex justify-end border-t border-slate-200 pt-8">
                <Link
                    href="/phase-4-workflow"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
                >
                    Next: The Workflow Loop <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
