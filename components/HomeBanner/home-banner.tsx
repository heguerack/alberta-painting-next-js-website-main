"use client";

import Link from "next/link";
import Image from "next/image";
import "./homebanner.css";
import BgBackground from '@/public/about-background-vector-line.svg'
import AboutArrow from "@/app/assets/AboutArrow";

const HomeBanner = () => {
  return (
    <div className="   ">
      
      <div className=" back-img lg:mt-[40px] container max-w-7xl mx-auto py-20  max-sm:py-6
        relative">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 sm:px-12 z-20 relative">
          <div className="text-white col-span-2 ">
            <h1 className="text-3xl lg:text-[36px] sm:text-[16px] font-medium mb-4 uppercase">
              Ready to Transform Your Space?
            </h1>
            <p className=" font-extralight lg:text-[16px] sm:text-[12px]">
              Whether it’s a fresh coat of paint for your home or business,
              we’re here to make it happen. Let us bring your vision to life
              with precision and care.
            </p>
          </div>

          <div className="flex items-center lg:justify-end justify-start">
            
            <Link
              href="/contact"
              className="flex items-center bg-[#0D378D] text-white pl-4 pr-2 py-3 rounded-full text-base font-medium border-2 border-[#cadbff]"
            >
              <span className="mr-2 lg:text-[16px] text-[14px] md:text-[10px]">Schedule a Consultation</span>
           <AboutArrow/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
