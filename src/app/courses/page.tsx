"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  CheckCircle, 
  BookOpen, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  Award, 
  GraduationCap,
  Calendar,
  Layers,
  ChevronRight,
  Home as HomeIcon
} from "lucide-react";
import { COURSES_DATA } from "@/data/staticData";
import Link from "next/link";

function CoursesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Set default tab and class from query params
  const initialTab = searchParams.get("tab") || "jee";
  const classParam = searchParams.get("class") || "";
  
  const [activeTab, setActiveTab] = useState<string>("jee");

  useEffect(() => {
    if (["jee", "neet", "foundation"].includes(initialTab)) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Smooth scroll to selected class card
  useEffect(() => {
    if (classParam) {
      const scrollTimer = setTimeout(() => {
        const element = document.getElementById(`class-card-${classParam}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
      return () => clearTimeout(scrollTimer);
    }
  }, [classParam, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Clear the class parameter when switching tabs manually
    router.replace(`/courses?tab=${tab}`, { scroll: false });
  };

  const currentCourse = COURSES_DATA[activeTab];

  const tabOptions = [
    { id: "jee", name: "IIT-JEE", badge: "Engineering" },
    { id: "neet", name: "NEET", badge: "Medical" },
    { id: "foundation", name: "Early Foundation", badge: "Class 6-10" }
  ];

  // Mappings for breadcrumbs
  const courseNameMap: Record<string, string> = {
    jee: "IIT-JEE",
    neet: "NEET",
    foundation: "Early Foundation"
  };

  const classLabelMap: Record<string, string> = {
    "11": "Class 11",
    "12": "Class 12",
    "12pass": "Class 12 Pass",
    "6": "Class 6",
    "7": "Class 7",
    "8": "Class 8",
    "9": "Class 9",
    "10": "Class 10"
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* 1. Header Hero */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-white py-14 md:py-18 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col gap-4">
          <span className="text-xs font-black text-accent uppercase tracking-[0.25em]">Structured Curriculums</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight">
            Our Academic Programs
          </h1>
          <p className="text-slate-100 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a targeted pathway to achieve your academic and career goals. Designed by Ex-Allen faculties for optimal learning outcomes.
          </p>
        </div>
      </section>

      {/* 2. Interactive Tabs Navigation */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[120px] z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center p-1.5 bg-slate-100 rounded-2xl gap-2">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 py-3 px-4 rounded-xl font-display font-bold text-sm md:text-base flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-primary shadow-sm scale-[1.01]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <span>{tab.name}</span>
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-sans font-bold ${
                  activeTab === tab.id ? "bg-blue-50 text-primary" : "bg-slate-200 text-slate-500"
                }`}>
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Course Details Display */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap bg-white py-3 px-5 rounded-xl border border-slate-200/60 shadow-sm self-start">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <HomeIcon className="h-3.5 w-3.5" /> Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-300" />
            <span className="cursor-default">Courses</span>
            <ChevronRight className="h-3 w-3 text-slate-300" />
            <Link href={`/courses?tab=${activeTab}`} className="hover:text-primary transition-colors">
              {courseNameMap[activeTab]}
            </Link>
            {classParam && classLabelMap[classParam] && (
              <>
                <ChevronRight className="h-3 w-3 text-slate-300" />
                <span className="text-primary font-bold cursor-default">{classLabelMap[classParam]}</span>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            
            {/* Course Detail: Left Column (Overview, Target Batches, Features) */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-md">
              <div>
                <h2 className="font-display font-black text-slate-905 text-3xl sm:text-4xl mb-3">
                  {currentCourse.title}
                </h2>
                <p className="text-primary font-bold text-base md:text-lg mb-4">
                  {currentCourse.tagline}
                </p>
                <p className="text-slate-500 font-sans text-base leading-relaxed">
                  {currentCourse.description}
                </p>
              </div>

              {/* Available for classes (Active card highlights & Badges) */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-display font-extrabold text-slate-805 text-lg mb-6 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> Target Batches & Tracks
                </h3>
                
                <div className="flex flex-col gap-4">
                  {currentCourse.classes.map((cls, idx) => {
                    // Determine ClassId for linking & scroll matching
                    const classId = activeTab === "foundation" 
                      ? (idx + 6).toString() 
                      : idx === 0 ? "11" : idx === 1 ? "12" : "12pass";
                    
                    const isSelected = classParam === classId;

                    return (
                      <div
                        key={idx}
                        id={`class-card-${classId}`}
                        className={`relative rounded-2xl p-6 border text-left transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isSelected 
                            ? "bg-blue-50/30 border-primary border-2 shadow-lg ring-4 ring-primary/10 -translate-y-0.5" 
                            : "bg-slate-50 border-slate-200 hover:border-slate-350 hover:bg-slate-100/50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`h-11 w-11 rounded-xl flex items-center justify-center font-display font-black text-base flex-shrink-0 transition-colors duration-300 ${
                            isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"
                          }`}>
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-extrabold text-slate-800 text-base block">
                              {cls}
                            </span>
                            <span className="text-xs text-slate-400 font-semibold block mt-0.5">
                              Taught directly by Ex-Allen faculty members
                            </span>
                          </div>
                        </div>

                        {isSelected && (
                          <span className="absolute -top-3 -right-3 bg-primary text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-full shadow-md">
                            Selected Batch
                          </span>
                        )}
                        
                        <Link
                          href={`/contact?enquire=enroll&course=${activeTab}&class=${classId}`}
                          className={`font-bold text-xs py-2.5 px-4 rounded-lg text-center transition-all duration-200 ${
                            isSelected 
                              ? "bg-primary text-white hover:bg-primary-dark shadow-sm" 
                              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          Enroll Now
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Course Features */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-display font-extrabold text-slate-805 text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" /> Academic Deliverables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCourse.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-655 font-sans leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Course Detail: Right Column (Sidebar, Benefits & CTA) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Foundation Benefits card (Only render if active tab is foundation) */}
              {activeTab === "foundation" && currentCourse.benefits && (
                <div className="bg-gradient-to-br from-blue-900 to-primary text-white p-8 rounded-3xl shadow-md text-left">
                  <h3 className="font-display font-black text-xl mb-4 text-accent flex items-center gap-2">
                    <Award className="h-6 w-6" /> Key Foundations Benefits
                  </h3>
                  <div className="flex flex-col gap-4">
                    {currentCourse.benefits.map((benefit, idx) => {
                      const [title, desc] = benefit.split(": ");
                      return (
                        <div key={idx} className="flex gap-3">
                          <span className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <div className="flex flex-col">
                            <span className="font-bold text-sm text-white">{title}</span>
                            <span className="text-xs text-blue-100 leading-relaxed font-sans">{desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Admission enquiry card */}
              <div className="bg-white border border-slate-100 shadow-md rounded-3xl p-8 text-left flex flex-col gap-6">
                <div>
                  <h3 className="font-display font-extrabold text-slate-900 text-xl mb-1">
                    Ready to Start?
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Secure a seat or discuss details with our co-founders today.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={`/contact?enquire=enroll&course=${activeTab}`}
                    className="bg-primary hover:bg-primary-dark text-white font-bold text-center py-3.5 px-6 rounded-xl shadow-sm hover:shadow transition-all duration-200"
                  >
                    Apply Online Now
                  </Link>
                  <Link
                    href={`/contact?enquire=counsel&course=${activeTab}`}
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-205 text-slate-805 font-bold text-center py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5 text-primary" /> Book Counselling
                  </Link>
                </div>

                {/* Trust badge icons */}
                <div className="border-t border-slate-100 pt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs text-slate-555">
                    <Clock className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                    <span>Batch timings tailored for school-going students.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-555">
                    <ShieldCheck className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                    <span>Taught directly by Chandan Sir & Jaydeep Sir.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default function Courses() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
      </div>
    }>
      <CoursesContent />
    </Suspense>
  );
}
