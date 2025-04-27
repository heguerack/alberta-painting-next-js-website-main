import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  imageSrc: string
  location?: string
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
      className='block rounded-lg bg-[#0D378D] shadow-md overflow-hidden hover:scale-105 transition-transform'>
      <div className='relative w-full h-48'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
      </div>
      <div className='p-4'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        {location && <p className='text-sm text-white'>{location}</p>}
      </div>
    </Link>
  )
}
