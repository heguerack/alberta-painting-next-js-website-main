import BlogGrid from "@/components/blog-grid";
import blogsBanner from "@/public/blogs-banner.webp";

// import BgBackground2 from '@/public/above-gallery-bg-line.svg'  // you are just providing the local path, Next image does not work well with imports! we are not suposed to do this :) instead as follows or right in the Image
const BgBackground2 = "/above-gallery-bg-line.svg";

import ContactFormSection from "@/components/ContactFormSection";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Image from "next/image";
import StandardHero from "@/components/heros/StandardHero";
import { blogPosts } from "@/lib/blog-data";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Blogs | Alberta Colour Painting",
  description:
    "Looking for affordable Calgary painters? Our top-rated house painting company in Calgary offers professional interior and exterior painting services to meet all your needs.",
  keywords: [
    "calgary painters",
    "painting companies calgary",
    "painting companies calgary alberta",
    "calgary painting companies",
    "house painting calgary",
    "painting services calgary",
    "painters in calgary alberta",
    "painting contractors calgary",
    "alberta painting contractors calgary",
  ],
  alternates: {
    canonical: "https://www.albertacolourpainting.com/blogs",
  },
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Alberta Colour Painting, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.albertacolourpainting.com",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};
export default function blogs() {
  return (
    <>
      <StandardHero
        title="Our "
        title2="BLOG"
        subtitle="Painting Tips, Trends & Expert Advice"
        imageSrc={blogsBanner}
      />
      <div className="container mx-auto px-4 py-8 lg:mt-20 mt-10">
        <BlogGrid posts={blogPosts} />
        <div className=" lg:mt-30 mt-10">
          <HomeBanner />
        </div>

        <ContactFormSection />
      </div>

      {/* /////////////////////// */}
      {/* /////////////////////// */}
      {/* /////////////////////// */}
      {/* What is this code doign? I coudnt figure it out :( */}
      {/* <div className='relative'>
        <div className='absolute top-[-2800px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={30} height={30} />
        </div>
      </div>
      <div className='relative'>
        <div className='absolute top-[-2000px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={3} height={3} />
        </div>
      </div>

      <div className='relative'>
        <div className='absolute top-[-1600px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={3} height={3} />
        </div>
      </div>

      <div className='relative'>
        <div className='absolute top-[-800px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={3} height={3} />
        </div>
      </div> */}
    </>
  );
}
