"use client";

import React, { useState } from "react";
import { Users, Briefcase, Snowflake, Fuel, Check, Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  models: string;
  category: "Hatchback" | "Sedan" | "SUV" | "Innova";
  tag: string;
  baseRate: string;
  perKm: string;
  capacity: string;
  luggage: string;
  acType: string;
  features: string[];
  bestFor: string;
  imageUrl: string;
  popular?: boolean;
}

const fleetData: Vehicle[] = [
  {
    id: "hatchback",
    name: "Economy Hatchback",
    models: "Maruti Swift, WagonR, Tiago",
    category: "Hatchback",
    tag: "Budget Friendly",
    baseRate: "₹800 (First 20 km)",
    perKm: "₹25 / km",
    capacity: "4 Passengers",
    luggage: "2 Medium Bags",
    acType: "Air Conditioned",
    features: ["Compact & agile in city traffic", "Punctual doorstep pickup", "Clean & sanitized cabin"],
    bestFor: "Daily city commute, solo riders & quick airport drop",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sedan",
    name: "Prime Sedan",
    models: "Swift Dzire, Toyota Etios, Aura",
    category: "Sedan",
    tag: "Most Popular",
    baseRate: "₹1,000 (First 20 km)",
    perKm: "₹25 / km",
    capacity: "4 Passengers",
    luggage: "3 Large Suitcases",
    acType: "Climate Controlled AC",
    features: ["Spacious boot for heavy luggage", "Smooth highway suspension", "Experienced highway drivers"],
    bestFor: "Business meetings, airport runs, intercity round-trips",
    imageUrl: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: "suv",
    name: "Spacious SUV",
    models: "Maruti Ertiga, Kia Carens, Triber",
    category: "SUV",
    tag: "Family Choice",
    baseRate: "₹1,200 (First 20 km)",
    perKm: "₹35 / km",
    capacity: "6 Passengers",
    luggage: "4 Luggage Bags",
    acType: "Dual Zone AC Vents",
    features: ["Extra legroom for all rows", "High ground clearance", "Carrier available on demand"],
    bestFor: "Family temple trips, group airport pickup, hilly routes",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "innova",
    name: "Innova Crysta Premium",
    models: "Toyota Innova Crysta / Hycross",
    category: "Innova",
    tag: "Package Special",
    baseRate: "Package 50km 5hrs ₹2200",
    perKm: "₹22 / km",
    capacity: "7 Passengers",
    luggage: "5 Large Bags",
    acType: "Powerful Roof AC",
    features: ["Plush reclining captain seats", "Whisper-quiet long drive comfort", "Senior chauffeur with 10+ yrs exp"],
    bestFor: "Outstation long tours, VIP travel, wedding celebrations",
    imageUrl: "/images/innova-crysta.jpg",
    popular: true,
  },
];

export default function FleetPricing() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Hatchback", "Sedan", "SUV", "Innova"];

  const filteredFleet =
    selectedCategory === "All"
      ? fleetData
      : fleetData.filter((v) => v.category === selectedCategory);

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-900 border border-yellow-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-yellow-600" /> Transparent Rates • No Hidden Fees
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-taxi-black tracking-tight">
            Our Fleet &amp; Pricing
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 font-normal">
            Every cab is commercially licensed, thoroughly sanitized, and air-conditioned. Choose the right ride for your group and budget.
          </p>

          {/* Category filter pills for mobile & quick view */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] ${
                  selectedCategory === cat
                    ? "bg-taxi-black text-taxi-yellow border-2 border-taxi-black shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`flex flex-col bg-white rounded-2xl border-2 transition-all duration-200 hover:-translate-y-1 ${
                vehicle.popular
                  ? "border-taxi-black shadow-taxi-lg relative ring-2 ring-taxi-yellow"
                  : "border-gray-200 hover:border-taxi-black shadow-card hover:shadow-card-hover"
              }`}
            >
              {/* Top Badge */}
              <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md">
                  {vehicle.category}
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                  vehicle.popular ? "bg-taxi-yellow text-taxi-black border border-taxi-black" : "bg-gray-100 text-gray-600"
                }`}>
                  {vehicle.tag}
                </span>
              </div>

              {/* Vehicle Placeholder Image */}
              <div className="relative h-44 sm:h-48 w-full bg-gray-100 overflow-hidden mx-auto">
                <img
                  src={vehicle.imageUrl}
                  alt={`${vehicle.name} taxi fleet`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-medium text-taxi-yellow">Includes</p>
                    <p className="text-sm font-bold drop-shadow">{vehicle.models}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-taxi-black leading-snug">
                    {vehicle.name}
                  </h3>

                  {/* Pricing Display Box (Prominent & Clear) */}
                  <div className="mt-3 p-3.5 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-gray-600 uppercase block">
                        Per-KM Rate
                      </span>
                      <span className="text-xl font-black text-taxi-black tracking-tight">
                        {vehicle.perKm}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-gray-600 uppercase block">
                        {vehicle.id === "innova" ? "Package Rate" : "Base Fare"}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-gray-900">
                        {vehicle.baseRate}
                      </span>
                    </div>
                  </div>

                  {/* Vehicle Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-semibold text-gray-700">
                    <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-lg border border-gray-100">
                      <Users className="w-4 h-4 text-taxi-black" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-lg border border-gray-100">
                      <Briefcase className="w-4 h-4 text-taxi-black" />
                      <span>{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-lg border border-gray-100 col-span-2">
                      <Snowflake className="w-4 h-4 text-blue-600" />
                      <span>{vehicle.acType}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mt-4 space-y-1.5 text-xs text-gray-600">
                    {vehicle.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-600 stroke-[3] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best For note */}
                  <p className="mt-3 text-[11px] text-gray-500 italic">
                    <strong className="text-gray-700">Best for:</strong> {vehicle.bestFor}
                  </p>
                </div>

                {/* Booking Action Buttons (Large tap target) */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919176206996?text=${encodeURIComponent(`Hi OMR Taxi, I would like to book a ${vehicle.category} ride.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black border-2 border-taxi-black shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98 min-h-[48px]"
                  >
                    <span>Book Now ({vehicle.category})</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href="tel:+919176206996"
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-gray-800 hover:text-black hover:bg-gray-100 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-taxi-black" />
                    <span>Instant Booking Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="mt-12 bg-taxi-black text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-taxi-yellow">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-xl bg-taxi-yellow text-taxi-black flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-taxi-yellow">
                Transparent Billing Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                Toll and parking charges are billed at actuals with receipts. No midnight surge, no luggage extra charges, and driver allowances are included upfront.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="#booking"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl font-black text-sm bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black border-2 border-black transition-all text-center min-h-[48px] flex items-center justify-center"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
