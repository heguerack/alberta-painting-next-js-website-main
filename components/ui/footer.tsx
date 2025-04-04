import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.svg";
import AboutArrow from "@/app/assets/AboutArrow";
import FooterCall from "@/app/assets/FooterCall";
import MailIcon from "@/app/assets/MailIcon";
import AddressIcon from "@/app/assets/AddressIcon";



export default function Footer() {
  return (
    <div className="bg-black text-white min-h-[400px] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between  mb-6">
          <div className=" md:text-left mb-6 md:mb-0">
            <h2 className="text-[44px] font-semibold uppercase tracking-wider">
              LET'S
            </h2>
            <h1 className="text-3xl md:text-[77px] font-bold">GET IN TOUCH</h1>
          </div>
          <Link href="/contact">
            <button className="flex items-center gap-2 border-2 border-white rounded-full pl-5 pr-1.5 py-2 text-sm md:text-base font-medium bg-[#0D378D] cursor-pointer transition-colors mt-4 md:mt-[80px]">
              Contact Us
             <AboutArrow/>
            </button>
          </Link>
        </div>

        <div className="border-t border-gray-700 my-4"></div>

 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0.5 ">
     
          <div className="space-y-6 my-5">

   

              <Link href="/">

              <Image
                src={logo}
                alt="Alberta Global Painting Logo"
                width={180}
                height={60}
                className="object-contain"
              />
              </Link>
            
            <p className="text-sm text-white leading-relaxed mt-10">
              {`The Alberta Global Painting logo represents the essence of quality
              work and exceptional service. Our brand features a clean, modern
              brushstroke aesthetic, showcasing the company's commitment to
              precision and detail.`}
            </p>
          </div>


          <div className="md:place-self-center">
            <h3 className="font-medium mb-4 text-[20px]">Quick Links</h3>
            <nav>
              <ul className="space-y-5">
                {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Blog"
                          ? "/blogs"
                          : `/${item.toLowerCase()}`
                      }
                      className="text-white hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>


          <div className="place-self-start">
            <h3 className="font-medium mb-4 text-[20px]">Contact</h3>
            <div className="space-y-5 ">
              <div className="flex items-center gap-2 text-white cursor-pointer">
              <Link href="tel:+587-466-6647">
                <FooterCall/>
                </Link>
                <Link href="tel:+1 (587) 998-9547"><span className="font-[500]">+1 587-966-6547</span></Link>
              </div>
              <div className="flex items-center gap-2 text-wrap break-all text-white  cursor-pointer ">
              <Link href="mailto:info@albertaglobalpainting.com">
                <MailIcon/>
                </Link>
                <Link href="mailto:info@albertacolourpainting.com"><span className="font-[500]">info@albertacolourpainting.com</span></Link>
              </div>
              <div className="flex items-start text-wrap break-all gap-2 text-white cursor-pointer">
             <div>
            <AddressIcon/>
             </div>

                <span className="font-[600]">
                  370 Brightmotive Green SE, Calgary, AB T2Z 0H1, Canada
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t  mt-8 pt-4 text-center text-xs text-gray-700">
        <p className="text-white">© 2025 Alberta Global Painting. Powered by <Link href="https://cyberace.ca/" className="text-[#0D378D] text-[14px]">Cyber Ace.</Link></p>
        </div>
      </div>
    </div>
  );
}
