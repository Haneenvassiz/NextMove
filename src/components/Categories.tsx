"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Denim Gallery",
    shortDesc: "Premium Raw & Washed Denim",
    images: ["/images/Product Category/Denim Gallery 1.png", "/images/Product Category/Denim Gallery 2.png"],
    path: "/collections/denim-gallery",
    color: "bg-primary/80", 
  },
  {
    title: "Shirts & Suiting",
    shortDesc: "Elite Corporate Wear",
    images: ["/images/Product Category/shirt 1.png", "/images/Product Category/shirt 2.png"],
    path: "/collections/shirts-suiting",
    color: "bg-zinc-800/90", 
  },
  {
    title: "Knitwear",
    shortDesc: "Premium Cotton Knits",
    images: ["/images/Product Category/knitwears 1.png", "/images/Product Category/knitwears 2.png"],
    path: "/collections/knitwear-essentials",
    color: "bg-primary/80", 
  },
  {
    title: "Activewear",
    shortDesc: "High-Performance Gear",
    images: ["/images/Product Category/activewears 1.png", "/images/Product Category/activewears 2.png"],
    path: "/collections/activewear-performance",
    color: "bg-zinc-800/90",
  },
  {
    title: "Uniform Hub",
    shortDesc: "Professional Identity",
    images: ["/images/Product Category/uniform hub 1.png", "/images/Product Category/uniform hub 2.png"],
    path: "/collections/uniform-hub",
    color: "bg-primary/80",
  },
];

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (hoveredIndex !== null) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 2);
    }, 7000);
    
    return () => clearInterval(timer);
  }, [hoveredIndex]);

  return (
    <section id="collections" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm tracking-[0.4em] text-primary font-bold mb-4 uppercase">Product Categories</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter">
              The <span className="text-primary">Next</span> Collections
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-sm md:text-base border-l border-primary/30 pl-6"
          >
            Explore our meticulously crafted collections, where elite manufacturing meets high-end fashion aesthetics.
          </motion.p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[700px]">
          {categories.map((cat, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex-1 group cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0 transition-all duration-700 ease-in-out h-full"
              >
                <Link href={cat.path} className="block w-full h-full relative">
                  {/* Background Image */}
                  <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src={cat.images[currentImageIndex]} 
                          alt={cat.title} 
                          fill
                          quality={95}
                          style={{ objectFit: "cover" }}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Monochromatic Color Overlay (Reveals on Hover) */}
                  <div 
                    className={`absolute inset-0 transition-all duration-700 ${cat.color} ${
                      isHovered ? "opacity-0" : "opacity-100"
                    } mix-blend-multiply`}
                  />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="transform transition-all duration-500">
                      <div className="text-6xl font-heading font-black text-white/10 mb-2 group-hover:text-primary/20 transition-colors">
                        0{idx + 1}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight mb-2 uppercase tracking-tighter">
                        {cat.title}
                      </h4>
                      <p className={`text-xs text-primary font-bold tracking-[0.3em] uppercase transition-all duration-500 overflow-hidden ${isHovered ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}>
                        View Collection
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
