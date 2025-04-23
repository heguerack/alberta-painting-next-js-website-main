import ContactFormSection from '@/components/ContactFormSection'
import ServiceHero from '@/components/heros/ServiceHero'
import HomeBanner from '@/components/HomeBanner/home-banner'
import Image from 'next/image'
import blogsBanner from '@/public/blogs-banner.png'
import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import AboutUs from '@/public/AboutUs.png'
import DotFranks from '@/components/ui/DotFranks'

export default function interiorPaintingCalgary() {
  return (
    <>
      <ServiceHero
        title='Expert '
        title2='Interior Painting Services in Calgary'
        title3='for Homes & Businesses'
        imageSrc={blogsBanner}
      />
      {/* Background Image Section */}
      <div className='relative'>
        <div className='absolute top-[-100px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-8 mt-10'>
        <header className='mb-6'>
          <h1 className='text-[26px] font-medium text-[#0D378D]'>
            Interior Painting Calgary
          </h1>
        </header>

        <div className='space-y-6'>
          <div className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden'>
            <Image
              src='/interior/PXL_20220622_192016887.jpg'
              alt=''
              fill
              className='md:object-cover sm:object-contain'
              priority
            />
          </div>

          <div className='space-y-4 text-[16px] text-black'>
            <p>
              At our painting company in Calgary, interior painting is more than
              just changing the shade or color of a space; it's about
              transforming the entire atmosphere and creating a feeling of
              comfort and style. A fresh coat of paint can breathe new life into
              a room, making it feel more inviting, spacious, or even more
              sophisticated, depending on the colors and finishes chosen.
            </p>
            <p>
              We understand that choosing the right colors and finishes can be a
              bit of a task, which is why we’re here to make it easy for you.
              Whether you want to refresh your cozy living room that's been the
              same for a long time or give your bedroom a fresh, welcoming feel,
              our interior painting services in Calgary have got you covered.
              Our expert painters help bring your vision to life with
              top-quality paints and professional techniques that ensure a
              flawless finish. With a strong commitment to quality, we use only
              the best materials, giving you long-lasting, durable results that
              stand the test of time. So, whether it's your house or your
              workplace, we make sure every brushstroke adds beauty, warmth, and
              personality to your space just the way you want it.
            </p>
            <p>
              From preparation to cleanup, we handle every step of the painting
              process with efficiency. We take the time to properly prepare
              surfaces, ensuring a smooth and even application, leaving your
              space spotless once the job is done. Our goal is not just to meet
              your expectations but to exceed them, providing you with an
              interior that feels perfectly tailored to your style.
            </p>
          </div>
        </div>
      </div>
      <HomeBanner />
      <div className='font-normal flex flex-col  lg:flex-row w-[90%] gap-16 mx-auto py-16 lg:items-center'>
        {/* Left side with image */}
        <div className='relative w-full  h-[50vw] lg:w-2/5'>
          <Image
            src={AboutUs}
            alt='Elegant interior with staircase'
            fill
            className='max-sm:pr-[20px] object-cover lg:absolute  '
          />
        </div>

        {/* Right side with text */}
        <div className='w-full lg:w-3/5 '>
          <h3 className='lg:text-[32px] text-[24px] font-bold text-[#0D378D] mb-4'>
            Beyond Just Paint,
            <br />
            We Elevate Your Space
          </h3>

          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            At our painting company in Calgary, interior painting is more than
            just changing the shade or color of a space; it's about transforming
            the entire atmosphere and creating a feeling of comfort and style. A
            fresh coat of paint can breathe new life into a room, making it feel
            more inviting, spacious, or even more sophisticated, depending on
            the colors and finishes chosen.
          </p>
          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            We understand that choosing the right colors and finishes can be a
            bit of a task, which is why we’re here to make it easy for you.
            Whether you want to refresh your cozy living room that's been the
            same for a long time or give your bedroom a fresh, welcoming feel,
            our interior painting services in Calgary have got you covered. Our
            expert painters help bring your vision to life with top-quality
            paints and professional techniques that ensure a flawless finish.
            With a strong commitment to quality, we use only the best materials,
            giving you long-lasting, durable results that stand the test of
            time. So, whether it's your house or your workplace, we make sure
            every brushstroke adds beauty, warmth, and personality to your space
            just the way you want it.
          </p>
          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            From preparation to cleanup, we handle every step of the painting
            process with efficiency. We take the time to properly prepare
            surfaces, ensuring a smooth and even application, leaving your space
            spotless once the job is done. Our goal is not just to meet your
            expectations but to exceed them, providing you with an interior that
            feels perfectly tailored to your style.
          </p>
        </div>
      </div>
      <ContactFormSection />
    </>
  )
}
