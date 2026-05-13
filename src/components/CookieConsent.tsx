"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100] bg-zinc-900 border border-white/10 p-6 md:p-8 rounded-lg shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-white font-heading font-bold tracking-widest text-sm mb-2 uppercase">Cookie Notice</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and for security purposes. By continuing to browse, you agree to our use of cookies.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={accept}
                className="flex-1 bg-white text-black font-heading font-black py-3 text-xs tracking-widest hover:bg-primary transition-colors uppercase"
              >
                Accept All
              </button>
              <button
                onClick={() => setShow(false)}
                className="flex-1 border border-white/20 text-white font-heading font-bold py-3 text-xs tracking-widest hover:border-white transition-colors uppercase"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
