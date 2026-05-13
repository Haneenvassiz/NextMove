"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    image: "/images/Hero Section/hero section.webp",
    title: "ELITE",
    subtitle: "MANUFACTURING",
  },
  {
    id: 2,
    image: "/images/Hero Section/hero section 2.webp",
    title: "GLOBAL",
    subtitle: "EXPORT HUB",
  },
  {
    id: 3,
    image: "/images/Hero Section/hero section 3.webp",
    title: "PREMIUM",
    subtitle: "QUALITY",
  },
  {
    id: 4,
    image: "/images/Hero Section/hero section 4.webp",
    title: "SCALABLE",
    subtitle: "PRODUCTION",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-black flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlides[currentSlide].image}
            alt="Manufacturing"
            fill
            sizes="100vw"
            quality={100}
            unoptimized
            style={{ objectFit: "cover", objectPosition: "top center" }}
            loading={currentSlide === 0 ? "eager" : "lazy"}
            preload={currentSlide === 0}
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-black/70 md:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-start justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-primary"></div>
            <p className="text-primary tracking-widest text-xs md:text-sm font-medium">NEXT MOVE GROUP</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold text-white leading-none mb-1"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-6xl font-heading font-light text-gray-400 mb-6 md:mb-8"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>
          </AnimatePresence>

          <p className="text-gray-300 max-w-md mb-8 leading-relaxed text-xs md:text-base border-l border-white/20 pl-4 hidden sm:block">
            Your gateway to elite manufacturing in India. We build premium apparel collections from startup to retail chains with a pan-India network.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a
              href="https://wa.me/917593005006"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 md:px-8 md:py-4 flex items-center justify-center font-bold tracking-widest text-sm hover:bg-gray-200 transition-colors"
            >
              WHATSAPP US
            </a>
            <a
              href="/Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 flex items-center justify-center font-bold tracking-widest text-sm hover:border-primary hover:text-primary transition-colors"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-8 md:w-2 md:h-12 transition-all duration-300 ${
              currentSlide === index ? "bg-primary" : "bg-white/20 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
