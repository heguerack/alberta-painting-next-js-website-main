import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { services } from '@/data/serviceData'
import Image from 'next/image'
import ServiceSection from './service-section'
import ButtonBlueWithBorder from './ButtonBlueWithBorder'

export default function OurServices() {
  return (
    <section className=' pt-12 '>
      <ServiceSection
        title='Our Services'
        description='Transform Your Space  <br />with Our Expert Painting Services'
        buttonText='Explore Our Services'
        href='/services'
      />
      {/* <div className='pt-12 px-6 w-full  mx-auto   flex items-center justify-center  '> */}
      <Carousel
        opts={{
          align: 'center',
        }}
        orientation='horizontal'
        className='w-[70%] lg:w-[40%] m-auto  flex items-center justify-center '>
        <CarouselContent className=''>
          {services.map((service, i) => (
            <CarouselItem key={i} className='pl-4   my-16 '>
              <Card className='bg-[#0D378D]   md:px-8 '>
                <CardContent className='flex flex-col grow p-2'>
                  <div className='flex flex-col space-y-4 grow'>
                    <div className='relative w-full h-[8rem] sm:h-[12rem] md:h-[16rem] overflow-hidden'>
                      <Image
                        src={service.imageSrc}
                        alt='Service-specific image'
                        fill
                        className='object-cover absolute'
                      />
                    </div>
                    <div className='space-y-4 w-full mt-auto'>
                      <h2 className='lg:text-[20px] font-semibold'>
                        {service.title}
                      </h2>
                      <p className='text-gray-400 lg:text-[16px] text-[14px]'>
                        {service.description}
                      </p>
                      <ButtonBlueWithBorder
                        linkText='Learn More'
                        href={`/services/${service.slug}`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='cursor-pointer bg-[#0D378D] text-white w-8 h-8' />
        <CarouselNext className='cursor-pointer  bg-[#0D378D] text-white w-8 h-8' />
      </Carousel>
      {/* </div> */}
    </section>
  )
}

// import { Card, CardContent } from '@/components/ui/card'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel'

// import ServiceSection from './service-section'
// import Link from 'next/link'
// import { services } from '@/data/serviceData'
// import Image from 'next/image'

// export default function OurServices() {
//   return (
//     <div className='flex justify-center'>
//       <Carousel className='w-full max-w-xl sm:max-w-sm'>
//         <CarouselContent>
//           {services.map((service, i) => (
//             <CarouselItem key={i}>
//               <Card className='bg-[#24262b]'>
//                 <CardContent className='flex aspect-square items-center justify-center p-6'>
//                   {/* <span>{service.title}</span> */}
//                   <div className='flex flex-col space-y-4'>
//                     <div className='relative w-full h-64 md:h-80 overflow-hidden'>
//                       <Image
//                         src={service.imageSrc}
//                         alt='Service-specific image'
//                         fill
//                         className='object-cover'
//                         sizes='(max-width: 200px) 100vw, 10vw'
//                       />
//                     </div>
//                     <div className='space-y-4 w-full'>
//                       <h2 className='lg:text-[20px] font-semibold'>
//                         {service.title}
//                       </h2>
//                       <p className='text-gray-400 lg:text-[16px] text-[14px]'>
//                         {service.description}
//                       </p>
//                       <Link href={'/services/' + service?.slug}>
//                         {/* Corrected to activeService.href */}
//                         <button className='flex items-center gap-2 border-2 border-white rounded-full pl-5 pr-1.5 py-1 text-sm md:text-base font-medium bg-[#0D378D] cursor-pointer transition-colors'>
//                           Learn More
//                           <svg
//                             width='32'
//                             height='30'
//                             viewBox='0 0 32 30'
//                             fill='none'
//                             xmlns='http://www.w3.org/2000/svg'>
//                             <rect
//                               x='0.5'
//                               width='31'
//                               height='30'
//                               rx='15'
//                               fill='white'
//                             />
//                             <path
//                               d='M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z'
//                               fill='#0D378D'
//                             />
//                           </svg>
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className='bg-black' />
//         <CarouselNext className='bg-black' />
//       </Carousel>
//     </div>
//   )
// }
