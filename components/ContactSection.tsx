"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Sparkles,
  Copy,
  Check,
  Calendar,
  Globe2,
  Heart,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    budget: "$25k - $50k / mo",
    message: "",
  });

  const email = "gulnaz18759@outlook.com";
  const strategistName = "Gul Naz Bibi Gul Naz Bibi";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#DB2777", "#EC4899", "#F472B6", "#FDE047"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0F5] border border-[#F472B6]/40 text-xs font-bold text-[#B31B50]">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Direct Strategic Consultation</span>
            <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1126] tracking-tight">
            Let&apos;s Build Your Brand&apos;s Next{" "}
            <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
              Growth Milestone
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B2447] font-normal leading-relaxed">
            Accepting select international brand retainers and performance growth sprints. Reach out directly below to discuss your quarterly targets.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Card & Calendar Preview */}
          <div className="lg:col-span-5 space-y-6">
            {/* Glamorous Profile & Contact Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FFF5F8] via-[#FFF0F5] to-[#FFE8F2] border border-[#FBCFE8] shadow-lg space-y-6">
              <div className="space-y-2">
                <div className="text-xs uppercase font-bold tracking-widest text-[#DB2777] flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-[#DB2777]" />
                  <span>Senior Marketing Strategist</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B1126]">
                  {strategistName}
                </h3>
                <p className="text-xs sm:text-sm text-[#612444] leading-relaxed">
                  Direct strategist advisory for international founders, CMOs, and growth leaders.
                </p>
              </div>

              {/* Direct Email Display */}
              <div className="p-4 rounded-2xl bg-white/90 border border-[#FBCFE8] space-y-2">
                <div className="text-[11px] uppercase font-bold text-[#9D174D]/80">
                  Direct Inquiries &amp; RFPs:
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="font-serif font-bold text-sm sm:text-base text-[#831843] hover:text-[#DB2777] underline decoration-[#F472B6]/40 break-all"
                  >
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF0F5] hover:bg-[#FFE4EC] text-[#9D174D] text-xs font-semibold border border-[#F472B6]/40 transition-all flex-shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#DB2777]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Working Hours & International Client Assurance */}
              <div className="space-y-3 text-xs text-[#5A1C39]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-semibold text-emerald-700">
                    Average response time: Within 6 hours
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#DB2777]" />
                  <span>30-Minute Growth Diagnostic Calls Available</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe2 className="w-4 h-4 text-[#DB2777]" />
                  <span>Full International Cross-Timezone Synchronization</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Perks */}
            <div className="p-6 rounded-3xl bg-[#FFF8FA] border border-[#FCE7F3] space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#3B1126] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#DB2777]" />
                What Happens on Our Strategy Call?
              </h4>
              <ul className="text-xs text-[#6B2447] space-y-2 list-disc pl-5">
                <li>Deep-dive review of your current ROAS and unit economics.</li>
                <li>Creative hook audit of your recent Meta &amp; TikTok campaigns.</li>
                <li>Clear actionable roadmap with zero generic agency fluff.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#FBCFE8] shadow-xl p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FFF0F5] border-2 border-[#F472B6] mx-auto flex items-center justify-center text-3xl shadow-md">
                  💖
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B1126]">
                  Message Received With Love!
                </h3>
                <p className="text-sm text-[#612444] max-w-md mx-auto leading-relaxed">
                  Thank you darling! <strong className="text-[#831843]">Gul Naz Bibi Gul Naz Bibi</strong> has received your project details. You will hear back at <span className="font-bold text-[#DB2777]">{formData.email || email}</span> within 6–12 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#FFF0F5] hover:bg-[#FFE4EC] text-[#9D174D] border border-[#FBCFE8] text-xs font-bold transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9D174D]">
                  <MessageSquare className="w-4 h-4 text-[#DB2777]" />
                  <span>Start a Confidential Conversation</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#4A152E]">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Charlotte Davis"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF8FA] border border-[#FBCFE8] text-sm text-[#3B1126] focus:outline-hidden focus:border-[#DB2777] focus:ring-2 focus:ring-[#F472B6]/20 transition-all placeholder:text-[#9D174D]/40"
                    />
                  </div>

                  {/* Brand */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#4A152E]">
                      Brand / Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Maison Lumineuse"
                      value={formData.brand}
                      onChange={(e) =>
                        setFormData({ ...formData, brand: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF8FA] border border-[#FBCFE8] text-sm text-[#3B1126] focus:outline-hidden focus:border-[#DB2777] focus:ring-2 focus:ring-[#F472B6]/20 transition-all placeholder:text-[#9D174D]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#4A152E]">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="charlotte@brand.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF8FA] border border-[#FBCFE8] text-sm text-[#3B1126] focus:outline-hidden focus:border-[#DB2777] focus:ring-2 focus:ring-[#F472B6]/20 transition-all placeholder:text-[#9D174D]/40"
                    />
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#4A152E]">
                      Estimated Monthly Marketing Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF8FA] border border-[#FBCFE8] text-sm text-[#3B1126] focus:outline-hidden focus:border-[#DB2777] focus:ring-2 focus:ring-[#F472B6]/20 transition-all"
                    >
                      <option value="$10k - $25k / mo">$10k - $25k / mo</option>
                      <option value="$25k - $50k / mo">$25k - $50k / mo</option>
                      <option value="$50k - $150k / mo">$50k - $150k / mo</option>
                      <option value="$150k+ / mo">$150k+ / mo (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A152E]">
                    Growth Goals &amp; Pain Points *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product, current ROAS/channels, and what scaling milestone you want to reach..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF8FA] border border-[#FBCFE8] text-sm text-[#3B1126] focus:outline-hidden focus:border-[#DB2777] focus:ring-2 focus:ring-[#F472B6]/20 transition-all placeholder:text-[#9D174D]/40 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#DB2777] via-[#EC4899] to-[#F472B6] text-white font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(219,39,119,0.35)] hover:shadow-[0_12px_32px_rgba(219,39,119,0.48)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Strategy Inquiry to Gul Naz Bibi Gul Naz Bibi</span>
                      <Sparkles className="w-4 h-4 text-amber-200" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#9D174D]/70 font-medium">
                  🔒 All client discussions and metrics are protected under mutual NDA.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
