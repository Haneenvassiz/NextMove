"use client";

import { motion } from "framer-motion";

const differences = [
  {
    title: "DIRECT FACTORY ACCESS",
    desc: "Seamless integration directly with the manufacturing floor.",
  },
  {
    title: "NO MIDDLE LAYERS",
    desc: "Transparent pricing and direct communication.",
  },
  {
    title: "STANDARDIZED QC SYSTEM",
    desc: "Rigorous quality control across all network facilities.",
  },
  {
    title: "PAN-INDIA NETWORK",
    desc: "Strategic manufacturing hubs across the subcontinent.",
  },
  {
    title: "SCALABLE PRODUCTION",
    desc: "From startup MOQs to massive retail chain volumes.",
  },
];

const stats = [
  { label: "PRODUCTION CAPACITY", value: "5M+ / YEAR" },
  { label: "EXPORT REGIONS", value: "15+ COUNTRIES" },
  { label: "CERTIFICATIONS", value: "ISO & WRAP" },
];

export default function Different() {
  return (
    <section className="py-24 bg-[#050505] relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Heading & Stats */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-4 flex items-center">
                <span className="w-8 h-[1px] bg-primary mr-4"></span>
                OUR EDGE
              </h3>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
                WHAT MAKES US <br />
                <span className="text-gray-500">DIFFERENT</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-12 border-l border-white/20 pl-4">
                We eliminate the traditional inefficiencies of apparel manufacturing. Experience a modern, transparent, and direct approach to production.
              </p>
            </div>

            {/* Credibility Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {differences.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-colors duration-500"
              >
                <div className="text-primary/50 text-4xl font-heading font-black mb-6 group-hover:text-primary transition-colors duration-500">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-heading text-white tracking-wide mb-3">
                  {diff.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {diff.desc}
                </p>
              </motion.div>
            ))}
            {/* Empty filler block to complete the 2-column grid nicely if odd items */}
            {differences.length % 2 !== 0 && (
              <div className="bg-[#0a0a0a] p-10 hidden md:block" />
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
