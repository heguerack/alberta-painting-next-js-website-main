import React from 'react'
import TrustBadges from '../trust-badges'
import HeroPhoneMobile from './HeroPhoneMobile'
import Image from 'next/image'

import './hero.css'
import HeroCallToAction from './HeroCallToAction'

const HomeHero = () => {
  return (
    <div>
      <section className='relative h-[600px] md:h-[850px] lg:h-[900px]'>
        <HeroPhoneMobile />
        <div className='relative h-[calc(100vh-50px)]'>
          <Image
            src={'/galleryHome-5.png'}
            alt={' dark blue siding just pained'}
            fill
            className='object-cover brightness-75 w-full h-full'
            priority
          />
          <div className='absolute inset-0 bg-black/20' />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Say Hello to a Glow-Up with the Best 
              {/* <span className='bg-reveal'></span> */}
            </h1>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 bg-reveal'>Painters in Calgary</h1>
            <p className='text-xl md:text-2xl text-white mb-2'>
            We're among the top painting companies in Calgary, turning dull walls into eye candy
            </p>
            <p className='text-xl md:text-2xl text-white mb-8'>
             with flawless interior and exterior makeovers. 
            </p>
            <HeroCallToAction />
          </div>
        </div>
        <TrustBadges />
      </section>
    </div>
  )
}

export default HomeHero
