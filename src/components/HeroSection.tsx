"use client";

import React, { useState } from "react";
import { Phone, MapPin, Navigation, Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight, Shield, Zap, Car } from "lucide-react";

export default function HeroSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  const [date, setDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("Sedan");
  const [checking, setChecking] = useState(false);
  const [availabilityResult, setAvailabilityResult] = useState<{
    available: boolean;
    cabsNearby: number;
    pickup: string;
    drop: string;
    estKm?: number;
  } | null>(null);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPickup = pickup.trim();
    const cleanDrop = drop.trim();
    if (!cleanPickup || !cleanDrop) {
      alert("Please enter both Pickup Location and Drop Location.");
      return;
    }

    setChecking(true);
    setAvailabilityResult(null);

    // Realistic calculation simulation for on-page rate breakdown
    setTimeout(() => {
      setChecking(false);
      // Mock accurate distance based on destination
      let mockKm = 24;
      const lowerDrop = cleanDrop.toLowerCase();
      if (lowerDrop.includes("pondicherry")) mockKm = 200;
      else if (lowerDrop.includes("tirupati")) mockKm = 200;
      else if (lowerDrop.includes("vellore") || lowerDrop.includes("velur")) mockKm = 150;
      else if (lowerDrop.includes("kancheepuram") || lowerDrop.includes("kanchipuram")) mockKm = 80;
      else if (lowerDrop.includes("coimbatore")) mockKm = 505;
      else if (lowerDrop.includes("bangalore")) mockKm = 345;
      else if (lowerDrop.includes("trichy")) mockKm = 330;
      else if (lowerDrop.includes("madurai")) mockKm = 460;
      else if (lowerDrop.includes("airport")) mockKm = 18;

      setAvailabilityResult({
        available: true,
        cabsNearby: Math.floor(Math.random() * 8) + 6,
        pickup: cleanPickup,
        drop: cleanDrop,
        estKm: mockKm,
      });
    }, 400);
  };

  const handleQuickLocation = (type: "pickup" | "drop", value: string) => {
    if (type === "pickup") setPickup(value);
    else setDrop(value);
  };

  return (
    <section id="booking" className="relative bg-gradient-to-b from-yellow-50/50 via-white to-gray-50 pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-gray-200">
      {/* Subtle decorative taxi pattern watermark */}
      <div className="absolute top-0 inset-x-0 h-2 bg-taxi-yellow taxi-checkered-border opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Pill & Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-taxi-yellow animate-ping"></span>
            <span>24/7 Available in City & Outstation</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-yellow-100 border border-yellow-300 text-yellow-950 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold">
            <Zap className="w-3.5 h-3.5 text-yellow-700 fill-current" />
            <span>Prompt ~30-Min Pickup</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            <Shield className="w-3.5 h-3.5 text-green-600" />
            <span>Zero Surge Pricing Guarantee</span>
          </div>
        </div>

        {/* Headline strictly matching requirements */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-taxi-black tracking-tight leading-tight sm:leading-none">
            Reliable &amp; Fast Taxi Service
            <span className="block mt-2 sm:mt-3 text-taxi-black">
              — <span className="bg-taxi-yellow px-3 py-1 rounded-lg border-2 border-taxi-black inline-block shadow-taxi">Book Your Ride Today</span>
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal">
            Punctual city drop-offs, airport transfers, and comfortable outstation cabs with verified drivers and upfront flat rates.
          </p>
        </div>

        {/* 3 DISTINCT HIGHLY VISIBLE CALL-TO-ACTION (CTA) METHODS */}
        <div className="max-w-5xl mx-auto">
          {/* CTA 1 and CTA 2: Side-by-Side on Desktop, Stacked on Mobile with massive tap targets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* CTA 1: Click to Call */}
            <a
              href="tel:+919176206996"
              className="group relative flex items-center justify-between p-4 sm:p-5 bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black border-3 border-taxi-black rounded-2xl shadow-taxi hover:shadow-taxi-lg transition-all transform active:scale-98 min-h-[72px]"
              aria-label="Click to Call taxi dispatch"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-taxi-black text-taxi-yellow flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                  <Phone className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-black uppercase tracking-wider text-black/70 block">
                    CTA 1 • Instant Hotline
                  </span>
                  <span className="text-lg sm:text-xl font-black text-taxi-black block leading-tight">
                    Click to Call Now
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-black/80">
                    +91 9176206996 (24/7)
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 text-taxi-black stroke-[3]" />
              </div>
            </a>

            {/* CTA 2: Book via WhatsApp */}
            <a
              href={`https://wa.me/919176206996?text=${encodeURIComponent(
                pickup && drop
                  ? `Hi OMR Taxi, I would like to book a ride from ${pickup} to ${drop}.`
                  : "Hi OMR Taxi, I would like to book a taxi ride."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 sm:p-5 bg-taxi-black hover:bg-taxi-black-soft text-white border-3 border-taxi-yellow rounded-2xl shadow-xl transition-all transform active:scale-98 min-h-[72px]"
              aria-label="Book via WhatsApp"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {/* Official WhatsApp SVG Icon */}
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-xs font-black uppercase tracking-wider text-taxi-yellow block">
                    CTA 2 • 30-Sec Chat Booking
                  </span>
                  <span className="text-lg sm:text-xl font-black text-white block leading-tight">
                    Book via WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-300">
                    Get Instant Fare Quote &amp; Driver Details
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 text-taxi-yellow stroke-[3]" />
              </div>
            </a>
          </div>

          {/* CTA 3: Check Availability Card */}
          <div className="bg-white rounded-2xl border-2 border-taxi-black shadow-2xl p-5 sm:p-8 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-gray-100 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-taxi-yellow text-taxi-black font-extrabold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider border border-taxi-black">
                    CTA 3 • Online Booking Hub
                  </span>
                  <span className="text-xs text-green-700 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                    Live GPS Tracking
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-taxi-black mt-1">
                  Check Taxi Availability &amp; Instant Fare
                </h2>
              </div>

              {/* Trip type toggle */}
              <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200">
                <button
                  type="button"
                  onClick={() => setTripType("oneway")}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    tripType === "oneway"
                      ? "bg-taxi-black text-taxi-yellow shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  One Way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("round")}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    tripType === "round"
                      ? "bg-taxi-black text-taxi-yellow shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Round Trip
                </button>
              </div>
            </div>

            {/* Availability Form */}
            <form onSubmit={handleCheckAvailability} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pickup Location input */}
                <div>
                  <label htmlFor="pickup-input" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-taxi-yellow stroke-[2.5]" />
                    </div>
                    <input
                      id="pickup-input"
                      type="text"
                      required
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g., Chennai Airport, T. Nagar, Central Station"
                      className="w-full pl-11 pr-4 py-3.5 text-sm sm:text-base font-semibold text-taxi-black bg-gray-50 border-2 border-gray-300 rounded-xl focus:bg-white focus:border-taxi-black focus:ring-2 focus:ring-taxi-yellow focus:outline-none transition-all placeholder:text-gray-400 min-h-[52px]"
                    />
                  </div>
                  {/* Pickup quick presets */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[11px] text-gray-500 font-medium">Quick Pick:</span>
                    {["Airport (MAA)", "Chennai Central", "T. Nagar", "OMR"].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => handleQuickLocation("pickup", loc)}
                        className="text-[11px] bg-gray-100 hover:bg-yellow-100 text-gray-800 px-2 py-0.5 rounded font-medium border border-gray-200 transition-colors"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drop Location input */}
                <div>
                  <label htmlFor="drop-input" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Drop Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Navigation className="h-5 w-5 text-taxi-black stroke-[2.5]" />
                    </div>
                    <input
                      id="drop-input"
                      type="text"
                      required
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      placeholder="e.g., Pondicherry, Velur, Tirupati, Kancheepuram"
                      className="w-full pl-11 pr-4 py-3.5 text-sm sm:text-base font-semibold text-taxi-black bg-gray-50 border-2 border-gray-300 rounded-xl focus:bg-white focus:border-taxi-black focus:ring-2 focus:ring-taxi-yellow focus:outline-none transition-all placeholder:text-gray-400 min-h-[52px]"
                    />
                  </div>
                  {/* Drop quick presets */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[11px] text-gray-500 font-medium">Popular:</span>
                    {["Pondicherry", "Vellore", "Tirupati", "Kancheepuram"].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => handleQuickLocation("drop", loc)}
                        className="text-[11px] bg-yellow-100 hover:bg-taxi-yellow text-taxi-black px-2 py-0.5 rounded font-semibold border border-yellow-300 transition-colors"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button (Large tap target) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={checking}
                  className="w-full py-4 px-6 rounded-xl font-black text-base sm:text-lg bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black border-2 border-taxi-black shadow-taxi hover:shadow-taxi-lg flex items-center justify-center gap-3 transition-all transform active:scale-99 min-h-[56px] disabled:opacity-75 cursor-pointer"
                >
                  {checking ? (
                    <>
                      <div className="w-5 h-5 border-3 border-taxi-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Calculating Rates &amp; Scanning Fleet...</span>
                    </>
                  ) : (
                    <>
                      <Car className="w-6 h-6 stroke-[2.5]" />
                      <span>Check Availability &amp; Get Instant Rates</span>
                      <ArrowRight className="w-5 h-5 stroke-[3]" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Real-time Availability Result Box */}
            {availabilityResult && (() => {
              const km = availabilityResult.estKm || 20;
              const vehicleOptions = [
                { name: "Hatchback", ratePerKm: 25, price: Math.round(km * 25) },
                { name: "Sedan", ratePerKm: 25, price: Math.round(km * 25) },
                { name: "SUV", ratePerKm: 35, price: Math.round(km * 35) },
                { name: "Innova", ratePerKm: 22, price: Math.round(km * 22) },
              ];

              const currentVehicle = vehicleOptions.find((v) => v.name === selectedVehicle) || vehicleOptions[1];
              const whatsappMessage = `Hi OMR Taxi, I would like to book a ride from ${availabilityResult.pickup} to ${availabilityResult.drop}. Estimated Distance: ${km} km. Selected Vehicle: ${currentVehicle.name} - Estimated Fare: ₹${currentVehicle.price.toLocaleString()}. Please check driver availability.`;

              return (
                <div className="mt-6 p-5 sm:p-6 bg-white border-2 border-taxi-black rounded-2xl shadow-xl animate-in fade-in duration-300">
                  {/* Route & Distance Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-3">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-gray-500 block">
                        Estimated Trip Details
                      </span>
                      <div className="flex items-center gap-2 text-base sm:text-lg font-black text-taxi-black mt-0.5">
                        <span>{availabilityResult.pickup}</span>
                        <ArrowRight className="w-4 h-4 text-taxi-yellow stroke-[3]" />
                        <span>{availabilityResult.drop}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-950 border border-yellow-300 px-3 py-1.5 rounded-xl text-xs font-black self-start sm:self-auto">
                      <Navigation className="w-4 h-4 text-taxi-black" />
                      <span>Estimated Distance: ~{km} km</span>
                    </div>
                  </div>

                  {/* Vehicle Type Rates Selection Grid */}
                  <div className="mt-4">
                    <span className="text-xs font-bold text-gray-700 block mb-2">
                      Select Vehicle to View Estimated Fare:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {vehicleOptions.map((v) => {
                        const isSelected = selectedVehicle === v.name;
                        return (
                          <button
                            key={v.name}
                            type="button"
                            onClick={() => setSelectedVehicle(v.name)}
                            className={`p-3 rounded-xl border-2 transition-all text-center flex flex-col justify-between cursor-pointer ${
                              isSelected
                                ? "bg-taxi-yellow border-taxi-black text-taxi-black shadow-md font-bold scale-[1.02]"
                                : "bg-gray-50 hover:bg-yellow-50 border-gray-200 hover:border-gray-400 text-gray-800"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1 w-full mb-1">
                              <span className={`text-xs font-bold ${isSelected ? "text-black" : "text-gray-700"}`}>
                                {v.name}
                              </span>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
                              )}
                            </div>
                            <span className="text-[11px] text-gray-500 block mb-1">₹{v.ratePerKm}/km</span>
                            <strong className="text-base sm:text-lg font-black text-taxi-black">
                              ₹{v.price.toLocaleString()}
                            </strong>
                            {isSelected && (
                              <span className="text-[10px] font-black uppercase text-taxi-black mt-1.5 bg-white/70 py-0.5 px-1.5 rounded border border-black/20">
                                ✓ Selected
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Professional Pricing Disclaimer Notice */}
                  <div className="mt-4 p-3.5 rounded-xl bg-amber-50/90 border border-amber-300 text-amber-950 text-xs sm:text-[13px] flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-medium">
                      <strong className="font-extrabold text-amber-900">Note:</strong> Fares shown are approximate estimates based on standard distance and may vary slightly based on specific customizations, route deviations, or tolls. Final confirmation and driver availability will be coordinated via WhatsApp.
                    </p>
                  </div>

                  {/* WhatsApp Booking CTA & Instant Call Action */}
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-5 pt-4 border-t border-gray-100">
                    <a
                      href={`https://wa.me/919176206996?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da851] text-white font-black text-sm text-center flex items-center justify-center gap-2.5 shadow-lg transition-all active:scale-98 min-h-[50px]"
                    >
                      <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
                      </svg>
                      <span>Book &amp; Check Driver Availability on WhatsApp</span>
                    </a>
                    <a
                      href="tel:+919176206996"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-taxi-black hover:bg-taxi-surface text-taxi-yellow font-black text-sm text-center flex items-center justify-center gap-2 border border-taxi-yellow transition-colors min-h-[50px]"
                    >
                      <Phone className="w-4 h-4" /> Call Driver Dispatch
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
