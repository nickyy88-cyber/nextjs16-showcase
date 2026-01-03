"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Hardcoded data for charts
const growthData = [
  { month: "Jan", revenue: 45000, users: 3200, aiPredictions: 41000 },
  { month: "Feb", revenue: 52000, users: 3800, aiPredictions: 49000 },
  { month: "Mar", revenue: 48000, users: 4200, aiPredictions: 52000 },
  { month: "Apr", revenue: 61000, users: 5100, aiPredictions: 59000 },
  { month: "May", revenue: 58000, users: 5600, aiPredictions: 62000 },
  { month: "Jun", revenue: 72000, users: 6400, aiPredictions: 71000 },
  { month: "Jul", revenue: 85000, users: 7200, aiPredictions: 84000 },
  { month: "Aug", revenue: 91000, users: 8100, aiPredictions: 92000 },
  { month: "Sep", revenue: 88000, users: 8800, aiPredictions: 95000 },
  { month: "Oct", revenue: 105000, users: 9600, aiPredictions: 108000 },
  { month: "Nov", revenue: 112000, users: 10400, aiPredictions: 115000 },
  { month: "Dec", revenue: 128000, users: 11200, aiPredictions: 132000 },
];

const aiAccuracyData = [
  { model: "GPT-5.1", accuracy: 98.2, latency: 0.025 },
  { model: "Claude 4.5", accuracy: 99.1, latency: 0.02 },
  { model: "Gemini 3", accuracy: 97.5, latency: 0.03 },
  { model: "DeepSeek", accuracy: 96.8, latency: 0.015 },
];

const sidebarNav = [
  { name: "Dashboard", icon: "layout", active: true },
  { name: "Analytics", icon: "chart", active: false },
  { name: "AI Models", icon: "brain", active: false },
  { name: "Predictions", icon: "sparkles", active: false },
  { name: "Reports", icon: "document", active: false },
  { name: "Settings", icon: "cog", active: false },
];

const statsCards = [
  {
    label: "Total Revenue",
    value: "$984,254",
    change: "+24.5%",
    positive: true,
    icon: "dollar",
    gradient: "from-emerald-500 to-teal-500",
    sparkline: [30, 45, 40, 60, 55, 75, 70, 85, 80, 95],
  },
  {
    label: "Active Users",
    value: "24,847",
    change: "+18.2%",
    positive: true,
    icon: "users",
    gradient: "from-blue-500 to-cyan-500",
    sparkline: [50, 55, 60, 58, 65, 70, 68, 75, 80, 85],
  },
  {
    label: "AI Predictions",
    value: "1.2M",
    change: "+32.8%",
    positive: true,
    icon: "sparkles",
    gradient: "from-violet-500 to-purple-500",
    sparkline: [20, 35, 45, 40, 60, 55, 75, 70, 90, 95],
  },
  {
    label: "Accuracy Rate",
    value: "99.1%",
    change: "+2.3%",
    positive: true,
    icon: "target",
    gradient: "from-orange-500 to-amber-500",
    sparkline: [94, 95, 94, 96, 97, 96, 98, 97, 99, 99],
  },
];

