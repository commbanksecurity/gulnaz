"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/projects";
import { Sparkles, Star, Quote, Heart } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0F5] border border-[#F472B6]/40 text-xs font-bold text-[#B31B50]">
            <Quote className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>International Executive Endorsements</span>
            <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1126] tracking-tight">
            Praise From Leaders of{" "}
            <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
              Global Scale
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B2447] font-normal leading-relaxed">
            Direct feedback from founders, managing directors, and CMOs who entrusted their growth engines to Gul Naz Bibi Gul Naz Bibi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFF8FA] via-[#FFF0F5] to-white border border-[#FBCFE8] hover:border-[#F472B6] shadow-[0_10px_30px_-10px_rgba(244,114,182,0.15)] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Top Tag & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white text-[#9D174D] border border-[#FBCFE8] text-[11px] font-bold shadow-xs">
                    {t.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-base sm:text-lg text-[#3B1126] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#FCE7F3]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F472B6]/60 shadow-sm">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-[#3B1126]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#831843] font-semibold">
                    {t.role} •{" "}
                    <span className="text-[#DB2777] font-bold">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
