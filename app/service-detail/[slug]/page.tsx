// app/services/[slug]/page.tsx
import Image from 'next/image'
import { notFound } from 'next/navigation'
import blogsBanner from '@/public/blogs-banner.png'
import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import HomeBanner from '@/components/HomeBanner/home-banner'
import ContactFormSection from '@/components/ContactFormSection'
import { services } from '@/data/serviceData'
import ServiceArticle from '@/components/services/ServiceArticle'
import ServiceHero from '@/components/heros/ServiceHero'

//THIS IS SO YTHAT THE PAGES DONT BECOME DINAMIC PAGES!!
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetails( ///Next 15 stuff , one cant destructure params the regular way anymore
  //   {
  //   params,
  // }: {
  //   params: { slug: string }
  // }
  props: { params: { slug: string } }
) {
  const { slug } = await props.params //Next js 15 stuff, one must await
  const service = services.find((s) => s.slug === slug)

  if (!service) return notFound()

  return (
    <>
      <ServiceHero
        title={service?.hero.title1}
        title2={service?.hero.title2}
        title3={service?.hero.title3}
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
            {service.title}
          </h1>
        </header>

        <div className='space-y-6'>
          <div className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden'>
            <Image
              src={service.coverImage}
              alt={service.slug}
              fill
              className='md:object-cover sm:object-contain'
              priority
            />
          </div>

          <div className='space-y-4 text-[16px] text-black'>
            {service.descriptions?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      <HomeBanner />

      <ServiceArticle
        articles={service.articles}
        title1={service.articlesTitle1}
        title2={service.articlesTitle2}
      />
      <ContactFormSection />
    </>
  )
}
