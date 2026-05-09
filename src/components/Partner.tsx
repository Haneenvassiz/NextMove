
"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = ["FASHION BRANDS", "RETAIL CHAINS", "STARTUPS", "PRIVATE LABELS"];
const benefits = ["COST EFFICIENCY", "RELIABLE SUPPLY CHAIN", "PREMIUM QUALITY"];

export default function Partner() {
  return (
    <section id="partner" className="py-24 md:py-32 relative overflow-hidden bg-black flex flex-col justify-center min-h-[70vh] md:min-h-[80vh]">
      {/* Background Image with slow zoom */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-50 md:opacity-60 pointer-events-none"
      >
        <Image 
          src="/images/product category 1.webp" 
          alt="Partner Background" 
          fill
          quality={100}
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="grayscale-[20%]"
        />
      </motion.div>
      
      {/* Deep Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-0 opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16 md:mb-20 mt-8 md:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-[1px] bg-primary"></div>
            <p className="text-primary tracking-[0.3em] text-xs md:text-base font-bold">PARTNER WITH US</p>
            <div className="w-8 md:w-12 h-[1px] bg-primary"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight md:leading-none mb-6 md:mb-8 uppercase tracking-tight drop-shadow-2xl">
            Build With <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-primary">The Best</span>
          </h2>
          
          <p className="text-gray-200 text-base md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Your gateway to elite apparel manufacturing in India. We transform your concepts into premium, scalable realities.
          </p>

          <a
            href="https://wa.me/917593005006"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-bold tracking-[0.2em] text-xs md:text-sm text-black bg-white overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] transition-shadow duration-500"
          >
            <div className="absolute inset-0 w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 flex items-center space-x-3">
              <span>START A CONVERSATION</span>
              <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Infinite Marquees to fill space creatively */}
      <div className="relative z-10 mt-auto flex flex-col space-y-4 md:space-y-6 overflow-hidden w-full pb-6 md:pb-10">
        {/* Marquee 1 - Ideal For */}
        <div className="flex whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-700 w-full">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex items-center space-x-8 md:space-x-12 pr-8 md:pr-12"
          >
            {[...partners, ...partners, ...partners, ...partners].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8 md:space-x-12">
                <span className="text-3xl md:text-6xl font-heading font-bold text-white uppercase tracking-widest">{item}</span>
                <span className="text-primary text-3xl md:text-5xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee 2 - Benefits (Reverse) */}
        <div className="flex whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-700 w-full">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex items-center space-x-8 md:space-x-12 pr-8 md:pr-12"
          >
            {[...benefits, ...benefits, ...benefits, ...benefits].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8 md:space-x-12">
                <span className="text-3xl md:text-6xl font-heading font-bold text-transparent uppercase tracking-widest" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>{item}</span>
                <span className="text-primary text-3xl md:text-5xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
