"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart, CheckCircle, Award, Compass, Zap } from "lucide-react";

export default function AboutSection() {
  const philosophies = [
    {
      title: "Performance Without Losing Prestige",
      description:
        "Direct-response marketing doesn't need to look tacky. I design high-converting funnels that safeguard luxury brand equity.",
    },
    {
      title: "Data-Obsessed, Culturally Fluent",
      description:
        "Algorithms change weekly; human desire doesn't. I combine rigorous attribution models with thumb-stopping creative trends.",
    },
    {
      title: "Cross-Border International Mastery",
      description:
        "Specialized in helping brands expand seamlessly across global consumer markets with unified messaging and localized funnels.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFF8FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Aesthetic Mood Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="relative h-[480px] rounded-3xl overflow-hidden border-2 border-[#FBCFE8] shadow-2xl bg-[#FFE4EC]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Gul Naz Bibi Gul Naz Bibi - International Growth Strategist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0E1D]/80 via-transparent to-transparent" />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="text-[11px] uppercase font-bold text-[#DB2777] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
                    <span>Global Growth Architect</span>
                  </div>
                  <div className="font-serif font-bold text-lg text-[#3B1126]">
                    Gul Naz Bibi Gul Naz Bibi
                  </div>
                  <p className="text-[11px] text-[#6B2447] mt-0.5">
                    Managing Multi-Million Dollar Global Growth Portfolios
                  </p>
                </div>
              </div>

              {/* Decorative Girly Tag */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl border border-[#F472B6]/40 shadow-lg flex items-center gap-2">
                <span className="text-xl">💄</span>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-[#831843]">Aesthetic &amp; Numbers</div>
                  <div className="text-xs font-serif font-bold text-[#DB2777]">The Pink Blueprint</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F472B6]/40 text-xs font-bold text-[#B31B50] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
              <span>Behind The Growth Magic</span>
              <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1126] tracking-tight">
              Where High-Impact Analytics Meets{" "}
              <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
                Irresistible Brand Glamour
              </span>
            </h2>

            <p className="text-base text-[#612444] leading-relaxed">
              Hello darling! I&apos;m <strong className="text-[#831843] font-semibold">Gul Naz Bibi Gul Naz Bibi</strong>. Over the past several years, I have engineered and overseen growth strategies for international brands across the globe—turning emerging indie concepts into household names and scaling established players to eight-figure milestones.
            </p>

            <p className="text-base text-[#612444] leading-relaxed">
              My philosophy rejects the boring, formulaic agency playbook. I believe modern marketing is won at the intersection of <span className="font-semibold text-[#831843]">obsessive unit economics</span> and <span className="font-semibold text-[#831843]">hypnotic cultural storytelling</span>. Whether orchestrating 1,200 creator gifting boxes or managing high-volume programmatic media budgets, every campaign is executed with pristine precision.
            </p>

            {/* Core Pillars */}
            <div className="space-y-4 pt-2">
              {philosophies.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white border border-[#FBCFE8] shadow-xs flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FFF0F5] border border-[#F472B6]/30 flex items-center justify-center text-[#DB2777] flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#3B1126]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B2447] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Signature Line */}
            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-[#831843]">
              <span className="flex items-center gap-1.5 bg-[#FFF0F5] px-3 py-1.5 rounded-full border border-[#FBCFE8]">
                🌸 Based Internationally
              </span>
              <span className="flex items-center gap-1.5 bg-[#FFF0F5] px-3 py-1.5 rounded-full border border-[#FBCFE8]">
                ✨ Full Creative &amp; Media Synergy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
