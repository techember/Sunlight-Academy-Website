import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sunlight Academy | Best IIT-JEE, NEET & Foundation Coaching in Madhubani",
  description: "Sunlight Academy is a premier coaching institute in Madhubani offering IIT-JEE, NEET and Foundation programs with expert faculty and personalized guidance.",
  keywords: "Sunlight Academy, Sunlight Academy Madhubani, IIT-JEE Madhubani, NEET Madhubani, Foundation Coaching Madhubani, Best Coaching in Madhubani, Chandan Kumar, Jaydeep",
  authors: [{ name: "Sunlight Academy" }],
  openGraph: {
    title: "Sunlight Academy | Best IIT-JEE, NEET & Foundation Coaching in Madhubani",
    description: "Sunlight Academy is a premier coaching institute in Madhubani offering IIT-JEE, NEET and Foundation programs with expert faculty and personalized guidance.",
    type: "website",
    locale: "en_IE",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
