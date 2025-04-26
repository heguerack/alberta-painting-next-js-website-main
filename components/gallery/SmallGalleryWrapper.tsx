'use client'

import { useRef, useState } from 'react'
import SmallGallerySection from './SmallGallerySection'

export default function SmallGalleryWrapper() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const numberOfImages = 5 // You can keep it hardcoded for now, or pass it dynamically later

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return

    const totalScrollWidth = container.scrollWidth - container.clientWidth
    const currentScroll = container.scrollLeft

    const scrollPercent = (currentScroll / totalScrollWidth) * 100
    const stepSize = 100 / numberOfImages

    const step = Math.min(
      Math.floor(scrollPercent / stepSize),
      numberOfImages - 1
    )

    setCurrentStep(step)
  }

  return (
    <div className='relative'>
      <SmallGallerySection scrollRef={scrollRef} handleScroll={handleScroll} />

      {/* Fixed slices for progress */}
      <div className='absolute bottom-0 left-0 w-full h-2 sm:h-3 flex mt-2 overflow-hidden'>
        {Array.from({ length: numberOfImages }).map((_, index) => (
          <div
            key={index}
            className={`h-full flex-1 transition-colors duration-300 ${
              index === currentStep ? 'bg-[#0D378D]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
