import React from 'react'
import Image from 'next/image'
export default function NotFound() {
    return (
        <main className='w-full mx-auto flex justify-center sm:my-20 md:py-16 lg:py-20'>
            <div className='w-full md:container flex sm:flex-col sm:items-center sm:px-10 relative'>
                <div className='flex flex-col items-center gap-6 sm:mb-20'>
                    <h2 className='text-2xl'>خطای 404</h2>
                    <h2 className='sm:text-3xl lg:text-4xl'>صفحه مورد نظر یافت نشد!</h2>
                </div>
                <div className='relative flex justify-center items-center'>
                    <div className='absolute'>
                        <svg className=' xl:-top-5 sm:w-[20rem] lg:w-[30rem]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FF705D" d="M56.9,-58.6C70,-43.9,74.1,-21.9,72.4,-1.8C70.6,18.4,62.9,36.8,49.8,52.4C36.8,68.1,18.4,80.9,0.2,80.7C-18,80.5,-35.9,67.2,-48.8,51.5C-61.7,35.9,-69.6,18,-71.7,-2C-73.7,-22,-69.9,-44.1,-57,-58.9C-44.1,-73.6,-22,-81.2,-0.1,-81.1C21.9,-81.1,43.9,-73.4,56.9,-58.6Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <Image className='animate-bouncing' src="/media/Saly-41.png" width={450} height={450} alt='saly' />
                </div>
            </div>
        </main>
    )
}
