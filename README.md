# OMR Taxi Perungudi — Modern Local Taxi Service Landing Page

A high-performance, mobile-first single-page web application built with **Next.js (App Router)**, **React**, and **Tailwind CSS**.

---

## 🎨 Design System & Guidelines
- **Strict Color Palette**: 
  - **Taxi Yellow (`#FFC700`, `#E5B300`)**: Primary accent, badges, and high-visibility CTAs.
  - **Black (`#0D0D0D`, `#1A1A1A`)**: High contrast text, dark footer, and premium headers.
  - **White (`#FFFFFF`, `#F9FAFB`)**: Clean background and high legibility cards.
- **Vibe & Experience**: Trustworthy, highly professional, with large tap targets (minimum 48–56px height) engineered specifically for mobile-first thumb reachability.
- **Branding Accents**: Subtle classic checkered taxi borders and 24/7 live dispatch indicators.

---

## 📑 Sections Overview (in exact required order)

1. **Hero Section (The Booking Hub)**:
   - **Headline**: *"Reliable & Fast Taxi Service - Book Your Ride Today"*
   - **3 Distinct Call-to-Action (CTA) Methods**:
     - **CTA 1 ("Click to Call")**: Large prominent button with pulsating phone icon connecting to `+91 9176206996`.
     - **CTA 2 ("Book via WhatsApp")**: High-contrast button with official WhatsApp icon opening an instant chat with pre-formatted booking details.
     - **CTA 3 ("Check Availability Card")**: Interactive booking hub with "Pickup Location" and "Drop Location" inputs, quick chips (Pondicherry, Vellore, Tirupati, Kancheepuram), One-Way / Round-Trip toggles, live nearby cab scanner, and instant route fare breakdowns.

2. **Our Fleet & Pricing**:
   - Responsive 4-column card grid showcasing:
     - **Hatchback** (Maruti Swift, WagonR) — *₹25/km, Base ₹800 (First 20 km)*
     - **Sedan** (Swift Dzire, Etios) — *₹25/km, Base ₹1,000 (First 20 km)*
     - **SUV** (Ertiga, Carens) — *₹35/km, Base ₹1,200 (First 20 km)*
     - **Innova** (Innova Crysta / Hycross) — *₹22/km, Package 50km 5hrs ₹2,200*
   - Includes vehicle imagery placeholders, passenger & luggage capacity, AC specifications, and instant booking actions.

3. **Popular Trips**:
   - Clickable interactive cards featuring the specified outstation routes:
     - **Chennai to Pondicherry** (~200 km, 3 hrs, starting ₹4,200)
     - **Chennai to Tirupati** (~200 km, 3 hrs, starting ₹4,500)
     - **Chennai to Vellore** (~150 km, 3 hrs, starting ₹3,500)
     - **Chennai to Kancheepuram** (~80 km, 3 hrs, starting ₹2,000)
   - One-Way Drop and Round-Trip package toggles, highway details (FastTag included), and 1-click route booking.

4. **Trust & Social Proof**:
   - **Masonry Photo Gallery**: Clean responsive layout showcasing sanitized vehicles, traveler moments, airport pickups, and verified chauffeurs with click-to-enlarge modal.
   - **High-Volume Reviews System**:
     - Built to visually represent **50+ reviews** (54 verified submissions with a 4.9/5 star score).
     - Live auto-scrolling feedback marquee with pause-on-hover.
     - Filter tabs (All, Outstation, Airport Trips, Family Innova).
     - 4 comprehensive sample 5-star customer reviews with verified badges, route tags, and avatars.
     - "Show More Reviews" toggle expanding additional testimonials.

5. **Footer**:
   - High-contrast black background with taxi yellow and white text.
   - 5 dedicated link columns:
     - **Terms and Conditions** (Booking terms, cancellation, luggage rules, driver conduct modal)
     - **Privacy Policy** (Customer data protection, payment security, GPS tracking)
     - **Blogs** (Highway guides, road trip advice, vehicle selection tips)
     - **Contact Us** (24/7 hotline +91 9176206996, address in OMR Perungudi, direct support email)
     - **FAQs** (Interactive modal answering common queries on advance payments, tolls, and timing)

6. **Mobile Floating Action Bar**:
   - Sticky bottom bar on mobile viewports providing 1-tap "Call Dispatch" and "WhatsApp" buttons so commuters can book instantly from any scroll position.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
