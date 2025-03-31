// "use client"
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import offer1 from "@/public/galleryNew-1.png";
// import offer2 from '@/public/galleryHome-4.png'
// import offer3 from '@/public/galleryNew-2.png'
// import offer4 from '@/public/galleryNew-3.png'
// import offer5 from '@/public/galleryHome-3.png'
// import Image from 'next/image';

// import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

// export default function SmallGallerySection() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         centeredSlides={false}
//         slidesPerGroupSkip={1}
//         grabCursor={true}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           769: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//           },
//         }}
//         scrollbar={true}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Keyboard, Scrollbar, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//          <Image src={offer1} alt=''/>
//         </SwiperSlide>
//         <SwiperSlide>
//         <Image src={offer2} alt=''/>
//         </SwiperSlide>
//         <SwiperSlide>
//         <Image src={offer3} alt=''/>
//         </SwiperSlide>
//         <SwiperSlide>
//         <Image src={offer4} alt=''/>
//         </SwiperSlide>
//         <SwiperSlide>
//         <Image src={offer5} alt=''/>
//         </SwiperSlide>
       
//       </Swiper>
//     </>
//   );
// }




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./SmallGallerySection.css";
import offer1 from "@/public/galleryNew-1.png";
import offer2 from '@/public/galleryHome-4.png'
import offer3 from '@/public/galleryNew-2.png'
import offer4 from '@/public/galleryNew-3.png'
import offer5 from '@/public/galleryHome-3.png'
import Image from 'next/image';
import { Autoplay} from 'swiper/modules';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function SmallGallerySection() {
  return (
    <>
      <Swiper
      
        slidesPerView={1}
        centeredSlides={true}
        // slidesPerGroupSkip={1}
        // grabCursor={true}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        //   modules={[Autoplay ]}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,  // Adjust this value if you want multiple slides per view on larger screens
            // slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
      
        modules={[ Scrollbar,]}
        className="swiper1"
        style={{height:"250px"}}
      >
        <div className='swiper-wrapper1' >
        <SwiperSlide className='swiper-slide1 swiper-backface-hidden' style={{height:"230px",padding:"0px 20px"}} >
          <Image src={offer1} alt="Image 1"  />
        </SwiperSlide >
        <SwiperSlide className='swiper-slide1 swiper-backface-hidden' style={{height:"230px",padding:"0px 20px"}}>
        <Image src={offer2} alt="Image 1"  />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide1 swiper-backface-hidden' style={{height:"230px",padding:"0px 20px"}}>
        <Image src={offer3} alt="Image 1"  />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide1 swiper-backface-hidden' style={{height:"230px",padding:"0px 20px"}}>
        <Image src={offer4} alt="Image 1"  />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide1 swiper-backface-hidden' style={{height:"230px",padding:"0px 20px"}}>
        <Image src={offer5} alt="Image 1"  />
        </SwiperSlide>
        </div>
        
      </Swiper>
    </>
  );
}
