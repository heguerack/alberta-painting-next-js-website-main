"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Highlight } from "../components/ui/hero-highlight";
import TrustBadges from "./trust-badges";
import { Navbar } from "./navbar";
import { usePathname } from "next/navigation";
import HomeMobileIcon from "@/app/assets/HomeMobileIcon";
import Arrow from "@/app/assets/Arrow";

interface HeroProps {
  title: string;
  title2: string;
  subtitle?: string;
  subtitle2?: string; 
  imageSrc: any;
  quoteLink: string;
  bookLink: string;
  quoteText: string;
}

const ContactGalleryHero: React.FC<HeroProps> = ({
  title,
  title2,
  subtitle,
  subtitle2,
  imageSrc,
  quoteLink,
  bookLink,
  quoteText,

}) => {

  const router = usePathname();

  const isContactPage = router ==='/contact'
  return (
    <div>
   
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Hero Image"
            fill
        priority
            className="object-cover brightness-75"
          
          />
        </div>
        <div className="md:hidden absolute top-4  right-[-70] transform -translate-x-1/2 z-10">
          <a
            href="tel:587-966-6547"
            className="flex items-center   text-white rounded-full p-2"
          >
            <HomeMobileIcon/>

            <span className="font-medium">587-966-6547</span>
          </a>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {title} <Highlight className="text-white">{title2}</Highlight>
          </motion.h1>

          {isContactPage ? (
            <div>
              <p className="lg:text-[36px] text-[15px] md:text-[30px] text-white mt-2 mb-1">{subtitle}</p>
              <p className="lg:text-[36px] text-[15px] md:text-[30px] text-white mb-8">{subtitle2}</p>
            </div>
          ) : (
            <p className="text-xl md:text-2xl text-white mb-8">{subtitle}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href='/contact'
              className="bg-[#0D378D] text-white px-3 py-2 border-2 border-white rounded-full font-medium hover:bg-primary/90 flex items-center justify-center"
            >
              {quoteText}{" "}
              <Arrow/>
            </Link>
    
          </div>
        </div>
      </section>
      <TrustBadges />
    </div>
  );
};

export default ContactGalleryHero;
