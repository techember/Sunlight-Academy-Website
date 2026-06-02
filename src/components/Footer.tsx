import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight, Facebook, Youtube, Send } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-primary">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: About & Branding */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              {/* Force white background logo wrapper for slate-900 or use bright logo variant */}
              <div className="bg-white/95 p-3.5 rounded-xl shadow-lg inline-block">
                <Logo size="sm" showText={true} />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Madhubani's premier educational coaching institute for IIT-JEE, NEET, and Early Foundation preparation. Led by Ex-NITians and former premier institute faculties to secure top national ranks.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-extrabold text-lg tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Courses", href: "/courses" },
                { name: "Faculty Members", href: "/faculty" },
                { name: "Contact & Enquiry", href: "/contact" }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm font-semibold hover:text-primary-light flex items-center gap-1 group transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-primary-light transition-colors" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Courses Offered */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-extrabold text-lg tracking-wider border-b border-slate-800 pb-2">
              Our Programs
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "IIT-JEE Class 11", href: "/courses?tab=jee&class=11" },
                { name: "IIT-JEE Class 12", href: "/courses?tab=jee&class=12" },
                { name: "IIT-JEE Class 12 Pass", href: "/courses?tab=jee&class=12pass" },
                { name: "NEET Medical Class 11", href: "/courses?tab=neet&class=11" },
                { name: "NEET Medical Class 12", href: "/courses?tab=neet&class=12" },
                { name: "Early Foundation Program", href: "/courses?tab=foundation" }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm font-semibold hover:text-primary-light flex items-center gap-1 group transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-primary-light transition-colors" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-extrabold text-lg tracking-wider border-b border-slate-800 pb-2">
              Contact Center
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed font-semibold">
                  Thana Mor, Station Road, Madhubani, Bihar
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:8709667059" className="text-sm hover:text-white font-semibold transition-colors">
                  +91 8709667059
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:cdpsjarya@gmail.com" className="text-sm hover:text-white font-semibold transition-colors">
                  cdpsjarya@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom copyright micro-bar */}
      <div className="bg-slate-950 text-slate-500 py-6 border-t border-slate-850 px-4 sm:px-6 lg:px-8 text-center text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Sunlight Academy, Madhubani. All Rights Reserved.</p>
          <p className="flex gap-4">
            <Link href="/about" className="hover:text-slate-350 transition-colors">Vision & Mission</Link>
            <span>•</span>
            <Link href="/courses" className="hover:text-slate-350 transition-colors">Programs</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-350 transition-colors">Enquiry Form</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
