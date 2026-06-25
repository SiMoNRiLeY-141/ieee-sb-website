import React from "react";
import Achievements from "../components/Achievements/Achievements";
import Banner from "../components/Banner/Banner";
import Events from "../components/Events/EventsHub/Events";
import Societies from "../components/Societies/Societies";

import Hero from "../components/Hero/Hero";
import ExecomSection from "../components/ExecomSection/ExecomSection";
import GallerySection from "../components/GallerySection/GallerySection";
import InfoSection from "@/components/InfoSection/InfoSection";
import ScrollReveal3D from "../components/Common/ScrollReveal3D";

const HomePage = () => {
  return (
    <>
      <Banner />
      <main className="w-full flex flex-col bg-white min-h-screen scroll-3d-container">
        <Hero />
        <ScrollReveal3D>
          <Societies />
        </ScrollReveal3D>
        <ScrollReveal3D>
          <Events />
        </ScrollReveal3D>
        <ScrollReveal3D>
          <Achievements />
        </ScrollReveal3D>
        <ScrollReveal3D>
          <GallerySection />
        </ScrollReveal3D>
        <ScrollReveal3D>
          <ExecomSection />
        </ScrollReveal3D>
        <ScrollReveal3D>
          <InfoSection />
        </ScrollReveal3D>
      </main>
    </>
  );
};

export default HomePage;
