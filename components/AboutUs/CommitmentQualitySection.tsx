import { Dot } from 'lucide-react'
import Image from 'next/image'
import service2 from '@/public/service2.png'
import BgLines from '../ui/BgLines'

export default function CommitmentQualitySection() {
  return (
    <div className='relative grid md:grid-cols-2 gap-8 mb-16 items-center my-3.5 lg:mt-20'>
      <BgLines />
      <div className='relative w-full  lg:w-[80%] mr-auto aspect-square md:aspect-auto md:h-[600px] overflow-hidden'>
        <Image
          src={service2}
          alt='Modern living room with wooden floors and fireplace'
          fill
          className='object-cover '
        />
      </div>

      <div className='space-y-6'>
        <div className='space-y-2'>
          <p className='text-[22px] font-medium text-black'>
            Commitment to Quality
          </p>
          <h2 className='text-2xl lg:text-3xl font-bold text-[#0D378D]'>
            PREMIUM MATERIALS & <br />
            EXCEPTIONAL WORKMANSHIP
          </h2>
        </div>

        <ul className='space-y-4 text-black lg:text-[16px] text-[14px]'>
          <li className='flex items-start gap-2'>
            <Dot className='h-5 w-5 mt-0.5 text-black flex-shrink-0' />
            <span>
              We use the best paints and materials for long-lasting results.
            </span>
          </li>
          <li className='flex items-start gap-2'>
            <Dot className='h-5 w-5 mt-0.5 text-black flex-shrink-0' />
            <span>
              Our expert team ensures flawless finishes with attention to every
              detail.
            </span>
          </li>
          <li className='flex items-start gap-2'>
            <Dot className='h-5 w-5 mt-0.5 text-black flex-shrink-0' />
            <span>
              We receive numerous positive reviews from satisfied clients who
              trust our work.
            </span>
          </li>
        </ul>

        <div className='pt-4'>
          <p className='lg:text-[20px] text-[18px] text-black'>
            Our reputation is built on trust, professionalism, and superior
            quality—ensuring every project exceeds expectations.
          </p>
        </div>
      </div>
    </div>
  )
}
