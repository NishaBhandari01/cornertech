"use client"

import LeadershipTeam from "@/components/about/AboutMain";
import AboutUsHero from "@/components/about/Hero";
import Contact from "@/components/home/Contact";
import { DashainBanner } from "@/components/home/Dashanin";
import HeroSection from "@/components/home/MainHero";
import { TechStack } from "@/components/home/TechStack";
import TestimonialsShowcase from "@/components/home/Testimonials";
import OurProducts from "@/components/products/Hero";

import ServicesShowcase from "@/components/services/ServiceSection";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans bg-[#120524]">
      <HeroSection />
      <DashainBanner />
      <ServicesShowcase />
      <OurProducts/> 
      <TechStack />
      <TestimonialsShowcase />
      <AboutUsHero />
      <LeadershipTeam />
      <Contact />
    </div>
  );
}
