// 'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  imageSrc: string
  location: string
  href: string
}

export default function ProjectCard({
  title,
  imageSrc,
  location,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className='group block overflow-hidden rounded-lg shadow hover:shadow-lg transition'>
      <div className='relative w-full h-64 overflow-hidden'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>

      {/* Text and "View Project" area */}
      <div className='p-4 bg-white flex flex-col gap-2'>
        <div>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <p className='text-gray-500 text-sm'>{location}</p>
        </div>

        {/* View Project mini button */}
        <div className='flex items-center gap-2 text-blue-600 font-medium group-hover:underline'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-5 h-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
          <span>View Project</span>
        </div>
      </div>
    </Link>
  )
}

// import Image from 'next/image'
// import Link from 'next/link'

// interface ProjectCardProps {
//   title: string
//   imageSrc: string
//   location?: string
//   href: string
// }

// export default function ProjectCard({
//   title,
//   imageSrc,
//   location,
//   href,
// }: ProjectCardProps) {
//   return (
//     <Link
//       href={href}
//       className='block rounded-lg bg-[#0D378D] shadow-md overflow-hidden hover:scale-105 transition-transform'>
//       <div className='relative w-full h-48'>
//         <Image
//           src={imageSrc}
//           alt={title}
//           fill
//           className='object-cover'
//           sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
//         />
//       </div>
//       <div className='p-4'>
//         <h2 className='text-lg font-semibold'>{title}</h2>
//         {location && <p className='text-sm text-white'>{location}</p>}
//       </div>
//     </Link>
//   )
// }
