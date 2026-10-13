"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Car, Clock, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      {/* Top emergency / quick dispatch bar */}
      <div className="bg-taxi-black text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-taxi-yellow">
              <Clock className="w-3.5 h-3.5" /> 24/7 Instant Dispatch
            </span>
            <span className="hidden md:inline text-gray-400">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-taxi-yellow" /> Govt. Verified Drivers & Sanitized Cabs
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919176206996"
              className="inline-flex items-center gap-1.5 font-bold text-taxi-yellow hover:underline tracking-wide"
              aria-label="Call Dispatch +91 9176206996"
            >
              <Phone className="w-3.5 h-3.5 text-taxi-yellow" />
              <span className="text-gray-300 font-normal">Call Dispatch:</span>
              <span>+91 9176206996</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-taxi-yellow rounded-xl flex items-center justify-center shadow-md border-2 border-taxi-black group-hover:scale-105 transition-transform">
            <Car className="w-6 h-6 sm:w-7 sm:h-7 text-taxi-black stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-taxi-black uppercase">
                OMR Taxi <span className="bg-taxi-yellow px-1.5 py-0.5 rounded text-taxi-black ml-0.5">Perungudi</span>
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-500">
              Taxi &amp; Outstation Cabs
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 font-semibold text-sm text-gray-800">
          <a
            href="/#booking"
            className="hover:text-taxi-black hover:underline decoration-taxi-yellow decoration-2 underline-offset-8 transition-colors"
          >
            Book A Ride
          </a>
          <a
            href="/#fleet"
            className="hover:text-taxi-black hover:underline decoration-taxi-yellow decoration-2 underline-offset-8 transition-colors"
          >
            Fleet &amp; Rates
          </a>
          <a
            href="/#trips"
            className="hover:text-taxi-black hover:underline decoration-taxi-yellow decoration-2 underline-offset-8 transition-colors"
          >
            Popular Trips
          </a>
          <a
            href="/#reviews"
            className="hover:text-taxi-black hover:underline decoration-taxi-yellow decoration-2 underline-offset-8 transition-colors"
          >
            Reviews
          </a>
          <Link
            href="/blogs"
            className="hover:text-taxi-black hover:underline decoration-taxi-yellow decoration-2 underline-offset-8 transition-colors"
          >
            Travel Guides
          </Link>
          <a
            href="/#faq"
            className="hover:text-taxi-black hover:underline decoration-taxi-yellow decoration-2 underline-offset-8 transition-colors"
          >
            FAQs
          </a>
          <Link
            href="/contact"
            className="hover:text-taxi-black hover:underline decoration-taxi-yellow decoration-2 underline-offset-8 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Header Action Buttons (Large tap targets) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919176206996"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-taxi-black text-white hover:bg-taxi-surface border border-transparent hover:border-taxi-yellow shadow-md transition-all active:scale-95"
            aria-label="Call taxi dispatch directly"
          >
            <Phone className="w-4 h-4 text-taxi-yellow animate-bounce" />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to book a taxi ride.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-sm bg-taxi-yellow text-taxi-black hover:bg-taxi-yellow-hover shadow-taxi hover:shadow-taxi-lg transition-all active:scale-95 border-2 border-taxi-black"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="tel:+919176206996"
            className="p-2.5 rounded-lg bg-taxi-yellow text-taxi-black font-bold flex items-center justify-center border border-taxi-black"
            aria-label="Call Dispatch"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-taxi-black hover:bg-gray-100 border border-gray-300 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-taxi-yellow px-4 pt-3 pb-6 shadow-xl space-y-3">
          <div className="grid grid-cols-1 gap-2 font-semibold text-base text-taxi-black">
            <a
              href="/#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-yellow-50 hover:text-black flex items-center justify-between"
            >
              <span>Book Your Ride</span>
              <span className="text-xs bg-taxi-yellow px-2 py-0.5 rounded font-bold">Fast</span>
            </a>
            <a
              href="/#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-yellow-50 hover:text-black"
            >
              Our Fleet &amp; Pricing
            </a>
            <a
              href="/#trips"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-yellow-50 hover:text-black"
            >
              Popular Outstation Trips
            </a>
            <a
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-yellow-50 hover:text-black"
            >
              Fleet Gallery &amp; Reviews
            </a>
            <a
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-yellow-50 hover:text-black"
            >
              FAQs
            </a>
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-yellow-50 hover:text-black font-semibold"
            >
              Travel Guides &amp; Blogs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-yellow-50 hover:text-black"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:+919176206996"
              className="w-full py-3.5 px-4 rounded-xl bg-taxi-black text-white font-bold text-center flex items-center justify-center gap-2 border border-taxi-yellow"
            >
              <Phone className="w-5 h-5 text-taxi-yellow" /> Call +91 9176206996
            </a>
            <a
              href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to book a taxi ride.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
              </svg>
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
