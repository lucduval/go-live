"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
    showLineNumbers?: boolean;
}

export function CodeBlock({
    code,
    language = "bash",
    filename,
    showLineNumbers = false,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-sm dark:border-slate-800">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-400/20 ring-1 ring-red-400/50" />
                        <div className="h-3 w-3 rounded-full bg-amber-400/20 ring-1 ring-amber-400/50" />
                        <div className="h-3 w-3 rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/50" />
                    </div>
                    {filename && (
                        <span className="ml-2 text-xs font-medium text-slate-400">
                            {filename}
                        </span>
                    )}
                </div>
                <button
                    onClick={onCopy}
                    className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-white/20 transition-colors"
                >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
            <div className="overflow-x-auto p-4">
                <pre className="font-mono text-sm leading-relaxed text-slate-50">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
