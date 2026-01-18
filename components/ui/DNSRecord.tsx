"use client";

import { Copy, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DNSRecordProps {
    type: string;
    name: string;
    value: string;
}

export function DNSRecord({ type, name, value }: DNSRecordProps) {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                    <Globe className="h-5 w-5 text-slate-500" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold uppercase text-slate-500">
                            {type}
                        </span>
                        <span className="font-medium text-slate-900">{name}</span>
                    </div>
                    <div className="font-mono text-sm text-slate-600">{value}</div>
                </div>
            </div>
            <button
                onClick={onCopy}
                className="rounded-md border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                title="Copy Value"
            >
                <Copy className={cn("h-4 w-4", copied && "text-teal-600")} />
            </button>
        </div>
    );
}
