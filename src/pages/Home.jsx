import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import AboutPreview from "../components/home/AboutPreviews";
import WhyJoinSection from "../components/home/WhyJoinSection";
import ServicesPreview from "../components/home/ServicesPreview";
import ActionsSection from "../components/home/ActionsSection";
import TurismoNumeros from "../components/home/TurismoNumeros";
import PartnersSection from "../components/home/PartnersSection";
import LegalCTA from "../components/home/LegalCTA";
import JoinCTA from "../components/home/JoinCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <WhyJoinSection />
      <ServicesPreview />
      <ActionsSection />
      <TurismoNumeros />
      <PartnersSection />
      <LegalCTA />
      <JoinCTA />
    </>
  );
}
