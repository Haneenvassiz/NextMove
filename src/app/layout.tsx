import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next Move Group | Elite Manufacturing in India",
    template: "%s | Next Move Group"
  },
  description: "Next Move Group is India's leading B2B apparel manufacturer and export hub. Specializing in Denim, Knitwear, Activewear, and Uniforms with a pan-India manufacturing network.",
  keywords: [
    "Next Move Group", 
    "Next Move Group Export", 
    "Indian clothing manufacturer", 
    "Apparel export hub India", 
    "Bulk clothing production India", 
    "Custom apparel manufacturing", 
    "Garment export house", 
    "B2B apparel sourcing", 
    "Private label clothing manufacturer", 
    "Corporate uniform supplier", 
    "Denim manufacturing experts", 
    "Knitwear production India", 
    "Activewear OEM manufacturer", 
    "Global apparel supply chain",
    "Dutchwhite",
    "Premium quality garments",
    "Apparel manufacturing Kerala",
    "Textile export company India"
  ],
  authors: [{ name: "Next Move Group" }],
  creator: "Next Move Group",
  publisher: "Next Move Group",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextmovegroupexport.com",
    title: "Next Move Group | Elite Manufacturing in India",
    description: "India's premier B2B apparel manufacturing and export partner.",
    siteName: "Next Move Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Move Group | Elite Manufacturing in India",
    description: "India's premier B2B apparel manufacturing and export partner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
        <main className="flex-1">{children}</main>
        <CookieConsent />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Next Move Group",
              "alternateName": "Next Move Group Export",
              "url": "https://nextmovegroupexport.com",
              "logo": "https://nextmovegroupexport.com/logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7592-008-008",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "ml"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/nextmovegroupexport/",
                "https://www.instagram.com/nextmovegroupexport"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5/248-B, 1st Floor, Sana Bazar, Naranipuzha Road, Changaramkulam",
                "addressLocality": "Malappuram",
                "addressRegion": "Kerala",
                "postalCode": "679575",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
