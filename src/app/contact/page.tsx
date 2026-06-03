"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle,
  HelpCircle,
  Clock,
  Navigation
} from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  
  // Read params for auto-populating fields
  const defaultCourse = searchParams.get("course") || "";
  const defaultEnquiry = searchParams.get("enquire") || "";

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    mobileNumber: "",
    className: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Sync query params to form states
    setFormData((prev) => ({
      ...prev,
      course: ["jee", "neet", "foundation"].includes(defaultCourse) ? defaultCourse : "",
      message: defaultEnquiry === "counsel" 
        ? "I want to schedule a free academic counselling session." 
        : defaultEnquiry === "enroll" 
        ? "I want to apply for batch enrollment." 
        : "",
    }));
  }, [defaultCourse, defaultEnquiry]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.studentName.trim()) errors.studentName = "Student name is required";
    if (!formData.parentName.trim()) errors.parentName = "Parent name is required";
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.className) errors.className = "Please select a class";
    if (!formData.course) errors.course = "Please select a course";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        studentName: "",
        parentName: "",
        mobileNumber: "",
        className: "",
        course: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 animate-fade-in">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col gap-4">
          <span className="text-xs font-black text-accent uppercase tracking-[0.25em]">Get In Touch</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight">
            Contact & Admission Enquiry
          </h1>
          <p className="text-slate-100 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions, batches, or schedules? Drop us a query or call us directly.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Enquiry Form Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards, WhatsApp, and Google Map Placeholder */}
            <div className="lg:col-span-5 flex flex-col gap-8 text-left">
              
              {/* Main Info Box */}
              <div className="bg-white border border-slate-100 shadow-md rounded-3xl p-8 flex flex-col gap-6">
                <h2 className="font-display font-extrabold text-slate-905 text-2xl border-b border-slate-100 pb-4">
                  Information Desk
                </h2>
                
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-amber-50 text-primary-dark flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Our Center Address</span>
                      <span className="text-sm font-semibold text-slate-700 leading-relaxed mt-0.5 block">
                        Thana Mor, Station Road, Madhubani, Bihar
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-amber-50 text-primary-dark flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Mobile Number</span>
                      <a href="tel:8709667059" className="text-sm font-semibold text-slate-700 hover:text-primary-dark transition-colors mt-0.5 block">
                        +91 8709667059
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-amber-50 text-primary-dark flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Email Address</span>
                      <a href="mailto:cdpsjarya@gmail.com" className="text-sm font-semibold text-slate-700 hover:text-primary-dark transition-colors mt-0.5 block">
                        cdpsjarya@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Direct CTA buttons */}
                <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-6">
                  <a
                    href="tel:8709667059"
                    className="bg-primary-dark hover:bg-accent text-white text-xs font-bold py-3 px-4 rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a
                    href="https://wa.me/918709667059?text=Hello%20Sunlight%20Academy%2C%20I%20have%20an%20admission%20enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4 fill-current" /> WhatsApp
                  </a>
                </div>

              </div>

              {/* Styled Interactive SVG Google Maps placeholder */}
              <div className="bg-white border border-slate-100 shadow-md rounded-3xl p-6 text-left flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Center Map Location</span>
                  <a 
                    href="https://maps.google.com/?q=Thana+Mor+Station+Road+Madhubani+Bihar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary-dark font-bold hover:underline flex items-center gap-1"
                  >
                    <Navigation className="h-3.5 w-3.5" /> Navigate
                  </a>
                </div>
                
                {/* Simulated Map SVG */}
                <div className="h-48 rounded-2xl bg-amber-50 border border-amber-200 overflow-hidden relative flex items-center justify-center">
                  {/* Grid Lines representing Roads */}
                  <svg className="absolute inset-0 w-full h-full stroke-white/60" strokeWidth="6">
                    <line x1="0" y1="50" x2="300" y2="50" />
                    <line x1="120" y1="0" x2="120" y2="200" strokeWidth="8" />
                    <line x1="0" y1="130" x2="300" y2="130" />
                    <line x1="240" y1="0" x2="240" y2="200" />
                  </svg>
                  {/* Map labels */}
                  <span className="absolute top-6 left-12 text-[9px] font-black text-slate-400 uppercase tracking-widest bg-white/70 px-1.5 py-0.5 rounded">Station Rd</span>
                  <span className="absolute bottom-12 right-20 text-[9px] font-black text-slate-400 uppercase tracking-widest bg-white/70 px-1.5 py-0.5 rounded">Thana Mor</span>

                  {/* Marker Pin */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <MapPin className="h-8 w-8 text-primary-dark fill-amber-200 filter drop-shadow-sm" />
                    <span className="bg-primary-dark text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-lg tracking-wider border border-white/20 whitespace-nowrap mt-1">
                      Sunlight Academy
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Admission Enquiry Form */}
            <div className="lg:col-span-7 bg-white border border-slate-100 shadow-md rounded-3xl p-8 md:p-10 text-left">
              <h2 className="font-display font-extrabold text-slate-900 text-2xl mb-2">
                Admission Enquiry Form
              </h2>
              <p className="text-xs text-slate-500 font-sans mb-8">
                Please fill in the form details below. Our academic counsellor will review your request and reach out to you within 24 hours.
              </p>

              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center gap-4 my-8 animate-fade-in">
                  <CheckCircle className="h-16 w-16 text-emerald-500" />
                  <h3 className="font-display font-black text-emerald-905 text-xl sm:text-2xl">
                    Form Submitted Successfully!
                  </h3>
                  <p className="text-slate-655 text-sm sm:text-base leading-relaxed max-w-md">
                    Thank you for contacting Sunlight Academy. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Student & Parent Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Student Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.studentName ? "border-red-400 focus:border-red-450" : "border-slate-200 focus:border-primary"
                        } focus:bg-white focus:outline-none transition-colors text-sm font-semibold`}
                      />
                      {formErrors.studentName && (
                        <span className="text-xs text-red-550 font-bold">{formErrors.studentName}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Parent Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.parentName ? "border-red-400 focus:border-red-450" : "border-slate-200 focus:border-primary"
                        } focus:bg-white focus:outline-none transition-colors text-sm font-semibold`}
                      />
                      {formErrors.parentName && (
                        <span className="text-xs text-red-550 font-bold">{formErrors.parentName}</span>
                      )}
                    </div>
                  </div>

                  {/* Mobile & Class selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        maxLength={10}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.mobileNumber ? "border-red-400 focus:border-red-455" : "border-slate-200 focus:border-primary"
                        } focus:bg-white focus:outline-none transition-colors text-sm font-semibold`}
                      />
                      {formErrors.mobileNumber && (
                        <span className="text-xs text-red-550 font-bold">{formErrors.mobileNumber}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Select Current Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.className ? "border-red-400 focus:border-red-455" : "border-slate-200 focus:border-primary"
                        } focus:bg-white focus:outline-none transition-colors text-sm font-semibold`}
                      >
                        <option value="">Choose Class...</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="12pass">Class 12 Pass (Target)</option>
                      </select>
                      {formErrors.className && (
                        <span className="text-xs text-red-550 font-bold">{formErrors.className}</span>
                      )}
                    </div>
                  </div>

                  {/* Course selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Select Target Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        formErrors.course ? "border-red-400 focus:border-red-455" : "border-slate-200 focus:border-primary"
                      } focus:bg-white focus:outline-none transition-colors text-sm font-semibold`}
                    >
                      <option value="">Choose Targeted Course Track...</option>
                      <option value="jee">IIT-JEE (Main & Advanced)</option>
                      <option value="neet">NEET (Medical Entrance)</option>
                      <option value="foundation">Early Pre-Prep Foundation (Class 6-10)</option>
                    </select>
                    {formErrors.course && (
                      <span className="text-xs text-red-550 font-bold">{formErrors.course}</span>
                    )}
                  </div>

                  {/* Optional Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Query/Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Type your questions or queries here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none transition-colors text-sm font-semibold resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-dark hover:bg-accent text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:bg-primary-dark/70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Submit Enquiry
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-dark border-r-transparent" />
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
