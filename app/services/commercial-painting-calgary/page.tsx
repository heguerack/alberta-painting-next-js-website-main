import ContactFormSection from '@/components/ContactFormSection'
import ServiceHero from '@/components/heros/ServiceHero'
import HomeBanner from '@/components/HomeBanner/home-banner'
import Image from 'next/image'
import blogsBanner from '@/public/blogs-banner.png'
import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import AboutUs from '@/public/AboutUs.png'
import DotFranks from '@/components/ui/DotFranks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Commercial Painters in Calgary | Best Painting Company',
  description:
    'Alberta Colour Painting is one of the leading commercial painting companies in Calgary. We provide expert commercial exterior & interior painting with professional results.',
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical:
      'https://www.albertacolourpainting.com/services/commercial-painting-calgary',
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
    url: 'https://www.albertacolourpainting.com/services/commercial-painting-calgary',
    siteName: 'Alberta Colour Painting',
    type: 'website',
  },
}
export default function commercialPaintingCalgary() {
  return (
    <>
      <ServiceHero
        title=''
        title2='Commercial Painting in Calgary'
        title3='for Office, and Retail Spaces
'
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
              Did you know people judge your business by how your space looks?
              Just think about it! What gets your brand noticed and makes your
              business stand out? A well-maintained space that tells people you
              mean business! First impressions matter; a fresh, stylish paint
              job can make all the difference. If you want people to feel
              welcomed and your company to look its best, then commercial
              painting in Calgary is exactly what you need.
            </p>
            <p>
              Are you a business owner looking to elevate your commercial space
              with a paint job that brings life to your brand? No matter the
              nature of your business, a well-designed and freshly painted space
              feels more welcoming, professional, and credible to your potential
              customers. Your commercial space reflects your business ideology,
              and the right colors and finishes can create an atmosphere that
              inspires trust, boosts productivity, and gives your brand a unique
              identity.
            </p>
            <p>
              At Alberta Colour Painting, we've worked with numerous businesses
              of different sizes, helping them bring their brand vision to life
              through high-quality commercial painting. Whether it's an office,
              retail store, restaurant, or warehouse, our commercial painters in
              Calgary use premium, long-lasting paints to create a space that
              not only looks great but also stands the test of time.
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
            Colour Psychology,
            <br />
            for Commercial Spaces
          </h3>

          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            If you’re a business owner, your office or commercial space is like
            your second home. It's where ideas grow, goals are set, and your
            team comes together every day. That's why taking care of your walls
            and overall environment is just as important as any other part of
            your business.
          </p>
          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            Vibrant colours can boost mood, motivation, and set the tone for
            productivity. The right shades don’t just brighten walls, but they
            also energize the people working within them.
          </p>
          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            Our commercial painters in Calgary have shared a few fun facts about
            how different colours can affect the vibe and energy of your space.
            Check them out below!
          </p>
          <div className='flex gap-4 '>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                Blues and greens
              </span>
              - promote focus and calm—great for offices.
            </p>
          </div>
          <br />
          <div className='flex gap-4 '>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                Warm tones like reds and oranges
              </span>
              - can energize retail or dining spaces.
            </p>
          </div>
          <br />
          <div className='flex gap-4 '>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                Neutral palettes
              </span>
              - give a clean, professional feel in medical or legal settings.
            </p>
          </div>
          <br />
          <div className='flex gap-4 '>
            <DotFranks />
            <p className='text-black text-[13px] lg:text-[15px] font-normal'>
              <span className='font-bold text-[#0D378D] mr-1'>
                Accent walls
              </span>
              - can highlight branding or guide customer flow in showrooms or
              stores.
            </p>
          </div>
          <br />

          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            If you’re looking to add a touch of luxury with a cozy, welcoming
            vibe to your commercial space but want something unique, we’ve got
            you
          </p>
          <p className='text-black mb-4 text-[14px] lg:text-[16px] text-justify'>
            Get in touch with our commercial painting company in Calgary, and
            we’ll take the time to understand your vision. Our experts will
            assess your space, listen to your needs, and recommend creative,
            standout options that make your office pop while also boosting
            productivity in the long run.
          </p>
        </div>
      </div>
      <ContactFormSection />
    </>
  )
}
