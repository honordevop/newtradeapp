import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
// import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatIs from "./WhatIs";
import LatestDeposit from "@/components/LatestDeposit";
import OurWithrawal from "@/components/OurWithrawal";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Partner from "@/components/Partner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { signIn, useSession } from "next-auth/react";
import LoginCheck from "@/components/LoginCheck";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <LoginCheck />
      {/* <ParticleBackground /> */}
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhatIs />
      <LatestDeposit />
      <OurWithrawal />
      <FAQ />
      <Contact />
      <Partner />
      <Newsletter />
      {/* <Footer /> */}
    </div>
  );
}
