"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  X,
  CheckCircle2,
  Quote,
  Layers,
  Heart,
  BarChart2,
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: "All Works", value: "All", icon: "✨" },
    { label: "D2C Scaling", value: "D2C Scaling", icon: "🛍️" },
    { label: "Viral Social & UGC", value: "Viral Social & UGC", icon: "💄" },
    { label: "B2B SaaS Growth", value: "B2B SaaS Growth", icon: "⚡" },
    { label: "Luxury Rebrand", value: "Luxury Rebrand", icon: "👑" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FFF8FA] relative">
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FFE4EC]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FCE7F3]/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F472B6]/40 text-xs font-bold text-[#B31B50] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Curated Portfolio of Impact</span>
            <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1126] tracking-tight">
            Original Marketing Case Studies With{" "}
            <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
              International Brands
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B2447] font-normal leading-relaxed">
            Every engagement reflects tailored growth frameworks, bespoke creative direction, and mathematically rigorous unit economics across global markets.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-gradient-to-r from-[#DB2777] to-[#EC4899] text-white shadow-[0_4px_14px_rgba(219,39,119,0.35)] scale-105"
                    : "bg-white text-[#702447] border border-[#FBCFE8] hover:bg-[#FFF0F5] hover:border-[#F472B6]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-3xl border border-[#FBCFE8]/80 overflow-hidden shadow-[0_10px_30px_-10px_rgba(244,114,182,0.18)] hover:shadow-[0_20px_45px_-10px_rgba(219,39,119,0.25)] hover:border-[#F472B6] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Card Image with Badges */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#FFE4EC]">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#220C17]/75 via-[#220C17]/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#831843] border border-white/60 shadow-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                      {project.clientType}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-[#DB2777]">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Image Brand info */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#FBCFE8]">
                      {project.role}
                    </div>
                    <div className="font-serif font-bold text-lg leading-tight text-white drop-shadow-xs">
                      {project.brandName}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#3B1126] group-hover:text-[#DB2777] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B2447] line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.metrics.slice(0, 2).map((metric, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-[#FFF5F8] border border-[#FCE7F3]"
                      >
                        <div className="text-[10px] uppercase font-bold text-[#9D174D]/75">
                          {metric.label}
                        </div>
                        <div className="font-serif text-base font-bold text-[#831843]">
                          {metric.value}
                        </div>
                        {metric.change && (
                          <div className="text-[10px] text-emerald-600 font-semibold">
                            {metric.change}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Marketing Strategy Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-[#FFF0F5] text-[#9D174D] text-[11px] font-medium border border-[#FBCFE8]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FFF5F8] hover:bg-[#FFE4EC] text-[#9D174D] border border-[#F472B6]/40 font-semibold text-xs sm:text-sm transition-all group-hover:border-[#DB2777] group-hover:shadow-xs cursor-pointer"
                >
                  <BarChart2 className="w-4 h-4 text-[#DB2777]" />
                  <span>Explore Case Study &amp; Strategy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#FBCFE8] overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FFF0F5] hover:bg-[#FFE4EC] text-[#9D174D] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#DB2777] uppercase tracking-wider">
                <span>{activeModalProject.clientType}</span>
                <span>•</span>
                <span>{activeModalProject.role}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B1126]">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-semibold text-[#831843]">
                Client: {activeModalProject.brandName}
              </p>
            </div>

            {/* Metrics Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeModalProject.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFF5F8] to-[#FFE4EC]/50 border border-[#FBCFE8] text-center"
                >
                  <div className="text-[10px] uppercase font-bold text-[#9D174D]">
                    {m.label}
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#831843] mt-0.5">
                    {m.value}
                  </div>
                  {m.change && (
                    <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                      {m.change}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* The Challenge */}
            <div className="p-4 rounded-2xl bg-[#FFF8FA] border border-[#FCE7F3] space-y-1.5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#9D174D] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#DB2777]" />
                The International Challenge
              </h4>
              <p className="text-xs sm:text-sm text-[#4A152E] leading-relaxed">
                {activeModalProject.challenge}
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#9D174D] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#DB2777]" />
                Strategic Growth Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalProject.strategy.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-[#FBCFE8] text-xs text-[#5A1C39] leading-relaxed flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#DB2777] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative & Visual Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#9D174D] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#DB2777]" />
                Creative &amp; Campaign Innovations
              </h4>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-[#5A1C39] space-y-1">
                {activeModalProject.creativeHighlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Client Testimonial / Quote */}
            {activeModalProject.clientQuote && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF0F5] to-[#FFE8F2] border border-[#F472B6]/40 flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#DB2777] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="italic text-xs sm:text-sm text-[#4A152E]">
                    &ldquo;{activeModalProject.clientQuote.text}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-[#831843]">
                    — {activeModalProject.clientQuote.author},{" "}
                    <span className="font-normal text-[#9D174D]">
                      {activeModalProject.clientQuote.title}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#FCE7F3]">
              <span className="text-xs text-[#831843] font-medium">
                Want a custom growth roadmap like this for your brand?
              </span>
              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#DB2777] to-[#EC4899] text-white text-xs sm:text-sm font-semibold shadow-md hover:scale-105 transition-all"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
