import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingBar from "@/components/MobileFloatingBar";
import { ShieldCheck, Lock, EyeOff, Phone, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OMR Taxi Perungudi",
  description: "Privacy policy for OMR Taxi Perungudi. Learn how we safeguard your phone number, pickup/drop coordinates, and ride details with zero third-party sharing.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-taxi-black pb-16 md:pb-0">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-taxi-black text-white py-12 sm:py-16 border-b-4 border-taxi-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-taxi-yellow hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/10 text-taxi-yellow font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" /> Data Security &amp; Trust
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            At OMR Taxi Perungudi, customer privacy is a core commitment. Learn how we handle your pickup locations, contact numbers, and trip details.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Last Updated: October 2026 • OMR Taxi Perungudi, Chennai
          </p>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Privacy Commitment Highlight Box */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-taxi-black shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-taxi-yellow text-taxi-black flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-taxi-black">
                  Our Core Privacy Commitment
                </h2>
                <span className="text-xs text-green-700 font-bold block">
                  100% Confidential • Zero Spam Guarantee
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              User pickup locations, drop destinations, and phone numbers shared with <strong>OMR Taxi Perungudi</strong> via WhatsApp or phone calls are <strong>used solely for coordinating taxi rides and communicating trip details</strong>. We strictly guarantee that your personal data is <strong>never sold, rented, or shared with third parties or external advertising networks</strong> under any circumstances.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              1. Information We Collect
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                To provide safe, punctual, and reliable taxi services, we collect only the minimal necessary operational details:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Contact Information:</strong> Your phone number and passenger name shared during booking coordination.
                </li>
                <li>
                  <strong>Trip Coordinates:</strong> Specific pickup addresses, landmarks, terminal gates (for airport pickups), and drop destinations.
                </li>
                <li>
                  <strong>Booking Preferences:</strong> Selected vehicle class (Hatchback, Sedan, SUV, or Innova), travel date/time, and round-trip schedule requirements.
                </li>
                <li>
                  <strong>Feedback &amp; Reviews:</strong> Voluntary feedback or ratings you share regarding driver courtesy, cleanliness, and trip experience.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              2. Sole Purpose: Operational Trip Coordination
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Your data is utilized strictly for executing your ride:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Assigning our nearest verified chauffeur and dispatching the designated vehicle to your doorstep.
                </li>
                <li>
                  Transmitting driver details, vehicle registration numbers, and live GPS arrival updates to you via WhatsApp or SMS.
                </li>
                <li>
                  Generating transparent journey invoices and FastTag toll breakdown receipts.
                </li>
                <li>
                  Providing prompt customer support in case of lost-and-found items or scheduling changes.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Absolute Prohibition on Third-Party Sharing */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <EyeOff className="w-5 h-5 text-taxi-yellow" />
              <h2 className="text-xl sm:text-2xl font-black text-taxi-black">
                3. Zero Third-Party Sharing &amp; Anti-Spam Policy
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                We value your digital peace of mind as much as your physical safety:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>No Data Brokers:</strong> We do not disclose, distribute, or monetize customer databases to commercial marketing agencies, telemarketers, or affiliate brokers.
                </li>
                <li>
                  <strong>No Unsolicited Marketing:</strong> We will never spam your phone number with unwanted promotional calls or automated SMS blasts.
                </li>
                <li>
                  <strong>Driver Access Restrictions:</strong> Chauffeurs receive only the pickup and drop information required to navigate and complete your ride, and are bound by confidentiality policies.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Data Retention & Security */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              4. Data Security &amp; Retention
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              All communications conducted through our WhatsApp dispatch channel are protected by WhatsApp&apos;s end-to-end encryption. Operational records are maintained only as long as necessary for administrative tax reporting and customer service inquiries. Customers may request the deletion of their contact records at any time by messaging dispatch.
            </p>
          </div>

          {/* Section 5: Contact Our Privacy Desk */}
          <div className="bg-taxi-black text-white p-6 sm:p-8 rounded-2xl border-2 border-taxi-yellow">
            <h3 className="text-xl font-black text-taxi-yellow mb-2">
              Have Questions About Your Data?
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Feel free to contact our Perungudi office directly for any privacy inquiries or data requests.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919176206996"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-taxi-yellow text-taxi-black font-black text-sm"
              >
                <Phone className="w-4 h-4" /> Call +91 9176206996
              </a>
              <a
                href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I have a privacy inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-black text-sm"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Dispatch
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <MobileFloatingBar />
    </main>
  );
}
