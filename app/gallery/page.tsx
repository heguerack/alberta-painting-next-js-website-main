"use client";

import ContactFormSection from "@/components/ContactFormSection";
import ContactGalleryHero from "@/components/ContactGalleryHero";
import Hero from "@/components/hero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import { Navbar } from "@/components/navbar";
import OurGallery from "@/components/OurGallery";
import OurGalleryMobile from "@/components/OurGalleryMobile";
import TrustBadges from "@/components/trust-badges";
import Footer from "@/components/ui/footer";
import blogsBanner from "@/public/blogs-banner.png";
import { useEffect, useState } from "react";

export default function gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      handleResize(); 

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <main className="flex  flex-col ">
      <Navbar />
      <ContactGalleryHero
        title="OUR "
        title2="GALLERY"
        subtitle="Quality Craftsmanship | Beautiful Finishes | Happy Clients"
        imageSrc={blogsBanner}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
      />
  
      {isMobile ? <OurGalleryMobile /> : <OurGallery />}

      <HomeBanner />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
