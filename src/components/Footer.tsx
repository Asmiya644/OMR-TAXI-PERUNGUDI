"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Car, ExternalLink, ChevronRight, X } from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<{
    title: string;
    content: string[];
  } | null>(null);

  const openModal = (title: string, content: string[]) => {
    setActiveModal({ title, content });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <footer id="footer" className="bg-taxi-black text-white border-t-4 border-taxi-yellow relative">
      {/* Yellow checkered strip */}
      <div className="w-full h-2 bg-taxi-yellow taxi-checkered-yellow"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Dispatch & Fast Contact Bar */}
        <div className="bg-taxi-surface border-2 border-taxi-yellow rounded-2xl p-6 sm:p-8 mb-14 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-xl bg-taxi-yellow text-taxi-black flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
              <Phone className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-taxi-yellow block">
                24/7 Live Taxi Dispatch &amp; Support
              </span>
              <p className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Need a Cab Right Now? Speak to our team directly!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href="tel:+919176206996"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-black text-base bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black border-2 border-taxi-yellow shadow-taxi text-center transition-all flex items-center justify-center gap-2 min-h-[52px]"
            >
              <Phone className="w-5 h-5" />
              <span>Call +91 9176206996</span>
            </a>
            <a
              href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to book a taxi ride.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-black text-base bg-[#25D366] hover:bg-[#20ba59] text-white text-center transition-all flex items-center justify-center gap-2 min-h-[52px]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* 5 Distinct Footer Link Columns strictly matching requirements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Column 1: Terms and Conditions */}
          <div>
            <h4 className="text-base font-black text-taxi-yellow uppercase tracking-wider mb-4 border-b border-taxi-yellow/30 pb-2">
              Terms &amp; Conditions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <button
                  onClick={() =>
                    openModal("Standard Booking Terms", [
                      "All bookings are subject to vehicle availability at confirmation.",
                      "Fare quotes include fuel, driver allowances, and vehicle rental charges.",
                      "Tolls, state permits, and airport parking fees are charged as per actual receipts.",
                      "Waiting time up to 15 minutes at pickup is complimentary.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Booking Policy &amp; Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("Cancellation & Refund Policy", [
                      "Free cancellation up to 2 hours prior to scheduled city pickup.",
                      "Outstation cancellations made 6+ hours before trip incur zero charges.",
                      "Instant refunds processed back to original payment mode or UPI within 24 hours.",
                      "No hidden penalty for flight delay reschedules.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Cancellation Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("Luggage & Passenger Allowance", [
                      "Hatchbacks accommodate up to 4 passengers with 2 medium bags.",
                      "Sedans carry 4 passengers with up to 3 large suitcases.",
                      "SUVs and Innovas accommodate 6-7 passengers with ample boot space.",
                      "Carrying hazardous goods or contraband is strictly prohibited by law.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Luggage &amp; Capacity Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("Driver Code of Conduct", [
                      "All chauffeurs hold valid commercial driving licenses & badge numbers.",
                      "Strict zero alcohol and zero smoking policy inside vehicle.",
                      "Safe speed limit compliance on all national and state highways.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Driver Guidelines
                </button>
              </li>
              <li className="pt-1.5 border-t border-gray-800">
                <Link
                  href="/terms"
                  className="text-taxi-yellow font-bold hover:underline inline-flex items-center gap-1 text-xs"
                >
                  <span>Full Terms Page &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Privacy Policy */}
          <div>
            <h4 className="text-base font-black text-taxi-yellow uppercase tracking-wider mb-4 border-b border-taxi-yellow/30 pb-2">
              Privacy Policy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <button
                  onClick={() =>
                    openModal("Data Protection & Privacy", [
                      "Your contact number is encrypted and shared only with the assigned driver.",
                      "We never sell, rent, or distribute personal information to third-party telemarketers.",
                      "Your trip history is securely stored for GST invoicing and emergency assistance.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Customer Data Protection
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("Secure Payment Processing", [
                      "Online card and UPI payments are secured via RBI-compliant 256-bit SSL gateways.",
                      "No credit/debit card numbers or CVV numbers are stored on our servers.",
                      "Direct cash-to-driver payment available on all routes.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Payment &amp; Billing Security
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("GPS Tracking & Trip Safety", [
                      "Real-time GPS tracking is active on all rides for passenger safety.",
                      "Emergency SOS monitoring active 24/7 with our central safety command room.",
                      "Family shareable ride links are automatically provided via SMS and WhatsApp.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  GPS &amp; Location Safety
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("Cookie & Website Privacy", [
                      "We use essential cookies to remember your pickup and drop search preferences.",
                      "You can clear cookies at any time from your browser settings.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Cookies &amp; Tracking
                </button>
              </li>
              <li className="pt-1.5 border-t border-gray-800">
                <Link
                  href="/privacy"
                  className="text-taxi-yellow font-bold hover:underline inline-flex items-center gap-1 text-xs"
                >
                  <span>Full Privacy Page &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Blogs */}
          <div>
            <h4 className="text-base font-black text-taxi-yellow uppercase tracking-wider mb-4 border-b border-taxi-yellow/30 pb-2">
              Blogs &amp; Travel Guides
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link
                  href="/blogs/chennai-to-pondicherry-ecr-guide"
                  className="hover:text-taxi-yellow transition-colors block leading-tight"
                >
                  Chennai to Pondicherry ECR Drive: 200km Scenic Coastal Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/chennai-to-tirupati-temple-darshan"
                  className="hover:text-taxi-yellow transition-colors block leading-tight"
                >
                  Chennai to Tirupati Temple Darshan: 200km in 3 Hours
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/chennai-to-vellore-highway-guide"
                  className="hover:text-taxi-yellow transition-colors block leading-tight"
                >
                  Chennai to Vellore (150km): Complete 3-Hour Highway Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/kanchipuram-temple-silk-saree-tour"
                  className="hover:text-taxi-yellow transition-colors block leading-tight"
                >
                  Kanchipuram Temple &amp; Silk Saree Shopping Tour (80km / Half-Day)
                </Link>
              </li>
              <li className="pt-1.5 border-t border-gray-800">
                <Link
                  href="/blogs"
                  className="text-taxi-yellow font-bold hover:underline inline-flex items-center gap-1 text-xs"
                >
                  <span>View All Travel Guides &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-base font-black text-taxi-yellow uppercase tracking-wider mb-4 border-b border-taxi-yellow/30 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-taxi-yellow flex-shrink-0 mt-0.5" />
                <span>
                  No - 35 Karpaga Vinayaga St, Kandanchavadi, chennai-96
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+919176206996"
                  className="flex items-center gap-2 hover:text-taxi-yellow font-bold text-white transition-colors"
                  aria-label="Call +91 9176206996"
                >
                  <Phone className="w-4 h-4 text-taxi-yellow flex-shrink-0" />
                  <span>+91 9176206996</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-taxi-yellow flex-shrink-0" />
                <a href="mailto:support@omrtaxiperungudi.com" className="hover:text-taxi-yellow">
                  support@omrtaxiperungudi.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-taxi-yellow flex-shrink-0" />
                <span className="text-gray-400">Open 24 Hours, 365 Days</span>
              </div>
              <div className="pt-2 border-t border-gray-800">
                <Link
                  href="/contact"
                  className="text-taxi-yellow font-bold hover:underline inline-flex items-center gap-1 text-xs"
                >
                  <span>Open Contact Us Page &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 5: FAQs */}
          <div>
            <h4 className="text-base font-black text-taxi-yellow uppercase tracking-wider mb-4 border-b border-taxi-yellow/30 pb-2">
              FAQs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <button
                  onClick={() =>
                    openModal("FAQ: How quickly can I get a taxi?", [
                      "For city pickups in Chennai and OMR, cabs typically arrive in around 30 minutes with our verified dispatch coordination.",
                      "For outstation journeys, we recommend booking in advance, though urgent dispatch is also supported 24/7.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  How fast can I get a pickup?
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("FAQ: Are Tolls and Taxes included?", [
                      "Our quote includes driver allowance, fuel, and car rent.",
                      "Highway tolls (FastTag) and parking are charged at actuals with receipts, ensuring 100% honesty.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Are toll charges included?
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("FAQ: Can I pay with Cash or UPI?", [
                      "Yes! We accept Cash directly to the driver, Google Pay, PhonePe, Paytm, and all major Credit/Debit cards upon trip completion.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  What payment modes are accepted?
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openModal("FAQ: Is there any night surcharge?", [
                      "No night charges! We maintain fixed standard rates around the clock for both local city trips and outstation journeys with zero night surcharges.",
                    ])
                  }
                  className="hover:text-taxi-yellow transition-colors text-left"
                >
                  Is there any night extra charge?
                </button>
              </li>
              <li className="pt-1.5 border-t border-gray-800">
                <a
                  href="/#faq"
                  className="text-taxi-yellow font-bold hover:underline inline-flex items-center gap-1 text-xs"
                >
                  <span>View All FAQs Section &rarr;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-taxi-yellow inline-block"></span>
            <p>
              &copy; {new Date().getFullYear()} <strong className="text-white">OMR Taxi Perungudi</strong>. All rights reserved. Registered Commercial Transport Operator.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-400">
            <Link href="/terms" className="hover:text-taxi-yellow transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-taxi-yellow transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-taxi-yellow transition-colors">
              Contact Us
            </Link>
            <span>•</span>
            <a href="/#faq" className="hover:text-taxi-yellow transition-colors">
              FAQs
            </a>
          </div>
        </div>
      </div>

      {/* Footer Info Modal for Terms, Privacy, and FAQs */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white text-taxi-black rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-taxi-yellow animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <h3 className="text-xl font-black text-taxi-black">
                {activeModal.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {activeModal.content.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-taxi-yellow fill-taxi-black flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded-xl bg-taxi-black text-taxi-yellow font-bold text-sm hover:bg-taxi-surface transition-colors"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
