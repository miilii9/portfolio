"use client"
import React from 'react'
import Banner from '@/sections/Banner'
import About from '@/sections/About'
import Reviews from '@/components/Reviews'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, },
  exit: { opacity: 1, },
}
export default function page() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="exit"
      transition={{ type: "linear" }}
    >
      <Banner />
      <About />
      <div>
        <h2 className='w-full flex justify-center text-2xl mb-12'>نظرات برخی از کارفرمایان پروژه ها  </h2>
        <Reviews />
      </div>
    </motion.div>
  )
}

