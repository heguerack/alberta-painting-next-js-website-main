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
        title=''
        title2='Exterior House Painting Services'
        title3='Built for Calgary Weather'
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
            Exterior Painting Calgary
          </h1>
        </header>

        <div className='space-y-6 '>
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
              Updating your home's exterior is more than just a cosmetic choice
              in Calgary's extreme climate. Frequent temperature swings and
              harsh weather conditions can quickly wear down exterior paint,
              making regular maintenance necessary.
            </p>
            <p>
              The summers are extremely harsh with a high UV index that results
              in the paint fading and chalking out, especially for darker
              shades. Winters in the city are no less punishing; the bone-biting
              cold and temperature drop cause the materials underneath the paint
              to expand and contract. This constant movement can lead to
              cracking, peeling, or blistering over time. These are only a few
              challenges posed by the city’s extreme weather, which is why
              choosing the right exterior painting services for your beloved
              home is very important.
            </p>
            <p>
              At Alberta Colour Painting, we're here to give your home that
              fresh and transformed look so that it looks stylish,
              well-maintained, and stands the test of time. We use premium and
              certified paints to ensure your home's exterior meets the city’s
              harsh climatic conditions. Our exterior house painting in Calgary
              covers a wide range of services from refreshing faded walls,
              protecting wooden surfaces, and updating your home's overall look.
              Our Calgary exterior painters take the time to thoroughly clean
              and prepare surfaces, repair any damage, and apply primer as
              needed. This attention to detail ensures that the paint adheres
              properly and provides a durable and attractive finish.
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

          <p className='text-black mb-6 text-[14px] lg:text-[16px] text-justify'>
            When it comes to exterior painting, there are a few clear indicators
            that it's time for a refresh. Ignoring these early warnings can lead
            to costly repairs and even long-term damage
          </p>
          <p className='text-black mb-6 text-[14px] lg:text-[16px] text-justify'>
            Here are a few key signs that your home might be due for exterior
            painting services:
          </p>
          <p className='text-black mb-3 text-[14px] lg:text-[16px] text-justify'>
            From preparation to cleanup, we handle every step of the painting
            process with efficiency. We take the time to properly prepare
            surfaces, ensuring a smooth and even application, leaving your space
            spotless once the job is done. Our goal is not just to meet your
            expectations but to exceed them, providing you with an interior that
            feels perfectly tailored to your style.
          </p>
          <div className='flex gap-4 '>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                Faded or Discolored Paint
              </span>
              - One of the most common signs that your home requires an exterior
              paint job is when you notice the paint looks dull or faded. It's a
              sign that the paint's protective properties are breaking down, and
              it needs immediate attention. When you notice this happening,
              delaying the job could only add more expenses to your wallet,
              causing more damage.
            </p>
          </div>
          <br />
          <br />
          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            Our exterior painters in Calgary know just the right techniques and
            methods to help address this issue, using the finest products and
            repairing any damage in a timely manner.
          </p>
          <div className='flex gap-4 w-[80%] text-justify'>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal '>
              <span className='font-bold text-[#0D378D] mr-1'>
                Peeling, Cracking, or Bubbling
              </span>
              - This is one of the most obvious red flags. Extreme temperature
              fluctuations can cause the paint to lose its adhesion, leading to
              cracks or even bubbles forming under the surface. If left
              untreated, moisture can seep in and cause further damage to the
              material beneath. It’s important to fix this problem quickly. If
              you wait too long, the damage can get worse and become harder and
              more expensive to repair.
            </p>
          </div>
          <br />
          <br />
          <p className='text-black mb-3 text-[14px] lg:text-[16px] text-justify'>
            Our exterior painters in Calgary know how to handle these problems
            the right way. We start by checking for any damage, then fix it
            before applying high-quality paint that can beat these conditions
            effectively.
          </p>
          <div className='flex gap-4 w-[80%] text-justify'>
            <DotFranks />

            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                It’s Been More than 5 Years
              </span>
              - Let's be honest, even the best quality paint will not last a
              lifetime. Especially in Calgary's extreme climate, where harsh
              elements cause more damage, getting a paint job is a must. If you
              don't remember the last time you got your exterior upgraded, it's
              time to consider it before the damage sets in.
            </p>
          </div>
          <br />

          <div className='flex gap-4'>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                Chalky Residue
              </span>
              - Run your hand along your home's siding. If you get a powdery
              residue, that’s commonly called chalking and is a sign that your
              paint is failing. This is very common in high-UV areas like
              Calgary and often goes unnoticed until it's too late.
            </p>
          </div>
          <br />
          <br />
          <p className='text-black mb-3 text-[14px] lg:text-[16px] text-justify'>
            If you have been noticing the same chalky/powdery residue on your
            home's exterior walls, it's time to get in touch with the best
            exterior painters in Calgary.
          </p>
          <div className='flex gap-4'>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                Exposed Wood or Bare Patches
              </span>
              - If areas of wood or siding are peeking through the paint, it's
              time to act fast. Exposed materials are prone to rot, warping, and
              even insect damage and can cause extensive repairs if not
              addressed in a timely manner.
            </p>
          </div>
        </div>
      </div>
      <ContactFormSection />
    </>
  )
}
