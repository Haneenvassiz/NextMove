"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/#about" },
  { name: "COLLECTIONS", path: "/#collections" },
  { name: "PARTNER", path: "/#partner" },
  { name: "CONTACT", path: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Next Move Group" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm tracking-widest text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-white/20 hover:border-primary text-sm tracking-widest transition-colors"
          >
            BROCHURE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg tracking-widest text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917592008008"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 bg-primary text-black font-bold tracking-widest text-sm"
            >
              WHATSAPP US
            </a>
            <a
              href="/Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 border border-white/20 hover:border-primary text-sm tracking-widest transition-colors"
            >
              DOWNLOAD BROCHURE
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
