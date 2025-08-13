import React from "react";
import TrustBadges from "../trust-badges";
import HeroPhoneMobile from "./HeroPhoneMobile";
import Image from "next/image";

import "./hero.css";
import HeroCallToAction from "./HeroCallToAction";
import { HeroHomeImg } from "@/data/images";

const HomeHero = () => {
  return (
    <div>
      <section className="relative h-[600px] md:h-[850px] lg:h-[900px]">
        <HeroPhoneMobile />
        <div className="relative h-[calc(100vh-50px)]">
          <Image
            src={HeroHomeImg.src}
            alt={HeroHomeImg.alt}
            fill
            className="object-cover brightness-75 w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              EXPERT <span className="bg-reveal">CALGARY PAINTERS</span>
            </h1>{" "}
            <h2 className="text-xl md:text-2xl text-white mb-8">
              for Interior and Exterior House Painting Services
            </h2>
            <HeroCallToAction />
          </div>
        </div>
        <TrustBadges />
      </section>
    </div>
  );
};

export default HomeHero;
