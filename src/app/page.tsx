"use client";

import Footer from "@/components/Footer";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Schedule from "@/components/Schedule";
import KeyDates from "@/components/KeyDates";
import Special from "@/components/Special";
import Overview from "@/components/Overview";
import Theme from "@/components/Theme";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Sponsor from "@/components/Sponsor";
import Teams from "@/components/Teams";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* SPECIAL */}
      <Special />

      {/* OVERVIEW */}
      <Overview />

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* STATISTICS */}
      <section id="stats">
        <Statistics />
      </section>

      {/* SCHEDULE */}
      <section id="schedule">
        <Schedule />
      </section>

      {/* KEY DATES */}
      <KeyDates />

      {/* THEMES */}
      <section id="themes">
        <Theme />
      </section>

      {/* SPONSORS */}
      <section id="sponsors">
        <Sponsor />
      </section>

      {/* TEAMS */}
      <section id="teams">
        <Teams />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
