import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingBar from "@/components/MobileFloatingBar";
import { FileText, ShieldAlert, CheckCircle2, Phone, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | OMR Taxi Perungudi",
  description: "Terms and conditions for OMR Taxi Perungudi. Transparent pricing, booking estimate policies, toll and parking guidelines, and cancellation rules.",
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5" /> Legal &amp; Policies
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Welcome to OMR Taxi Perungudi. Please review the service terms, booking guidelines, and transparent billing policies governing our transportation services.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Last Updated: October 2026 • Effective for all bookings operated by OMR Taxi Perungudi
          </p>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Clause 1: Agreement to Terms */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              1. Agreement to Terms
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              By accessing our website, requesting fare estimates, or booking transportation with <strong>OMR Taxi Perungudi</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you agree to be bound by these Terms and Conditions. These terms apply to all passenger transfers within Chennai, airport transfers to Anna International Terminal (MAA), and outstation trips across Tamil Nadu and neighbouring states.
            </p>
          </div>

          {/* Clause 2: Booking Estimates & Fare Calculation */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              2. Booking Estimates &amp; Fare Structure
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                All rates, distance figures, and calculations generated through our online booking widget or route estimation calculator are <strong>standard approximations</strong> designed to give passengers an upfront reference estimate.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                <li>
                  <strong>Distance Calculation:</strong> Fares are computed based on standard highway distance. Any additional detours, multi-point pickups, or passenger-requested route diversions will be charged on actual kilometers traversed.
                </li>
                <li>
                  <strong>Vehicle Categories:</strong> Quoted rates depend on chosen vehicle classes (Hatchback at ₹25/km, Sedan at ₹25/km, SUV at ₹35/km, and Toyota Innova at ₹22/km).
                </li>
                <li>
                  <strong>Zero Hidden Markups:</strong> We do not levy undisclosed surge pricing or peak-hour multiplier charges on local city rides.
                </li>
              </ul>
            </div>
          </div>

          {/* Clause 3: Toll, Parking & Permit Charges Billed at Actuals */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="w-5 h-5 text-taxi-yellow" />
              <h2 className="text-xl sm:text-2xl font-black text-taxi-black">
                3. Toll Charges, Parking Fees &amp; State Permits (Billed at Actuals)
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                To maintain 100% billing transparency, all toll plaza fees, airport parking fees, and interstate regulatory permits are <strong>billed strictly at actuals</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Toll Gates (FastTag):</strong> Any toll charges incurred on Chennai bypasses, ECR, OMR, or National Highways (NH 48, NH 32, etc.) are charged according to automated FastTag deduction receipts.
                </li>
                <li>
                  <strong>Parking &amp; Entry Fees:</strong> Airport parking fees, railway station pickup tokens, temple premises entry, and monument parking charges are to be reimbursed by the passenger at actual receipt values.
                </li>
                <li>
                  <strong>Interstate Permits:</strong> For outstation rides entering Karnataka, Andhra Pradesh, Puducherry, or Kerala, interstate tourist vehicle permit fees mandated by transport authorities will be billed transparently with physical receipts.
                </li>
              </ul>
            </div>
          </div>

          {/* Clause 4: Driver Availability & Final Confirmation via Dispatch */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              4. Ride Confirmation Subject to Driver Availability
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Submitting a route inquiry through our website does not constitute an automatically confirmed ride until coordinated with our dispatch desk.
              </p>
              <p>
                <strong>Final ride confirmation, vehicle assignment, and chauffeur details</strong> are finalized through direct telephone dispatch or official WhatsApp messaging at <strong>+91 9176206996</strong> based on live vehicle proximity and scheduling. Our dispatch team confirms driver name, contact, and vehicle registration prior to scheduled departure.
              </p>
            </div>
          </div>

          {/* Clause 5: Cancellation & Rescheduling Policies */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              5. Cancellation &amp; Rescheduling Policy
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                We offer fair and transparent cancellation terms:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Local City Rides:</strong> Free cancellation up to 1 hour before scheduled pickup time.
                </li>
                <li>
                  <strong>Outstation Journeys:</strong> Free cancellation or complimentary rescheduling when informed at least 4 hours prior to departure time.
                </li>
                <li>
                  <strong>Airport Flight Delays:</strong> If your incoming flight to Chennai Airport (MAA) is delayed, our driver will wait without cancellation penalties provided you notify dispatch.
                </li>
                <li>
                  <strong>Late Cancellations After Driver Dispatch:</strong> If a trip is cancelled after the chauffeur has reached the designated pickup doorstep, a nominal dry-run fee (₹150 for city rides) may apply to compensate driver fuel.
                </li>
              </ul>
            </div>
          </div>

          {/* Clause 6: Passenger Responsibilities & Code of Conduct */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-3">
              6. Passenger Responsibilities &amp; Luggage Allowance
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <li>
                <strong>Passenger Seating Capacities:</strong> In compliance with Regional Transport Authority (RTA) regulations, seating limits must be adhered to (Hatchback: up to 4, Sedan: up to 4, SUV / Innova: 6 to 7 passengers).
              </li>
              <li>
                <strong>Prohibited Items:</strong> Carrying hazardous substances, inflammable items, contraband, or illegal goods in the vehicle is strictly prohibited by law.
              </li>
              <li>
                <strong>Smoke-Free &amp; Clean Cabs:</strong> Smoking and alcohol consumption inside all our commercial vehicles is strictly prohibited to keep cabs fresh and hygienic for families.
              </li>
            </ul>
          </div>

          {/* Clause 7: Contact Information */}
          <div className="bg-taxi-black text-white p-6 sm:p-8 rounded-2xl border-2 border-taxi-yellow">
            <h3 className="text-xl font-black text-taxi-yellow mb-2">
              Questions Regarding Our Terms?
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              For any clarification regarding pricing, outstation itineraries, or terms, our 24/7 dispatch office in Perungudi is available round-the-clock.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919176206996"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-taxi-yellow text-taxi-black font-black text-sm"
              >
                <Phone className="w-4 h-4" /> Call +91 9176206996
              </a>
              <a
                href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I have a query about your booking terms.")}`}
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