export default function DashboardPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("12M");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex overflow-hidden">
      {/* Sidebar - Hidden on mobile, visible on md+ */}
      <aside className={`hidden md:flex w-64 bg-slate-900/50 border-r border-slate-800 flex-col fixed md:relative h-full z-50 ${mobileMenuOpen ? 'flex' : ''}`}>
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-white">AI Analytics</h1>
              <p className="text-xs text-slate-400">Dashboard v2.0</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarNav.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-400 border border-violet-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {item.icon === "layout" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              )}
              {item.icon === "chart" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )}
              {item.icon === "brain" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
              {item.icon === "sparkles" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              )}
              {item.icon === "document" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {item.icon === "cog" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
              AI
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-slate-400 truncate">admin@ai-analytics.io</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full min-w-0">
        {/* Top Header */}
        <header className="bg-slate-900/30 border-b border-slate-800 sticky top-0 z-30 backdrop-blur-xl">
          <div className="px-4 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="min-w-0">
                <h2 className="text-xl md:text-2xl font-bold text-white truncate">AI Analytics Dashboard</h2>
                <p className="text-sm text-slate-400 mt-0.5 md:mt-1 hidden sm:block">Real-time insights powered by machine learning</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              <div className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-400 font-medium">AI Online</span>
              </div>
              <button className="p-2 md:p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {/* Stats Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-6 md:mb-8">
            {statsCards.map((stat, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-2xl p-4 md:p-6 border border-slate-800 hover:border-slate-700 transition-all group overflow-hidden"
              >
                {/* Background gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />

                {/* Sparkline - Background */}
                <svg className="absolute bottom-0 left-0 right-0 h-20 opacity-20" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path
                    d={`M0,${40 - stat.sparkline[0] * 0.4} ${stat.sparkline.map((v, i) => `L${i * 11.1},${40 - v * 0.4}`).join(" ")}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="text-white"
                  />
                  <defs>
                    <linearGradient id={`sparkline-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="white" stopOpacity={0.1} />
                      <stop offset="100%" stopColor="white" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M0,${40 - stat.sparkline[0] * 0.4} ${stat.sparkline.map((v, i) => `L${i * 11.1},${40 - v * 0.4}`).join(" ")}`}
                    fill="none"
                    stroke={`url(#sparkline-${index})`}
                    strokeWidth={3}
                  />
                </svg>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 md:p-3 bg-gradient-to-br ${stat.gradient} rounded-xl`}>
                      {stat.icon === "dollar" && (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {stat.icon === "users" && (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      {stat.icon === "sparkles" && (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                      {stat.icon === "target" && (
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`inline-flex items-center text-xs md:text-sm font-medium ${
                        stat.positive ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {stat.positive ? (
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 mb-1">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Main Growth Chart */}
            <section className="lg:col-span-2 bg-slate-900/50 rounded-2xl p-4 md:p-6 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Growth Analytics</h3>
                  <p className="text-sm text-slate-400">Revenue vs AI Predictions</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["3M", "6M", "12M", "ALL"].map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedTimeRange(range)}
                      className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedTimeRange === range
                          ? "bg-violet-500 text-white"
                          : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorPredictions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #334155",
                        borderRadius: "12px",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10b981"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                      name="Actual Revenue"
                    />
                    <Area
                      type="monotone"
                      dataKey="aiPredictions"
                      stroke="#8b5cf6"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorPredictions)"
                      strokeDasharray="5 5"
                      name="AI Predictions"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* AI Model Performance */}
            <section className="bg-slate-900/50 rounded-2xl p-4 md:p-6 border border-slate-800">
              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-white">AI Model Performance</h3>
                <p className="text-sm text-slate-400">Accuracy & Latency</p>
              </div>

              <div className="w-full h-[250px] md:h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={aiAccuracyData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis type="number" stroke="#64748b" />
                    <YAxis dataKey="model" type="category" stroke="#64748b" width={70} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #334155",
                        borderRadius: "12px",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Line dataKey="accuracy" stroke="#10b981" strokeWidth={3} name="Accuracy %" />
                    <Line dataKey="latency" stroke="#f59e0b" strokeWidth={3} name="Latency (s)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Model Status */}
              <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                {aiAccuracyData.map((model, index) => (
                  <div key={index} className="flex items-center justify-between p-2 md:p-3 bg-slate-800/50 rounded-xl">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          index === 0
                            ? "bg-emerald-400"
                            : index === 1
                            ? "bg-orange-400"
                            : index === 2
                            ? "bg-blue-400"
                            : "bg-purple-400"
                        }`}
                      />
                      <span className="text-xs md:text-sm text-white truncate">{model.model}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 shrink-0">
                      <span className="text-xs md:text-sm text-emerald-400">{model.accuracy}%</span>
                      <span className="text-xs md:text-sm text-slate-400 hidden sm:inline">{model.latency * 1000}ms</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom Section: Table + System Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            {/* Recent Inferences Table */}
            <section className="lg:col-span-2">
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
                <div className="p-4 md:p-6 border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-white">Recent Inferences</h3>
                    <button className="text-sm text-slate-400 hover:text-white transition-colors">
                      View All
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Request ID
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Model
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 md:px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Tokens
                        </th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Latency
                        </th>
                        <th className="px-4 md:px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Cost
                        </th>
                        <th className="px-4 md:px-6 py-3 text-center text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {[
                        {
                          id: "req_8x9s2k4n",
                          model: "GPT-5.1 Turbo",
                          modelDot: "bg-emerald-500",
                          status: "Success",
                          statusVariant: "default",
                          tokens: "4,021",
                          latency: 25,
                          latencyColor: "text-emerald-400",
                          cost: "$0.048",
                        },
                        {
                          id: "req_7m8k5p9l",
                          model: "Claude 4.5",
                          modelDot: "bg-orange-500",
                          status: "Success",
                          statusVariant: "default",
                          tokens: "2,847",
                          latency: 20,
                          latencyColor: "text-emerald-400",
                          cost: "$0.032",
                        },
                        {
                          id: "req_6h2f3k8m",
                          model: "Gemini 3",
                          modelDot: "bg-blue-500",
                          status: "Failed",
                          statusVariant: "destructive",
                          tokens: "1,256",
                          latency: 89,
                          latencyColor: "text-red-400",
                          cost: "$0.002",
                        },
                        {
                          id: "req_5k4h7j9n",
                          model: "GPT-5.1 Turbo",
                          modelDot: "bg-teal-500",
                          status: "Success",
                          statusVariant: "default",
                          tokens: "1,102",
                          latency: 12,
                          latencyColor: "text-emerald-400",
                          cost: "$0.002",
                        },
                        {
                          id: "req_4j1g6f8k",
                          model: "DeepSeek",
                          modelDot: "bg-purple-500",
                          status: "Success",
                          statusVariant: "default",
                          tokens: "8,456",
                          latency: 15,
                          latencyColor: "text-emerald-400",
                          cost: "$0.125",
                        },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-slate-800/50 transition-colors">
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                            <code className="text-xs font-mono text-slate-400">{row.id}</code>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${row.modelDot}`} />
                              <span className="text-sm text-white">{row.model}</span>
                            </div>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2 py-1 md:px-2.5 md:py-1 rounded-full text-xs font-medium ${
                                row.statusVariant === "default"
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : "bg-red-500/10 text-red-400"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-right">
                            <span className="text-sm text-slate-300 font-mono">{row.tokens}</span>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                            <span className={`text-sm font-mono ${row.latencyColor}`}>
                              {row.latency}ms
                            </span>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-right">
                            <span className="text-sm text-slate-300 font-mono">{row.cost}</span>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-center">
                            <button className="text-slate-400 hover:text-white transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* System Logs */}
            <section>
              <div className="bg-black rounded-2xl border border-slate-800 overflow-hidden">
                <div className="p-3 md:p-4 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <h3 className="text-xs md:text-sm font-semibold text-white">System Logs</h3>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">LIVE</span>
                </div>

                <div className="p-3 md:p-4 h-[350px] md:h-[400px] overflow-hidden font-mono text-[10px] md:text-xs space-y-1 md:space-y-1.5">
                  <div className="text-emerald-400">
                    <span className="text-slate-500">[SYSTEM]</span> <span className="text-slate-400">14:20:01</span> - Initializing DeepSeek-V3.2 MoE routing...
                  </div>
                  <div className="text-blue-400">
                    <span className="text-slate-500">[INFO]</span> <span className="text-slate-400">14:20:02</span> - Loading GPT-5.1 context window (128k)...
                  </div>
                  <div className="text-green-400">
                    <span className="text-slate-500">[SUCCESS]</span> <span className="text-slate-400">14:20:03</span> - Gemini 3 multimodal inference: OK
                  </div>
                  <div className="text-yellow-400">
                    <span className="text-slate-500">[WARN]</span> <span className="text-slate-400">14:20:05</span> - Claude 4.5 thinking budget exceeded
                  </div>
                  <div className="text-cyan-400">
                    <span className="text-slate-500">[SCALE]</span> <span className="text-slate-400">14:20:08</span> - Switched to DeepSeek for speed
                  </div>
                  <div className="text-slate-400">
                    <span className="text-slate-600">[DEBUG]</span> <span className="text-slate-500">14:20:09</span> - MoE experts: 8/32
                  </div>
                  <div className="text-emerald-400">
                    <span className="text-slate-500">[INFO]</span> <span className="text-slate-400">14:20:12</span> - Routing complete. 15ms
                  </div>
                  <div className="text-blue-400">
                    <span className="text-slate-500">[INFO]</span> <span className="text-slate-400">14:20:15</span> - Pool: 4 active, 2 standby
                  </div>
                  <div className="text-purple-400">
                    <span className="text-slate-500">[METRICS]</span> <span className="text-slate-400">14:20:18</span> - P95: 18ms | P99: 24ms
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
