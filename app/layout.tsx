import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deploy Flow: From Localhost to Live",
  description: "Internal team guide for deploying Next.js apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <div className="flex min-h-screen pl-64">
          <Sidebar />
          <main className="flex-1 overflow-y-auto w-full">
            <div className="mx-auto max-w-4xl px-8 py-12 space-y-8 animate-in fade-in duration-500">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
