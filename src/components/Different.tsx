"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const differences = [
  {
    title: "DIRECT FACTORY ACCESS",
    desc: "Seamless integration directly with the manufacturing floor, bypassing traditional sourcing hurdles.",
  },
  {
    title: "NO MIDDLE LAYERS",
    desc: "Transparent pricing and direct communication for ultimate clarity.",
  },
  {
    title: "STANDARDIZED QC SYSTEM",
    desc: "Rigorous quality control uniformly implemented across all our network facilities.",
  },
  {
    title: "PAN-INDIA NETWORK",
    desc: "Strategic manufacturing hubs positioned across the subcontinent for unmatched versatility.",
  },
  {
    title: "SCALABLE PRODUCTION",
    desc: "Agile capabilities ranging from startup MOQs to massive retail chain volumes.",
  },
];


export default function Different() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative border-y border-white/5 overflow-hidden">
      {/* Sliding Background */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], x: ["0%", "-2%", "0%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
      >
        <Image 
          src="/images/hero section 5.webp" 
          alt="Background" 
          fill
          quality={100}
          unoptimized
          style={{ objectFit: "cover" }}
          className="grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          
          {/* Left Column: Heading (Sticky) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col h-full">
            <div className="mb-12">
              <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-4 flex items-center">
                <span className="w-8 h-[1px] bg-primary mr-4"></span>
                OUR EDGE
              </h3>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
                WHAT MAKES US <br />
                <span className="text-gray-500">DIFFERENT</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed border-l border-white/20 pl-4">
                We eliminate the traditional inefficiencies of apparel manufacturing. Experience a modern, transparent, and direct approach to production.
              </p>
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="lg:w-2/3 flex flex-col gap-12 md:gap-24 lg:pl-16">
            {differences.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative group cursor-default"
              >
                <div className="text-primary/40 text-6xl md:text-8xl font-heading font-black mb-2 md:mb-4 pointer-events-none select-none">
                  0{idx + 1}
                </div>
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-2xl md:text-4xl font-heading text-white tracking-wide mb-6 group-hover:text-primary transition-colors duration-500">
                    {diff.title}
                  </h4>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl font-light">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
