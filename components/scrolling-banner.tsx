'use client'

import { motion } from 'framer-motion'

export default function ScrollingBanner() {
  const bannerText = ` Special Discount 10% <<<<<<<< ${' '} `
  const repeatedText = bannerText.repeat(10)

  return (
    <div
      className='bg-[#0D378D] text-white py-1 overflow-hidden whitespace-nowrap'
      style={{ scrollBehavior: 'smooth' }}>
      <motion.div
        className='flex gap-1'
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}>
        <div className='inline-block'>{repeatedText}</div>
        <div className='inline-block'>{repeatedText}</div>
      </motion.div>
    </div>
  )
}
