"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutTabs = [
  {
    id: "overview",
    title: "Company Overview",
    content: "Next Move Group is a premium apparel manufacturing network providing elite supply chain solutions. We operate a pan India network of standardized facilities, seamlessly connecting global fashion brands, retail chains and startups with reliable high quality production.",
  },
  {
    id: "vision",
    title: "Our Vision",
    content: "To establish India as the ultimate global hub for premium apparel production, defined by uncompromising quality, scalable capacity and total transparency across the supply chain.",
  },
  {
    id: "mission",
    title: "Our Mission",
    content: "To democratize access to elite manufacturing by connecting modern apparel brands with India’s most trusted Tier 1 production networks through engineered consistency and end to end execution.",
  },
  {
    id: "why-india",
    title: "Why India",
    content: "India offers an unparalleled ecosystem for apparel manufacturing combining a rich heritage in textiles, a highly skilled workforce and robust infrastructure. It provides scalable, cost efficient and sustainable production capabilities.",
  },
  {
    id: "network",
    title: "Our Network",
    content: "Our operations span across India with specialized facilities for different product categories. From denim hubs to activewear performance centers, our network is designed to handle everything from low MOQs for startups to mass production for retail chains.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Section Header */}
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-primary mr-4"></span>
              ABOUT US
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              YOUR GATEWAY TO <br />
              <span className="text-gray-500">ELITE MANUFACTURING</span>
            </h2>
          </div>

          {/* Tabbed Content */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row">
            {/* Tabs List */}
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-4 mb-8 md:mb-0 md:w-1/3 md:pr-8 scrollbar-hide">
              {aboutTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-4 py-4 min-w-[200px] md:min-w-0 transition-all duration-300 border-l-2 ${activeTab === tab.id
                      ? "bg-white text-black border-primary font-bold"
                      : "bg-transparent text-gray-400 border-white/10 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span className="tracking-wider text-sm">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Panel */}
            <div className="md:w-2/3 relative min-h-[250px] bg-[#0a0a0a] border border-white/5 p-8 md:p-12">
              <AnimatePresence mode="wait">
                {aboutTabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
                      >
                        <h4 className="text-2xl font-heading text-white mb-6">
                          {tab.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed font-light">
                          {tab.content}
                        </p>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
