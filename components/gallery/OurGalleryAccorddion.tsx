'use client'

import offer1 from '@/public/galleryNew-1.png'
import offer2 from '@/public/galleryHome-4.png'
import offer3 from '@/public/galleryNew-2.png'
import offer4 from '@/public/galleryNew-3.png'
import offer5 from '@/public/galleryHome-3.png'

import Image from 'next/image'
import './style.css'
// import ServiceSection from '../service-section'
// import SmallGallerySection from './SmallGallerySection'
import { useEffect, useState } from 'react'
import ServiceSection from '../service-section'
import SmallGallerySection from './SmallGallerySection'
import OurGalleryContent from './OurGalleryContent'

const OurGalleryAccordion: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      window.addEventListener('resize', handleResize)
      handleResize() // Run once on mount to check window size

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  return (
    <div className='gallery-carousel'>
      <div className='lg:mt-20 lg:mb-16 my-10 '>
        <ServiceSection
          title='Our Gallery'
          description='See the Magic of Transformation  <br />  with Our Painting Work'
          buttonText='View All'
        />
        <OurGalleryContent />
      </div>

      {isMobile ? (
        <div>
          <SmallGallerySection />
        </div>
      ) : (
        <div className='container-fluid lg:mt-20 mt-10 mx-8'>
          <div className='gallery-slide-start flex overflow-x-auto space-x-4'>
            <div className='gallery-slide'>
              <Image src={offer1} className='img-fluid' alt='Gallery image 1' />
            </div>
            <div className='gallery-slide'>
              <Image src={offer2} className='img-fluid' alt='Gallery image 2' />
            </div>
            <div className='gallery-slide'>
              <Image src={offer3} className='img-fluid' alt='Gallery image 3' />
            </div>
            <div className='gallery-slide'>
              <Image src={offer4} className='img-fluid' alt='Gallery image 4' />
            </div>
            <div className='gallery-slide'>
              <Image src={offer5} className='img-fluid' alt='Gallery image 5' />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OurGalleryAccordion
