"use client";

import React, { useState } from "react";
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Award, 
  Send, 
  CheckCircle, 
  Upload, 
  FileText,
  Heart,
  Smile,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Careers() {
  const [activeFormTab, setActiveFormTab] = useState<"faculty" | "employee">("faculty");

  // Faculty Form State
  const [facultyData, setFacultyData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    qualification: "",
    experience: "",
    subjectExpertise: "",
    currentLocation: "",
    resume: "",
    message: ""
  });
  const [facultyErrors, setFacultyErrors] = useState<Record<string, string>>({});
  const [facultySuccess, setFacultySuccess] = useState(false);
  const [facultySubmitting, setFacultySubmitting] = useState(false);

  // Employee Form State
  const [employeeData, setEmployeeData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    positionApplyingFor: "",
    experience: "",
    currentLocation: "",
    resume: "",
    message: ""
  });
  const [employeeErrors, setEmployeeErrors] = useState<Record<string, string>>({});
  const [employeeSuccess, setEmployeeSuccess] = useState(false);
  const [employeeSubmitting, setEmployeeSubmitting] = useState(false);

  // Validation function for Faculty Form
  const validateFaculty = () => {
    const errors: Record<string, string> = {};
    if (!facultyData.fullName.trim()) errors.fullName = "Full name is required";
    if (!facultyData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(facultyData.mobileNumber.trim())) {
      errors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }
    if (!facultyData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(facultyData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!facultyData.qualification.trim()) errors.qualification = "Qualification is required";
    if (!facultyData.experience.trim()) errors.experience = "Experience is required";
    if (!facultyData.subjectExpertise) errors.subjectExpertise = "Subject expertise is required";
    if (!facultyData.currentLocation.trim()) errors.currentLocation = "Current location is required";
    
    setFacultyErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Validation function for Employee Form
  const validateEmployee = () => {
    const errors: Record<string, string> = {};
    if (!employeeData.fullName.trim()) errors.fullName = "Full name is required";
    if (!employeeData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(employeeData.mobileNumber.trim())) {
      errors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }
    if (!employeeData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(employeeData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!employeeData.positionApplyingFor) errors.positionApplyingFor = "Position is required";
    if (!employeeData.experience.trim()) errors.experience = "Experience is required";
    if (!employeeData.currentLocation.trim()) errors.currentLocation = "Current location is required";

    setEmployeeErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFacultySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFaculty()) return;

    setFacultySubmitting(true);
    setTimeout(() => {
      setFacultySubmitting(false);
      setFacultySuccess(true);
      setFacultyData({
        fullName: "",
        mobileNumber: "",
        email: "",
        qualification: "",
        experience: "",
        subjectExpertise: "",
        currentLocation: "",
        resume: "",
        message: ""
      });
    }, 1500);
  };

  const handleEmployeeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmployee()) return;

    setEmployeeSubmitting(true);
    setTimeout(() => {
      setEmployeeSubmitting(false);
      setEmployeeSuccess(true);
      setEmployeeData({
        fullName: "",
        mobileNumber: "",
        email: "",
        positionApplyingFor: "",
        experience: "",
        currentLocation: "",
        resume: "",
        message: ""
      });
    }, 1500);
  };

  const handleFacultyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFacultyData(prev => ({ ...prev, [name]: value }));
    if (facultyErrors[name]) {
      setFacultyErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: value }));
    if (employeeErrors[name]) {
      setEmployeeErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const whyWorkWithUs = [
    {
      title: "Academic Freedom",
      desc: "Design your custom teaching pathway and conceptual sheets without corporate restrictions.",
      icon: BookOpen,
      bgColor: "bg-amber-50",
      textColor: "text-primary-dark"
    },
    {
      title: "Direct Mentorship",
      desc: "Collaborate directly with senior co-founders Chandan Sir & Jaydeep Sir (Ex-Allen co-founders).",
      icon: GraduationCap,
      bgColor: "bg-orange-50",
      textColor: "text-accent"
    },
    {
      title: "Growth & Rewards",
      desc: "Competitive salary structures matching national standards with performance-based bonuses.",
      icon: Award,
      bgColor: "bg-amber-50",
      textColor: "text-primary-dark"
    },
    {
      title: "Student-First Focus",
      desc: "Teach highly motivated students in small, focused batches (strictly limited to 30-35 max).",
      icon: Users,
      bgColor: "bg-orange-50",
      textColor: "text-accent"
    }
  ];

  const currentOpenings = {
    faculty: [
      { title: "Senior Physics Faculty (IIT-JEE)", dept: "Academics", type: "Full-Time", loc: "Madhubani Centre" },
      { title: "Senior Chemistry Faculty (NEET)", dept: "Academics", type: "Full-Time", loc: "Madhubani Centre" },
      { title: "Foundation Math & Science Teacher (Class 6-10)", dept: "Academics", type: "Full-Time", loc: "Madhubani Centre" }
    ],
    employee: [
      { title: "Academic Counsellor & Telecaller", dept: "Admissions", type: "Full-Time", loc: "Madhubani Centre" },
      { title: "Front Office Executive", dept: "Administration", type: "Full-Time", loc: "Madhubani Centre" },
      { title: "Doubt Solving Assistant (Part-Time)", dept: "Academics", type: "Part-Time", loc: "Madhubani Centre" }
    ]
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 animate-fade-in">
      
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col gap-4">
          <span className="text-xs font-black text-secondary uppercase tracking-[0.25em]">Careers Path</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight">
            Join Sunlight Academy
          </h1>
          <p className="text-slate-100 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Become a part of our mission to help students achieve success in IIT-JEE, NEET and Foundation programs.
          </p>
        </div>
      </section>

      {/* 2. WHY WORK WITH US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Our Work Culture</span>
            <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
              Why Work With Us?
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
            <p className="text-slate-500 font-sans text-base leading-relaxed mt-2">
              We provide an open, conceptual, and highly supportive environment that values teaching excellence and educational growth above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-amber-200 hover:shadow-lg transition-all duration-300 text-left flex flex-col gap-4 group"
                >
                  <div className={`p-3.5 rounded-xl ${item.bgColor} ${item.textColor} self-start group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-905 text-lg mb-1 group-hover:text-primary-dark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-505 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CURRENT OPENINGS */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Job Board</span>
            <h2 className="font-display font-extrabold text-slate-905 text-3xl sm:text-4xl">
              Current Active Openings
            </h2>
            <div className="h-1 w-20 bg-accent rounded mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Faculty Positions */}
            <div className="flex flex-col gap-4 text-left">
              <h3 className="font-display font-black text-slate-900 text-xl flex items-center gap-2 border-b border-slate-200 pb-3">
                <GraduationCap className="h-5 w-5 text-primary-dark" /> Faculty Positions
              </h3>
              <div className="flex flex-col gap-3">
                {currentOpenings.faculty.map((job, idx) => (
                  <div key={idx} className="bg-white border border-slate-150 p-5 rounded-xl shadow-sm flex justify-between items-center hover:border-amber-200 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-805 text-sm sm:text-base">{job.title}</h4>
                      <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-400 font-semibold">
                        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.dept}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.loc}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary-dark bg-amber-50 px-2.5 py-1 rounded-md">
                      {job.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support & Employee Positions */}
            <div className="flex flex-col gap-4 text-left">
              <h3 className="font-display font-black text-slate-900 text-xl flex items-center gap-2 border-b border-slate-200 pb-3">
                <Users className="h-5 w-5 text-primary-dark" /> Support & Admin Positions
              </h3>
              <div className="flex flex-col gap-3">
                {currentOpenings.employee.map((job, idx) => (
                  <div key={idx} className="bg-white border border-slate-150 p-5 rounded-xl shadow-sm flex justify-between items-center hover:border-amber-200 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-805 text-sm sm:text-base">{job.title}</h4>
                      <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-400 font-semibold">
                        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.dept}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.loc}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-accent bg-orange-50 px-2.5 py-1 rounded-md">
                      {job.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORMS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 flex flex-col gap-3">
            <span className="text-xs font-black text-primary-dark uppercase tracking-widest">Apply Online</span>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl">
              Recruitment Application Form
            </h2>
            <p className="text-sm text-slate-500 font-sans mt-1">
              Select your track below and fill in the details. We look forward to having you on board.
            </p>

            {/* Slider Switch */}
            <div className="flex justify-center mt-6">
              <div className="flex p-1 bg-slate-100 rounded-xl gap-1.5 w-full max-w-[400px]">
                <button
                  onClick={() => setActiveFormTab("faculty")}
                  className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                    activeFormTab === "faculty"
                      ? "bg-white text-primary-dark shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Apply as Faculty
                </button>
                <button
                  onClick={() => setActiveFormTab("employee")}
                  className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all cursor-pointer ${
                    activeFormTab === "employee"
                      ? "bg-white text-primary-dark shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Apply for Support/Admin
                </button>
              </div>
            </div>
          </div>

          {/* Render Active Form Panel */}
          <div className="bg-slate-50 border border-slate-150 shadow-md rounded-3xl p-8 md:p-10 text-left">
            
            {activeFormTab === "faculty" ? (
              // Faculty Recruitment Form
              <div>
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
                  <div className="p-2 rounded-lg bg-amber-100 text-primary-dark">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-slate-900 text-xl">Faculty Recruitment</h3>
                    <p className="text-xs text-slate-400 font-medium">Join our teaching team for JEE, NEET and Foundation tracks.</p>
                  </div>
                </div>

                {facultySuccess ? (
                  <div className="bg-emerald-50 border border-emerald-250 rounded-2xl p-8 text-center flex flex-col items-center gap-4 my-4 animate-fade-in">
                    <CheckCircle className="h-14 w-14 text-emerald-500" />
                    <h4 className="font-display font-black text-emerald-905 text-lg sm:text-xl">
                      Application Submitted!
                    </h4>
                    <p className="text-slate-655 text-sm max-w-md">
                      Thank you for applying as Faculty at Sunlight Academy. Our academic board will review your qualification details and contact you for demo schedules.
                    </p>
                    <button
                      onClick={() => setFacultySuccess(false)}
                      className="mt-4 bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Apply for Another Profile
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFacultySubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={facultyData.fullName}
                          onChange={handleFacultyChange}
                          placeholder="e.g. Dr. Ramesh Prasad"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            facultyErrors.fullName ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {facultyErrors.fullName && <span className="text-xs text-red-500 font-bold">{facultyErrors.fullName}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={facultyData.mobileNumber}
                          onChange={handleFacultyChange}
                          placeholder="10-digit number"
                          maxLength={10}
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            facultyErrors.mobileNumber ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {facultyErrors.mobileNumber && <span className="text-xs text-red-500 font-bold">{facultyErrors.mobileNumber}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={facultyData.email}
                          onChange={handleFacultyChange}
                          placeholder="e.g. ramesh.faculty@gmail.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            facultyErrors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {facultyErrors.email && <span className="text-xs text-red-500 font-bold">{facultyErrors.email}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Qualification *</label>
                        <input
                          type="text"
                          name="qualification"
                          value={facultyData.qualification}
                          onChange={handleFacultyChange}
                          placeholder="e.g. M.Sc (Physics), B.Tech"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            facultyErrors.qualification ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {facultyErrors.qualification && <span className="text-xs text-red-500 font-bold">{facultyErrors.qualification}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience *</label>
                        <input
                          type="text"
                          name="experience"
                          value={facultyData.experience}
                          onChange={handleFacultyChange}
                          placeholder="e.g. 5 Years in JEE Coaching"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            facultyErrors.experience ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {facultyErrors.experience && <span className="text-xs text-red-500 font-bold">{facultyErrors.experience}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject Expertise *</label>
                        <select
                          name="subjectExpertise"
                          value={facultyData.subjectExpertise}
                          onChange={handleFacultyChange}
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            facultyErrors.subjectExpertise ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        >
                          <option value="">Choose Subject...</option>
                          <option value="physics">Physics (JEE/NEET)</option>
                          <option value="chemistry">Chemistry (JEE/NEET)</option>
                          <option value="mathematics">Mathematics (JEE/Foundation)</option>
                          <option value="biology">Biology (NEET/Foundation)</option>
                          <option value="science-math">Science & Math (Foundation Class 6-10)</option>
                        </select>
                        {facultyErrors.subjectExpertise && <span className="text-xs text-red-500 font-bold">{facultyErrors.subjectExpertise}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Location *</label>
                        <input
                          type="text"
                          name="currentLocation"
                          value={facultyData.currentLocation}
                          onChange={handleFacultyChange}
                          placeholder="e.g. Patna, Bihar"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            facultyErrors.currentLocation ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {facultyErrors.currentLocation && <span className="text-xs text-red-500 font-bold">{facultyErrors.currentLocation}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Resume Upload (UI only)</label>
                        <div className="flex items-center gap-3">
                          <label className="cursor-pointer bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-250 py-3 px-4 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-700 shadow-sm transition-all w-full">
                            <Upload className="h-4 w-4 text-primary-dark" />
                            <span>Upload Resume (PDF/Doc)</span>
                            <input 
                              type="file" 
                              name="resume"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => {
                                const val = e.target.files && e.target.files[0] ? e.target.files[0].name : "";
                                setFacultyData(prev => ({ ...prev, resume: val }));
                              }}
                              className="hidden" 
                            />
                          </label>
                        </div>
                        {facultyData.resume && (
                          <span className="text-xs font-bold text-primary-dark flex items-center gap-1 mt-1">
                            <FileText className="h-3.5 w-3.5" /> Selected: {facultyData.resume}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cover Message / Experience Details</label>
                      <textarea
                        name="message"
                        value={facultyData.message}
                        onChange={handleFacultyChange}
                        rows={4}
                        placeholder="Write a brief introduction about your teaching methodology or experience..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary-dark focus:outline-none transition-colors text-sm font-semibold resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={facultySubmitting}
                      className="w-full bg-primary-dark hover:bg-accent text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:bg-primary-dark/70 disabled:cursor-not-allowed"
                    >
                      {facultySubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
                          Submitting application...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Apply as Faculty
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            ) : (
              // Support / Employee Recruitment Form
              <div>
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
                  <div className="p-2 rounded-lg bg-orange-100 text-accent">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-slate-900 text-xl">Employee Recruitment</h3>
                    <p className="text-xs text-slate-400 font-medium">Join our administration, counselling, and operations support teams.</p>
                  </div>
                </div>

                {employeeSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-250 rounded-2xl p-8 text-center flex flex-col items-center gap-4 my-4 animate-fade-in">
                    <CheckCircle className="h-14 w-14 text-emerald-500" />
                    <h4 className="font-display font-black text-emerald-905 text-lg sm:text-xl">
                      Application Submitted!
                    </h4>
                    <p className="text-slate-655 text-sm max-w-md">
                      Thank you for applying at Sunlight Academy. Our HR board will review your profile details and reach out to schedule an interview.
                    </p>
                    <button
                      onClick={() => setEmployeeSuccess(false)}
                      className="mt-4 bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Apply for Another Position
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEmployeeSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={employeeData.fullName}
                          onChange={handleEmployeeChange}
                          placeholder="e.g. Ramesh Kumar"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            employeeErrors.fullName ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {employeeErrors.fullName && <span className="text-xs text-red-500 font-bold">{employeeErrors.fullName}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={employeeData.mobileNumber}
                          onChange={handleEmployeeChange}
                          placeholder="10-digit number"
                          maxLength={10}
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            employeeErrors.mobileNumber ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {employeeErrors.mobileNumber && <span className="text-xs text-red-500 font-bold">{employeeErrors.mobileNumber}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={employeeData.email}
                          onChange={handleEmployeeChange}
                          placeholder="e.g. ramesh.kumar@gmail.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            employeeErrors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {employeeErrors.email && <span className="text-xs text-red-500 font-bold">{employeeErrors.email}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Position Applying For *</label>
                        <select
                          name="positionApplyingFor"
                          value={employeeData.positionApplyingFor}
                          onChange={handleEmployeeChange}
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            employeeErrors.positionApplyingFor ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        >
                          <option value="">Choose Position...</option>
                          <option value="counsellor">Academic Counsellor / Telecaller</option>
                          <option value="executive">Front Office Executive</option>
                          <option value="doubt-solver">Doubt Solving Tutor (Part-Time)</option>
                          <option value="operator">System Operator / PPT Maker</option>
                          <option value="other">Other Office Staff</option>
                        </select>
                        {employeeErrors.positionApplyingFor && <span className="text-xs text-red-500 font-bold">{employeeErrors.positionApplyingFor}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Years of Experience *</label>
                        <input
                          type="text"
                          name="experience"
                          value={employeeData.experience}
                          onChange={handleEmployeeChange}
                          placeholder="e.g. Fresher or 2 years in counselling"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            employeeErrors.experience ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {employeeErrors.experience && <span className="text-xs text-red-500 font-bold">{employeeErrors.experience}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Location *</label>
                        <input
                          type="text"
                          name="currentLocation"
                          value={employeeData.currentLocation}
                          onChange={handleEmployeeChange}
                          placeholder="e.g. Madhubani, Bihar"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            employeeErrors.currentLocation ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary-dark"
                          } focus:outline-none transition-colors text-sm font-semibold`}
                        />
                        {employeeErrors.currentLocation && <span className="text-xs text-red-500 font-bold">{employeeErrors.currentLocation}</span>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Resume Upload (UI only)</label>
                      <div className="flex items-center gap-3">
                        <label className="cursor-pointer bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-250 py-3 px-4 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-700 shadow-sm transition-all w-full">
                          <Upload className="h-4 w-4 text-primary-dark" />
                          <span>Upload Resume (PDF/Doc)</span>
                          <input 
                            type="file" 
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => {
                              const val = e.target.files && e.target.files[0] ? e.target.files[0].name : "";
                              setEmployeeData(prev => ({ ...prev, resume: val }));
                            }}
                            className="hidden" 
                          />
                        </label>
                      </div>
                      {employeeData.resume && (
                        <span className="text-xs font-bold text-primary-dark flex items-center gap-1 mt-1">
                          <FileText className="h-3.5 w-3.5" /> Selected: {employeeData.resume}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cover Message / Introduction</label>
                      <textarea
                        name="message"
                        value={employeeData.message}
                        onChange={handleEmployeeChange}
                        rows={4}
                        placeholder="Write a brief introduction or summary of your skills..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary-dark focus:outline-none transition-colors text-sm font-semibold resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={employeeSubmitting}
                      className="w-full bg-primary-dark hover:bg-accent text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:bg-primary-dark/70 disabled:cursor-not-allowed"
                    >
                      {employeeSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
                          Submitting application...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Apply Now
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
