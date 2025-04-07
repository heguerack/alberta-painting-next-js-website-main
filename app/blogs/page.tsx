import BlogGrid from '@/components/blog-grid'
import { getBlogPosts } from '@/lib/blog-data'
import blogsBanner from '@/public/blogs-banner.png'

// import BgBackground2 from '@/public/above-gallery-bg-line.svg'  // you are just providing the local path, Next image does not work well with imports! we are not suposed to do this :) instead as follows or right in the Image
const BgBackground2 = '/above-gallery-bg-line.svg'

import ContactFormSection from '@/components/ContactFormSection'
import HomeBanner from '@/components/HomeBanner/home-banner'
import Image from 'next/image'
import StandardHero from '@/components/heros/StandardHero'

export default function blogs() {
  const posts = getBlogPosts()

  return (
    <>
      <StandardHero
        title='Our '
        title2='BLOG'
        subtitle='Painting Tips, Trends & Expert Advice'
        imageSrc={blogsBanner}
      />
      <div className='container mx-auto px-4 py-8 lg:mt-20 mt-10'>
        <BlogGrid posts={posts} />
        <div className=' lg:mt-30 mt-10'>
          <HomeBanner />
        </div>

        <ContactFormSection />
      </div>

      {/* /////////////////////// */}
      {/* /////////////////////// */}
      {/* /////////////////////// */}
      {/* What is this code doign? I coudnt figure it out :( */}
      {/* <div className='relative'>
        <div className='absolute top-[-2800px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={30} height={30} />
        </div>
      </div>
      <div className='relative'>
        <div className='absolute top-[-2000px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={3} height={3} />
        </div>
      </div>

      <div className='relative'>
        <div className='absolute top-[-1600px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={3} height={3} />
        </div>
      </div>

      <div className='relative'>
        <div className='absolute top-[-800px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' width={3} height={3} />
        </div>
      </div> */}
    </>
  )
}
