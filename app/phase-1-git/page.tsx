import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Phase1Git() {
    return (
        <div className="max-w-3xl">
            <div className="mb-8">
                <div className="text-sm font-semibold text-teal-700 mb-2">Phase 1</div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    The Foundation (Git & GitHub)
                </h1>
                <p className="text-lg text-slate-600">
                    Before we can deploy, we need to get your local code safely into the
                    cloud.
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            1
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Prepare the Project
                        </h2>
                    </div>
                    <p className="pl-11 text-slate-600 mb-4">
                        Ensure you have a <code>.gitignore</code> file to prevent uploading
                        heavy <code>node_modules</code> or secret env keys.
                    </p>
                    <div className="pl-11">
                        <CodeBlock
                            filename=".gitignore"
                            code={`# dependencies
/node_modules
/.pnp
.pnp.js

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`}
                        />
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            2
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Local Initialization
                        </h2>
                    </div>
                    <p className="pl-11 text-slate-600 mb-4">
                        Initialize a new git repository in your project folder and stage your files.
                    </p>
                    <div className="pl-11">
                        <CodeBlock
                            code={`git init
git add .
git commit -m "Initial MVP commit"`}
                        />
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm">
                            3
                        </div>
                        <h2 className="text-2xl font-semibold text-slate-900 !mt-0 !mb-0">
                            Push to GitHub
                        </h2>
                    </div>
                    <p className="pl-11 text-slate-600 mb-4">
                        Create a new <strong>empty</strong> repository on GitHub (do not add README/license).
                        Then connect your local repo:
                    </p>
                    <div className="pl-11">
                        <CodeBlock
                            code={`git branch -M main
git remote add origin https://github.com/YOUR_ORG/YOUR_REPO.git
git push -u origin main`}
                        />
                    </div>
                </section>
            </div>

            <div className="mt-16 flex justify-end border-t border-slate-200 pt-8">
                <Link
                    href="/phase-2-vercel"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
                >
                    Next: Connect Vercel <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
