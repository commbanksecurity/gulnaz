"use client";

import React from "react";
import { SERVICES } from "@/data/projects";
import {
  Sparkles,
  Target,
  Crown,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Target,
    Sparkles,
    HeartHandshake,
    Crown,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0F5] border border-[#F472B6]/40 text-xs font-bold text-[#B31B50]">
            <Crown className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Signature Strategic Services</span>
            <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1126] tracking-tight">
            Comprehensive Growth Architectures For{" "}
            <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
              Ambitious Brands
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B2447] font-normal leading-relaxed">
            I don&apos;t just manage ad spend—I build sustainable customer acquisition flywheels, elevate brand sentiment, and maximize lifetime customer value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#FFF8FA] to-[#FFF0F5] border border-[#FBCFE8] hover:border-[#F472B6] shadow-[0_10px_30px_-10px_rgba(244,114,182,0.15)] hover:shadow-[0_20px_45px_-10px_rgba(219,39,119,0.22)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Card Header with Icon & Highlight */}
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#FBCFE8] flex items-center justify-center text-[#DB2777] shadow-sm group-hover:scale-110 group-hover:bg-[#FFF0F5] transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white text-[#9D174D] border border-[#FBCFE8] text-xs font-bold shadow-xs">
                      {service.highlight}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#DB2777]">
                      {service.subtitle}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#3B1126] mt-1 group-hover:text-[#DB2777] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#612444] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#9D174D]">
                      Key Deliverables &amp; Systems:
                    </div>
                    <div className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-[#4A152E]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#DB2777] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-[#FCE7F3] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#831843]">
                    Available for Monthly Retainer or Sprint
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DB2777] hover:text-[#9D174D] group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire Capacity</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
