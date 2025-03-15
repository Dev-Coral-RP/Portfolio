import "./globals.css";
import type { Metadata } from "next";
import BackgroundDots from "@/components/BackgroundDots";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Dev Coral / Tom | Full-Stack Developer",
  description: "A full-stack developer specializing in Next.js, React, and Tailwind CSS. Explore my projects and skills.",
  keywords: "Full-Stack Developer, Next.js, React, JavaScript, Tailwind CSS, Web Development",
  author: "Tom",
  robots: "index, follow",
  openGraph: {
    title: "Your Name | Full-Stack Developer",
    description: "A full-stack developer specializing in modern web technologies.",
    url: "https://devcoral.xyz",
    type: "website",
    images: [
      {
        url: "https://devcoral.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    title: "Your Name | Full-Stack Developer",
    description: "A full-stack developer specializing in modern web technologies.",
    image: "https://devcoral.xyz/twitter-card.jpg",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
      <BackgroundDots />
        <main className="container mx-auto px-6">
          <Hero />
          <Features />
          <Projects />
          <Testimonials />
        
        </main>
        <Footer />
      </body>
    </html>
  );
}