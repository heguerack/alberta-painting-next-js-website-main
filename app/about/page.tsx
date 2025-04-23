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
