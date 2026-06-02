"use client";

import React from "react";
import { 
  Eye, 
  Target, 
  BookOpen, 
  ChevronRight, 
  Award, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle, 
  Layers 
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
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

  const methodologies = [
    {
      title: "Core Concept Lectures",
      desc: "Deep-dive teaching focusing on basic principles before introducing advanced problems. No rote learning.",
      step: "01"
    },
    {
      title: "Graded Daily Practice Sheets (DPPs)",
      desc: "Level-wise questions distributed daily to reinforce class concepts and verify self-study.",
      step: "02"
    },
    {
      title: "Doubt Solving Window",
      desc: "Dedicated daily hours where students can clear concepts 1-on-1 with co-founders directly.",
      step: "03"
    },
    {
      title: "Weekly & Monthly Assessments",
      desc: "Strictly scheduled tests mirroring JEE Main/Advanced and NEET patterns to build exam-day stamina.",
      step: "04"
    },
    {
      title: "Parent-Faculty Alignment",
      desc: "Transparent report cards, attendance checks, and scheduled PTMs to track performance.",
      step: "05"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col gap-4">
          <span className="text-xs font-black text-accent uppercase tracking-[0.25em]">Know Our Team</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight">
            About Sunlight Academy
          </h1>
          <p className="text-slate-100 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Madhubani's premier education hub, dedicated to unlocking student brilliance through expert guidance, personalized learning, and academic discipline.
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vision Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col gap-6 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/30 rounded-full blur-2xl pointer-events-none" />
              <div className="p-4 rounded-2xl bg-blue-50 text-primary self-start">
                <Eye className="h-8 w-8" />
              </div>
              <div className="flex flex-col gap-3 text-left">
                <h2 className="font-display font-extrabold text-slate-905 text-2xl">
                  Our Vision
                </h2>
                <p className="text-slate-655 font-sans text-base leading-relaxed">
                  To establish Sunlight Academy as the most trusted, academic-first educational brand in North Bihar, recognized for making high-quality competitive exam coaching accessible and highly successful for tier-2 and tier-3 city students. We envision creating a culture of learning where conceptual depth leads to national ranking.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col gap-6 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100/30 rounded-full blur-2xl pointer-events-none" />
              <div className="p-4 rounded-2xl bg-yellow-50 text-accent self-start">
                <Target className="h-8 w-8" />
              </div>
              <div className="flex flex-col gap-3 text-left">
                <h2 className="font-display font-extrabold text-slate-905 text-2xl">
                  Our Mission
                </h2>
                <p className="text-slate-655 font-sans text-base leading-relaxed">
                  Our mission is to democratize top-tier IIT-JEE and NEET exam preparation. By offering customized guidance from seasoned Ex-Allen faculties in small batches, we aim to bridge the gap between student potential and competitive success, fostering discipline, confidence, and rigorous problem-solving skills in every pupil.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Teaching Methodology Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-black text-primary uppercase tracking-widest">Our Blueprint</span>
            <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
              Teaching Methodology
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
            <p className="text-slate-500 font-sans text-base leading-relaxed mt-2">
              A structured, concept-driven pedagogy built by national-level faculties to guide students systematically toward academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {methodologies.map((method, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-150 p-6 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow duration-200 text-left"
              >
                <div>
                  <span className="block text-4xl font-black text-blue-100 mb-4 font-display">
                    {method.step}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-black text-primary uppercase tracking-widest">Our Pillars</span>
            <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
              Core Pillars of Excellence
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left flex flex-col gap-4">
              <div className="p-3 bg-blue-50 text-primary self-start rounded-xl">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl">
                Student-Centric Learning
              </h3>
              <p className="text-sm text-slate-505 font-sans leading-relaxed">
                Every child is unique. We customize batch levels, offer individual query support, and provide mentorship that respects individual cognitive speed and needs.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left flex flex-col gap-4">
              <div className="p-3 bg-blue-50 text-primary self-start rounded-xl">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl">
                Academic Excellence
              </h3>
              <p className="text-sm text-slate-555 font-sans leading-relaxed">
                We believe in zero compromise on syllabus quality. We provide premium graded worksheets matching the highest national criteria of JEE and NEET.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left flex flex-col gap-4">
              <div className="p-3 bg-blue-50 text-primary self-start rounded-xl">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl">
                Future Goals
              </h3>
              <p className="text-sm text-slate-505 font-sans leading-relaxed">
                Beyond just cracking entrance exams, we instill logical thinking, academic self-discipline, and reasoning traits that empower students in their professional paths.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
