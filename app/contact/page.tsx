"use client";
import Image from "next/image";
import React from 'react'
import paintingCompany from "@/public/paintingCompany.png";
import Footer from "@/components/ui/footer";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import DiscussSection from "./DiscussSection";
import blogsBanner from "@/public/blogs-banner.png";
import ContactGalleryHero from "@/components/ContactGalleryHero";
import { Navbar } from "@/components/navbar";
import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import EstimatedFreeIcon from "../assets/EstimatedFreeIcon";
import SkilledProfessionalIcon from "../assets/SkilledProfessionalIcon";
import LicensedInsuredIcon from "../assets/LicensedInsuredIcon";
import ReputationQualityIcon from "../assets/ReputationQualityIcon";
import QualityWorkmanshipIcon from "../assets/QualityWorkmanshipIcon";
import OualityMaterialIcon from "../assets/OualityMaterialIcon";
import ExperiencedTeam from "../assets/ExperiencedTeam";
import CustomerSatisfactionIcon from "../assets/CustomerSatisfactionIcon";

export default function Home() {
  return (
    <main className="flex  flex-col">
 <Navbar />
<ContactGalleryHero
  title=" "
  title2="CONTACT US"
  subtitle="Let’s Bring Colour to Your Home"
  subtitle2="Get in Touch Today!"
  imageSrc={blogsBanner}
  quoteLink="/"
  bookLink="/book"
  quoteText="Get a Free Quote"
/>
<div className="relative">
      <div className="absolute  z-[-2]">
        <Image src={BgBackground2} alt="bg-Image"/>
      </div>
      </div>

      <div className="relative">
      <div className="absolute top-[800px] z-[-2] ">
        <Image src={BgBackground2} alt="bg-Image"/>
      </div>
      <ContactForm/>
      </div>

      <GoogleMap/>
      <div className=''> <section className="relative bg-[#0D378D] text-white">
    </section>
  
  

      <div className="flex flex-col md:flex-row">

        <div className="bg-[#0D378D] text-white p-8 md:p-12 lg:py-30 md:py-20 lg:p-16 flex flex-col justify-center md:w-1/2">
          <div className="max-w-6xl mx-auto">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 uppercase">We are your Calgary painting company</h1>

            <p className="mb-8 text-sm md:text-base">
              Alberta Colour Painting is your trusted partner in Calgary, offering detailed estimates and unparalleled
              painting services. As a leading Calgary painting company, we pride ourselves on our professional and
              skilled Calgary painters.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mb-10 uppercase">Our touch of paint makes a difference!</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4  col-span-2">
          <div className="text-center">
            <div className=" p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
             <EstimatedFreeIcon/>
            </div>
            <p className="text-sm sm:text-[10px]">
              Free Detailed <br /> Estimate
            </p>
          </div>
          <div className="text-center">
            <div className="p-3 rounded-full mx-auto mb-2 flex items-center justify-center">
             <SkilledProfessionalIcon/>
            </div>
            <p className="text-sm sm:text-[10px]">
              Skilled Professional <br /> Painters
            </p>
          </div>
          <div className="text-center">
            <div className=" p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
              <LicensedInsuredIcon/>
            </div>
            <p className="text-sm sm:text-[10px]">
              Licensed Insured <br />
              Eco-Friendly
            </p>
          </div>
          <div className="text-center">
            <div className="p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
              <ReputationQualityIcon/>
            </div>
            <p className="text-sm sm:text-[10px]">
              Reputation For High <br /> Quality
            </p>
          </div>
        </div>

          </div>
        </div>

        <div className="md:w-1/2 h-[300px] md:h-auto relative">
        <Image
          src={paintingCompany}
          alt="Blue awning installation"
          fill
          className="object-cover "
          style={{ objectPosition: "center 50%" }}
        />
        </div>
      </div>

  
  
  </div>
  <div className="relative" >
      <div className="absolute top-[100px] z-[-2]">
        <Image src={BgBackground2} alt="bg-Image"/>
      </div>
      </div>
      <div className="bg-[#E2E7F1] py-12 px-4 relative ">
        <div className="max-w-6xl mx-auto">
          <h2 className="lg:text-[36px] text-[30px] font-bold text-[#0D378D] text-center mb-12">
            WHY CHOOSE US?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="flex flex-col  text-start">
              <div className="text-[#0D378D] mb-4">
                <div className="flex text-start">
                 <QualityWorkmanshipIcon/>
                </div>
              </div>
              <h3 className=" text-lg font-semibold text-[#0D378D] mb-3 ">
                Quality Workmanship
              </h3>
              <p className="text-sm text-black">
              We use only premium materials and top-notch techniques.
              </p>
            </div>


            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
               <OualityMaterialIcon/>
              </div>
              <h3 className="text-lg font-semibold text-[#0D378D] mb-3">
                Quality Materials
              </h3>
              <p className="text-sm text-gray-700">
                We work with trusted, high-quality materials that stand the test
                of time.
              </p>
            </div>


            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <ExperiencedTeam/>
              </div>
              <h3 className="text-lg font-semibold text-[#0D378D] mb-3">
                Experienced Team
              </h3>
              <p className="text-sm text-gray-700">
                Our experts have over a decade of experience.
              </p>
            </div>


            <div className="flex flex-col ">
              <div className="text-blue mb-4">
                <CustomerSatisfactionIcon/>
              </div>
              <h3 className="text-lg font-semibold text-[#0D378D] mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-sm text-gray-700">
                Your satisfaction is our priority, and we ensure the job is done
                right the first time.
              </p>
            </div>
          </div>
        </div>


     
      </div>
      <DiscussSection/>
      <Footer />
    </main>
  );
}