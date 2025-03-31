"use client";
import Image from 'next/image';
import gallery1 from "../public/gallery1.png";
import galleryImage3 from "../public/galleryImage-3.png";
import galleryImage1 from '@/public/gallery-Image.png'
import galleryImage2 from '@/public/gallery-Image-2.png'
import gallery3 from "../public/gallery3.png";
import galleryImage4 from "../public/galleryImage-4.png";
import gallery5 from "../public/gallery5.png";
import BgBackground2 from '@/public/above-gallery-bg-line.svg'

const OurGallery = () => {
  return (
    <div className="album">
        <div className="absolute top-[700px] z-[-2]">
        <Image src={BgBackground2} alt="bg-Image"/>
      </div>
      <div className="container max-w-7xl mx-auto px-4 lg:px-0 sm:px-6 py-12 responsive-container-block bg">
        
        {/* Image Container Block 1 (Standard Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="w-full col-6 col-md-4">
            <Image src={gallery1} className="w-full h-auto object-cover" alt="gallery" />
          </div>
          <div className="w-full col-6 col-md-4">
            <Image src={galleryImage1} className="w-full h-auto object-cover" alt="gallery" />
          </div>
          <div className="w-full col-12 col-md-4">
            <Image src={gallery3} className="w-full h-auto object-cover" alt="gallery" />
          </div>
        </div>

        {/* Image Container Block 2 (Custom Masonry Layout with Tailwind CSS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 lg:grid-cols-[320px_580px_1fr] md:grid-cols-[1fr_1fr_1fr]">
          
          {/* Left Image (Cell 1) */}
          <div className="col-span-1 w-[340px] max-sm:w-[100%] h-[400px] md:w-[310px]">
            <Image src={galleryImage2} className="h-full object-cover" alt="gallery" />
          </div>

          {/* Stack of Images in the middle (Cell 2 & 3) */}
          <div className="col-span-1 flex flex-col gap-4 h-[400px]">
            <div className="w-full h-[190px]">
              <Image src={gallery5} className="w-full h-full object-cover" alt="gallery" />
            </div>
            <div className="w-full h-[190px]">
              <Image src={gallery3} className="w-full h-full object-cover" alt="gallery" />
            </div>
          </div>

          {/* Right Image (Cell 4) */}
          <div className="col-span-1 w-full h-[400px]">
            <Image src={gallery1} className="w-full h-full object-cover" alt="gallery" />
          </div>
        </div>

        {/* Image Container Block 3 (Standard Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="w-full">
            <Image src={galleryImage4} className="w-full h-auto object-cover" alt="gallery" />
          </div>
          <div className="w-full">
            <Image src={gallery1} className="w-full h-auto object-cover" alt="gallery" />
          </div>
          <div className="w-full">
            <Image src={galleryImage3} className="w-full h-auto object-cover" alt="gallery" />
          </div>
        </div>
      </div>

    
      <div className="absolute z-[-2]">
        <Image src={BgBackground2} alt="bg-Image"/>
     
      </div>

      <div className='relative'>
      <div className="absolute top-[300px] z-[-2] ">
        <Image src={BgBackground2} alt="bg-Image"/>
      </div>
      </div>
    </div>
  );
};

export default OurGallery;