import Image from 'next/image'
import { CalgaryPainting } from '@/components/calgary-painting'
import ContactFormSection from '../../components/ContactFormSection'
import HomeBanner from '@/components/HomeBanner/home-banner'
import BlogGrid from '@/components/blog-grid'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog-data'
import blogsBanner from '@/public/blogs-banner.png'
import BgBackground from '@/public/about-background-vector-line.svg'
import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import StandardHero from '@/components/heros/StandardHero'
import OurGalleryAccordion from '@/components/gallery/OurGalleryAccorddion'
import AboutusAbout from '@/components/AboutUs/AboutusAbout'
import EcofriendlySection from '@/components/AboutUs/EcofriendlySection'
import SkillPainters from '@/components/AboutUs/SkillPaintersSection'

import FinestPainters from '@/components/AboutUs/FinestPaintersSection'
import CommitmentQualitySection from '@/components/AboutUs/CommitmentQualitySection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cabinet Painting in Calgary | Bathroom & Kitchen Cabinet Painters',
  description:
    'Our team of experienced painters is dedicated to delivering top-quality results for your home or business. From interior and exterior painting to wallpaper removal and more, we have the skills and expertise to handle all of your painting needs. Contact us today to learn more about our services and to schedule a consultation.',
  viewport: 'width=device-width, initial-scale=1.0',

  alternates: {
    canonical: 'https://www.albertacolourpainting.com/about',
  },
  openGraph: {
    title: 'Need Calgary Painters?',
    description:
      'Book your free estimate today with Alberta Colour Painting, the top-rated painting company in Calgary.',
    images: [
      {
        url: 'https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp',
      },
    ],
    url: 'https://www.albertacolourpainting.com/about',
    siteName: 'Alberta Colour Painting',
    type: 'website',
  },
}

export default function page() {
  const posts = getBlogPosts()
  return (
    <main>
      <StandardHero
        title='About  '
        title2='Alberta Colour Painting'
        // subtitle='Your Trusted, Skilled, and Eco-Friendly Painting Experts'
        subtitle='Bringing Colour to Calgary with Flawless Paint Jobs! '
        imageSrc={blogsBanner}
      />
      <AboutusAbout />
      <div className='relative'>
        <div className='absolute'>
          <Image src={BgBackground} alt='bg-Image' />
        </div>
      </div>
      <div className='container mx-auto max-w-7xl px-4'>
        <SkillPainters />
        <FinestPainters />
      </div>
      <div className='max-sm:my-10'>
        <HomeBanner />
      </div>
      <div className='container mx-auto max-w-7xl px-4'>
        <CommitmentQualitySection />
        <EcofriendlySection />
      </div>
      <OurGalleryAccordion />
      <CalgaryPainting />
      <ContactFormSection />
      <section className='container mx-auto px-4 py-8 '>
        <div className='text-center  mb-10'>
          <h4 className=' text-[22px] text-black font-semibold ont-medium'>
            Our Blog
          </h4>
          <h2 className='text-[#0D378D] lg:text-[36px]  text-[26px] font-medium'>
            Expert Advice, Trends & DIY Tips
          </h2>
        </div>
        <BlogGrid posts={posts?.slice(0, 3)} />

        <div className='flex justify-center my-7'>
          <Button className='bg-[#0D378D] px-4 py-5 w-30 rounded-3xl cursor-pointer'>
            <Link href='/blogs'>View All</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
