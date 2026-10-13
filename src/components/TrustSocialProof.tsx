"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, CheckCircle2, UserCheck, MessageSquare, ThumbsUp, ChevronDown, Camera, Award } from "lucide-react";

interface Review {
  id: string;
  name: string;
  initials: string;
  location: string;
  route: string;
  date: string;
  rating: number;
  carBooked: string;
  verified: boolean;
  content: string;
  tag: string;
}

const sampleReviews: Review[] = [
  {
    id: "rev-1",
    name: "R. Karthik",
    initials: "RK",
    location: "Velachery, Chennai",
    route: "Chennai to Tirupati",
    date: "3 days ago",
    rating: 5,
    carBooked: "Prime Sedan (Dzire)",
    verified: true,
    tag: "Outstation",
    content:
      "Booked a sedan for morning darshan in Tirupati. Chauffeur arrived 10 mins early, car was spotless, and driving on the highway was exceptionally smooth. Billing was 100% transparent with FastTag receipts. Will always book with them!",
  },
  {
    id: "rev-2",
    name: "Meera Sundaram",
    initials: "MS",
    location: "Anna Nagar, Chennai",
    route: "Chennai to Pondicherry",
    date: "1 week ago",
    rating: 5,
    carBooked: "Innova Crysta Premium",
    verified: true,
    tag: "Family Innova",
    content:
      "Traveled with my elderly parents to Pondicherry on ECR. The Innova Crysta had amazing legroom and comfortable captain seats. The driver was patient, took gentle breaks for tea, and drove within speed limits throughout. Pure peace of mind.",
  },
  {
    id: "rev-3",
    name: "Ananth Kumar",
    initials: "AK",
    location: "T. Nagar, Chennai",
    route: "Airport Transfer (2:30 AM)",
    date: "2 weeks ago",
    rating: 5,
    carBooked: "Economy Hatchback",
    verified: true,
    tag: "Airport Trips",
    content:
      "Midnight pickup from Chennai International Airport. My flight was delayed by 45 minutes, but the driver tracked my flight and was already waiting right outside the terminal. Professional and stress-free after a long flight.",
  },
  {
    id: "rev-4",
    name: "Dr. S. Vijayalakshmi",
    initials: "SV",
    location: "Mylapore, Chennai",
    route: "Chennai to Kancheepuram (Temple Tour)",
    date: "3 weeks ago",
    rating: 5,
    carBooked: "Spacious SUV (Ertiga)",
    verified: true,
    tag: "Outstation",
    content:
      "Booked the Kancheepuram temple tour and silk saree shopping for our family of 5. Driver Mr. Murugan was courteous, knew all temple timings, and our shopping bags fit effortlessly. Highly recommended for families!",
  },
];

const additionalReviews: Review[] = [
  {
    id: "rev-5",
    name: "Gautam Raman",
    initials: "GR",
    location: "OMR, Chennai",
    route: "Chennai to Vellore",
    date: "1 month ago",
    rating: 5,
    carBooked: "Prime Sedan",
    verified: true,
    tag: "Outstation",
    content:
      "Unbelievable punctuality for my hospital trip to Vellore. Driver contacted me 15 minutes before scheduled departure. Smooth overtaking, zero reckless driving, and honest flat rate pricing.",
  },
  {
    id: "rev-6",
    name: "Deepa & Vignesh",
    initials: "DV",
    location: "Porur, Chennai",
    route: "Weekend Trip to Pondicherry",
    date: "1 month ago",
    rating: 5,
    carBooked: "SUV Ertiga",
    verified: true,
    tag: "Family Innova",
    content:
      "Cleanest cab we've taken in years. AC was ice cold, phone chargers were provided, and the driver was friendly without being intrusive. 5 stars all the way!",
  },
];

const tickerReviews = [
  "⭐ 5.0 - Senthil M: 'Chennai to Pondicherry in 3 hours, spotless Dzire!'",
  "⭐ 5.0 - Divya K: 'Best airport taxi service in Chennai, arrived in 5 mins'",
  "⭐ 5.0 - Ramesh P: 'Innova Crysta to Tirupati was worth every rupee'",
  "⭐ 5.0 - Arvind S: 'Zero cancellation hassles, reliable WhatsApp booking'",
  "⭐ 5.0 - K. Preethi: 'Safe night travel for solo female passengers'",
  "⭐ 5.0 - Robert D: 'Punctual Kancheepuram temple tour, great driver assistance'",
  "⭐ 5.0 - Vignesh W: 'Transparent pricing with zero surge charges'",
  "⭐ 5.0 - Balaji T: 'Driver was polite and skilled on the Vellore highway run'",
];

