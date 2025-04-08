"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
import AboutUs from "@/public/AboutUs.png";
import BgBackground from '@/public/about-background-vector-line.svg'
import Link from "next/link";
import {aboutUsData} from '@/data/aboutUsData'

export default function PaintingCompany() {

  const pathname = usePathname();

  let showLearnMoreButton = pathname === '/';


  const isHomePage = pathname === "/"; // Home Page check
  const data = isHomePage ? aboutUsData.homePage : aboutUsData.aboutPage;

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
        {data.title}
      </h1>

      {/* Map over the description array and render each paragraph */}
      {data?.description?.map((text, index) => (
        <p key={index} className="text-black mb-6 text-[14px] lg:text-[16px]">
          {text}
        </p>
      ))}

          {/* <h1 className="lg:text-[36px] text-[26px] font-bold text-[#0D378D] mb-4">
            EXPERTS IN COLOURING
            <br />
            YOUR WORLD
          </h1> */}
          {/* <p className="text-black mb-6 text-[14px] lg:text-[16px]">
            {`  Anyone can paint walls, but only the finest painters understand that every single stroke of colour matters. At Alberta Colour Painting, that's exactly what we do. With years of expertise in creating stunning spaces, we are your trusted partners for professional interior and exterior painting services. Our team has the finest painters in Calgary, who ensure that every brushstroke makes your space look fresh, stylish, and downright amazing. `}
          </p>
          <p className="text-black mb-6 text-[14px] lg:text-[16px]">
            {`  Whether you need an expert paint job for your home or a full-service team for elevating your commercial space, we've got you covered. Our Calgary painting company is all about bringing your style to life and making a bold statement.  `}
          </p> */}
          {showLearnMoreButton && (

          <Link href="/about" className="cursor-pointer z-30">
          <button className="bg-blue-900  text-white rounded-full w-fit pl-4 pr-1.5 py-1 flex items-center gap-2 cursor-pointer">
            Learn More
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="31" height="30" rx="15" fill="white" />
              <path
                d="M22.5 9C22.5 8.44771 22.0523 8 21.5 8L12.5 8C11.9477 8 11.5 8.44771 11.5 9C11.5 9.55228 11.9477 10 12.5 10L20.5 10L20.5 18C20.5 18.5523 20.9477 19 21.5 19C22.0523 19 22.5 18.5523 22.5 18L22.5 9ZM10.2071 21.7071L22.2071 9.70711L20.7929 8.29289L8.79289 20.2929L10.2071 21.7071Z"
                fill="#0D378D"
              />
            </svg>
          </button>
          </Link>
          )}
      
      
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#E2E7F1] py-20 lg:px-4 px-10 relative">
      <div className="absolute top-[-490px]">
        <Image src={BgBackground} alt="bg-Image"/>
      </div>
        <div className="max-w-6xl mx-auto">
        {data.description2 && (
      <>
          <h2 className="lg:text-[36px] text-[25px] font-bold text-[#0D378D] text-center mb-12">
          {data.description2[0]}   
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Workmanship */}
            {data.description2[1].list.map((item, index) => (
            <div className="flex flex-col  text-start">
              <div className="text-[#0D378D] mb-4">
                <div className="flex text-start">
                  <svg
                    width="63"
                    height="61"
                    viewBox="0 0 63 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.8698 35.7308L53.3643 43.458L61.5 43.4431C62.3041 43.4431 62.9588 44.0953 62.9588 44.9019C62.9588 45.3873 62.7223 45.818 62.3564 46.0844L62.3589 46.0894L55.7692 50.8567L58.296 58.5864C58.5449 59.3556 58.1267 60.1796 57.3574 60.4286C56.8571 60.5904 56.3318 60.4684 55.9584 60.1522L49.4758 55.4248L42.904 60.2169C42.2543 60.6899 41.3432 60.548 40.8677 59.8983C40.5814 59.5074 40.5216 59.0195 40.6586 58.5913L40.6536 58.5888L43.1803 50.8591L36.5907 46.0918C35.936 45.6188 35.7916 44.7027 36.2646 44.0505C36.5733 43.6273 37.0687 43.4157 37.5541 43.4505L45.5827 43.4655L48.0797 35.7281C48.3261 34.9589 49.1476 34.5381 49.9144 34.7846C50.3824 34.9364 50.7234 35.2999 50.8604 35.738L50.8698 35.7308ZM38.9856 18.0083C38.6271 18.3668 38.2387 18.7003 37.8305 19.0016C39.1026 19.3949 40.3274 19.9102 41.4825 20.53C44.4922 22.1482 47.0563 24.4933 48.9331 27.3313C49.3787 28.0034 49.1945 28.9096 48.5223 29.3552C47.8502 29.8008 46.944 29.6166 46.4984 28.9444C44.8853 26.5098 42.6846 24.4958 40.0981 23.1067C37.6136 21.7698 34.7632 21.0105 31.731 21.0105C28.7014 21.0105 25.851 21.7698 23.3665 23.1067C20.7825 24.4958 18.5819 26.5097 16.9662 28.9444C16.5206 29.6166 15.6144 29.8008 14.9423 29.3552C14.2701 28.9096 14.0859 28.0034 14.5315 27.3313C16.411 24.4933 18.9727 22.1508 21.9821 20.53C23.1397 19.9077 24.3595 19.3949 25.6341 19.0016C25.2259 18.6979 24.84 18.3643 24.479 18.0083C22.6244 16.1511 21.4743 13.587 21.4743 10.7565C21.4743 7.92601 22.622 5.36192 24.479 3.50472C26.3362 1.65006 28.9003 0.5 31.7308 0.5C34.5614 0.5 37.1254 1.64764 38.9826 3.50472C40.8372 5.36186 41.9873 7.92595 41.9873 10.7565C41.9873 13.587 40.8397 16.1511 38.9826 18.0083H38.9856ZM15.3834 35.7308L17.8778 43.458L26.0135 43.4431C26.8176 43.4431 27.4723 44.0953 27.4723 44.9019C27.4723 45.3873 27.2358 45.818 26.8699 46.0844L26.8724 46.0894L20.2827 50.8567L22.8095 58.5864C23.0584 59.3556 22.6402 60.1796 21.8709 60.4286C21.3706 60.5904 20.8453 60.4684 20.4719 60.1522L13.9893 55.4248L7.41755 60.2169C6.76783 60.6899 5.85669 60.548 5.3812 59.8983C5.09491 59.5074 5.03517 59.0195 5.17208 58.5913L5.16711 58.5888L7.69385 50.8591L1.10422 46.0918C0.449531 45.6188 0.30512 44.7027 0.778108 44.0505C1.0868 43.6273 1.58218 43.4157 2.06761 43.4505L10.0937 43.4655L12.5931 35.7281C12.8396 34.9589 13.6611 34.5381 14.4278 34.7846C14.8958 34.9364 15.2369 35.2999 15.3738 35.738L15.3834 35.7308Z"
                      fill="#0D378D"
                    />
                  </svg>
                </div>
              </div>
              <h3 className=" lg:text-[24px]  text-[20px] font-semibold text-[#0D378D] mb-3 ">
              {item.listTitle}
              </h3>
              <p className=" lg:text-[16px] text-[14px] text-black">
              {item.listDescription} 
              </p>
            </div>
             ))}

        
          </div>
      </>
            )}
        </div>

    

        {/* Background decorative element */}
      </div>
    </div>
  );
}
