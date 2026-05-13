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
  title: "Next Move Group | Elite Manufacturing in India",
  description: "Your Gateway to Elite Manufacturing in India. Premium B2B apparel manufacturing, standardized QC, and pan-India network.",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
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
      </body>
    </html>
  );
}
