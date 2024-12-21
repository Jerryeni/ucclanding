"use client";

// import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { AboutFounder } from "@/components/about-founder";
import { SecuritySection } from "@/components/security-section";
import { BuildingSection } from "@/components/building-section";
import { Discover } from "@/components/discover";
import { FAQ } from "@/components/faq";
import { Community } from "@/components/community";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Header />
      <Hero />
      <Features />
      <Discover />
      <AboutFounder />
      <SecuritySection />
      <BuildingSection />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
}