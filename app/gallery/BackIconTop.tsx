'use client'

import Link from 'next/link'

export default function BackIconTop() {
  return (
    <div className=''>
      <Link href='/gallery'>
        <button className='p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
      </Link>
    </div>
  )
}
