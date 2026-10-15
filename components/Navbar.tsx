"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Heart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Growth Calculator", href: "#calculator" },
    { name: "Praise", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-[#FBCFE8]/60 shadow-[0_4px_20px_-5px_rgba(244,114,182,0.15)] py-3"
            : "bg-white/60 backdrop-blur-xs py-4 border-b border-[#FCE7F3]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#DB2777] via-[#F472B6] to-[#FDE047] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#FFF0F5] rounded-[14px] flex items-center justify-center font-serif font-bold text-base text-[#9D174D]">
                GN
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[#831843] text-lg tracking-tight group-hover:text-[#DB2777] transition-colors leading-none">
                Gul Naz Bibi Gul Naz Bibi
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#DB2777]/80 mt-0.5 flex items-center gap-1">
                Growth Marketing <Heart className="w-2.5 h-2.5 fill-[#EC4899] text-[#EC4899] inline" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#4A152E] hover:text-[#BE185D] hover:bg-[#FCE7F3]/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#DB2777] via-[#EC4899] to-[#F472B6] text-white text-xs lg:text-sm font-semibold shadow-[0_4px_16px_rgba(219,39,119,0.35)] hover:shadow-[0_6px_22px_rgba(219,39,119,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Let&apos;s Collaborate</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#9D174D] hover:bg-[#FCE7F3] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-5 bg-white/95 backdrop-blur-xl border-b border-[#FBCFE8] space-y-2 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[#5A1C39] hover:bg-[#FCE7F3] hover:text-[#9D174D]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#DB2777] to-[#EC4899] text-white font-semibold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Work With Me</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
