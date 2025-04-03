"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import ContactFormSection from "../../components/ContactFormSection";
import Footer from "@/components/ui/footer";
import HomeBanner from "@/components/HomeBanner/home-banner";
import { Navbar } from "@/components/navbar";
import blogsBanner from "@/public/blogs-banner.png";
import BlogHeros from "@/components/blogs-hero";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import { services } from "../servicedata";
import Arrow from "../assets/Arrow";

export default function Services() {
  return (
    <>
      <Navbar />

      <BlogHeros
        title="Our"
        title2="Painting Services"
        subtitle="Transforming Homes & Businesses with Quality Painting"
        imageSrc={blogsBanner}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
        bookText="Question ?"
      />

      {/* <PaintingCompany /> */}

      <div className="lg:mt-20 mx-4 mt-10">
        <div className="absolute ">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
        {/* Services Grid */}
        <div className="container mx-auto max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden p-0 border-0 shadow-none space-y-3"
              >
                <CardTitle className="uppercase lg:text-[26px] text-[18px] p-0 font-bold text-[#0D378D] mb-[-10]">
                  {service.title}
                </CardTitle>
                <div className="relative h-[300px] w-full">
                  <Image
                    src={service.imageSrc}
                    alt={service.altText}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className=" p-0">
                  <CardTitle className="uppercase text-[20px] font-bold text-black mt-[-23]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className=" text-black text-[16px]">
                    {service.short_description.split("\n")[0]}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="p-0 mt-[-20]">
                  <Link
                    href={"/service-detail/" + service?.slug}
                    className="bg-[#0D378D] text-white pl-5 pr-2 py-1.5   border-2 border-white rounded-full font-medium  flex items-center justify-center"
                  >
                    {service.buttonText}
                    <span className="ml-2 bg-white rounded-full p-2">
                    <Arrow/>
                    </span>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute top-[2000px] z-[-9]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
        <div className="lg:mt-10 mt-5">
          <HomeBanner />
        </div>
        {/* CTA Banner */}
        {/* <div className="relative w-full  h-[300px] mb-10 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/70">
          <Image
            src={PaintingServices}
            alt="Transform Your Space"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6 text-center">
          <h2 className="text-2xl font-bold uppercase mb-2">
            Ready to transform your space?
          </h2>
          <p className="mb-4 max-w-xl">
           {` Whether you're looking to refresh your home or update your business
            space, our team is ready to help you create the perfect environment.`}
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
            Schedule a Consultation
          </Button>
        </div>
      </div> */}

        {/* Contact Form Section */}

        <div className="relative">
          <div className="absolute z-[-200]">
            <Image src={BgBackground2} alt="bg-Image" />
          </div>
          <ContactFormSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
