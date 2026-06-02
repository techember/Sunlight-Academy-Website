"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl hover:bg-primary-dark transition-colors cursor-pointer border border-white/20"
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        href="tel:8709667059"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { delay: 0.1 }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-colors cursor-pointer border border-white/20"
        aria-label="Call Sunlight Academy"
      >
        <Phone className="h-6 w-6" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918709667059?text=Hi%20Sunlight%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { delay: 0.2 }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition-colors cursor-pointer border border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </motion.a>
    </div>
  );
}
