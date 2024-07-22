"use client"
import React from 'react'
import ContactBanner from '@/sections/ContactBanner'
import ContactForm from '@/components/ContactForm'
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
            <ContactBanner />
            <ContactForm />
        </motion.div>
    )
}
