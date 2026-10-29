"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LeadershipTeam from "@/components/about/AboutMain";
import AboutUsHero from "@/components/about/Hero";
import Contact from "@/components/home/Contact";
import { DashainBanner } from "@/components/home/Dashanin";
import HeroSection from "@/components/home/MainHero";
import { TechStack } from "@/components/home/TechStack";
import StatsGlance from "@/components/home/Testimonials";
import ServicesShowcase from "@/components/services/ServiceSection";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans bg-[#120524]">
      <Navbar />
      <HeroSection/>
      <DashainBanner/>
      <ServicesShowcase/>
      <TechStack/>
      <AboutUsHero/>
      <StatsGlance/>
      <LeadershipTeam/>
      <Contact />
      <Footer />
    </div>
  );
}
