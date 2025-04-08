// app/services/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import blogsBanner from "@/public/blogs-banner.png";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import HomeBanner from "@/components/HomeBanner/home-banner";
import ContactFormSection from "@/components/ContactFormSection";

import StandardHero from "@/components/heros/StandardHero";
import { services } from "@/data/serviceData";
import { Dot } from "lucide-react";

//THIS IS SO YTHAT THE PAGES DONT BECOME DINAMIC PAGES!!
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetails( ///Next 15 stuff , one cant destructure params the regular way anymore
  //   {
  //   params,
  // }: {
  //   params: { slug: string }
  // }
  props: { params: { slug: string } }
) {
  const { slug } = await props.params; //Next js 15 stuff, omne must await
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <>
      <StandardHero
        title={service?.hero.start}
        title2={service?.hero.end}
        subtitle=""
        imageSrc={blogsBanner}
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
            {service.title}
          </h1>
        </header>

        <div className="space-y-6">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
            <Image
              src={service.coverImage}
              alt={service.slug}
              fill
              className="md:object-cover sm:object-contain"
              priority
            />
          </div>

          <div className="space-y-4 text-[16px] text-black">
            {service.descriptions?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <header className="mb-6">
            <h1 className="text-[26px] font-medium text-[#0D378D]">
              {service.title2}
            </h1>
          </header>

          <div className="space-y-4 text-[16px] text-black">
  {service.description2?.map((item, index) => {
    // Check if item is an object with a 'list' key
    if (item?.list && Array.isArray(item?.list)) {
      return (
        <div key={index}>
          {item?.list?.map((listItem, listIndex) => (
            <ul key={listIndex} className="list-disc ml-6 ">
              <li>{listItem}</li>
            </ul>
          ))}
        </div>
      );
    }

    // If it's a string, render it as a paragraph
    return <p key={index}>{item}</p>;
  })}
</div>


<div className="space-y-4 text-[16px] text-black">
  {service.description3?.map((item, index) => {
    // Check if the item contains a 'list' property and it's an array
    if (item?.list && Array.isArray(item.list)) {
      return (
        <div key={index}>
          {item.list.map((listItem, listIndex) => (
            <ul key={listIndex} className="space-y-2 ">
              <li>
                <h3 className="font-bold text-[#0D378D]  ">{listItem.listTitle}</h3>
                <p className="my-2 mx-5">{listItem.listDescription}</p>
              </li>
            </ul>
          ))}
        </div>
      );
    }

    // If it's just a string (paragraph), render it as a paragraph
    return <p key={index}>{item}</p>;
  })}
</div>



  {service?.listData?.map((item, index) => (

 
      
      <div className="">
        <h2 className="text-2xl font-bold text-[#0D378D]">{item.listTitle}</h2>
        <p className="text-black mt-2">{item.listDescription}</p>
      </div>

  ))}

        </div>
      </div>

      <HomeBanner />
      <ContactFormSection />
    </>
  );
}
