import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingBar from "@/components/MobileFloatingBar";
import { blogsData, BlogPost } from "@/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Navigation,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Phone,
  Sparkles,
  Users,
  Briefcase,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Car,
  ChevronRight,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) {
    return {
      title: "Blog Not Found | OMR Taxi Perungudi",
    };
  }
  return {
    title: `${blog.title} | OMR Taxi Perungudi`,
    description: blog.subtitle,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Other blogs for related recommendations
  const otherBlogs = blogsData.filter((b) => b.slug !== slug);

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-taxi-black pb-20 md:pb-0">
      <Navbar />

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-taxi-black font-semibold">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <Link href="/blogs" className="hover:text-taxi-black font-semibold">
            Travel Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-taxi-black font-bold truncate max-w-xs sm:max-w-md">
            {blog.badge} Guide
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-taxi-black text-white pt-10 pb-16 sm:pb-20 border-b-4 border-taxi-yellow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-taxi-yellow hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Travel Guides
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-taxi-yellow text-taxi-black font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {blog.badge}
            </span>
            <span className="bg-white/10 text-white font-medium text-xs px-3 py-1 rounded-full border border-white/20">
              {blog.readTime}
            </span>
            <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-taxi-yellow" /> {blog.publishedDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {blog.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
            {blog.subtitle}
          </p>

          {/* Key Metrics Quick Ribbon */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Total Distance</span>
              <span className="text-base sm:text-lg font-black text-taxi-yellow flex items-center gap-1.5 mt-0.5">
                <Navigation className="w-4 h-4" /> {blog.distance}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Drive Time</span>
              <span className="text-base sm:text-lg font-black text-white flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-taxi-yellow" /> {blog.duration}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Starting Fare</span>
              <span className="text-base sm:text-lg font-black text-white mt-0.5">
                ₹{blog.oneWayPrice.toLocaleString()} onwards
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Dispatch Speed</span>
              <span className="text-base sm:text-lg font-black text-taxi-yellow flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-4 h-4" /> ~30 Min Pickup
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gray-900 h-64 sm:h-96 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Container */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Article Content (Left 2 Cols) */}
          <div className="lg:col-span-2 space-y-10">

            {/* Introduction */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-200 shadow-card">
              <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-4 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-taxi-yellow rounded-full inline-block" />
                The Road Ahead: Route Overview
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {blog.intro}
              </p>
              <div className="mt-4 p-4 bg-yellow-50/70 border border-taxi-yellow/40 rounded-xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-taxi-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-xs text-taxi-black uppercase tracking-wider block">
                    Recommended Corridor
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {blog.routeHighlight}
                  </span>
                </div>
              </div>
            </section>

            {/* Why Choose Cab Section */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-200 shadow-card">
              <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-6 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-taxi-yellow rounded-full inline-block" />
                Why Hire a Private Cab with OMR Taxi Perungudi?
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {blog.whyChooseCab.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-2xl flex items-start gap-3.5 hover:border-taxi-black transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Highlights / Sightseeing Stops */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-200 shadow-card">
              <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-2 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-taxi-yellow rounded-full inline-block" />
                Key Travel Highlights &amp; Must-Visit Stops
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Curated points of interest along the route that our chauffeurs can accommodate smoothly.
              </p>

              <div className="space-y-6">
                {blog.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 border-l-2 border-taxi-yellow/60 space-y-1.5"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-taxi-yellow border-2 border-taxi-black" />
                    <h3 className="text-base sm:text-lg font-black text-taxi-black">
                      {highlight.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Travel & Timing Tips */}
            <section className="bg-amber-50/60 p-6 sm:p-8 rounded-3xl border-2 border-amber-200 shadow-card">
              <h2 className="text-xl sm:text-2xl font-black text-taxi-black mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                Insider Travel &amp; Timing Advice
              </h2>
              <ul className="space-y-3">
                {blog.itineraryTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Vehicle Recommendations Grid */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-200 shadow-card">
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 block">
                  Fleet Guide
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-taxi-black">
                  Recommended Cabs for This Route
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Choose the right vehicle matching your group size, luggage requirements, and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blog.vehicleRecommendations.map((veh, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border-2 border-gray-200 bg-gray-50 hover:border-taxi-black hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-black text-base text-taxi-black">{veh.category}</h4>
                        <span className="text-xs font-black bg-taxi-yellow text-taxi-black px-2 py-0.5 rounded">
                          {veh.rate}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                        <span className="flex items-center gap-1 font-semibold">
                          <Users className="w-3.5 h-3.5 text-gray-500" /> {veh.capacity}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-semibold">
                          <Briefcase className="w-3.5 h-3.5 text-gray-500" /> {veh.luggage}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {veh.bestFor}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/919176206996?text=${encodeURIComponent(
                        `Hi OMR Taxi, I would like to book a ${veh.category} for ${blog.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-xs border border-taxi-black text-center flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Book {veh.category}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Clear Primary Booking CTA Box */}
            <div className="p-6 sm:p-8 bg-taxi-black text-white rounded-3xl border-4 border-taxi-yellow shadow-2xl">
              <span className="bg-taxi-yellow text-taxi-black font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider inline-block mb-3">
                Instant Driver Allocation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Ready to Experience This Tour?
              </h3>
              <p className="text-sm text-gray-300 mt-2 mb-6 max-w-xl leading-relaxed">
                Connect directly with our 24/7 Perungudi taxi dispatch desk. Confirm your pickup address, receive vehicle options with transparent estimates, and travel with zero advance stress.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/919176206996?text=${encodeURIComponent(blog.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-base text-center flex items-center justify-center gap-2 shadow-lg min-h-[52px]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
                  </svg>
                  <span>Book This Tour on WhatsApp</span>
                </a>

                <a
                  href="tel:+919176206996"
                  className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-taxi-yellow hover:bg-taxi-yellow-hover text-taxi-black font-black text-sm border-2 border-taxi-black shadow-taxi text-center flex items-center justify-center gap-2 min-h-[52px]"
                >
                  <Phone className="w-4 h-4" /> Call Dispatch
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Or use our fare estimator on the homepage:</span>
                <Link href="/#booking" className="text-taxi-yellow font-bold hover:underline inline-flex items-center gap-1">
                  Fare Calculator Widget &rarr;
                </Link>
              </div>
            </div>

          </div>

          {/* Sidebar (Right 1 Col) */}
          <aside className="space-y-6">

            {/* Quick Sticky Booking Widget Box */}
            <div className="bg-white p-6 rounded-3xl border-2 border-taxi-black shadow-card sticky top-28">
              <div className="flex items-center gap-2 bg-taxi-yellow/20 text-taxi-black font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                <Car className="w-3.5 h-3.5" /> Direct WhatsApp Dispatch
              </div>
              <h3 className="text-xl font-black text-taxi-black">
                Book This Package
              </h3>
              <p className="text-xs text-gray-600 mt-1 mb-4 leading-relaxed">
                Connect via WhatsApp with your preferred departure time. Instant driver allocation &amp; transparent billing.
              </p>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2 mb-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold">Route:</span>
                  <span className="font-bold text-taxi-black text-right truncate max-w-[150px]">{blog.routeHighlight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold">One-Way Fare:</span>
                  <span className="font-black text-taxi-black">₹{blog.oneWayPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold">Night Surcharge:</span>
                  <span className="font-bold text-emerald-600">₹0 (None)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold">City Arrival:</span>
                  <span className="font-bold text-taxi-black">~30 Minutes</span>
                </div>
              </div>

              <a
                href={`https://wa.me/919176206996?text=${encodeURIComponent(blog.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm text-center flex items-center justify-center gap-2 shadow-sm mb-3"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.289.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 1.045.932 1.353 1.002 1.545 1.097.192.096.303.083.417-.048.115-.13.491-.572.622-.767.13-.195.26-.163.433-.099.173.065 1.097.517 1.285.611.188.094.313.14.36.219.046.079.046.458-.098.863z" />
                </svg>
                <span>Book on WhatsApp</span>
              </a>

              <a
                href="tel:+919176206996"
                className="w-full py-3 px-4 rounded-xl bg-taxi-black hover:bg-taxi-surface text-taxi-yellow font-black text-xs text-center flex items-center justify-center gap-1.5 border border-taxi-yellow"
              >
                <Phone className="w-3.5 h-3.5" /> Call +91 9176206996
              </a>

              <p className="text-[11px] text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> FastTag tolls billed at actuals
              </p>
            </div>

            {/* Related Guides List */}
            <div className="bg-white p-6 rounded-3xl border-2 border-gray-200 shadow-card">
              <h4 className="text-base font-black text-taxi-black mb-4">
                Other Popular Guides
              </h4>
              <div className="space-y-4">
                {otherBlogs.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blogs/${other.slug}`}
                    className="flex items-start gap-3 group/item hover:bg-gray-50 p-2 rounded-xl transition-colors"
                  >
                    <div className="w-16 h-14 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={other.imageUrl}
                        alt={other.title}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider block">
                        {other.badge}
                      </span>
                      <h5 className="text-xs font-bold text-taxi-black group-hover/item:text-amber-600 line-clamp-2 leading-snug">
                        {other.title}
                      </h5>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {other.distance} • {other.duration}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </article>

      <Footer />
      <MobileFloatingBar />
    </main>
  );
}
