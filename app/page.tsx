import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BarChart3, CreditCard, FileText, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-900/50 border border-zinc-800 rounded-full">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-sm text-zinc-400">Powered by Next.js 16 & Tailwind 4</span>
            </div>

            {/* Main title - Gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                Creative Work
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
              A curated collection of modern web experiences. Built with Next.js 16, Tailwind 4, and shadcn/ui.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
            {/* Dashboard Card - Large */}
            <Link href="/demos/dashboard" className="md:col-span-2 md:row-span-2 group">
              <Card className="relative h-full bg-zinc-900/50 border-zinc-800 overflow-hidden hover:bg-zinc-900/70 hover:border-zinc-700 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
                {/* Card content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20">
                      <BarChart3 className="w-6 h-6 text-violet-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Simulated Chart UI */}
                  <div className="flex-1 flex items-end gap-1.5 mb-6 px-2">
                    {[
                      35, 55, 40, 70, 50, 85, 60, 90, 75, 95, 65, 80, 45, 60, 50, 70, 55, 85, 40, 65, 75, 90, 60, 80,
                    ].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-violet-600 to-cyan-400 rounded-t transition-all duration-300 group-hover:from-violet-500 group-hover:to-cyan-300"
                        style={{ height: `${height}%`, opacity: 0.3 + (height / 100) * 0.7 }}
                      />
                    ))}
                  </div>

                  {/* Chart line overlay */}
                  <svg className="absolute bottom-20 left-8 right-8 h-24 opacity-30" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path
                      d="M0,80 Q50,60 100,50 T200,30 T300,45 T400,20"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="3"
                      className="group-hover:opacity-50 transition-opacity"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Text */}
                  <div className="relative z-10">
                    <h2 className="text-2xl font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                      AI Analytics Dashboard
                    </h2>
                    <p className="text-zinc-400 text-sm">Real-time data visualization with Recharts</p>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            </Link>

            {/* Fintech Card */}
            <Link href="/demos/fintech" className="group">
              <Card className="relative h-full bg-zinc-900/50 border-zinc-800 overflow-hidden hover:bg-zinc-900/70 hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                <div className="relative h-full p-6 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <CreditCard className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-zinc-800/50 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Glassmorphism Credit Card */}
                  <div className="flex-1 flex items-center justify-center mb-4 perspective-1000">
                    <div className="relative w-full max-w-[200px] aspect-[1.586] bg-gradient-to-br from-violet-600/30 via-indigo-600/20 to-fuchsia-600/30 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-2xl rotate-[-12deg] group-hover:scale-110 group-hover:rotate-[-8deg] transition-all duration-500">
                      {/* Chip */}
                      <div className="w-12 h-9 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 rounded-md mb-4 border border-yellow-500/30 shadow-inner">
                        <div className="w-full h-full rounded-[2px] border border-yellow-600/20" />
                        {/* Chip lines */}
                        <div className="absolute inset-1.5">
                          <div className="w-full h-px bg-yellow-700/40 mb-1" />
                          <div className="w-full h-px bg-yellow-700/40" />
                        </div>
                      </div>

                      {/* Contactless icon */}
                      <div className="absolute top-5 right-5 w-6 h-5">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-white/50" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3m0 6c.5 1 1 1.62 1 3a2.5 2.5 0 0 1-4.5 2M12 12h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>

                      {/* Card number lines */}
                      <div className="flex gap-1.5 mb-4">
                        <div className="h-1.5 flex-1 bg-white/20 rounded" />
                        <div className="h-1.5 flex-1 bg-white/20 rounded" />
                        <div className="h-1.5 flex-1 bg-white/20 rounded" />
                        <div className="h-1.5 w-6 bg-white/20 rounded" />
                      </div>

                      {/* Card holder */}
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="h-1 w-16 bg-white/30 rounded mb-1" />
                          <div className="h-1 w-10 bg-white/15 rounded" />
                        </div>
                        {/* Network logo */}
                        <div className="w-8 h-6 bg-gradient-to-br from-white/20 to-white/5 rounded flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white/40 italic">VISA</span>
                        </div>
                      </div>

                      {/* Glossy overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      Quantum Cloud
                    </h2>
                    <p className="text-zinc-400 text-xs">Stripe-style landing page</p>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            </Link>

            {/* Tools Card */}
            <Link href="/demos/tools" className="group">
              <Card className="relative h-full bg-zinc-900/50 border-zinc-800 overflow-hidden hover:bg-zinc-900/70 hover:border-zinc-700 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
                <div className="relative h-full p-6 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-violet-500/10 rounded-xl border border-violet-500/20">
                      <FileText className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-zinc-800/50 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Micro Converter UI */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    {/* Blurry glow */}
                    <div className="absolute w-40 h-40 bg-blue-500/30 rounded-full blur-2xl" />

                    {/* Converter Panel */}
                    <div className="relative bg-zinc-900 rounded-xl p-4 shadow-2xl border border-zinc-700/50">
                      {/* Input */}
                      <div className="h-8 bg-zinc-800 rounded-lg border border-zinc-700 px-3 flex items-center mb-3">
                        <span className="text-xs text-zinc-400">$</span>
                        <div className="ml-2 flex-1 h-2 bg-zinc-600 rounded" />
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center mb-3">
                        <div className="w-8 h-8 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center">
                          <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>

                      {/* Button */}
                      <div className="h-9 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <span className="text-xs font-semibold text-white">Convert</span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                      Currency Converter
                    </h2>
                    <p className="text-zinc-400 text-xs">Minimalist utility tool</p>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">
            Built with{" "}
            <span className="text-zinc-400">Next.js 16</span>
            {" · "}
            <span className="text-zinc-400">Tailwind 4</span>
            {" · "}
            <span className="text-zinc-400">shadcn/ui</span>
          </p>
          <p className="text-xs text-zinc-400">© 2026 Portfolio Showcase. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
