"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandEcosystem() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,204,21,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-primary mr-4"></span>
              BRAND ECOSYSTEM
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
              FASHION IDENTITY <br />
              <span className="text-gray-500">BY DUTCHWHITE</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8 border-l border-white/20 pl-4 max-w-md">
              Dutchwhite is our associated fashion brand — an apparel identity extension that represents premium lifestyle aesthetics, modern streetwear direction, and curated fashion collections born from our manufacturing expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://www.instagram.com/dutchwhite.in?igsh=Mm14bnJjZXcyM2dw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 border border-white/20 px-6 py-3 hover:border-primary hover:text-primary transition-colors group"
              >
                {/* Instagram Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-primary transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-sm font-medium tracking-widest text-gray-300 group-hover:text-primary transition-colors">
                  EXPLORE DUTCHWHITE
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Visual Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-[#0a0a0a] border border-white/5 p-10 md:p-14 relative overflow-hidden group hover:border-white/10 transition-colors duration-700">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-primary/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-primary/20 pointer-events-none" />
              
              <div className="mb-10">
                <div className="flex flex-col items-start gap-4 mb-6">
                  <Image src="/images/DutchWhite/dutchwhite_logo.png" alt="Dutchwhite Logo" width={80} height={80} className="w-16 md:w-20 h-auto invert" />
                  <Image src="/images/DutchWhite/dutchwhite_font.png" alt="Dutchwhite" width={240} height={60} className="w-48 md:w-56 h-auto invert" />
                </div>
                <p className="text-primary/70 text-xs tracking-[0.3em] uppercase">
                  Associated Fashion Division
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-8 bg-primary/30 mt-1" />
                  <div>
                    <h5 className="text-white font-heading text-sm tracking-widest mb-1">LIFESTYLE APPAREL</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">Premium fashion collections with modern aesthetics and manufacturing precision.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-8 bg-primary/30 mt-1" />
                  <div>
                    <h5 className="text-white font-heading text-sm tracking-widest mb-1">BRAND IDENTITY</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">Contemporary streetwear and fashion direction rooted in quality craftsmanship.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-8 bg-primary/30 mt-1" />
                  <div>
                    <h5 className="text-white font-heading text-sm tracking-widest mb-1">MANUFACTURING ECOSYSTEM</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">From factory floor to fashion forward — powered by Next Move Group Export.</p>
                  </div>
                </div>
              </div>

              {/* Social CTA */}
              <div className="mt-10 pt-8 border-t border-white/5">
                <a
                  href="https://www.instagram.com/dutchwhite.in?igsh=Mm14bnJjZXcyM2dw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-500 hover:text-primary transition-colors text-xs tracking-widest group"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>@dutchwhite.in</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
