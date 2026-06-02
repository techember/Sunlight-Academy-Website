"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/staticData";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {FAQS_DATA.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* FAQ Header/Trigger */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-slate-900 text-base md:text-lg">
                {faq.question}
              </span>
              <span className="flex-shrink-0 p-1 rounded-md bg-slate-100 text-slate-500">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>

            {/* FAQ Expandable Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-slate-655 font-sans leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
