import ContactFormSection from '@/components/ContactFormSection'
import ServiceHero from '@/components/heros/ServiceHero'
import HomeBanner from '@/components/HomeBanner/home-banner'
import Image from 'next/image'
import blogsBanner from '@/public/blogs-banner.png'
import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import AboutUs from '@/public/AboutUs.png'
import DotFranks from '@/components/ui/DotFranks'
import type { Metadata } from 'next'
import {
  cabinetPaintingServiceImg,
  ServicescabinetPaintingImg,
} from '@/data/images'

export const metadata: Metadata = {
  title: 'Cabinet Painting in Calgary | Bathroom & Kitchen Cabinet Painters',
  description:
    'Alberta Colour Painting offers expert cabinet painting in Calgary. Our skilled kitchen & bathroom cabinet painters in Calgary transform your space with precision and style.',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: [
    'cabinet painting calgary',
    'kitchen cabinet painting calgary',
    'kitchen cabinet painters calgary',
    'cabinet painters calgary',
  ],
  alternates: {
    canonical:
      'https://www.albertacolourpainting.com/services/cabinet-painting-calgary',
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
    url: 'https://www.albertacolourpainting.com/services/cabinet-painting-calgary',
    siteName: 'Alberta Colour Painting',
    type: 'website',
  },
}

