"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    image: "/images/Hero Section/hero1_desktop.png",
    mobileImage: "/images/Hero Section/hero1_mobile.png",
    title: "THE GLOBAL",
    subtitle: "MANUFACTURING HUB",
    description: "Your direct gateway to Tier 1 production across India’s most advanced textile hubs. We don’t just source garments we build supply chains.",
  },
  {
    id: 2,
    image: "/images/Hero Section/hero2_desktop.png",
    mobileImage: "/images/Hero Section/hero2_mobile.png",
    title: "DIRECT FACTORY",
    subtitle: "ACCESS ZERO MIDDLEMEN",
    description: "Work directly with vetted Tier 1 manufacturers. Standardized quality control across every production stage from sampling to final delivery.",
  },
  {
    id: 3,
    image: "/images/Hero Section/hero3_desktop.png",
    mobileImage: "/images/Hero Section/hero3_mobile.png",
    title: "CATEGORY",
    subtitle: "DENIM & SHIRTS",
    description: "Specialized manufacturing networks for high end denim executive shirting and retail grade activewear engineered for global markets.",
  },
  {
    id: 4,
    image: "/images/Hero Section/hero4_desktop.png",
    mobileImage: "/images/Hero Section/hero4_mobile.png",
    title: "ELITE FACTORY",
    subtitle: "SCALE FASTER",
    description: "Access India’s most trusted production network and elevate your brand with engineered consistency and scalable capacity.",
  },
  {
    id: 5,
    image: "/images/Hero Section/hero5_desktop.png",
    mobileImage: "/images/Hero Section/hero5_mobile.png",
    title: "GLOBAL EXPORT",
    subtitle: "PREMIUM QUALITY",
    description: "The strategic sourcing partner behind modern apparel brands. We solve complexity with reliable timelines and Tier 1 access.",
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
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-black flex items-end md:items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            className="absolute inset-0"
          >
            {/* Desktop Image */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src={heroSlides[currentSlide].image}
                alt="Manufacturing Desktop"
                fill
                sizes="100vw"
                quality={95}
                className="object-contain object-right transition-all duration-1000"
                loading={currentSlide === 0 ? "eager" : "lazy"}
                priority={currentSlide === 0}
              />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src={heroSlides[currentSlide].mobileImage}
                alt="Manufacturing Mobile"
                fill
                sizes="100vw"
                quality={90}
                className="object-cover object-center transition-all duration-1000"
                loading={currentSlide === 0 ? "eager" : "lazy"}
                priority={currentSlide === 0}
              />
            </div>
          </motion.div>
          {/* Gradients */}
          <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent hidden md:block w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-10 md:px-24 relative z-20 flex flex-col items-start justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-3/5"
        >
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

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-md mb-8 leading-relaxed text-xs md:text-base border-l border-white/20 pl-4 hidden sm:block"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
          </AnimatePresence>

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
              href="/Brochure-compressed.pdf"
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
