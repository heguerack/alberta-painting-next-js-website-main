"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Reviews1 from "@/public/Reviews1.png";
import Reviews2 from "@/public/Reviews2.png";
import Reviews3 from "@/public/Reviews3.png";
import Image from "next/image";
import "./ReviewsCarousel.css";
import GoogleLogo from "@/public/google-logo.svg";
import ServiceSection from "./service-section";
import { Crown, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import GoogleLogo2 from "@/public/google-icon-download.svg";
import homeStars from "@/public/home-stars.svg";
import Best2025 from "@/public//Best2025.svg";
import Awards2025 from "@/public/Awards2025.svg";
import IconVerified from "@/public/icon-verified.svg";
import Cookies from "js-cookie";

import axios from "axios";

const ReviewsCarousel = () => {
  const [activeTab, setActiveTab] = useState<"google" | "homestars">("google");
  const [placeDetails, setPlaceDetails] = useState<any>([]);

  const handleReviewsRequest = async () => {
    try {
      const myCookieValue = Cookies.get("reviews");
      if (myCookieValue) {
        const review: any = localStorage?.getItem("reviews");
        setPlaceDetails(JSON.parse(review));
        return;
      }
      await axios
        .get("/api/getReviews")
        .then((response: any) => {
          if (response?.data) {
            setPlaceDetails(response?.data?.data);
            localStorage?.setItem(
              "reviews",
              JSON.stringify(response?.data?.data)
            );
            Cookies.set("reviews", "Added", { expires: 15 });
          }
        })
        .catch((error: any) => {
          console.log("Erro: ", error);
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    handleReviewsRequest();
  }, []);

  return (
    <div className="lg:mb-20 lg:mt-20 mb-10">
      <ServiceSection
        title="What Our Clients Say"
        description="Real Reviews from Satisfied <br /> Customers"
        buttonText="Read More Reviews"
        isButton={true}
      />

      <div className="w-full max-w-3xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("google")}
            className={cn(
              "flex items-center gap-1  cursor-pointer  px-2 rounded-[20px] transition-colors w-full justify-center",
              activeTab === "google"
                ? "bg-[#0D378D] text-white"
                : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
            )}
          >
            <div className="h-10 w-10 relative">
              <Image src={GoogleLogo2} alt="gooleLogo" />
            </div>
            <span className="text-[10px] md:text-[15px]  text-left font-medium lg:text-[19px]">
              Google Reviews
            </span>
          </button>

          <button
            onClick={() => setActiveTab("homestars")}
            className={cn(
              "flex items-center gap-2 py-3 px-6 cursor-pointer rounded-[20px] transition-colors w-full justify-center",
              activeTab === "homestars"
                ? "bg-[#0D378D] text-white"
                : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
            )}
          >
            <div className="flex justify-center items-center relative">
              <Image src={homeStars} alt="gooleLogo" />
            </div>
            <span className="text-[10px] md:text-[15px] text-left font-medium lg:text-[19px]">
              HomeStars Reviews
            </span>
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          {activeTab === "google" && (
            <div className="flex flex-col items-center">
              <div className="container flex lg:justify-center lg:mb-20 lg:mx-auto mb-10 mt-10 px-4 sm:justify-start">
                <Image
                  src={GoogleLogo}
                  className="w-40 lg:w-64"
                  alt="google-logo"
                />
              </div>
            </div>
          )}

          {activeTab === "homestars" && (
            <div className="flex flex-col items-center">
              <h2 className="text-[#0D378D] text-[26px] font-bold mb-8 uppercase">
                Awards Earned
              </h2>

              <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-3">
                <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
                  <Image src={Best2025} alt="homeStars" />
                  <h3 className="text-[#0D378D] font-bold lg:text-lg">
                    Best of the Best 2025
                  </h3>
                  <p className="text-black">Winner 4 times</p>
                </div>

                <div className="flex justify-center items-center">
                  <div className="relative">
                    <Image
                      className="w-40 lg:w-50"
                      src={IconVerified}
                      alt="homeStars"
                    />
                  </div>
                </div>

                <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
                  <Image src={Awards2025} alt="homeStars" />
                  <h3 className="text-[#0D378D] text-lg font-bold">
                    Best of Awards 2025
                  </h3>
                  <p className="text-black">Winner 6 times</p>
                </div>
              </div>

              <div className="flex items-center my-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-6 text-orange-400 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="text-[#0D378D] text-2xl font-bold ml-2">
                  5.5
                </span>
                <span className="text-[18px] text-black ml-2">117 reviews</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-0 lg:px-10 mx-auto px-2 relative">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            360: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            657: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            601: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {placeDetails?.map((review: any, index: any) => (
            <SwiperSlide key={index}>
              <div>
                <div className="flex flex-col bg-[#E2E7F1] justify-center p-0 shadow-lg lg:p-4 pl-10 relative review_card lg:min-h-80 h-auto mx-auto">
                  {/* Adjusted the images to be inside the flex container without absolute positioning */}
                  <div className="">
                    <Image
                      src={Reviews1}
                      alt="Review Image"
                      className="w-15 absolute left-1 lg:left-[-20px] lg:mt-0 lg:top-4 lg:w-20 mt-6 mx-auto top-[-20px]"
                    />
                    <Image
                      src={Reviews2}
                      alt="Review Image"
                      className="h-[120px] absolute bottom-[20px] left-[28px] mx-auto"
                    />
                    <Image
                      src={Reviews3}
                      alt="Review Image"
                      className="absolute h-[10px] w-[120px]  bottom-[20px] lg:right-[-28px] mx-auto right-[-20]"
                    />
                  </div>
                  <div className="p-[20px] lg:p-[25px] md:p-[10px]">
                    <p className="text-[11px] text-base text-black font-normal lg:pl-[30px] lg:text-[15px] mb-4 pb-0 pt-[40px] review-text sm:pl-[20px] sm:pr-[-40px]">
                      {review?.text?.length > 200
                        ? review?.text.slice(0, 300) + "..."
                        : review.text}
                    </p>
                    <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                      {review?.author_name}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
