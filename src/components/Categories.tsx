"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: "denim",
    title: "DENIM GALLERY",
    shortDesc: "Premium Washes & Fits",
    image: "/images/product category 1.webp",
    path: "/collections/denim-gallery"
  },
  {
    id: "shirts",
    title: "SHIRTS & SUITING",
    shortDesc: "Corporate & Casual Excellence",
    image: "/images/product category 2.webp",
    path: "/collections/shirts-suiting"
  },
  {
    id: "knitwear",
    title: "KNITWEAR",
    shortDesc: "Everyday Essentials",
    image: "/images/product category 3.webp",
    path: "/collections/knitwear-essentials"
  },
  {
    id: "activewear",
    title: "ACTIVEWEAR",
    shortDesc: "Performance Collection",
    image: "/images/product category 4.webp",
    path: "/collections/activewear-performance"
  },
  {
    id: "uniform",
    title: "UNIFORM HUB",
    shortDesc: "Professional & Medical",
    image: "/images/product category 5.webp",
    path: "/collections/uniform-hub"
  }
];

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="collections" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col lg:flex-row lg:items-center justify-between relative">
        <div className="max-w-xl relative z-10 bg-black lg:pr-8">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-none mb-6">
            OUR CORE <br /> CATEGORIES<span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed">
            Diverse categories.<br />
            Built with precision. Delivered with consistency.
          </p>
        </div>

        {/* Dynamic Space Filler: Sliding Outlined Text */}
        <div className="hidden lg:flex flex-col flex-1 overflow-hidden space-y-4 opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default">
          {/* Top Slide (Moves Left) */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap items-center space-x-8"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-8">
                <span 
                  className="text-5xl font-heading font-black text-transparent uppercase tracking-widest" 
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}
                >
                  NEXT MOVE GROUP
                </span>
                <span className="text-primary text-4xl">•</span>
              </div>
            ))}
          </motion.div>
          
          {/* Bottom Slide (Moves Right) */}
          <motion.div 
            animate={{ x: ["-50%", "0%"] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap items-center space-x-8"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-8">
                <span 
                  className="text-5xl font-heading font-black text-transparent uppercase tracking-widest" 
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}
                >
                  DUTCHWHITE
                </span>
                <span className="text-primary text-4xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <Link
                href={cat.path}
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 border-2 ${
                  isHovered ? "border-primary -translate-y-2" : "border-transparent"
                }`}
              >
                {/* Background Image */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                >
                  <Image 
                    src={cat.image} 
                    alt={cat.title} 
                    fill
                    quality={100}
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>

                {/* Overlays (Tinting/Blurring) */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 ${
                    !isAnyHovered 
                      ? "bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-[#050B14]/40" 
                      : isHovered 
                        ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent" 
                        : "bg-[#050B14]/80 backdrop-blur-[2px]"
                  }`}
                ></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300">
                    <div className={`text-4xl font-heading font-bold mb-2 transition-colors duration-300 ${isHovered ? "text-primary" : "text-gray-500"}`}>
                      0{idx + 1}.
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-white leading-tight mb-6 uppercase tracking-wide">
                      {cat.title}
                    </h4>
                    
                    {/* Arrow */}
                    <div className="text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        

      </div>
    </section>
  );
}
