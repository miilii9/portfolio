"use client"
import React from 'react'
import Projects from '@/sections/Projects'
import ProjectsBanner from '@/sections/ProjectsBanner'
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
            <ProjectsBanner />
            <Projects />
        </motion.div>
    )
}
