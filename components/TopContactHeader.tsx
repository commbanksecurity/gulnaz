"use client";

import React, { useState } from "react";
import { Sparkles, Mail, Check, Copy, Heart, Globe, ArrowUpRight } from "lucide-react";

export default function TopContactHeader() {
  const [copied, setCopied] = useState(false);
  const email = "gulnaz18759@outlook.com";
  const fullName = "Gul Naz Bibi Gul Naz Bibi";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <aside aria-label="Official Contact Banner" className="relative z-50 bg-gradient-to-r from-[#FFE5EC] via-[#FFF0F5] to-[#FFE8F2] border-b border-[#FBCFE8]/80 py-2.5 px-4 shadow-[0_2px_15px_-4px_rgba(244,114,182,0.18)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center">
        {/* Availability Pill */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#F472B6]/30 text-[11px] font-semibold text-[#B31B50] shadow-sm tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D32A66]"></span>
          </span>
          <Globe className="w-3 h-3 text-[#D32A66]" />
          <span>Accepting Global Clients</span>
        </div>

        {/* TOP CENTER CONTACT DETAILS - Prominently Displayed */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
          {/* Girly Sparkle Badge */}
          <span className="inline-flex items-center gap-1 text-[#DB2777]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#EC4899]" />
            <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
          </span>

          {/* NAME */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] uppercase tracking-wider text-[#9D174D]/75 font-semibold">
              Strategist:
            </span>
            <span className="font-serif font-bold text-[#4A0E2E] text-sm sm:text-base tracking-wide bg-gradient-to-r from-[#831843] via-[#B91C1C]/90 to-[#9D174D] bg-clip-text text-transparent hover:opacity-90 transition-opacity">
              {fullName}
            </span>
          </div>

          <span className="hidden sm:inline text-[#F472B6] opacity-60">•</span>

          {/* EMAIL */}
          <div className="flex items-center gap-1.5 bg-white/80 hover:bg-white px-3 py-1 rounded-full border border-[#F9A8D4]/60 transition-all shadow-xs group">
            <Mail className="w-3.5 h-3.5 text-[#DB2777] group-hover:scale-110 transition-transform" />
            <a
              href={`mailto:${email}`}
              className="text-[#9D174D] font-semibold hover:text-[#BE185D] underline decoration-[#F472B6]/40 hover:decoration-[#BE185D] text-xs sm:text-sm"
              title="Send direct email"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="ml-1 p-1 text-[#BE185D] hover:text-[#831843] hover:bg-[#FCE7F3] rounded-full transition-colors relative"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-3 h-3 text-emerald-600 animate-in zoom-in" />
              ) : (
                <Copy className="w-3 h-3 opacity-70 group-hover:opacity-100" />
              )}
            </button>
            {copied && (
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200 animate-in fade-in">
                Copied!
              </span>
            )}
          </div>
        </div>

        {/* Quick CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#9D174D] hover:text-[#700c34] bg-white/60 hover:bg-white px-2.5 py-1 rounded-full border border-[#F472B6]/40 transition-all hover:shadow-sm"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
}
