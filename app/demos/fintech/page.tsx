import { Infinity, Shield, Zap, ArrowRight } from "lucide-react";

export default function FintechPage() {
  const features = [
    {
      icon: Infinity,
      title: "Infinite Scale",
      description: "Auto-scaling infrastructure that grows with your business. Zero downtime, from startup to enterprise.",
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Post-quantum cryptography protects your data. Bank-grade encryption meets military-level protocols.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Global edge network delivers sub-millisecond latency. Your data, everywhere, instantly.",
    },
  ];

  const stats = [
    { value: "99.999%", label: "Uptime SLA" },
    { value: "50ms", label: "Global Latency" },
    { value: "150+", label: "Edge Locations" },
    { value: "$0", label: "Egress Fees" },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-0 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">Now in General Availability</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Engineered for the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              impossible
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            The next generation of cloud infrastructure. Built for developers who refuse to compromise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-colors">
              Start Building Free
            </button>
            <button className="px-8 py-3 text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-white/10">
                  <feature.icon className="w-7 h-7 text-violet-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-zinc-900/50 border border-white/10 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to go quantum?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
                Join thousands of developers building the future. Start free, scale infinitely.
              </p>
              <button className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-colors">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">Q</span>
            </div>
            <span className="text-white font-medium">Quantum Cloud</span>
          </div>
          <p className="text-sm text-zinc-600">© 2026 Quantum Cloud. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
