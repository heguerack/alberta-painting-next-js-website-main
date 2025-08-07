import Image from "next/image";
import service3 from "@/public/service3.webp";
import BgLines from "../ui/BgLines";

export default function EcofriendlySection() {
  return (
    <>
      <div className="relative">
        <BgLines />
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center relative mt-10 my-3.5">
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
          <p className=" text-black">
            At Alberta Colour, we're committed to making a positive impact on
            the environment. That's why we use zero to low-VOC paints, creating
            healthier spaces for our clients, painters, and the planet!
          </p>
          <p className=" text-black">
            Got leftover paint? We've got you covered! We'll collect any unused
            paint and take it to our shop, ensuring it gets properly recycled
            instead of wasted. Plus, all materials from our projects, like
            garbage, cardboard, and plastics,{" "}
            <a
              href="https://www.albertacolourpainting.com/"
              className="text-blue"
            >
              Our painting company in Calgary
            </a>
            focuses on making a clean and green impact on the environment while
            ensuring perfection in every project that we undertake.
          </p>

          <div className="pt-4">
            <p className="lg:text-[20px] text-[18px] text-black">
              By choosing Alberta Colour Painting, you making an eco-friendly
              choice that benefits your home and the planet.
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
    </>
  );
}
