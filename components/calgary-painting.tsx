import Image from "next/image";
import React from "react";
import Link from "next/link";
import paintingCompany from "@/public/paintingCompany.png";
import EstimatedFreeIcon from "@/app/assets/EstimatedFreeIcon";
import SkilledProfessionalIcon from "@/app/assets/SkilledProfessionalIcon";
import LicensedInsuredIcon from "@/app/assets/LicensedInsuredIcon";
import ReputationQualityIcon from "@/app/assets/ReputationQualityIcon";
import AboutArrow from "@/app/assets/AboutArrow";

export const CalgaryPainting = () => {
  return (
    <div className="my-6">
      <section className="relative bg-[#0D378D] text-white"></section>

      <main className="">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="bg-[#0D378D] text-white p-8 md:p-12 py-30 max-sm:py-10 lg:p-16 flex flex-col justify-center md:w-1/2">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl md:text-4xl  font-bold mb-6 uppercase">
                We are your Calgary painting company
              </h1>

              <p className="mb-8 text-sm md:text-base">
                Alberta Colour Painting is your trusted partner in Calgary,
                offering detailed estimates and unparalleled painting services.
                As a leading Calgary painting company, we pride ourselves on our
                professional and skilled Calgary painters.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mb-10 uppercase">
                Our touch of paint makes a difference!
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 pt-4  col-span-2">
                <div className="text-center">
                  <div className=" p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
                    <EstimatedFreeIcon/>
                  </div>
                  <p className="text-sm md:text-xs">
                    Free Detailed <br /> Estimate
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <SkilledProfessionalIcon/>
                  </div>
                  <p className="text-sm md:text-xs">
                    Skilled Professional <br /> Painters
                  </p>
                </div>
                <div className="text-center">
                  <div className=" p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
                    <LicensedInsuredIcon/>
                  </div>
                  <p className="text-sm md:text-xs">
                    Licensed Insured <br />
                    Eco-Friendly
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full  mx-auto mb-2 flex items-center justify-center">
                    <ReputationQualityIcon/>
                  </div>
                  <p className="text-sm md:text-xs">
                    Reputation For High <br /> Quality
                  </p>
                </div>
              </div>

              <div className="flex lg:mt-10 mt-5">
              <Link href="/contact">
                <button className="flex items-center gap-2 border-2 border-white rounded-full pl-3 pr-1.5 py-2  text-sm md:text-base font-medium hover:bg-blue-800 transition-colors cursor-pointer">
                  Book Your Estimate Today
                  <AboutArrow/>
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
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
      </main>
    </div>
  );
};
