"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Phone, MessageSquare, ShieldCheck, Check } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I book a cab with OMR Taxi Perungudi?",
    answer:
      "Booking is fast and hassle-free! Simply enter your Pickup and Drop locations in our online booking widget above to calculate your instant fare estimate, then click 'Book & Check Driver Availability on WhatsApp'. Your complete route specifications will be pre-filled to our dispatch desk (+91 9176206996) for instant chauffeur assignment and booking confirmation within minutes. You can also call us directly 24/7.",
    category: "Booking",
  },
  {
    question: "Are tolls and parking charges included in the fare?",
    answer:
      "Tolls, airport parking fees, and interstate permits are always billed at actuals based on physical toll plaza receipts or FastTag statements. Our quoted fare covers the vehicle rental, fuel, and chauffeur service. We believe in 100% billing honesty—no hidden toll markups or unexpected surprise surcharges.",
    category: "Pricing & Billing",
  },
  {
    question: "Do you offer outstation trips from Chennai?",
    answer:
      "Yes, absolutely! We provide reliable one-way drops and round-trip outstation packages across Tamil Nadu, neighboring states (Karnataka, Andhra Pradesh, Kerala, and Puducherry), as well as Telangana (including Hyderabad). Popular routes include Chennai to Pondicherry, Tirupati, Vellore, Kancheepuram, Bangalore, Coimbatore, Madurai, and more, with experienced highway chauffeurs.",
    category: "Outstation",
  },
  {
    question: "Are night charges applicable on rides?",
    answer:
      "No! There are no night charges applied for any rides, whether local city trips or outstation journeys. We maintain fixed, transparent standard rates around the clock with zero midnight surge pricing.",
    category: "Pricing & Billing",
  },
  {
    question: "How fast can a cab arrive for city pickup in OMR / Perungudi?",
    answer:
      "For city pickups in Perungudi, Kandanchavadi, Thoraipakkam, Velachery, Taramani, and across the OMR corridor, a cab typically arrives in around 30 minutes. This allows our dispatch desk to assign a verified driver, ensure the vehicle is clean and ready, and coordinate your pickup smoothly. For airport transfers and scheduled outstation trips, we recommend booking in advance to ensure seamless on-time departure.",
    category: "Dispatch",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We offer flexible payment methods. You can pay via Cash directly to the chauffeur upon arrival, UPI (Google Pay, PhonePe, Paytm, BHIM), or direct Bank Transfer. Digital receipts and invoices are provided for business travel reimbursements.",
    category: "Payment",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer a stress-free cancellation policy. City rides can be cancelled free of charge up to 1 hour before pickup time. Outstation trips can be rescheduled or cancelled without penalty when informed at least 4 hours prior to departure. We do not charge cancellation fees for flight or train delays.",
    category: "Booking",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-taxi-yellow text-taxi-black font-black text-xs px-3.5 py-1.5 rounded-md uppercase tracking-wider mb-3 border border-taxi-black shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-taxi-black tracking-tight">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Clear, straightforward answers about our booking process, transparent billing, outstation packages, and driver policies.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-taxi-black bg-yellow-50/40 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-black text-base sm:text-lg text-taxi-black leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-taxi-yellow text-taxi-black rotate-180"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-yellow-200/60 pt-3.5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Quick Action Card */}
        <div className="mt-12 p-6 sm:p-8 bg-taxi-black text-white rounded-2xl border-2 border-taxi-yellow flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-taxi-yellow">
              Have a Specific Route or Special Request?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
              Our 24/7 dispatch desk in Perungudi is always online. Contact our team directly on WhatsApp or phone for immediate assistance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I have a question regarding taxi booking.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Dispatch
            </a>
            <a
              href="tel:+919176206996"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" /> Call +91 9176206996
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
