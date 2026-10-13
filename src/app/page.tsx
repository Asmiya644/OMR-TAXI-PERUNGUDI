import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetPricing from "@/components/FleetPricing";
import PopularTrips from "@/components/PopularTrips";
import TrustSocialProof from "@/components/TrustSocialProof";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileFloatingBar from "@/components/MobileFloatingBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-taxi-black pb-16 md:pb-0">
      {/* Top Navbar */}
      <Navbar />

      {/* 1. Hero Section (The Booking Hub) */}
      <HeroSection />

      {/* 2. Our Fleet & Pricing */}
      <FleetPricing />

      {/* 3. Popular Trips */}
      <PopularTrips />

      {/* 4. Trust & Social Proof */}
      <TrustSocialProof />

      {/* 5. Frequently Asked Questions */}
      <FAQSection />

      {/* 6. Footer */}
      <Footer />

      {/* Floating Bottom Bar for Mobile Tap Targets */}
      <MobileFloatingBar />
    </main>
  );
}
