"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mt-20">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
