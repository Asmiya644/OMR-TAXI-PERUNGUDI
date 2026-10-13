import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMR Taxi Perungudi | Reliable & Fast Taxi Service - Book Your Ride Today",
  description: "Book reliable, safe, and punctual taxi rides 24/7 with OMR Taxi Perungudi. Outstation trips from Chennai to Pondicherry, Velur, Tirupati, Kancheepuram, Coimbatore & Bangalore. Transparent rates, verified drivers, AC cabs.",
  keywords: "OMR taxi, Perungudi taxi, Chennai cab booking, OMR cab service, outstation cab, airport taxi, Innova rental",
  authors: [{ name: "OMR Taxi Perungudi" }],
  openGraph: {
    title: "OMR Taxi Perungudi | Reliable & Fast Taxi Service",
    description: "Book 24/7 Cabs from OMR Perungudi - Instant Call, WhatsApp Booking & Outstation Travel.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFC700",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-taxi-black selection:bg-taxi-yellow selection:text-taxi-black">
        {children}
      </body>
    </html>
  );
}