export default function cabinetPaintingPage() {
  return (
    <>
      <ServiceHero
        title=''
        title2='Give Your Space a New Life with'
        title3='Custom Cabinet Painting in Calgary'
        imageSrc={blogsBanner}
      />
      {/* Background Image Section */}
      <div className='relative'>
        <div className='absolute top-[-100px] z-[-2]'>
          <Image src={BgBackground2} alt='bg-Image' />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-8 mt-10'>
        <div className='mb-6'>
          <h2 className='text-[26px] font-medium text-[#0D378D]'>
            Cabinet Painting Calgary
          </h2>
        </div>

        <div className='space-y-6 '>
          <div className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden'>
            <Image
              src={ServicescabinetPaintingImg.src}
              alt={ServicescabinetPaintingImg.alt}
              fill
              className='md:object-cover sm:object-contain'
              priority
            />
          </div>

          <div className='space-y-4 text-[16px] text-black'>
            <p>
              Sick of looking at the same boring, outdated cabinets? It's time
              for a glow-up! Our cabinet painting in Calgary will give your
              kitchen, bathroom, or any cabinetry a fresh, modern vibe without
              the need for an expensive renovation. Just a quick, hassle-free
              transformation to make your space look FAB!
            </p>
            <p>
              We offer professional cabinet painting services for a wide range
              of cabinetry, including kitchen cabinets, bathroom cabinets,
              vanity painting, built-in shelving, closets, and more. Whether you
              want to add a touch of charm with a modern finish, refresh your
              vanity with a new look, or update any other cabinets in your home,
              we've got you covered!
            </p>
            <p>
              Your space should speak volumes of your style and vibe, and that
              is why we offer custom cabinet painting in Calgary, understanding
              your vision and bringing it to life. Our experts use a wide range
              of colours and finishes to match your style and home décor through
              a hassle-free process. Our team manages everything from cleaning
              and sanding to priming and painting, ensuring a durable and
              professional finish. By choosing our cabinet painting in Calgary,
              you save money and make an eco-friendly choice by repurposing
              existing materials.
            </p>
            <p>
              Don't settle for outdated, dull cabinets, and elevate your space's
              vibe and feel with our top-quality cabinet painting in Calgary.
              Contact Alberta Colour Painting today and give your space the
              makeover it deserves!
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
        <div className='w-full lg:w-3/5 text-[16px] text-black text-justify'>
          <h3 className='lg:text-[32px] text-[24px] font-bold text-[#0D378D] mb-4'>
            Cabinet Painting in Calgary
            <br />— A Local Touch That Makes All the Difference
          </h3>
          <p className=' mb-6 '>
            HTransforming your kitchen or bathroom cabinets doesn't have to mean
            a full renovation. In Calgary's dynamic housing market, cabinet
            painting has become the smart, affordable way to refresh your space
            while adding real value to your home. Whether you live in a cozy
            bungalow in Bridgeland, a modern condo downtown, or a family home,
            we understand the styles and finishes that resonate with Calgarians.
          </p>
          <p className=' mb-6 '>
            From trendy two-toned cabinets to classic whites that brighten up
            our winter days, we tailor every project to fit your space, your
            taste, and our local vibe.
          </p>
          <p className=' mb-6 '>
            And because we’re among the best cabinet painting companies in
            Calgary, you’re getting more than just a service — you're getting a
            team that knows the city, respects your home, and cares about
            delivering results that last through all four seasons.
          </p>
          <div className='flex gap-4 w-8/9 text-[15px]'>
            <DotFranks />
            <p className=' '>
              <span className='font-bold text-[#0D378D] mr-1'>
                Does your ceiling look like cottage cheese or popcorn kernels?
              </span>
              <span className=' mb-3 '>
                From preparation to cleanup, we handle every step of the
                painting process with efficiency. We take the time to properly
                prepare surfaces, ensuring a smooth and even application,
                leaving your space spotless once the job is done. Our goal is
                not just to meet your expectations but to exceed them, providing
                you with an interior that feels perfectly tailored to your
                style.
              </span>
            </p>
          </div>
          <br />

          <br />
          <p className=' mb-6 '>
            From a resale perspective, smooth ceilings improve aesthetics and
            increase your home’s resale value. Buyers see them as one less thing
            to update, giving you a competitive edge. Whether revamping your
            forever home or getting ready to list, our popcorn ceiling removal
            service in Calgary ensures a clean, modern finish that aligns and
            adds lasting value.
          </p>
          <br />
          <h3 className='lg:text-[32px] text-[24px] font-bold text-[#0D378D] mb-4'>
            Why You Need Our
            <br />
            Cabinet Painting Services in Calgary
          </h3>
          <br />
          <p className=' mb-6 '>
            From a resale perspective, smooth ceilings improve aesthetics and
            increase your home’s resale value. Buyers see them as one less thing
            to update, giving you a competitive edge. Whether revamping your
            forever home or getting ready to list, our popcorn ceiling removal
            service in Calgary ensures a clean, modern finish that aligns and
            adds lasting value.
          </p>
          <br />
          <p className=' mb-6 font-bold text-[#0D378D] '>Here’s why:</p>
          <div className='flex gap-4 w-8/9 text-[15px]'>
            <DotFranks />
            <p className=' '>
              Painting your existing cabinets costs just a fraction of what
              you'd spend on a full kitchen remodel or cabinet replacement. At
              Alberta Colour Painting, our Calgary cabinet painters are highly
              experienced and experts at delivering stunning results that look
              and fit your budget, too.
            </p>
          </div>
          <br />
          <div className='flex gap-4 w-8/9 text-[15px]'>
            <DotFranks />
            <p className=' '>
              Now there is no need to wait weeks (or months) for custom
              cabinetry. Most of the projects we undertake are done in just a
              few days.
            </p>
          </div>
          <br />
          <div className='flex gap-4 w-8/9 text-[15px]'>
            <DotFranks />
            <p className=' '>
              Our Calgary cabinet painting services offer style flexibility
              where you can pick from downtown minimalism to cozy suburban charm
              and update your home's look to match your lifestyle and your
              personal taste.
            </p>
          </div>
          <br />

          <div className='flex gap-4 w-8/9 text-[15px]'>
            <DotFranks />
            <p className=' '>
              Whether you're planning to sell or just want to impress guests, a
              freshly painted cabinet instantly elevates the space. We offer a
              wide range of bathroom, vanity, closet, and kitchen cabinet
              painting in Calgary, all under one expert roof.
            </p>
          </div>
        </div>
      </div>
      <ContactFormSection />
    </>
  )
}
