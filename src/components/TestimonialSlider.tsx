"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS_DATA } from "@/data/staticData";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Curved Quote graphic in background */}
      <Quote className="absolute top-0 left-4 h-24 w-24 text-blue-50 opacity-60 pointer-events-none -z-10" />

      {/* Main Slide Card Container */}
      <div className="relative overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
        
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-6"
          >
            {/* Stars rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Testimonial Quote text */}
            <p className="text-lg md:text-xl text-slate-700 font-sans italic leading-relaxed">
              "{current.content}"
            </p>

            {/* Student Info and Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div>
                <h4 className="font-display font-extrabold text-slate-900 text-lg">
                  {current.name}
                </h4>
                <p className="text-sm font-semibold text-slate-500">
                  {current.role}
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-lg px-4 py-2 self-start md:self-center">
                <span className="text-sm font-extrabold text-primary">
                  {current.achievement}
                </span>
                <span className="text-xs text-slate-400 font-medium block">
                  Batch of {current.year}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots and Arrows */}
        <div className="flex justify-between items-center mt-8">
          {/* Navigation Indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-305 cursor-pointer ${
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-primary transition-all cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-primary transition-all cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
