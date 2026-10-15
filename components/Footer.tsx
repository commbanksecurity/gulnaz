"use client";

import React from "react";
import { Sparkles, Heart, ArrowUp, Mail, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A0E1D] text-[#FFE8F2] pt-16 pb-12 border-t border-[#F472B6]/20 relative overflow-hidden">
      {/* Subtle Glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#DB2777]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#DB2777] to-[#FDE047] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#3B1126] rounded-[14px] flex items-center justify-center font-serif font-bold text-base text-pink-200">
                  GN
                </div>
              </div>
              <div className="font-serif font-bold text-xl text-white tracking-tight">
                Gul Naz Bibi Gul Naz Bibi
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFD6E8]/80 max-w-md leading-relaxed">
              Senior Global Growth Marketing &amp; Creative Brand Strategist. Architecting multi-million dollar direct-response acquisition funnels and viral brand moments for international clients.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F472B6]">
              <Mail className="w-3.5 h-3.5 text-[#F472B6]" />
              <a
                href="mailto:gulnaz18759@outlook.com"
                className="hover:text-white underline decoration-[#F472B6]/40 transition-colors"
              >
                gulnaz18759@outlook.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F472B6]">
              Navigation
            </div>
            <ul className="text-xs sm:text-sm space-y-2 text-[#FFE8F2]/75">
              <li>
                <a href="#about" className="hover:text-pink-300 transition-colors">
                  About the Strategist
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-300 transition-colors">
                  International Case Studies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-300 transition-colors">
                  Signature Services
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-pink-300 transition-colors">
                  Growth Simulator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-300 transition-colors">
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* International Service Scope */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F472B6]">
              Client Engagements
            </div>
            <p className="text-xs text-[#FFE8F2]/75 leading-relaxed">
              Collaborating with founders and global marketing teams worldwide across all major time zones with async sprint workflows.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B1126] border border-[#F472B6]/40 text-[11px] font-semibold text-pink-300">
                <Globe className="w-3 h-3 text-[#DB2777]" />
                <span>Worldwide Delivery</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F472B6]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFD6E8]/70">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} Gul Naz Bibi Gul Naz Bibi. All rights reserved.</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-pink-400">
              Made with <Heart className="w-3 h-3 fill-pink-500 text-pink-500 inline" /> &amp; High-Glamour Strategy
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3B1126] hover:bg-[#4A152E] text-pink-200 border border-[#F472B6]/40 text-xs font-semibold transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
