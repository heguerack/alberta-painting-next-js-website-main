'use client'

import ContactFormSection from '@/components/ContactFormSection'
import HomeBanner from '@/components/HomeBanner/home-banner'
import OurGallery from '@/components/OurGallery'
import OurGalleryMobile from '@/components/OurGalleryMobile'
import blogsBanner from '@/public/blogs-banner.png'
import { useEffect, useState } from 'react'
import StandardHero from '@/components/heros/StandardHero'

export default function gallery() {
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
    <>
      <StandardHero
        title='OUR '
        title2='GALLERY'
        subtitle='Quality Craftsmanship | Beautiful Finishes | Happy Clients'
        imageSrc={blogsBanner}
      />
      {/* <TrustBadges/> */}
      {isMobile ? <OurGalleryMobile /> : <OurGallery />}
      <HomeBanner />
      <ContactFormSection />
    </>
  )
}
