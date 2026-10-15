import TopContactHeader from "@/components/TopContactHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsTicker from "@/components/MetricsTicker";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import StrategyCalculator from "@/components/StrategyCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8FA] selection:bg-[#F472B6] selection:text-white">
      {/* 1. TOP CENTER CONTACT DETAILS - As requested: Name & Email displayed prominently on top center */}
      <TopContactHeader />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Verified Marketing Performance Metrics Ticker */}
        <MetricsTicker />

        {/* 5. Original Case Studies with International Brands */}
        <ProjectsSection />

        {/* 6. Strategic Growth Services & Frameworks */}
        <ServicesSection />

        {/* 7. About the Strategist */}
        <AboutSection />

        {/* 8. Interactive Revenue & Growth Simulator */}
        <StrategyCalculator />

        {/* 9. International Client Endorsements & Praise */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Consultation Booking & Direct Contact */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
