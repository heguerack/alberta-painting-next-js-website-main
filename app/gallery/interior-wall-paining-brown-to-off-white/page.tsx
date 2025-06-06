import { interiorWallPainingBrownToOffWhite } from '@/data/images'
import Image from 'next/image'

import ProjectSliderWrapper from '../ProjectSliderWrapper'
import BackIconTop from '../BackIconTop'
import BackToGalleryButton from '../BackToGalleryButton'

export default function interiorWallPainingBrownToOffWhitePage() {
  console.log(interiorWallPainingBrownToOffWhite)

  return (
    <section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Tiny top back icon */}
      <BackIconTop />

      {/* Title */}
      <h1 className='text-4xl font-bold my-6 text-[#0D378D]'>
        Interior Wall Painting project in Mckenzie Towne
      </h1>

      {/* Paragraph */}
      <p className='text-lg text-gray-600 mb-10'>
        We revitalized this Honme by painting dark brown walls with a modern
        light grey / off-white colour.
      </p>

      {/* Slider */}
      <ProjectSliderWrapper>
        {interiorWallPainingBrownToOffWhite.map((img, index) => (
          <div key={index} className='w-full h-full relative'>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className='object-cover'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            />
          </div>
        ))}
      </ProjectSliderWrapper>

      {/* Full back button under the slider */}
      <BackToGalleryButton />
    </section>
  )
}
// export default function cabinetPaintingProjectMappleToOffwhitePage() {
//   return (
//     <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#0D378D]'>
//       <h1 className='text-4xl font-bold mb-6'>
//         Cabinet Painting Project - Mapple to offwhite
//       </h1>

//       <p className='text-lg text-gray-300 mb-10'>
//         We revitalized this kitchen by paintingmapple cabinets with a modern
//         white and teal color combination.
//       </p>

//       <ProjectSliderWrapper>
//         {imagesForCabinetPainting.map((img, index) => (
//           <div key={index} className='w-full h-full relative'>
//             <Image
//               src={img.src}
//               alt={img.alt}
//               fill
//               className='object-cover'
//               sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
//             />
//           </div>
//         ))}
//       </ProjectSliderWrapper>
//     </section>
//   )
// }
