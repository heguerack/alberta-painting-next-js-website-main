'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface ProjectSliderWrapperProps {
  children: ReactNode[]
  interval?: number
}

export default function ProjectSliderWrapper({
  children,
  interval = 4000,
}: ProjectSliderWrapperProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === children.length - 1 ? 0 : prevIndex + 1
        )
      }, interval)
    }

    return () => {
      resetTimeout()
    }
  }, [currentIndex, isPlaying, children.length, interval])

  const handlePrev = () => {
    resetTimeout()
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    resetTimeout()
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <>
      <div className='relative w-full h-[20rem] sm:h-[25rem] md:h-[30rem] overflow-hidden'>
        {/* Slides (absolute stacked) */}
        {children.map((child, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}>
            {child}
          </div>
        ))}
      </div>
      {/* Controls */}
      <div className='flex justify-center gap-4 mt-6'>
        <button
          onClick={handlePrev}
          className='px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer'>
          Prev
        </button>
        <button
          onClick={togglePlay}
          className='px-4 py-2 bg-[#0D378D] hover:bg-blue-900 text-white rounded cursor-pointer '>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={handleNext}
          className='px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer'>
          Next
        </button>
      </div>
    </>
  )
}
