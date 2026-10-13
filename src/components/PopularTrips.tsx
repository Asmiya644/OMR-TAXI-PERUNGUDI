"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation, Clock, Compass, ArrowRight, ShieldCheck, Check, Phone, Car, BookOpen } from "lucide-react";

interface RouteInfo {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  oneWayPrice: number;
  roundTripPrice: number;
  highway: string;
  highlights: string[];
  sedanPrice: string;
  suvPrice: string;
  innovaPrice: string;
  badge?: string;
  imageUrl: string;
}

const routesData: RouteInfo[] = [
  {
    id: "chennai-pondicherry",
    from: "Chennai",
    to: "Pondicherry",
    distance: "200 km",
    duration: "3 hrs",
    oneWayPrice: 4200,
    roundTripPrice: 7999,
    highway: "Via ECR (East Coast Road) Scenic Highway",
    highlights: ["Raj Nivas & French Quarter", "Doorstep resort & beach drop", "Toll & FastTag included"],
    sedanPrice: "₹4,200",
    suvPrice: "₹5,800",
    innovaPrice: "₹6,800",
    badge: "White Town",
    imageUrl: "/images/pondicherry.jpg",
  },
  {
    id: "chennai-tirupati",
    from: "Chennai",
    to: "Tirupati",
    distance: "200 km",
    duration: "3 hrs",
    oneWayPrice: 4500,
    roundTripPrice: 8500,
    highway: "Via Tirupati Highway / NH 716",
    highlights: ["Tirumala Lord Venkateswara Temple", "Alipiri toll & hill assistance", "Flexible darshan waiting"],
    sedanPrice: "₹4,500",
    suvPrice: "₹6,200",
    innovaPrice: "₹7,200",
    badge: "Temple Darshan",
    imageUrl: "/images/tirupati.jpg",
  },
  {
    id: "chennai-vellore",
    from: "Chennai",
    to: "Vellore",
    distance: "150 km",
    duration: "3 hrs",
    oneWayPrice: 3500,
    roundTripPrice: 6500,
    highway: "Via NH 48 / Bangalore Highway Corridor",
    highlights: ["Sripuram Golden Temple darshan", "Smooth 4-lane expressway", "Clean refreshment stops"],
    sedanPrice: "₹3,500",
    suvPrice: "₹4,900",
    innovaPrice: "₹5,900",
    badge: "Golden Temple",
    imageUrl: "/images/vellore.jpg",
  },
  {
    id: "chennai-kancheepuram",
    from: "Chennai",
    to: "Kancheepuram",
    distance: "80 km",
    duration: "3 hrs",
    oneWayPrice: 2000,
    roundTripPrice: 3800,
    highway: "Via NH 48 / Temple City Corridor",
    highlights: ["Ekambareswarar & historic temple tour", "Silk saree shopping assistance", "Dedicated driver & flexible stops"],
    sedanPrice: "₹2,000",
    suvPrice: "₹2,800",
    innovaPrice: "₹3,400",
    badge: "Temple Tour",
    imageUrl: "/images/kancheepuram.jpg",
  },
];

const routeBlogSlugMap: Record<string, string> = {
  "chennai-pondicherry": "chennai-to-pondicherry-ecr-guide",
  "chennai-tirupati": "chennai-to-tirupati-temple-darshan",
  "chennai-vellore": "chennai-to-vellore-highway-guide",
  "chennai-kancheepuram": "kanchipuram-temple-silk-saree-tour",
};

