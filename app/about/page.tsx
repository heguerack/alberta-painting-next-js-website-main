import Image from "next/image";
import {  Dot } from "lucide-react";
import service1 from "@/public/service1.png";
import service2 from "@/public/service2.png";
import service3 from "@/public/service3.png";
import PaintingCompany from "@/components/painting-company";
import Hero from "@/components/hero";
import { CalgaryPainting } from "@/components/calgary-painting";
import OurGallery from "@/components/gallery/page";
import ContactFormSection  from "../../components/ContactFormSection";
import Footer from "@/components/ui/footer";
import HomeBanner from "@/components/HomeBanner/home-banner";
import BlogGrid from "@/components/blog-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog-data";
import { Navbar } from "@/components/navbar";
import BlogHeros from "@/components/blogs-hero";
import blogsBanner from "@/public/blogs-banner.png";
import BgBackground from '@/public/about-background-vector-line.svg'
import BgBackground2 from '@/public/above-gallery-bg-line.svg'


export default function page() {
  const posts = getBlogPosts();
  return (
    <>
      <Navbar />
      <BlogHeros
        title="About  "
        title2="Alberta Colour Painting"
        subtitle="Your Trusted, Skilled, and Eco-Friendly Painting Experts"
        imageSrc={blogsBanner}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
        bookText="Book Now"
      />

      <PaintingCompany />
      <div className="relative">
      <div className="absolute">
        <Image src={BgBackground} alt="bg-Image"/>
      </div>
      </div>
      <div className=" ">
        {/* Quality Section */}
<div className="container mx-auto max-w-7xl px-4">
  
        <div className="grid md:grid-cols-2 gap-8 items-center relative mt-10 my-3.5 pb-[40px]">
          <div className="space-y-6 ">
            <div className="space-y-2">
              <p className="text-[22px]  font-medium text-black">
              Our Skilled Painters
              </p>
              <h2 className="lg:text-[36px] text-[22px] font-bold text-[#0D378D] uppercase">
              Trained & Skilled House<br />
              Painters
              </h2>
            </div>

            <ul className="space-y-4 text-black list-disc lg:text-[16px] text-[14px]">
              <li className="flex items-start gap-2 list-disc">
                <Dot className="h-5 w-5 mt-0.5 text-black " />
                <span>
                We protect your furniture and surrounding areas before painting.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Dot className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                <span>Our painters respect your home as if it were their own.</span>
              </li>
              <li className="flex items-start gap-2">
                <Dot className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                <span>
                We believe in skill and attention to detail, ensuring your satisfaction.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <p className="lg:text-[20px] text-[18px] text-black">
              Our commitment to excellence means that every home we paint is
              treated with care and precision, leaving behind a space you’ll love.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-[80%] ml-auto aspect-square md:aspect-auto h-[570px] max-sm:h-[400px] lg:mb-[20px] overflow-hidden ">
          <Image
              src={service1}
              alt="Modern living room with wooden floors and fireplace"
              fill
              className="object-cover "
            />
          </div>
        </div>
   

        </div>
        <div className="max-sm:my-10">
        <HomeBanner/>
        </div>
        <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center my-3.5 lg:mt-20" >
          <div className="relative w-full  lg:w-[80%] mr-auto aspect-square md:aspect-auto md:h-[600px] overflow-hidden">
            <Image
              src={service2}
              alt="Modern living room with wooden floors and fireplace"
              fill
              className="object-cover "
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[22px] font-medium text-black">
                Commitment to Quality
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0D378D]">
                PREMIUM MATERIALS & <br />
                EXCEPTIONAL WORKMANSHIP
              </h2>
            </div>

            <ul className="space-y-4 text-black lg:text-[16px] text-[14px]">
              <li className="flex items-start gap-2">
                <Dot className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                <span>
                  We use the best paints and materials for long-lasting results.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Dot className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                <span>
                  Our expert team ensures flawless finishes with attention to
                  every detail.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Dot className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                <span>
                  We receive numerous positive reviews from satisfied clients
                  who trust our work.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <p className="lg:text-[20px] text-[18px] text-black">
                Our reputation is built on trust, professionalism, and superior
                quality—ensuring every project exceeds expectations.
              </p>
            </div>
          </div>
        </div>


        {/* Eco-Friendly Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center relative mt-10 my-3.5">
        <div className="absolute top-[400px]">
        <Image src={BgBackground2} alt="bg-Image"/>
      </div>
          <div className="space-y-6 ">
            <div className="space-y-2">
              <p className="text-[22px]  font-medium text-black">
                Eco-Friendly Approach
              </p>
              <h2 className="lg:text-[36px] text-[26px] font-bold text-[#0D378D]">
                SUSTAINABLE PAINTING FOR A<br />
                HEALTHIER FUTURE
              </h2>
            </div>
          

            <ul className="space-y-4 text-black list-disc lg:text-[16px] text-[14px]">
              <li className="flex items-start gap-2 list-disc">
                <Dot className="h-5 w-5 mt-0.5 text-black " />
                <span>
                  We use low to no VOC paints to reduce environmental impact.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Dot className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                <span>We collect and recycle leftover paints responsibly.</span>
              </li>
              <li className="flex items-start gap-2">
                <Dot className="h-5 w-5 mt-0.5 text-black flex-shrink-0" />
                <span>
                  We sort and recycle all project-related waste at our facility.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <p className="lg:text-[20px] text-[18px] text-black">
                By choosing Alberta Colour Painting, you making an
                eco-friendly choice that benefits your home and the planet.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-[80%] ml-auto aspect-square md:aspect-auto md:h-[600px]  overflow-hidden order-1 md:order-2">
            <Image
              src={service3}
              alt="Team members discussing eco-friendly paint options"
              fill
              className=" "
            />
          </div>
        </div>
</div>
       
      </div>
      <div className="relative">
      <div className="absolute top-[-450px]">
        <Image src={BgBackground} alt="bg-Image"/>
      </div>
      </div>

      <OurGallery />
      <CalgaryPainting />
      <ContactFormSection />
      <main className="container mx-auto px-4 py-8 ">
          <div className="text-center  mb-10">
            <h4 className=" text-[22px] text-black font-semibold ont-medium">Our Blog</h4>
            <h2 className="text-[#0D378D] lg:text-[36px]  text-[26px] font-medium">
              Expert Advice, Trends & DIY Tips
            </h2>
          </div>

          <BlogGrid posts={posts?.slice(0, 3)} />

          <div className="flex justify-center my-7">
            <Button className="bg-[#0D378D] px-4 py-5 w-30 rounded-3xl cursor-pointer">
              {" "}
              <Link href="/blogs">View All</Link>
            </Button>
          </div>
        </main>
      <Footer />
    </>
  );
}
