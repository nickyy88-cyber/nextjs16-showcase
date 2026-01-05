"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft } from "lucide-react";

// Hardcoded exchange rates (relative to USD)
const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  CNY: 7.24,
  AUD: 1.53,
  CAD: 1.36,
  CHF: 0.88,
  HKD: 7.83,
  SGD: 1.34,
  INR: 83.12,
  KRW: 1320.5,
};

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", flag: "🇭🇰" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "🇰🇷" },
];

export default function ToolsPage() {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Calculate conversion
  const convertCurrency = () => {
    const amountNum = parseFloat(amount) || 0;
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    return (amountNum * rate).toFixed(2);
  };

  const result = convertCurrency();
  const rate = (exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <main className="min-h-screen bg-[#09090b] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Blurry Gradient Blob Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Currency Converter</h1>
          <p className="text-zinc-400 text-sm">Real-time exchange rates</p>
        </div>

        {/* Converter Card */}
        <Card className="bg-zinc-900/80 backdrop-blur-xl border-white/10 shadow-2xl p-8">
          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-zinc-400 mb-3">Amount</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="h-12 text-2xl font-semibold bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-violet-500 focus-visible:border-violet-500"
            />
          </div>

          {/* Currency Selection */}
          <div className="flex items-center gap-3 mb-8">
            {/* From Currency */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-zinc-400 mb-2">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full h-12 px-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white font-medium focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a1a1aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundPosition: "right 12px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "16px",
                }}
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-zinc-900">
                    {currency.flag} {currency.code}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              onClick={swapCurrencies}
              className="mt-6 w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
              aria-label="Swap currencies"
            >
              <ArrowRightLeft className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:rotate-180 transition-all duration-300" />
            </button>

            {/* To Currency */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-zinc-400 mb-2">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full h-12 px-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white font-medium focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a1a1aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundPosition: "right 12px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "16px",
                }}
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-zinc-900">
                    {currency.flag} {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result Display */}
          <div className="bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl p-6 text-center">
            <p className="text-white/70 text-sm mb-2">
              {amount} {fromCurrency} =
            </p>
            <p className="text-5xl font-bold text-white mb-2 tracking-tight">
              {currencies.find((c) => c.code === toCurrency)?.symbol} {result}
            </p>
            <p className="text-white/60 text-xs">
              1 {fromCurrency} = {rate} {toCurrency}
            </p>
          </div>

          {/* Note */}
          <p className="text-center text-xs text-zinc-400 mt-6">
            Demo rates for illustration purposes only
          </p>
        </Card>

        {/* Quick Conversions */}
        <div className="mt-6">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { from: "USD", to: "EUR", amount: "100" },
              { from: "GBP", to: "USD", amount: "50" },
              { from: "USD", to: "JPY", amount: "100" },
              { from: "EUR", to: "GBP", amount: "100" },
            ].map((conversion, index) => (
              <button
                key={index}
                onClick={() => {
                  setAmount(conversion.amount);
                  setFromCurrency(conversion.from);
                  setToCurrency(conversion.to);
                }}
                className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
              >
                {conversion.from} → {conversion.to}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