export default function PopularTrips() {
  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  const [activeRouteModal, setActiveRouteModal] = useState<RouteInfo | null>(null);

  return (
    <section id="trips" className="py-16 sm:py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-taxi-yellow text-taxi-black font-extrabold text-xs px-3 py-1 rounded-md uppercase tracking-wider mb-3 border border-taxi-black">
              <Compass className="w-3.5 h-3.5" /> Outstation Travel Hub
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-taxi-black tracking-tight">
              Popular Outstation Trips
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Fixed, transparent one-way and round-trip fares from Chennai with verified highway chauffeurs and zero return-fare traps.
            </p>
          </div>

          {/* Toggle Trip Type */}
          <div className="flex items-center bg-white p-1.5 rounded-2xl border-2 border-taxi-black shadow-sm self-start md:self-auto">
            <button
              onClick={() => setTripType("oneway")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all min-h-[44px] ${
                tripType === "oneway"
                  ? "bg-taxi-yellow text-taxi-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              One-Way Drop
            </button>
            <button
              onClick={() => setTripType("round")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all min-h-[44px] ${
                tripType === "round"
                  ? "bg-taxi-black text-white shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Round-Trip Journey
            </button>
          </div>
        </div>

        {/* 4 Cards Grid specifically listing the required routes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routesData.map((route) => {
            const currentPrice =
              tripType === "oneway" ? route.oneWayPrice : route.roundTripPrice;

            return (
              <div
                key={route.id}
                className="group flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-taxi-black shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Visual Route Banner */}
                <div className="relative h-44 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={route.imageUrl}
                    alt={`${route.from} to ${route.to} taxi`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-between p-4">
                    <span className="self-start text-[11px] font-black uppercase tracking-wider bg-taxi-yellow text-taxi-black px-2.5 py-0.5 rounded border border-taxi-black">
                      {route.badge}
                    </span>

                    {/* Route Names */}
                    <div className="text-white">
                      <div className="flex items-center gap-2 font-black text-lg sm:text-xl">
                        <span>{route.from}</span>
                        <ArrowRight className="w-4 h-4 text-taxi-yellow stroke-[3]" />
                        <span className="text-taxi-yellow">{route.to}</span>
                      </div>
                      <p className="text-[11px] text-gray-300 font-medium">
                        {route.highway}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Distance & Duration Pills */}
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs font-bold text-gray-700">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-taxi-yellow fill-taxi-yellow" />
                        <span>{route.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span>{route.duration}</span>
                      </div>
                    </div>

                    {/* Pricing Highlight Box */}
                    <div className="my-4 p-3.5 rounded-xl bg-yellow-50/80 border border-yellow-200 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-gray-600 block uppercase">
                          {tripType === "oneway" ? "One-Way Starting" : "Round-Trip Package"}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-taxi-black">
                            ₹{currentPrice.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-gray-500 font-semibold">*All Inclusive</span>
                        </div>
                      </div>
                      <span className="text-xs bg-white text-taxi-black font-extrabold px-2.5 py-1 rounded-lg border border-yellow-300 shadow-sm">
                        Sedan / AC
                      </span>
                    </div>

                    {/* Car Rates Accordion / Snippet */}
                    <div className="space-y-1.5 text-xs text-gray-700 font-semibold mb-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Prime Sedan:</span>
                        <span className="font-black text-black">{route.sedanPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">6-Seater SUV:</span>
                        <span className="font-black text-black">{route.suvPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Innova Crysta:</span>
                        <span className="font-black text-taxi-black">{route.innovaPrice}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1 text-xs text-gray-600">
                      {route.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-green-600 stroke-[3] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                    {/* Booking CTA Buttons (Clickable card action) */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/919176206996?text=${encodeURIComponent(`Hi OMR Taxi, I would like to book the ${route.from} to ${route.to} outstation package.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl font-black text-sm bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black border-2 border-taxi-black shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98 min-h-[48px]"
                    >
                      <span>Book This Route</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <a
                        href="tel:+919176206996"
                        className="py-1.5 px-2 text-xs font-bold text-gray-700 hover:text-black flex items-center gap-1"
                      >
                        <Phone className="w-3.5 h-3.5 text-taxi-yellow fill-current" />
                        <span>Call Dispatch</span>
                      </a>

                      {routeBlogSlugMap[route.id] && (
                        <Link
                          href={`/blogs/${routeBlogSlugMap[route.id]}`}
                          className="py-1.5 px-2 text-xs font-black text-taxi-black hover:text-amber-600 hover:underline inline-flex items-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                          <span>Travel Guide &rarr;</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Outstation Enquiry CTA */}
        <div className="mt-12 p-6 sm:p-8 bg-white border-2 border-taxi-black rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-taxi-black">
              Need a Custom Route or Multi-City Tour?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
              We cover all destinations across Tamil Nadu, neighboring states (Karnataka, Andhra Pradesh, Kerala, Puducherry), and Telangana. Customized temple tour and vacation packages available with experienced drivers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to book a custom outstation package.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-sm bg-[#25D366] text-white hover:bg-[#20ba59] shadow-sm text-center flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>Chat for Custom Route</span>
            </a>
            <a
              href="tel:+919176206996"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-sm bg-taxi-black text-taxi-yellow hover:bg-taxi-surface border border-taxi-yellow text-center flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Phone className="w-4 h-4" /> Call 24/7 Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
