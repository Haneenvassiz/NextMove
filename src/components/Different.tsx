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
          quality={90}
          style={{ objectFit: "cover" }}
          className="grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-4 flex items-center">
            <span className="w-8 h-[1px] bg-primary mr-4"></span>
            OUR EDGE
          </h3>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-8">
            WHAT MAKES US <br />
            <span className="text-gray-500 uppercase">Different</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed border-l-2 border-primary pl-6 text-lg md:text-xl max-w-2xl">
            We eliminate the traditional inefficiencies of apparel manufacturing. Experience a modern, transparent, and direct approach to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {differences.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-primary font-heading font-black text-4xl opacity-50">0{idx + 1}</span>
                <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-primary/50 transition-colors duration-500"></div>
              </div>
              <h4 className="text-xl md:text-2xl font-heading text-white tracking-wide mb-4 group-hover:text-primary transition-colors duration-300">
                {diff.title}
              </h4>
              <p className="text-gray-400 leading-relaxed font-light">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
