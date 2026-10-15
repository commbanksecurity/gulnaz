"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Globe2,
  Mail,
  Copy,
  Check,
  Award,
  Zap,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "gulnaz18759@outlook.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FFF5F8] via-[#FFF0F5] to-[#FFF8FA]">
      {/* Decorative Pastel & Rose Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#FBCFE8]/40 via-[#F472B6]/20 to-[#FDE047]/20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#FFE4EC] rounded-full blur-2xl opacity-60 pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#FCE7F3] rounded-full blur-2xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Girly Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Chic Girly Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#F472B6]/40 shadow-xs text-xs sm:text-sm font-semibold text-[#B31B50]">
              <span className="flex h-2 w-2 rounded-full bg-[#EC4899] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
              <span>International Growth Marketing &amp; Brand Advisory</span>
              <span className="text-[#F472B6]">💖</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#331122] leading-[1.12]">
              Scaling Iconic{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
                  Global Brands
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#F472B6]/50"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 2 180 2 247 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              With Data Rigor &amp; High-Glamour Creative.
            </h1>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg text-[#612444] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I collaborate with forward-thinking founders and global marketing leaders to craft multi-million dollar acquisition funnels, viral creator engines, and high-LTV retention ecosystems—without sacrificing refined luxury aesthetics.
            </p>

            {/* Strategist Identification & Quick Contact Pill */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-[#FBCFE8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#DB2777] to-[#FDE047] p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-[#FFF0F5] rounded-full flex items-center justify-center font-serif font-bold text-[#831843] text-sm">
                    GN
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase font-bold tracking-wider text-[#9D174D]">
                    Direct Strategist Desk
                  </div>
                  <div className="font-serif font-bold text-[#3B1126] text-sm sm:text-base">
                    Gul Naz Bibi Gul Naz Bibi
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFF0F5] hover:bg-[#FFE4EC] text-[#9D174D] border border-[#F472B6]/40 text-xs font-semibold transition-all group"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Email Copied! ✨</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-[#DB2777] group-hover:scale-110 transition-transform" />
                    <span>gulnaz18759@outlook.com</span>
                    <Copy className="w-3 h-3 text-[#DB2777]/60" />
                  </>
                )}
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#DB2777] via-[#EC4899] to-[#F472B6] text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(219,39,119,0.35)] hover:shadow-[0_12px_32px_rgba(219,39,119,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Global Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#9D174D] border border-[#F472B6]/50 font-semibold text-sm sm:text-base hover:bg-[#FFF0F5] hover:border-[#DB2777] transition-all shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#DB2777]" />
                <span>Calculate Your Growth Lift</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#702447] font-medium">
              <div className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#DB2777]" />
                <span>International Client Portfolios</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#DB2777]" />
                <span>Top 1% Blended Performance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#DB2777]" />
                <span>Omnichannel Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glamourous Dashboard Mockup & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Frosted Luxury Card */}
              <div className="relative z-10 bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-[#FBCFE8] shadow-[0_20px_50px_-15px_rgba(244,114,182,0.3)] space-y-6">
                {/* Header of Card */}
                <div className="flex items-center justify-between border-b border-[#FCE7F3] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#DB2777] to-[#F472B6] flex items-center justify-center text-white shadow-md">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#9D174D]">
                        Growth Engine
                      </div>
                      <div className="text-sm font-serif font-bold text-[#3B1126]">
                        Global Campaign Portfolio
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                    +716% ARR Lift
                  </span>
                </div>

                {/* Stat Grid */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#FBCFE8]/60 space-y-1">
                    <div className="text-[11px] font-medium text-[#831843]/80">
                      Total Revenue Scaled
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#831843]">
                      $48.5M+
                    </div>
                    <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span>↑ Verified Attribution</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#FBCFE8]/60 space-y-1">
                    <div className="text-[11px] font-medium text-[#831843]/80">
                      Blended ROAS
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#831843]">
                      4.82x
                    </div>
                    <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span>↑ Across Meta &amp; TikTok</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#FBCFE8]/60 space-y-1">
                    <div className="text-[11px] font-medium text-[#831843]/80">
                      Viral Creator Views
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#831843]">
                      22.4M+
                    </div>
                    <div className="text-[10px] text-pink-600 font-semibold flex items-center gap-1">
                      <span>✨ Organic PR Seeding</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#FBCFE8]/60 space-y-1">
                    <div className="text-[11px] font-medium text-[#831843]/80">
                      Repeat Customer Rate
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#831843]">
                      38.4%
                    </div>
                    <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span>↑ Klaviyo Lifecycle</span>
                    </div>
                  </div>
                </div>

                {/* Chic Mini Chart Preview */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFE4EC]/50 to-[#FFF0F5] border border-[#FBCFE8] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#831843]">
                      Monthly Scaling Trajectory
                    </span>
                    <span className="font-bold text-[#DB2777]">Sustained 4.8x ROAS</span>
                  </div>
                  {/* Visual Bar Graph */}
                  <div className="flex items-end gap-2 h-20 pt-2">
                    {[
                      { month: "M1", height: "h-6", label: "$120k" },
                      { month: "M3", height: "h-9", label: "$280k" },
                      { month: "M6", height: "h-12", label: "$450k" },
                      { month: "M9", height: "h-15", label: "$680k" },
                      { month: "M12", height: "h-20", label: "$980k" },
                    ].map((item, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className={`w-full ${item.height} rounded-t-lg bg-gradient-to-t from-[#DB2777] to-[#F472B6] shadow-xs relative group cursor-pointer transition-all hover:brightness-110`}
                        />
                        <span className="text-[10px] font-medium text-[#9D174D]/80">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Quote Pill */}
                <div className="flex items-center gap-3 pt-1 text-xs text-[#831843] bg-white/70 p-3 rounded-xl border border-[#FCE7F3]">
                  <Sparkles className="w-4 h-4 text-[#DB2777] flex-shrink-0" />
                  <p className="italic text-[11px]">
                    &ldquo;Gul Naz Bibi Gul Naz Bibi generated 3 consecutive sold-out drops in under 48 hours for our luxury atelier.&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating Badge Top-Right */}
              <div className="absolute -top-5 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#F472B6]/40 shadow-lg flex items-center gap-2.5 animate-float">
                <span className="text-xl">🌸</span>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#DB2777]">
                    Current Status
                  </div>
                  <div className="text-xs font-bold text-[#4A152E]">
                    Booking International Retainers
                  </div>
                </div>
              </div>

              {/* Floating Badge Bottom-Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#F472B6]/40 shadow-lg flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
                  💎
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#831843]">
                    180+ Global
                  </div>
                  <div className="text-xs font-bold text-[#4A152E]">
                    Campaigns Executed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
