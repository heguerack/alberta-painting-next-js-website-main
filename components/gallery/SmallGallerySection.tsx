import { GalleryHomeImages } from '@/data/images'
import Image from 'next/image'

interface GallerySlidesProps {
  scrollRef: React.RefObject<HTMLDivElement | null>
  handleScroll: () => void
}

export default function SmallGallerySection({
  scrollRef,
  handleScroll,
}: GallerySlidesProps) {
  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className='overflow-x-auto flex snap-x snap-mandatory scroll-smooth lg:hidden cursor-grab active:cursor-grabbing'>
      {GalleryHomeImages.map((slide, i) => (
        <div
          key={i}
          className='flex-shrink-0 snap-start w-[100vw] relative h-[15rem] sm:h-[20rem] md:h-[25rem] transition-transform duration-300 ease-in-out'>
          <Image
            src={slide.src}
            alt={slide.alt}
            className='object-cover'
            fill
            sizes='(max-width: 640px) 100vw, 30rem'
          />
        </div>
      ))}
    </div>
  )
}
