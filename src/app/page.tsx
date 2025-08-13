"use client";
import OfferSection from "@/components/OfferSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-black text-white font-figtree">
      <OfferSection />
      <Navbar />
      <HeroSection />
    </div>
  );
}