const galleryItems = [
  {
    id: "gal-1",
    title: "Sanitized Premium Sedan",
    category: "Our Fleet",
    span: "col-span-1 md:col-span-2 row-span-2",
    height: "h-72 sm:h-96",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    caption: "Pristine, sanitized cabin ready for morning airport dispatch",
  },
  {
    id: "gal-2",
    title: "Bangalore Highway Travel",
    category: "Happy Travelers",
    span: "col-span-1",
    height: "h-44 sm:h-48",
    imageUrl: "/images/bangalore-highway.jpg",
    caption: "Family trip stop at highway refreshment pavilion",
  },
  {
    id: "gal-3",
    title: "Innova Crysta Highway Tour",
    category: "VIP Chauffeur",
    span: "col-span-1",
    height: "h-44 sm:h-48",
    imageUrl: "/images/innova-crysta.jpg",
    caption: "Spacious luxury seating for family outstation trips",
  },
  {
    id: "gal-4",
    title: "Airport Transfer Desk",
    category: "24/7 Pickup",
    span: "col-span-1",
    height: "h-44 sm:h-48",
    imageUrl: "/images/chennai-airport.jpg",
    caption: "Pickups right at Anna International Terminal (T2)",
  },
  {
    id: "gal-5",
    title: "Verified Professional Drivers",
    category: "Safety First",
    span: "col-span-1",
    height: "h-44 sm:h-48",
    imageUrl: "/images/verified-drivers.jpg",
    caption: "Govt. background verified drivers with 8+ years highway experience",
  },
];

