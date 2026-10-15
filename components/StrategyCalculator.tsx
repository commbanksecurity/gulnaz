"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Calculator, ArrowRight, TrendingUp, Zap, Heart } from "lucide-react";

export default function StrategyCalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(35000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.1);
  const [emailListSize, setEmailListSize] = useState<number>(25000);

  // Calculations
  const targetRoas = Math.min(Number((currentRoas * 1.85).toFixed(2)), 5.2);
  const currentMonthlyRevenue = monthlySpend * currentRoas;
  const projectedMonthlyRevenue = monthlySpend * targetRoas;
  const acquisitionGain = projectedMonthlyRevenue - currentMonthlyRevenue;

  // Retention lift from list optimization ($0.80 per subscriber incremental per month)
  const retentionGain = emailListSize * 0.95;
  const totalMonthlyLift = acquisitionGain + retentionGain;
  const estimatedQuarterlyLift = totalMonthlyLift * 3;

  const handleConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#DB2777", "#EC4899", "#F472B6", "#FDE047", "#FFE4EC"],
    });
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FFF5F8] to-[#FFF0F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F472B6]/40 text-xs font-bold text-[#B31B50] shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Interactive Growth Modeling</span>
            <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1126] tracking-tight">
            Simulate Your Brand&apos;s{" "}
            <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
              Growth Potential
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B2447] font-normal leading-relaxed">
            See how full-funnel creative testing, attribution overhaul, and retention architecture can unlock hidden profit margins in your marketing engine.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl border border-[#FBCFE8] shadow-[0_20px_50px_-10px_rgba(244,114,182,0.25)] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Monthly Ad Spend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="ad-spend-range" className="font-bold text-[#4A152E]">
                    Monthly Paid Media Spend:
                  </label>
                  <span className="font-serif font-bold text-lg text-[#DB2777] bg-[#FFF0F5] px-3 py-0.5 rounded-full border border-[#FBCFE8]">
                    ${monthlySpend.toLocaleString()}
                  </span>
                </div>
                <input
                  id="ad-spend-range"
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#FCE7F3] rounded-lg appearance-none cursor-pointer accent-[#DB2777]"
                />
                <div className="flex justify-between text-[11px] text-[#9D174D]/70 font-medium">
                  <span>$5,000</span>
                  <span>$100,000</span>
                  <span>$200,000+</span>
                </div>
              </div>

              {/* Slider 2: Current Blended ROAS */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="current-roas-range" className="font-bold text-[#4A152E]">
                    Current Blended ROAS:
                  </label>
                  <span className="font-serif font-bold text-lg text-[#DB2777] bg-[#FFF0F5] px-3 py-0.5 rounded-full border border-[#FBCFE8]">
                    {currentRoas.toFixed(1)}x
                  </span>
                </div>
                <input
                  id="current-roas-range"
                  type="range"
                  min="1.0"
                  max="3.5"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#FCE7F3] rounded-lg appearance-none cursor-pointer accent-[#DB2777]"
                />
                <div className="flex justify-between text-[11px] text-[#9D174D]/70 font-medium">
                  <span>1.0x (Struggling)</span>
                  <span>2.2x (Average)</span>
                  <span>3.5x (Healthy)</span>
                </div>
              </div>

              {/* Slider 3: Email Subscribers */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="email-subs-range" className="font-bold text-[#4A152E]">
                    Email / SMS Community Size:
                  </label>
                  <span className="font-serif font-bold text-lg text-[#DB2777] bg-[#FFF0F5] px-3 py-0.5 rounded-full border border-[#FBCFE8]">
                    {emailListSize.toLocaleString()} contacts
                  </span>
                </div>
                <input
                  id="email-subs-range"
                  type="range"
                  min="2000"
                  max="150000"
                  step="2000"
                  value={emailListSize}
                  onChange={(e) => setEmailListSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#FCE7F3] rounded-lg appearance-none cursor-pointer accent-[#DB2777]"
                />
                <div className="flex justify-between text-[11px] text-[#9D174D]/70 font-medium">
                  <span>2,000</span>
                  <span>75,000</span>
                  <span>150,000+</span>
                </div>
              </div>
            </div>

            {/* Projected Outputs Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF0F5] via-[#FFE4EC] to-[#FFF5F8] p-6 sm:p-7 rounded-3xl border border-[#F472B6]/60 shadow-md space-y-5 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9D174D]">
                <Zap className="w-4 h-4 text-[#DB2777]" />
                <span>Estimated Value Unlocked</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-medium text-[#702447]">
                  Projected 90-Day Incremental Revenue
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#831843]">
                  +${Math.round(estimatedQuarterlyLift).toLocaleString()}
                </div>
                <div className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block border border-emerald-200">
                  Target ROAS: {targetRoas}x (from {currentRoas.toFixed(1)}x)
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#FBCFE8]/80 text-left text-xs">
                <div className="flex justify-between text-[#5A1C39]">
                  <span>Paid Acquisition Lift / mo:</span>
                  <span className="font-bold text-[#831843]">
                    +${Math.round(acquisitionGain).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-[#5A1C39]">
                  <span>Klaviyo VIP Retention Lift / mo:</span>
                  <span className="font-bold text-[#831843]">
                    +${Math.round(retentionGain).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleConfetti}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#DB2777] via-[#EC4899] to-[#F472B6] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Celebrate Growth Sparkle ✨</span>
              </button>

              <p className="text-[10px] text-[#831843]/80 italic">
                *Projections derived from verified performance benchmarks across Gul Naz Bibi Gul Naz Bibi&apos;s international brand portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
