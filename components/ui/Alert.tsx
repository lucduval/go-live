import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertProps {
    type?: "info" | "success" | "warning" | "error";
    title: string;
    children: React.ReactNode;
}

const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: XCircle,
};

const styles = {
    info: "bg-blue-50 text-blue-900 border-blue-200",
    success: "bg-teal-50 text-teal-900 border-teal-200",
    warning: "bg-amber-50 text-amber-900 border-amber-200",
    error: "bg-red-50 text-red-900 border-red-200",
};

const iconStyles = {
    info: "text-blue-600",
    success: "text-teal-600",
    warning: "text-amber-600",
    error: "text-red-600",
};

export function Alert({ type = "info", title, children }: AlertProps) {
    const Icon = icons[type];

    return (
        <div className={cn("rounded-lg border p-4", styles[type])}>
            <div className="flex items-start gap-4">
                <Icon className={cn("h-5 w-5 mt-0.5", iconStyles[type])} />
                <div className="flex-1">
                    <h5 className="font-semibold mb-1 leading-none tracking-tight">
                        {title}
                    </h5>
                    <div className="text-sm opacity-90 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
