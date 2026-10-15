"use client";

import React from "react";
import { Sparkles, DollarSign, BarChart3, Users, Repeat, Flame } from "lucide-react";

export default function MetricsTicker() {
  const stats = [
    {
      icon: DollarSign,
      value: "$48.5M+",
      label: "Attributed Revenue Generated",
      subtext: "Across International D2C & SaaS Portfolios",
    },
    {
      icon: BarChart3,
      value: "4.82x",
      label: "Average Blended ROAS",
      subtext: "Multi-channel Paid Social & Search",
    },
    {
      icon: Flame,
      value: "22.4M+",
      label: "Organic & Viral Impressions",
      subtext: "Creator Seeding & PR Gifting Blitz",
    },
    {
      icon: Repeat,
      value: "38.4%",
      label: "Repeat Customer Rate",
      subtext: "Automated Klaviyo & Lifecycle Flows",
    },
    {
      icon: Users,
      value: "150K+",
      label: "SaaS Subscriptions Scaled",
      subtext: "Product-Led Inbound Conversion",
    },
  ];

  return (
    <section className="relative py-10 bg-white border-y border-[#FBCFE8]/60 shadow-[0_4px_25px_-5px_rgba(244,114,182,0.1)]">
      {/* Decorative Sparkle Ticker Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-8 text-center">
          <Sparkles className="w-4 h-4 text-[#DB2777]" />
          <span className="text-xs uppercase tracking-widest font-bold text-[#9D174D]">
            Verified Impact Across International Brand Engagements
          </span>
          <Sparkles className="w-4 h-4 text-[#DB2777]" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-[#FFF5F8] to-[#FFF0F5] border border-[#FCE7F3] hover:border-[#F472B6]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
              >
                <div className="w-9 h-9 mx-auto rounded-full bg-white flex items-center justify-center shadow-xs mb-3 text-[#DB2777] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#831843] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#3B1126] mt-1 leading-snug">
                  {stat.label}
                </div>
                <div className="text-[10px] text-[#9D174D]/70 mt-1 font-medium leading-relaxed">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
