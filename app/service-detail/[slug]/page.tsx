"use client";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import HomeBanner from "@/components/HomeBanner/home-banner";
import ContactFormSection from "@/components/ContactFormSection";
import { Navbar } from "@/components/navbar";
import BlogHeros from "@/components/blogs-hero";
import blogsBanner from "@/public/blogs-banner.png";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "../../servicedata";

export default function ServiceDetails() {
  // Fixed typo here
  const params = useParams();
  const [service, setService] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (params && params?.slug) {
      const temp: any = services?.find((el: any) => el?.slug === params?.slug);
      if (temp) {
        setService(temp);
        setLoading(false);
      } else setLoading(false);
    } else {
      setLoading(false);
    }
  }, [params]);

  return (
    <>
      <Navbar />
      {!loading && service && (
        <>
          <BlogHeros
            title={service?.hero?.start}
            title2={service?.hero?.end}
            subtitle=""
            imageSrc={blogsBanner}
            quoteLink="/quote"
            bookLink="/contact"
            quoteText="Get a Free Quote"
            bookText="Question ?"
          />
          {/* Background Image Section */}
          <div className="relative">
            <div className="absolute top-[-100px] z-[-2]">
              <Image src={BgBackground2} alt="bg-Image" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
            <header className="mb-6">
              <h1 className="text-[26px] font-medium text-[#0D378D]">
                {service?.title}
              </h1>
            </header>

            <div className="space-y-6">
              {/* Service Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
                <Image
                  src={service?.coverImage}
                  alt={service?.slug}
                  fill
                  className="md:object-cover sm:object-contain"
                  priority
                />
              </div>

              {/* Service Description */}
              <div className="space-y-4 text-[16px] text-black">
                {service?.descriptions?.map((item: any, index: any) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <HomeBanner />

      <ContactFormSection />

      <Footer />
    </>
  );
}
