// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, PhoneCall } from "lucide-react";
// import { Button } from "./ui/button";
// import Image from "next/image";

// export default function MobileMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="lg:hidden ">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="text-gray-800"
//         aria-label="Open menu"
//       >
//         <svg
//           width="61"
//           height="48"
//           viewBox="0 0 61 48"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect x="1" y="1" width="59" height="46" rx="23" fill="#0D378D" />
//           <rect
//             x="1"
//             y="1"
//             width="59"
//             height="46"
//             rx="23"
//             stroke="#CADBFF"
//             stroke-width="2"
//           />
//           <path
//             d="M19.5 17H41.5"
//             stroke="white"
//             stroke-width="3"
//             stroke-linecap="round"
//           />
//           <path
//             d="M19.5 24H41.5"
//             stroke="white"
//             stroke-width="3"
//             stroke-linecap="round"
//           />
//           <path
//             d="M30.5 31L41.5 31"
//             stroke="white"
//             stroke-width="3"
//             stroke-linecap="round"
//           />
//         </svg>
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 h-[600px] bg-white z-50 flex flex-col transition-all duration-300 ease-in-out transform translate-x-0  "
//           style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
//         >
//            <Link href="/">
//               <Image
//                 src="/logo.svg"
//                 alt="Alberta Color Painting"
//                 width={150}
//                 height={40}
//                 className="h-auto"
//               />
//             </Link>
//           <div className="flex justify-end pr-5">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-gray-800"
//               aria-label="Close menu"
//             >
//               <X className="h-6 w-6" />
//             </button>
//           </div>

//           <nav className="flex flex-col items-center space-y-6 ">
//             <Link
//               href="/"
//               className="text-gray-800 text-xl font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="text-gray-800 text-xl font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="/services"
//               className="text-gray-800 text-xl font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               href="/gallery"
//               className="text-gray-800 text-xl font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Gallery
//             </Link>
//             <Link
//               href="/blogs"
//               className="text-gray-800 text-xl font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Blog
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-800 text-xl font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//           </nav>

//           <div className="mt-auto p-6 flex flex-col space-y-4 ">
//             {/* <div className="flex items-center  gap-2 justify-center">
        
