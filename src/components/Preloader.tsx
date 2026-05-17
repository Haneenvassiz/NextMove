"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("preloaderShown") === "true") {
      setIsFirstVisit(false);
      setLoading(false);
      return;
    }

    // Preloader sequence starts
    let animationDone = false;
    let windowLoaded = false;

    const checkReady = () => {
      if (animationDone && windowLoaded) {
        setLoading(false);
        sessionStorage.setItem("preloaderShown", "true");
      }
    };

    // 1. Cinematic Sequence
    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => setStep(2), 1000);
    const t3 = setTimeout(() => setStep(3), 2200);
    const t4 = setTimeout(() => {
      animationDone = true;
      checkReady();
    }, 4500); // Minimum time for the intro

    // 2. Window Load Listener
    const handleLoad = () => {
      windowLoaded = true;
      checkReady();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // 3. Safety Fallback (10 seconds max)
    const safetyFallback = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => {
      [t1, t2, t3, t4, safetyFallback].forEach(clearTimeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isFirstVisit && (
        <AnimatePresence>
          {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5 }
          }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* STEP 1: The Pulse (Flash) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={step === 1 ? { opacity: [0, 1, 0] } : { opacity: 0 }}
            className="absolute inset-0 bg-white z-50"
          />

          {/* STEP 2: Typography Stagger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
            <AnimatePresence mode="wait">
              {step === 2 && (
                <div className="flex flex-col items-center">
                  <motion.div
                    key="word-sequence"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center"
                  >
                    <h2 className="text-3xl md:text-6xl font-heading font-black text-white leading-tight text-center uppercase">
                      THE GLOBAL<br />MANUFACTURING HUB
                    </h2>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* STEP 3: The Creative Lock-In Reveal */}
          <div className="relative z-10 flex flex-col items-center">
            <AnimatePresence>
              {step >= 3 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative"
                >
                  {/* The Main Logo */}
                  <Image 
                    src="/logo.svg" 
                    alt="Next Move" 
                    width={400} 
                    height={120} 
                    className="h-10 md:h-20 w-auto"
                    priority 
                  />

                  {/* Impact Flash Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1.4] }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 bg-primary blur-2xl -z-10"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Split Exit Effect */}
          <motion.div 
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-white z-40 origin-bottom"
          />
        </motion.div>
      )}
        </AnimatePresence>
      )}
    </>
  );
}
