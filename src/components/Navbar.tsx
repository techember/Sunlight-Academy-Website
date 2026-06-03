"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  GraduationCap, 
  ChevronRight, 
  BookOpen, 
  Award, 
  Sparkles,
  Stethoscope
} from "lucide-react";
import Logo from "./Logo";

// Structure of enlarged courses mega menu
const MEGA_MENU_COURSES = [
  {
    id: "jee",
    category: "IIT-JEE",
    tagline: "Engineering Entrance Program",
    desc: "Comprehensive coaching for JEE Main & Advanced. Led by Ex-Allen & Ex-NITian mentors to build problem-solving speed and accuracy.",
    icon: Award,
    iconColor: "text-accent bg-orange-50/70",
    href: "/courses?tab=jee",
    classes: [
      { name: "Class 11", href: "/courses?tab=jee&class=11" },
      { name: "Class 12", href: "/courses?tab=jee&class=12" },
      { name: "Class 12 Pass", href: "/courses?tab=jee&class=12pass" }
    ]
  },
  {
    id: "neet",
    category: "NEET",
    tagline: "Medical Entrance Program",
    desc: "Rigorous NCERT-focused coaching designed for AIIMS and premier government medical colleges, specializing in Bio, Chem, and Physics.",
    icon: Stethoscope,
    iconColor: "text-primary-dark bg-amber-50/80",
    href: "/courses?tab=neet",
    classes: [
      { name: "Class 11", href: "/courses?tab=neet&class=11" },
      { name: "Class 12", href: "/courses?tab=neet&class=12" },
      { name: "Class 12 Pass", href: "/courses?tab=neet&class=12pass" }
    ]
  },
  {
    id: "foundation",
    category: "Early Foundation",
    tagline: "Class 6-10 Pre-Prep",
    desc: "Developing analytical logic, advanced mathematics, and strong science fundamentals early. Building future readiness.",
    icon: Sparkles,
    iconColor: "text-accent bg-orange-50/70",
    href: "/courses?tab=foundation",
    classes: [
      { name: "Class 6", href: "/courses?tab=foundation&class=6" },
      { name: "Class 7", href: "/courses?tab=foundation&class=7" },
      { name: "Class 8", href: "/courses?tab=foundation&class=8" },
      { name: "Class 9", href: "/courses?tab=foundation&class=9" },
      { name: "Class 10", href: "/courses?tab=foundation&class=10" }
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const pathname = usePathname();

  // Navigation Links - Replace Gallery with Careers
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Faculty", href: "/faculty" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  // Hover delay handling (Accidental close prevention using useRef)
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setCoursesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setCoursesDropdownOpen(false);
    }, 500); // 500ms close delay
  };

  // Close menu instantly when a link is clicked
  const handleLinkClick = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setCoursesDropdownOpen(false);
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
      
      {/* LEVEL 1: TOP ANNOUNCEMENT BAR (Exactly 40px) */}
      <div className="bg-primary-dark text-white text-xs h-[40px] flex items-center w-full px-4 sm:px-6 lg:px-8 border-b border-orange-700/30">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <Phone className="h-3.5 w-3.5 text-secondary" /> +91 8709667059
            </span>
            <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-white/60"></span>
            <span className="hidden sm:inline font-medium">Thana Mor, Station Road, Madhubani, Bihar</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-accent flex items-center gap-1">
              <GraduationCap className="h-4 w-4" /> Admissions Open 2026-27
            </span>
          </div>
        </div>
      </div>

      {/* LEVEL 2: MAIN NAVBAR (Exactly 80px) */}
      <div className="h-[80px] bg-white w-full px-4 sm:px-6 lg:px-8 flex items-center relative">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* COLUMN 1: Brand Logo */}
          <div className="w-[180px] sm:w-[220px] flex-shrink-0 flex items-center">
            <Link href="/" className="cursor-pointer block">
              <Logo size="sm" showText={true} />
            </Link>
          </div>

          {/* COLUMN 2: Centered Navigation (Hidden on mobile/tablet) */}
          <div className="hidden xl:flex flex-grow justify-center items-center gap-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                pathname === "/" 
                  ? "text-primary-dark bg-amber-50" 
                  : "text-slate-700 hover:text-primary-dark hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Courses Mega Menu Trigger */}
            <div
              className="h-[80px] flex items-center relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-bold flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                  pathname.startsWith("/courses")
                    ? "text-primary-dark bg-amber-50"
                    : "text-slate-700 hover:text-primary-dark hover:bg-slate-50"
                }`}
              >
                Courses
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Other links */}
            {navLinks.slice(1).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                  pathname === link.href
                    ? "text-primary-dark bg-amber-50"
                    : "text-slate-700 hover:text-primary-dark hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* COLUMN 3: CTA Buttons */}
          <div className="hidden xl:flex w-[320px] flex-shrink-0 items-center justify-end gap-3">
            <Link
              href="/contact?enquire=counsel"
              className="bg-secondary hover:bg-primary text-slate-900 text-xs font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1"
            >
              <BookOpen className="h-3.5 w-3.5" /> Book Counselling
            </Link>
            <Link
              href="/contact?enquire=enroll"
              className="bg-primary-dark hover:bg-accent text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              Enroll Now
            </Link>
          </div>
 
          {/* Mobile hamburger menu button */}
          <div className="xl:hidden flex items-center gap-2">
            <Link
              href="/contact?enquire=enroll"
              className="bg-primary-dark hover:bg-accent text-white text-xs font-bold py-2 px-3 rounded-lg shadow-sm transition-all"
            >
              Enroll
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-655 hover:text-primary hover:bg-slate-50 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* REDESIGNED & ENLARGED MEGA MENU (Locked directly beneath Level 2 navbar at top-[80px]) */}
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute left-1/2 -translate-x-1/2 top-[80px] w-full max-w-[1150px] bg-white rounded-b-2xl shadow-xl border border-slate-150 overflow-hidden z-50 p-8 grid grid-cols-3 gap-8 transition-all duration-200 origin-top ${
            coursesDropdownOpen 
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }`}
        >
          {MEGA_MENU_COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <div key={course.id} className="flex flex-col text-left border-r border-slate-100 last:border-r-0 pr-6 last:pr-0">
                {/* Column Header */}
                <Link 
                  href={course.href} 
                  onClick={handleLinkClick}
                  className="group flex items-center gap-3 mb-4"
                >
                  <div className={`p-2.5 rounded-xl ${course.iconColor} transition-transform duration-200 group-hover:scale-105`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors duration-200 flex items-center gap-0.5">
                      {course.category}
                      <ChevronRight className="h-3.5 w-3.5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </span>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{course.tagline}</p>
                  </div>
                </Link>

                {/* Description */}
                <p className="text-xs text-slate-500 font-sans leading-relaxed mb-6">
                  {course.desc}
                </p>

                {/* Graded Class Links */}
                <div className="flex flex-col gap-2.5 border-l-2 border-slate-100 pl-4 mt-auto">
                  {course.classes.map((cls, classIdx) => (
                    <Link
                      key={classIdx}
                      href={cls.href}
                      onClick={handleLinkClick}
                      className="text-xs font-bold text-slate-700 hover:text-primary transition-all duration-200 py-0.5 flex items-center gap-1 group/item"
                    >
                      <span className="h-1.5 w-1.5 bg-slate-300 group-hover/item:bg-primary rounded-full transition-colors" />
                      {cls.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* MOBILE MENU PANEL (With lightweight solid background CSS transition) */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto border-l border-slate-100 transition-transform duration-300 xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <Logo size="sm" />
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-900 cursor-pointer">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="mt-6 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-lg font-bold text-sm transition-colors ${
                pathname === "/" ? "bg-amber-50 text-primary-dark" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Courses Mobile Collapsible */}
            <div className="flex flex-col">
              <button
                onClick={() => setActiveMobileCategory(activeMobileCategory === "courses" ? null : "courses")}
                className={`px-4 py-3 rounded-lg font-bold text-sm flex justify-between items-center transition-colors cursor-pointer ${
                  pathname.startsWith("/courses") ? "bg-amber-50 text-primary-dark" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Courses
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMobileCategory === "courses" ? "rotate-180" : ""}`} />
              </button>

              {/* Mobile menu expanded courses */}
              <div 
                className={`overflow-hidden bg-slate-50/50 rounded-lg mx-2 my-1 pl-4 flex flex-col border-l-2 border-primary-dark/25 transition-all duration-300 ${
                  activeMobileCategory === "courses" ? "max-h-[500px] py-2" : "max-h-0"
                }`}
              >
                {MEGA_MENU_COURSES.map((course) => (
                  <div key={course.id} className="py-2">
                    <span className="text-[10px] font-black text-primary-dark block mb-1">
                      {course.category}
                    </span>
                    <div className="flex flex-col gap-1.5 pl-2">
                      {course.classes.map((cls, classIdx) => (
                        <Link
                          key={classIdx}
                          href={cls.href}
                          onClick={() => setIsOpen(false)}
                          className="text-[11px] font-bold text-slate-655 hover:text-primary-dark py-0.5"
                        >
                          {cls.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg font-bold text-sm transition-colors ${
                  pathname === link.href ? "bg-amber-50 text-primary-dark" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
          <Link
            href="/contact?enquire=counsel"
            onClick={() => setIsOpen(false)}
            className="bg-secondary hover:bg-primary text-slate-900 text-xs font-bold py-3 px-4 rounded-xl shadow-sm text-center flex items-center justify-center gap-1"
          >
            <BookOpen className="h-4 w-4" /> Book Counselling
          </Link>
          <Link
            href="/contact?enquire=enroll"
            onClick={() => setIsOpen(false)}
            className="bg-primary-dark hover:bg-accent text-white text-xs font-bold py-3 px-4 rounded-xl shadow-sm text-center"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      {/* Dark backdrop overlay on mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
        />
      )}

    </nav>
  );
}
