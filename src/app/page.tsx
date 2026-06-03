"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  FileText, 
  HelpCircle,
  ArrowRight,
  Phone,
  Calendar,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import { COURSES_DATA, FACULTY_DATA, ADMISSION_STEPS } from "@/data/staticData";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const whyChooseUsData = [
    { title: "Expert Faculty", desc: "Taught by Ex-Allen & Ex-NITian co-founders with proven track records.", icon: Users },
    { title: "Small Batch Size", desc: "Limited seats per batch (30-35 max) to ensure direct student-to-teacher focus.", icon: CheckCircle },
    { title: "Personal Attention", desc: "Individual performance tracking and customized study pathways.", icon: Sparkles },
    { title: "Doubt Solving Sessions", desc: "Daily dedicated hours for students to resolve doubts one-on-one.", icon: HelpCircle },
    { title: "Regular Tests", desc: "Chapter-wise sheets, weekly tests, and monthly JEE/NEET replica exams.", icon: FileText },
    { title: "Performance Tracking", desc: "In-depth score analysis reports shared regularly with parents.", icon: TrendingUp },
    { title: "Mentorship", desc: "Mental resilience coaching, exam temperament tips, and personal guidance.", icon: GraduationCap },
    { title: "Structured Learning", desc: "Syllabus mapping aligned with national testing agencies and concepts.", icon: BookOpen }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-amber-50/15 py-20 lg:py-28 flex items-center border-b border-orange-50">
        {/* Abstract shapes/circles for premium branding feel */}
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-amber-100/35 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-[10%] w-[30%] h-[40%] bg-orange-100/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 self-center lg:self-start bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary-dark animate-pulse" />
              <span className="text-xs font-bold text-primary-dark uppercase tracking-wider">
                Admissions Now Open for Target 2026-27
              </span>
            </div>

            <h1 className="font-display font-black text-slate-905 text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.1]">
              Crack <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-accent to-secondary">IIT-JEE & NEET</span> With Expert Guidance
            </h1>

            <p className="text-base sm:text-lg text-slate-655 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join Madhubani's trusted coaching institute for IIT-JEE, NEET, and early Foundation program. Learn directly from Ex-NITians and former premier national faculties.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <Link
                href="/contact?enquire=enroll"
                className="w-full sm:w-auto bg-primary-dark hover:bg-accent text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact?enquire=counsel"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-805 text-base font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg border border-slate-200 transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5 text-primary-dark" /> Book Free Counselling
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl font-black text-primary-dark">100%</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Personal Attention</span>
              </div>
              <div className="border-x border-slate-200">
                <span className="block text-2xl font-black text-primary-dark">Ex-Allen</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Core Faculties</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-primary-dark">Class 6-12</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Targeted Batches</span>
              </div>
            </div>

          </div>

          {/* Hero Right: Premium CSS Illustration representing education, goals and values */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">
              {/* Graphic backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/15 rounded-3xl rotate-6 -z-10 shadow-md" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-6 flex flex-col justify-between border border-slate-100">
                
                {/* Simulated Dashboard Top Bar */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-405 bg-slate-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Student Portal
                  </span>
                </div>

                {/* Animated representation of study & success */}
                <div className="flex-grow flex flex-col justify-center gap-6 py-6">
                  
                  {/* Item 1: Concept Builder */}
                  <div className="flex items-center gap-3.5 bg-amber-50/40 p-3.5 rounded-xl border border-amber-100/50">
                    <div className="p-2 rounded-lg bg-primary-dark text-white">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex-grow text-left">
                      <span className="text-xs font-bold text-slate-405 block">Module Status</span>
                      <span className="text-sm font-extrabold text-slate-905">Concept Building Sheets</span>
                    </div>
                    <span className="text-xs font-black text-emerald-605 bg-emerald-50 px-2 py-0.5 rounded-md">100%</span>
                  </div>

                  {/* Item 2: Target Exam */}
                  <div className="flex items-center gap-3.5 bg-yellow-50/50 p-3.5 rounded-xl border border-yellow-100/50">
                    <div className="p-2 rounded-lg bg-accent text-slate-900">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex-grow text-left">
                      <span className="text-xs font-bold text-slate-405 block">Target Goals</span>
                      <span className="text-sm font-extrabold text-slate-905">IIT-JEE & NEET Focus</span>
                    </div>
                    <span className="text-xs font-black text-accent bg-yellow-100/80 px-2 py-0.5 rounded-md">Top AIR</span>
                  </div>

                  {/* Item 3: Live Doubt support */}
                  <div className="flex items-center gap-3.5 bg-orange-50/50 p-3.5 rounded-xl border border-orange-100/50">
                    <div className="p-2 rounded-lg bg-accent text-white">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="flex-grow text-left">
                      <span className="text-xs font-bold text-slate-405 block">Doubt Solving</span>
                      <span className="text-sm font-extrabold text-slate-905">1-on-1 Personalized Session</span>
                    </div>
                    <span className="text-xs font-black text-accent bg-orange-100/50 px-2 py-0.5 rounded-md">Live</span>
                  </div>

                </div>

                {/* Bottom decorative stats indicator */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Average JEE Score</span>
                    <span className="text-sm font-extrabold text-slate-805">99.85 Percentile</span>
                  </div>
                  <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md gap-0.5">
                    <TrendingUp className="h-3.5 w-3.5" /> +15% YoY
                  </div>
                </div>

              </div>
              
              {/* Overlapping small rank badge card */}
              <div className="absolute -bottom-4 -left-6 bg-slate-900 text-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-slate-800">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-accent to-yellow-350 text-slate-900 flex items-center justify-center font-black text-lg">
                  #1
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-widest">Coaching in</span>
                  <span className="text-xs font-bold">Madhubani Region</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. SUCCESS STATISTICS */}
      <section className="bg-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent">
                <AnimatedCounter value={98} suffix="%" />
              </p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-100 mt-1">
                Student Satisfaction
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent">
                <AnimatedCounter value={340} suffix="+" />
              </p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-100 mt-1">
                IIT-JEE/NEET Selections
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent">
                <AnimatedCounter value={8} suffix="+" />
              </p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-100 mt-1">
                Years of Excellence
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent">
                <AnimatedCounter value={35} suffix="" />
              </p>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-100 mt-1">
                Max Students Per Batch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SUNLIGHT ACADEMY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-black text-primary uppercase tracking-widest">Core Advantages</span>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl">
              Why Choose Sunlight Academy?
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
            <p className="text-slate-500 font-sans text-base leading-relaxed mt-2">
              Unlike massive batches in national chains, we provide a premium, focused learning environment designed to help every student succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                 <div
                  key={index}
                  className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col gap-4 group cursor-default"
                >
                  <div className="p-3.5 rounded-xl bg-amber-50 text-primary-dark self-start group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-905 text-lg mb-1 group-hover:text-primary-dark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. COURSE CATEGORIES */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Our Programs</span>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl">
              Academic Courses We Offer
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
            <p className="text-slate-500 font-sans text-base leading-relaxed mt-2">
              Specialized coaching tracks customized for board-qualified target preparations and early school foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Category: JEE */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="bg-amber-100/60 text-primary-dark text-xs font-extrabold uppercase px-3 py-1.5 rounded-lg inline-block mb-4">
                  Engineering Track
                </div>
                <h3 className="font-display font-extrabold text-slate-900 text-2xl mb-2">
                  {COURSES_DATA.jee.title}
                </h3>
                <p className="text-slate-500 text-sm font-sans leading-relaxed mb-6">
                  {COURSES_DATA.jee.tagline}
                </p>
                <div className="flex flex-col gap-3 border-t border-slate-100 pt-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">Target Classes:</span>
                  <ul className="flex flex-col gap-2">
                    {COURSES_DATA.jee.classes.map((cls, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        {cls}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/courses?tab=jee"
                  className="text-primary-dark font-bold text-sm flex items-center gap-1 hover:text-primary transition-colors"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact?enquire=enroll&course=jee"
                  className="bg-primary-dark hover:bg-accent text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Enroll
                </Link>
              </div>
            </div>

            {/* Category: NEET */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="bg-orange-50 text-accent text-xs font-extrabold uppercase px-3 py-1.5 rounded-lg inline-block mb-4">
                  Medical Track
                </div>
                <h3 className="font-display font-extrabold text-slate-900 text-2xl mb-2">
                  {COURSES_DATA.neet.title}
                </h3>
                <p className="text-slate-500 text-sm font-sans leading-relaxed mb-6">
                  {COURSES_DATA.neet.tagline}
                </p>
                <div className="flex flex-col gap-3 border-t border-slate-100 pt-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">Target Classes:</span>
                  <ul className="flex flex-col gap-2">
                    {COURSES_DATA.neet.classes.map((cls, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        {cls}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/courses?tab=neet"
                  className="text-primary-dark font-bold text-sm flex items-center gap-1 hover:text-primary transition-colors"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact?enquire=enroll&course=neet"
                  className="bg-primary-dark hover:bg-accent text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Enroll
                </Link>
              </div>
            </div>

            {/* Category: Foundation */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="bg-yellow-50 text-accent text-xs font-extrabold uppercase px-3 py-1.5 rounded-lg inline-block mb-4">
                  Early Foundation Track
                </div>
                <h3 className="font-display font-extrabold text-slate-900 text-2xl mb-2">
                  {COURSES_DATA.foundation.title}
                </h3>
                <p className="text-slate-500 text-sm font-sans leading-relaxed mb-6">
                  {COURSES_DATA.foundation.tagline}
                </p>
                <div className="flex flex-col gap-3 border-t border-slate-100 pt-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">Target Classes:</span>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      Class 6, 7, and 8 Batches
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      Class 9 and 10 Target Batches
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/courses?tab=foundation"
                  className="text-primary-dark font-bold text-sm flex items-center gap-1 hover:text-primary transition-colors"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact?enquire=enroll&course=foundation"
                  className="bg-primary-dark hover:bg-accent text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Enroll
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FACULTY HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="text-left flex flex-col gap-2">
              <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Our Co-Founders</span>
              <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
                Learn from Expert Faculties
              </h2>
              <div className="h-1 w-20 bg-accent rounded mt-2" />
            </div>
            <Link
              href="/faculty"
              className="text-primary-dark font-bold text-sm flex items-center gap-1 hover:text-primary transition-colors self-start md:self-auto"
            >
              Meet All Faculty Members <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACULTY_DATA.map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Faculty Portrait Image or Placeholder Design */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-primary-dark to-primary flex flex-col items-center justify-center text-white font-display font-black text-3xl flex-shrink-0 shadow-inner relative overflow-hidden">
                  {member.avatarSeed === "chandan" ? (
                    <Image
                      src="/chandan.jpg"
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover relative z-10"
                      loading="lazy"
                    />
                  ) : member.avatarSeed === "jaydeep" ? (
                    <Image
                      src="/jaydeep.png"
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover relative z-10"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <span className="relative z-10">{member.name.split(" ").map(n => n[0]).join("")}</span>
                      <span className="absolute bottom-1.5 text-[9px] uppercase tracking-widest text-amber-200 font-sans font-semibold">Ex-Allen</span>
                    </>
                  )}
                </div>

                {/* Faculty Info */}
                <div className="flex-grow text-left">
                  <h3 className="font-display font-extrabold text-slate-900 text-xl md:text-2xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-extrabold text-primary-dark uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  
                  {/* Credentials / Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.credentials.map((cred, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold bg-white border border-slate-200 text-slate-655 px-2.5 py-1 rounded-md"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-505 font-sans italic leading-relaxed">
                    "{member.teachingPhilosophy}"
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ADMISSION PROCESS */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Easy Steps</span>
            <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
              Admission Process
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
            <p className="text-slate-500 font-sans text-base leading-relaxed mt-2">
              Our streamlined admissions roadmap is designed to guide students and parents smoothly onto the path of success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {ADMISSION_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-150 relative text-left">
                <div className="h-10 w-10 rounded-xl bg-primary-dark text-white flex items-center justify-center font-display font-black text-base mb-4 shadow-md">
                  {idx + 1}
                </div>
                <h3 className="font-display font-extrabold text-slate-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. STUDENT TESTIMONIALS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
              What Our Achievers Say
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
          </div>

          <TestimonialSlider />

        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="text-xs font-black text-primary-dark uppercase tracking-widest">FAQ</span>
            <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
          </div>

          <FAQAccordion />

        </div>
      </section>

      {/* 9. CONTACT CTA */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 items-center">
          <GraduationCap className="h-16 w-16 text-accent animate-bounce" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl">
            Start Your Journey Towards Academic Excellence Today
          </h2>
          <p className="text-slate-100 font-sans text-base sm:text-lg max-w-2xl">
            Get counseling from our co-founders Chandan Sir & Jaydeep Sir to formulate the best preparation plan for your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link
              href="/contact?enquire=counsel"
              className="bg-secondary hover:bg-primary text-slate-905 font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors text-center"
            >
              Book Free Counselling
            </Link>
            <a
              href="tel:8709667059"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" /> Call +91 8709667059
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
