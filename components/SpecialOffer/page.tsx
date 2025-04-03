"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "./style.css";
import 'swiper/css';
import Image from "next/image";
import slider1 from "@/public/slider-image-1.png";
import slider2 from "@/public/special-Offer-2.png";
import { Navigation  } from "swiper/modules"
import BgBackground from '@/public/about-background-vector-line.svg'
import Link from "next/link";
import AboutArrow from "@/app/assets/AboutArrow";

const Index = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          // Small tablets
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          // Medium tablets
          slidesPerView: 2,
          spaceBetween: 20,
        },
        842:{

          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          // Small desktops
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          // Medium desktops
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1536: {
          // Large desktops
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    })

    // return () => {
    //   // Cleanup swiper instance when component unmounts
    //   if (swiper) swiper.destroy()
    // }
  }, [])

  return (
    <section className="lg:pt-30 pt-10 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <h6 className="text-center text-black lg:text-[22px] text-[18px] font-semibold mb-2">Special Offer</h6>
        <h2 className="text-center lg:text-[36px] text-[26px]  font-semibold text-[#0D378D] uppercase mb-8">
          Top Calgary House Painting Offers and Discounts
        </h2>
        <div className="offer_bg">
          {/* Grid layout for content */}
          <div className=" flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Swiper slider section */}
            <div className="w-full lg:w-3/5">
              <div className="swiper mySwiper offer_slider">
                <div className="swiper-wrapper">
                  {/* Slide 1 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider1} className="w-full h-auto" alt="Offer 1" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>10% Off on Interior</p>
                      </div>
                      <div className=" absolute bottom-6 left-0 right-0 ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white p-4">10% OFF - Interior Painting</p>
                      </div>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider2} className="w-full h-auto" alt="Offer 2" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content absolute bottom-0 left-0 right-0  ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider1} className="w-full h-auto" alt="Offer 1" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>10% Off on Interior</p>
                      </div>
                      <div className=" absolute bottom-6 left-0 right-0 ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white p-4">10% OFF - Interior Painting</p>
                      </div>
                    </div>
                  </div>
                  {/* Slide 4 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider2} className="w-full h-auto" alt="Offer 4" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content absolute bottom-0 left-0 right-0 ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Navigation Buttons */}
                <div className="swiper-button-prev image3  custom-prev-button offer_slider_prev" />
                <div className="swiper-button-next image4 custom-prev-button  offer_slider_next" />
              </div>
            </div>
            {/* Text content section */}
            <div className="w-full pr-5 flex flex-col justify-center ">
              <h5 className=" lg:text-xl  text-[20px]  mb-5">
                For a limited time, Alberta Colour Painting is offering exclusive discounts to help you refresh your space at an unbeatable price!
              </h5>
              <p className="text-[14px] lg:text-[16px] font-light">
                Discover a variety of discounts and special deals at Alberta Colour Painting, tailored to help you save on your Calgary house painting projects throughout the year. Explore ongoing promotions for both standard and specialty wall painting services, and ensure you get the best value by visiting our offers page.
              </p>

              <Link href="/contact" className="cursor-pointer z-30">
              <button className="flex items-center w-45 mt-3.5 gap-4 border-2 border-white rounded-full pl-5 pr-1.5  py-2 text-sm md:text-base font-medium bg-[#0D378D]  cursor-pointer transition-colors">
                  contact US
                <AboutArrow/>
                 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[300px] left-[-1px]">
        <Image src={BgBackground} alt="bg-Image"/>
      </div>
    </section>
  );
};

export default Index;