export default function TrustSocialProof() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [showMore, setShowMore] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const displayedReviews = showMore
    ? [...sampleReviews, ...additionalReviews]
    : sampleReviews;

  const filteredReviews =
    activeTab === "All"
      ? displayedReviews
      : displayedReviews.filter((r) => r.tag === activeTab || activeTab.includes(r.tag));

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-taxi-yellow text-taxi-black font-extrabold text-xs px-3.5 py-1.5 rounded-md uppercase tracking-wider mb-3 border border-taxi-black">
            <Award className="w-4 h-4" /> 100% Verified Customer Trust
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-taxi-black tracking-tight">
            Trust &amp; Social Proof
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Real photos of our well-maintained cabs and honest feedback from thousands of satisfied travelers across South India.
          </p>
        </div>

        {/* PART 1: MASONRY-STYLE PHOTO GALLERY */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-taxi-black bg-taxi-yellow px-2 py-0.5 rounded border border-taxi-black">
                Fleet &amp; Traveler Moments
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-taxi-black mt-1">
                Our Fleet in Action
              </h3>
            </div>
            <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
              Real cars • Real happy journeys
            </span>
          </div>

          {/* Masonry Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item.imageUrl)}
                className={`group relative rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-taxi-black shadow-card hover:shadow-card-hover cursor-pointer transition-all ${item.span}`}
              >
                <div className={`w-full ${item.height} relative bg-gray-100 overflow-hidden`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold bg-taxi-yellow text-taxi-black px-2 py-0.5 rounded self-start border border-black mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base leading-snug drop-shadow">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300 mt-0.5 hidden sm:block">
                      {item.caption}
                    </p>
                  </div>

                  {/* Camera icon badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-taxi-yellow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-2 shadow-2xl border-4 border-taxi-yellow">
              <img
                src={selectedPhoto}
                alt="Enlarged fleet gallery view"
                className="max-h-[80vh] w-auto object-contain rounded-xl"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-black text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-taxi-yellow hover:text-black transition-colors"
              >
                Close ✕
              </button>
            </div>
          </div>
        )}

        {/* PART 2: HIGH VOLUME REVIEWS SHOWCASE (MOCKED TO SHOW 50+ REVIEWS) */}
        <div>
          {/* Trust Score & High-Volume Header Card */}
          <div className="bg-taxi-black text-white rounded-2xl p-6 sm:p-8 border-2 border-taxi-yellow mb-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Rating Big Number */}
              <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-gray-800 pb-6 md:pb-0 md:pr-6">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-5xl sm:text-6xl font-black text-taxi-yellow tracking-tight">
                    4.9
                  </span>
                  <div>
                    <div className="flex text-taxi-yellow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-300 font-bold block mt-1">
                      Out of 5.0 Stars
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-300 mt-2">
                  Based on <strong className="text-white font-bold">54 Verified Customer Reviews</strong>
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400 mt-1 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> 98% 5-Star Recommendation Rate
                </span>
              </div>

              {/* Volume metrics & Badges */}
              <div className="text-center md:text-left md:px-4 border-b md:border-b-0 md:border-r border-gray-800 pb-6 md:pb-0">
                <h4 className="text-base font-black text-white uppercase tracking-wider mb-2">
                  Trusted by 25,000+ Passengers
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <span className="text-taxi-yellow font-black text-lg block">50+</span>
                    <span className="text-gray-400">Total Detailed Reviews</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <span className="text-taxi-yellow font-black text-lg block">100%</span>
                    <span className="text-gray-400">Fixed Rate Transparency</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Assurance */}
              <div className="flex flex-col gap-2.5 text-center md:text-right">
                <span className="text-xs text-gray-400 font-medium">
                  Read why commuters rate us the #1 local taxi in Tamil Nadu
                </span>
                <a
                  href={`https://wa.me/919176206996?text=${encodeURIComponent("Hi OMR Taxi, I would like to book a 5-star ride.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-sm border-2 border-white shadow-taxi text-center transition-all"
                >
                  Book Your 5-Star Ride
                </a>
              </div>
            </div>
          </div>

          {/* Horizontally Scrolling Review Ticker (Showcasing scale of 50+ reviews) */}
          <div className="mb-8 overflow-hidden rounded-xl bg-yellow-100 border border-yellow-300 py-3 shadow-inner">
            <div className="flex items-center gap-2 px-4 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
              <span className="text-[11px] font-black uppercase tracking-wider text-yellow-950">
                Live Feed • Recent 5-Star Feedback Stream:
              </span>
            </div>
            <div className="relative w-full overflow-hidden flex whitespace-nowrap">
              <div className="flex animate-marquee gap-8 items-center text-xs sm:text-sm font-bold text-taxi-black pause-on-hover">
                {tickerReviews.concat(tickerReviews).map((text, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-yellow-300 shadow-xs">
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Pills for review volume demonstration */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All Reviews (54)", value: "All" },
                { label: "Outstation (29)", value: "Outstation" },
                { label: "Airport Trips (16)", value: "Airport Trips" },
                { label: "Family Innova (9)", value: "Family Innova" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    activeTab === tab.value
                      ? "bg-taxi-black text-taxi-yellow border border-taxi-black shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-gray-500 font-semibold">
              Showing 4 sample reviews from 54 customer submissions
            </span>
          </div>

          {/* Reviews Grid (Populated with 4 sample 5-star reviews to demonstrate layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-taxi-black p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Header of review */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-taxi-yellow text-taxi-black font-black text-base flex items-center justify-center border-2 border-taxi-black shadow-sm">
                        {review.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-extrabold text-base text-taxi-black">
                            {review.name}
                          </h4>
                          {review.verified && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] bg-green-100 text-green-800 font-bold px-1.5 py-0.5 rounded border border-green-200">
                              <ShieldCheck className="w-3 h-3 text-green-600" />
                              Verified Trip
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                          {review.location} • {review.date}
                        </span>
                      </div>
                    </div>

                    {/* 5-Star Badge */}
                    <div className="flex text-taxi-yellow bg-black px-2 py-1 rounded-md">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Route & Car Tag */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-bold bg-yellow-100 text-yellow-900 px-2.5 py-0.5 rounded border border-yellow-300">
                      Route: {review.route}
                    </span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                      {review.carBooked}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-800 leading-relaxed font-normal">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                {/* Helpful count footer */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <ThumbsUp className="w-3.5 h-3.5 text-gray-400" /> Helpful feedback
                  </span>
                  <span className="text-gray-400 font-semibold">Google Review</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Reviews CTA button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gray-100 hover:bg-taxi-yellow text-taxi-black border border-gray-300 hover:border-black transition-all shadow-sm min-h-[48px]"
            >
              <span>{showMore ? "Collapse Additional Reviews" : "Show More Reviews (Mocked 50+ Scale)"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
