import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingBar from "@/components/MobileFloatingBar";
import { Phone, MapPin, Clock, Mail, MessageSquare, ShieldCheck, Car, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | OMR Taxi Perungudi - 24/7 Cab Dispatch",
  description: "Contact OMR Taxi Perungudi. 24/7 taxi dispatch hotline +91 9176206996, WhatsApp booking, and office address in Perungudi, Chennai.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-taxi-black pb-16 md:pb-0">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-taxi-black text-white py-12 sm:py-16 border-b-4 border-taxi-yellow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-taxi-yellow hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/10 text-taxi-yellow font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" /> 24/7 Customer Support
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact OMR Taxi Perungudi
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Need an urgent city cab, airport transfer, or customized outstation tour package? Reach our dispatch desk directly anytime. We are operational 24 hours a day, 365 days a year.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left 2 Columns: Contact Methods Cards */}
            <div className="lg:col-span-2 space-y-6">

              {/* Priority CTA: Phone Dispatch Hotline */}
              <div className="p-6 sm:p-8 bg-white border-2 border-taxi-black rounded-2xl shadow-card hover:shadow-card-hover transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-taxi-yellow text-taxi-black flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-7 h-7 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-gray-500 block">
                        Official Dispatch &amp; Booking Hotline
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-taxi-black mt-0.5">
                        +91 9176206996
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Direct connection to our dispatch desk for instant cab allocation.
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:+919176206996"
                    className="py-3.5 px-6 rounded-xl bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-sm border-2 border-taxi-black shadow-taxi text-center flex items-center justify-center gap-2 self-start sm:self-center min-h-[48px]"
                  >
                    <Phone className="w-4 h-4" /> Call Dispatch Now
                  </a>
                </div>
              </div>

              {/* Priority CTA: WhatsApp Chat Booking */}
              <div className="p-6 sm:p-8 bg-white border-2 border-gray-300 rounded-2xl shadow-card hover:shadow-card-hover transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-gray-500 block">
                        Instant WhatsApp Desk
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-taxi-black mt-0.5">
                        WhatsApp Booking
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Send pickup/drop coordinates, receive driver details &amp; live GPS links.
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to book a taxi ride.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm shadow-md text-center flex items-center justify-center gap-2 self-start sm:self-center min-h-[48px]"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Operating Hours & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Operating Hours */}
                <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg font-black text-taxi-black mb-1">
                    Operating Hours
                  </h4>
                  <p className="text-sm font-bold text-green-700 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                    24/7 Instant Dispatch
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Open 24 hours a day, 7 days a week, 365 days a year including public holidays, Sundays, and festivals.
                  </p>
                </div>

                {/* Email Support */}
                <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg font-black text-taxi-black mb-1">
                    Email Inquiries
                  </h4>
                  <a
                    href="mailto:support@omrtaxiperungudi.com"
                    className="text-sm font-bold text-taxi-black hover:text-yellow-600 block mb-2 underline decoration-taxi-yellow"
                  >
                    support@omrtaxiperungudi.com
                  </a>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    For corporate taxi contracts, employee transport tie-ups, and long-term vehicle leasing.
                  </p>
                </div>

              </div>

              {/* Office Location Detail */}
              <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-taxi-yellow text-taxi-black flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-black uppercase tracking-wider text-gray-500 block">
                      Office &amp; Fleet Hub Location
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-taxi-black mt-0.5">
                      Perungudi Office, Chennai
                    </h3>
                    <p className="text-sm sm:text-base text-gray-800 font-semibold mt-2">
                      No - 35 Karpaga Vinayaga St, Kandanchavadi, Perungudi, Chennai - 600096, Tamil Nadu, India.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Landmark: Off Old Mahabalipuram Road (OMR), adjacent to Kandanchavadi IT corridor.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Key Service Highlights Card */}
            <div className="space-y-6">
              <div className="bg-taxi-black text-white p-6 sm:p-8 rounded-2xl border-2 border-taxi-yellow shadow-xl">
                <h3 className="text-xl font-black text-taxi-yellow mb-4">
                  Why Commuters Call Us
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-gray-200">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Prompt ~30 Min City Pickup</strong>
                      <span>Cabs coordinated across OMR, Perungudi, Velachery &amp; Thoraipakkam.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Zero Surge Pricing</strong>
                      <span>Transparent flat rates even during rain and peak rush hours.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Verified Highway Chauffeurs</strong>
                      <span>Experienced drivers for Pondicherry, Tirupati &amp; Vellore trips.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Sanitized AC Vehicles</strong>
                      <span>Pristine Hatchbacks, Sedans, SUVs, and Toyota Innova Crysta.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <Link
                    href="/#booking"
                    className="w-full py-3.5 px-4 rounded-xl bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-sm text-center flex items-center justify-center gap-2 shadow"
                  >
                    <span>Check Instant Rates &amp; Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <MobileFloatingBar />
    </main>
  );
}
