"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
import AboutUs from "@/public/AboutUs.png";
import BgBackground from '@/public/about-background-vector-line.svg'
import Link from "next/link";
import AboutArrow from "@/app/assets/AboutArrow";
import QualityWorkmanshipIcon from "@/app/assets/QualityWorkmanshipIcon";
import OualityMaterialIcon from "@/app/assets/OualityMaterialIcon";
import ExperiencedTeam from "@/app/assets/ExperiencedTeam";
import CustomerSatisfactionIcon from "@/app/assets/CustomerSatisfactionIcon";

export default function PaintingCompany() {

  const pathname = usePathname();

  let showLearnMoreButton = pathname === '/';

  return (
    <div className="w-full lg:my-24 my-10 relative">
      <div className="absolute top-[-390px] z-[-1]">
        <Image src={BgBackground} alt="bg-Image"/>
      </div>
      {/* Hero Section */}
      <div className=" flex flex-col lg:flex-row  lg:h-[38rem]">
        {/* Left side with image */}
        <div className="relative w-full lg:w-[50%]" >
          <div className="absolute top-10 left-0 z-50 bg-blue-900 text-white py-3 px-4">
            <p className="text-[16px] font-semibold">10 Years of Experience</p>
          </div>
          <div></div>
          <Image
            src={AboutUs}
            alt="Elegant interior with staircase"
            width={600}
            height={600}
            className="w-full h-[400px] lg:h-[650px] max-sm:pr-[20px] object-cover lg:absolute z-10"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full xl:max-w-2xl   bg-white lg:px-16 px-4 py-8 flex flex-col justify-center ">
          <p className="text-black text-[22px]  font-semibold mb-2">About Us</p>
          <h1 className="lg:text-[36px] text-[26px] font-bold text-[#0D378D] mb-4">
            EXPERTS IN COLOURING
            <br />
            YOUR WORLD
          </h1>
          <p className="text-black mb-6 text-[14px] lg:text-[16px]">
            {`  Welcome to Atlantic Colour Painting, your trusted partner for
            professional interior and exterior painting services in Calgary. Our
            team, featuring the finest Calgary painters, ensures every project
            we undertake is completed to the highest standards with precision
            and quality. Whether you're looking for expert Calgary interior
            painters or need comprehensive service from a top Calgary painting
            company, we've got you covered. Our interior painting services are
            tailored to transform your living spaces with elegance and style.`}
          </p>
          {showLearnMoreButton && (

          <Link href="/about" className="cursor-pointer z-30">
          <button className="bg-blue-900  cursor-pointer text-white rounded-full w-fit pl-4 pr-1.5 py-1 flex items-center gap-2 cursor-pointer">
            Learn More
          <AboutArrow/>
          </button>
          </Link>
          )}
        {/* <button className="learn-more-button">Learn More</button> */}
      
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#E2E7F1] py-20 lg:px-4 px-10 relative">
      <div className="absolute top-[-490px]">
        <Image src={BgBackground} alt="bg-Image"/>
      </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="lg:text-[36px] text-[25px] font-bold text-[#0D378D] text-center mb-12">
            WHY CHOOSE US?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Workmanship */}
            <div className="flex flex-col  text-start">
              <div className="text-[#0D378D] mb-4">
                <div className="flex text-start">
                  <QualityWorkmanshipIcon/>
                </div>
              </div>
              <h3 className=" lg:text-[24px]  text-[20px] font-semibold text-[#0D378D] mb-3 ">
                Quality Workmanship
              </h3>
              <p className=" lg:text-[16px] text-[14px] text-black">
                We use only premium materials and top-notch techniques.
              </p>
            </div>

            {/* Quality Materials */}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <OualityMaterialIcon />
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Quality Materials
              </h3>
              <p className="lg:text-[16px] text-[14px] text-black">
                We work with trusted, high-quality materials that stand the test
                of time.
              </p>
            </div>

            {/* Experienced Team */}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <ExperiencedTeam/>
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Experienced Team
              </h3>
              <p className="lg:text-[16px] text-[14px] text-black">
                Our experts have over a decade of experience.
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex flex-col ">
              <div className="text-blue mb-4">
                <CustomerSatisfactionIcon/>
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Customer Satisfaction
              </h3>
              <p className="lg:text-[16px] text-[14px] text-black">
                Your satisfaction is our priority, and we ensure the job is done
                right the first time.
              </p>
            </div>
          </div>
        </div>

        {/* Background decorative element */}
      </div>
    </div>
  );
}
