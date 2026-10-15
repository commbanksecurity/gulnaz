"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle, Heart } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do you coordinate seamlessly with international clients across time zones?",
      a: "I work with global leadership teams through high-efficiency asynchronous workflows. You receive weekly Loom strategic breakdowns, real-time shared Notion growth roadmaps, dedicated Slack/Teams channels, and scheduled bi-weekly video sprint reviews timed specifically to overlap with your business hours.",
    },
    {
      q: "What makes your approach different from hiring a conventional marketing agency?",
      a: "Most agencies sell you senior partners during the pitch and delegate your account to overworked junior coordinators. With me, you work directly with Gul Naz Bibi Gul Naz Bibi. Every ad hook, budget allocation, retention sequence, and creative brief is personally engineered by me, ensuring unmatched quality and rigorous revenue attribution.",
    },
    {
      q: "What is your primary niche and client criteria?",
      a: "I partner predominantly with consumer brands (clean beauty, wellness, luxury fashion, modern lifestyle), fast-scaling D2C ventures, and creator-focused SaaS platforms that generate or are on track to generate $1M+ in annual revenue and want to scale to $10M+.",
    },
    {
      q: "What advertising and marketing platforms do you specialize in?",
      a: "Our core tech stack includes Meta Ads Manager (Instagram & Facebook), TikTok Ads & TikTok Shop, Klaviyo for advanced lifecycle marketing, Google Ads & YouTube Performance Max, Pinterest Ads, Triple Whale attribution, and Shopify Plus conversion architecture.",
    },
    {
      q: "How soon can we start, and what does onboarding look like?",
      a: "Onboarding takes 5 to 7 business days. We begin with a complete Growth & Pixel Audit, followed by the delivery of a 90-Day Scaling Blueprint, creative testing roadmap, and immediate optimization of your highest-friction funnel stages.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFF8FA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F472B6]/40 text-xs font-bold text-[#B31B50] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Got Questions? Here Are Answers</span>
            <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1126] tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#9D174D] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#FBCFE8] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#3B1126] hover:text-[#DB2777] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FFF0F5] border border-[#FBCFE8] flex items-center justify-center text-[#DB2777] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#612444] leading-relaxed border-t border-[#FCE7F3] pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
