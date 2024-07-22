import React from 'react'
import Image from 'next/image'
export default function Coffee() {
    return (
        <button className='flex items-center gap-2 bg-primary px-8 py-2 hover:shadow-lg transition-all ease-in-out duration-150 rounded-2xl'>
            <p className='text-dark '> یه قهوه مهمونم کن :) </p>
            <Image src="/icons/coffee.png" width={30} height={30} alt='coffee' />
        </button>
    )
}
