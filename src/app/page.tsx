"use client";
import OfferSection from "@/components/OfferSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-black text-white font-figtree mx-auto min-h-screen overflow-hidden">
        <OfferSection />
      <div className="max-w-[1320px] mx-auto px-2">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
