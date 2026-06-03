"use client";

import React from "react";
import { 
  Users, 
  GraduationCap, 
  Award, 
  Layers, 
  BookOpen, 
  Clock, 
  Sparkles,
  Phone,
  Calendar
} from "lucide-react";
import { FACULTY_DATA } from "@/data/staticData";
import Link from "next/link";
import Image from "next/image";

export default function Faculty() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 animate-fade-in">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col gap-4">
          <span className="text-xs font-black text-accent uppercase tracking-[0.25em]">Expert Pedagogues</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight">
            Meet Our Expert Faculty
          </h1>
          <p className="text-slate-100 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Learn directly from Ex-NITians and Ex-Allen faculties who have spent years training top percentile achievers across India.
          </p>
        </div>
      </section>

      {/* 2. Faculty Listing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            
            {FACULTY_DATA.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 shadow-md rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-start hover:shadow-lg transition-all duration-300"
              >
                
                {/* Faculty Portrait Image or Placeholder Design */}
                <div className="w-full lg:w-64 flex flex-col gap-4 items-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-primary-dark to-primary flex flex-col items-center justify-center text-white font-display font-black text-5xl shadow-inner relative overflow-hidden flex-shrink-0">
                    {member.avatarSeed === "chandan" ? (
                      <Image
                        src="/chandan.jpg"
                        alt={member.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover relative z-10"
                        loading="lazy"
                      />
                    ) : member.avatarSeed === "jaydeep" ? (
                      <Image
                        src="/jaydeep.png"
                        alt={member.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover relative z-10"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <span className="relative z-10">{member.name.split(" ").map(n => n[0]).join("")}</span>
                        <span className="absolute bottom-4 text-[10px] uppercase tracking-widest text-amber-200 font-sans font-semibold">Ex-Allen</span>
                        <div className="absolute inset-0 bg-white/5 opacity-30 transform rotate-45 scale-150 pointer-events-none" />
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Teaching Credentials</span>
                    <span className="text-sm font-extrabold text-primary-dark mt-0.5 block">{member.experience}</span>
                  </div>
                </div>

                {/* Faculty Details Content */}
                <div className="flex-grow text-left flex flex-col gap-6">
                  
                  {/* Name and Role */}
                  <div>
                    <h2 className="font-display font-black text-slate-905 text-3xl mb-1">
                      {member.name}
                    </h2>
                    <p className="text-sm font-extrabold text-primary-dark uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>

                  {/* Credentials / Track record tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-bold bg-amber-50 border border-amber-100 text-primary-dark px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                      >
                        <Award className="h-4 w-4 text-accent" />
                        {cred}
                      </span>
                    ))}
                  </div>

                  {/* Expertise/Subjects tags */}
                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="font-display font-extrabold text-slate-805 text-base mb-3 flex items-center gap-1.5">
                      <Layers className="h-4.5 w-4.5 text-primary-dark" /> Key Subject Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="text-xs font-bold bg-slate-50 border border-slate-150 text-slate-700 px-3 py-1 rounded-md"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Teaching Philosophy */}
                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="font-display font-extrabold text-slate-805 text-base mb-2 flex items-center gap-1.5">
                      <BookOpen className="h-4.5 w-4.5 text-primary-dark" /> Teaching Philosophy
                    </h3>
                    <p className="text-sm sm:text-base text-slate-555 font-sans italic leading-relaxed bg-amber-50/30 border-l-4 border-primary-dark pl-4 py-2">
                      "{member.teachingPhilosophy}"
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. Counselling Banner CTA */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <Sparkles className="h-12 w-12 text-accent" />
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug">
            Want to Consult with Our Expert Faculty Directly?
          </h2>
          <p className="text-slate-100 font-sans text-sm sm:text-base max-w-xl">
            We invite parents and students to join us for a free target evaluation and counseling session at our center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact?enquire=counsel"
              className="bg-secondary hover:bg-primary text-slate-905 font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors text-center"
            >
              Book Counselling Session
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
