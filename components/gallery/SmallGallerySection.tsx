import { GalleryHomeImages } from '@/data/images'
import Image from 'next/image'

export default function SmallGallerySection() {
  return (
    <div className='overflow-x-auto flex snap-x snap-mandatory scroll-smooth lg:hidden'>
      {GalleryHomeImages.map((slide, i) => (
        <div
          key={i}
          className='flex-shrink-0 snap-start w-[100vw] relative h-[15rem]  sm:h-[20rem] md:h-[25rem]'>
          <Image
            src={slide.src}
            alt={slide.alt}
            className='rounded-lg object-cover'
            fill
            sizes='(max-width: 640px) 90vw, 30rem'
          />
        </div>
      ))}
    </div>
  )
}
