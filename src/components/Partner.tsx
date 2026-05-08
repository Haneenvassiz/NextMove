"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const partners = ["Fashion Brands", "Retail Chains", "Startups", "Private Labels"];
const benefits = ["Cost Efficiency", "Reliable Supply Chain", "Premium Quality"];

export default function Partner() {
  return (
    <section id="partner" className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 translate-x-32 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
            Build With the Best &ndash; Your Gateway to Elite Manufacturing in India
          </h2>
          
          <a
            href="https://wa.me/917592008008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-primary text-black px-8 py-4 font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-5xl mx-auto border-t border-white/10 pt-16">
          {/* Partner Groups */}
          <div>
            <h4 className="text-gray-500 font-heading tracking-widest text-sm mb-6">IDEAL FOR</h4>
            <div className="flex flex-wrap gap-4">
              {partners.map((partner, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 border border-white/10 text-white font-medium text-sm tracking-wide bg-black"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-gray-500 font-heading tracking-widest text-sm mb-6">CORE BENEFITS</h4>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-gray-300 tracking-wide">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