//                 <svg
//                   width="59"
//                   height="58"
//                   viewBox="0 0 59 58"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g filter="url(#filter0_d_201_2420)">
//                     <rect
//                       x="7"
//                       y="7"
//                       width="45"
//                       height="44"
//                       rx="22"
//                       fill="#0D378D"
//                       fill-opacity="0.24"
//                       shape-rendering="crispEdges"
//                     />
//                     <rect
//                       x="7.5"
//                       y="7.5"
//                       width="44"
//                       height="43"
//                       rx="21.5"
//                       stroke="white"
//                       shape-rendering="crispEdges"
//                     />
//                     <path
//                       d="M30.7177 20.2308C30.7177 19.8272 31.0448 19.5 31.4484 19.5C33.4512 19.5 35.3718 20.2956 36.788 21.7117C38.2041 23.1278 38.9997 25.0485 38.9997 27.0512C38.9997 27.4548 38.6725 27.782 38.2689 27.782C37.8653 27.782 37.5382 27.4548 37.5382 27.0512C37.5382 25.4361 36.8966 23.8872 35.7545 22.7452C34.6125 21.6031 33.0635 20.9615 31.4484 20.9615C31.0448 20.9615 30.7177 20.6344 30.7177 20.2308Z"
//                       fill="#0D378D"
//                     />
//                     <path
//                       d="M30.7177 24.1282C30.7177 23.7246 31.0448 23.3974 31.4484 23.3974C32.4175 23.3974 33.3469 23.7824 34.0321 24.4676C34.7173 25.1528 35.1023 26.0822 35.1023 27.0512C35.1023 27.4548 34.7751 27.782 34.3715 27.782C33.9679 27.782 33.6407 27.4548 33.6407 27.0512C33.6407 26.4698 33.4098 25.9122 32.9986 25.501C32.5875 25.0899 32.0299 24.8589 31.4484 24.8589C31.0448 24.8589 30.7177 24.5318 30.7177 24.1282Z"
//                       fill="#0D378D"
//                     />
//                     <path
//                       d="M26.5809 20.6364C26.0228 19.8472 25.252 19.4917 24.4325 19.5001C23.6557 19.5082 22.899 19.8398 22.268 20.2822C21.6297 20.7296 21.06 21.3313 20.6528 21.9756C20.2531 22.6081 19.9644 23.3554 20.0036 24.085C20.192 27.5953 22.1664 31.3467 24.9406 34.1226C27.7125 36.8963 31.4147 38.8236 35.1524 38.4548C35.8842 38.3826 36.5771 38.0102 37.1438 37.5343C37.7171 37.0529 38.2147 36.4219 38.5494 35.7417C38.8814 35.0671 39.0789 34.2898 38.9699 33.5326C38.8562 32.7427 38.4155 32.0378 37.6031 31.5704C37.43 31.4708 37.2748 31.3741 37.1047 31.268C36.9588 31.1771 36.8019 31.0793 36.6131 30.9669C36.2479 30.7494 35.8326 30.5219 35.3967 30.3637C34.9607 30.2054 34.463 30.1009 33.9439 30.1723C33.4078 30.246 32.9094 30.4992 32.4778 30.9534C32.1451 31.3036 31.6561 31.4137 30.9684 31.2145C30.2688 31.0118 29.4815 30.5087 28.7971 29.8294C28.1134 29.1508 27.5953 28.3586 27.3748 27.642C27.1564 26.9326 27.2524 26.411 27.5938 26.0517C28.0545 25.5668 28.3004 25.0264 28.3522 24.4557C28.4027 23.9007 28.2643 23.3784 28.0662 22.9221C27.7706 22.241 27.2667 21.5638 26.8738 21.0358C26.7655 20.8903 26.6657 20.7561 26.5809 20.6364Z"
//                       fill="#0D378D"
//                     />
//                   </g>
//                   <defs>
//                     <filter
//                       id="filter0_d_201_2420"
//                       x="0.9"
//                       y="0.9"
//                       width="57.2"
//                       height="56.2"
//                       filterUnits="userSpaceOnUse"
//                       color-interpolation-filters="sRGB"
//                     >
//                       <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                       <feColorMatrix
//                         in="SourceAlpha"
//                         type="matrix"
//                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                         result="hardAlpha"
//                       />
//                       <feOffset />
//                       <feGaussianBlur stdDeviation="3.05" />
//                       <feComposite in2="hardAlpha" operator="out" />
//                       <feColorMatrix
//                         type="matrix"
//                         values="0 0 0 0 0.0509804 0 0 0 0 0.215686 0 0 0 0 0.552941 0 0 0 0.48 0"
//                       />
//                       <feBlend
//                         mode="normal"
//                         in2="BackgroundImageFix"
//                         result="effect1_dropShadow_201_2420"
//                       />
//                       <feBlend
//                         mode="normal"
//                         in="SourceGraphic"
//                         in2="effect1_dropShadow_201_2420"
//                         result="shape"
//                       />
//                     </filter>
//                   </defs>
//                 </svg>
         
//               <span className="text-gray-800 font-medium">587-466-6647</span>
//             </div> */}
//             <Link
//               href="/contact"
//               className="bg-[#0D378D]  text-white border-4 border-[#CADBFF] text-center px-8 py-1 rounded-4xl font-medium hover:bg-[#0D378D] transition-colors cursor-pointer"
//             >
//               <Button className="cursor-pointer">Book Now</Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Create a ref for the mobile menu
  const menuRef = useRef<HTMLDivElement | null>(null);
  


  // Close the menu when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-800"
        aria-label="Open menu"
      >
        <svg
          width="61"
          height="48"
          viewBox="0 0 61 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="59" height="46" rx="23" fill="#0D378D" />
          <rect
            x="1"
            y="1"
            width="59"
            height="46"
            rx="23"
            stroke="#CADBFF"
            strokeWidth="2"
          />
          <path
            d="M19.5 17H41.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M19.5 24H41.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30.5 31L41.5 31"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef} // Attach the ref to the menu container
          className="fixed inset-0 h-[600px] sm:h-[600px] bg-white z-50 flex flex-col transition-all duration-300 ease-in-out transform translate-x-0"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
       
          <div className="flex justify-between m-[28px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Alberta Color Painting"
              width={150}
              height={40}
              className="h-auto"
            />
          </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6">
            <Link
              href="/"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/blogs"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/reviews "
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Reviews 
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-auto p-6 flex flex-col space-y-4">
            <Link
              href="/contact"
              className="bg-[#0D378D] text-white border-4 border-[#CADBFF] text-center px-8 py-1 rounded-4xl font-medium hover:bg-[#0D378D] transition-colors cursor-pointer"
            >
              <Button className="cursor-pointer">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
