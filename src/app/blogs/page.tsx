import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingBar from "@/components/MobileFloatingBar";
import { blogsData } from "@/data/blogs";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Phone,
  Sparkles,
  BookOpen,
  Car,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outstation Travel Guides & Blogs | OMR Taxi Perungudi",
  description:
    "Explore comprehensive road trip guides from Chennai to Pondicherry, Tirupati, Vellore, and Kanchipuram with OMR Taxi Perungudi. Transparent fares, scenic routes & 24/7 private cab dispatch.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-taxi-black pb-16 md:pb-0">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-taxi-black text-white py-14 sm:py-20 border-b-4 border-taxi-yellow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-taxi-yellow font-extrabold text-xs px-3 py-1.5 rounded-md uppercase tracking-wider mb-4 border border-taxi-yellow/30">
              <BookOpen className="w-3.5 h-3.5" /> Outstation Travel Guides &amp; Route Insights
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              South India Road Trips &amp; Pilgrimage Guides
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Curated travel guides for top getaways from Chennai. Discover optimal highway routes, scenic sightseeing stops, pilgrimage darshan tips, and transparent vehicle rental recommendations from OMR Taxi Perungudi.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {blogsData.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white border-2 border-taxi-black rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group"
              >
                {/* Image & Badge Header */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-gray-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-taxi-yellow text-taxi-black font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-taxi-black shadow-sm">
                      {blog.badge}
                    </span>
                    <span className="bg-taxi-black/80 backdrop-blur-sm text-white font-bold text-xs px-2.5 py-1 rounded-full border border-gray-700">
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5 font-bold drop-shadow">
                      <Navigation className="w-4 h-4 text-taxi-yellow" /> {blog.distance}
                    </span>
                    <span className="flex items-center gap-1.5 font-bold drop-shadow">
                      <Clock className="w-4 h-4 text-taxi-yellow" /> {blog.duration}
                    </span>
                    <span className="bg-taxi-yellow text-taxi-black font-black px-2.5 py-1 rounded-md shadow-sm">
                      Starting ₹{blog.oneWayPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                      {blog.routeHighlight}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-taxi-black group-hover:text-amber-600 transition-colors leading-snug mb-3">
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                      {blog.subtitle}
                    </p>

                    {/* Quick highlights checklist preview */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                      {blog.keyHighlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-semibold">{highlight.heading}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-sm border-2 border-taxi-black shadow-taxi text-center flex items-center justify-center gap-2 transition-all active:scale-98 min-h-[44px]"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                    <a
                      href={`https://wa.me/919176206996?text=${encodeURIComponent(blog.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm text-center flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
                    >
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Dispatch Bottom Banner */}
          <div className="mt-16 p-6 sm:p-10 bg-taxi-black text-white rounded-3xl border-4 border-taxi-yellow shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-taxi-yellow text-xs font-bold uppercase tracking-wider mb-2">
                <Car className="w-4 h-4" /> Customized Outstation Taxi Dispatch
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Planning a Trip to Any Other Destination?
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xl">
                We provide prompt door-to-door cab dispatch across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, Puducherry, and Telangana with transparent per-km billing and zero night surcharges.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="tel:+919176206996"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-sm border-2 border-taxi-black shadow-taxi text-center flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Phone className="w-4 h-4" /> Call +91 9176206996
              </a>
              <a
                href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to enquire about a custom outstation taxi trip.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm text-center flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
              >
                Chat on WhatsApp
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
