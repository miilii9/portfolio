import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Coffee from '@/components/ui/socials/Coffee'
export default function ProjectsBanner() {
    return (
        <main className='w-full mx-auto flex justify-center sm:my-10 md:py-24 lg:py-32'>
            <div className='w-full md:container flex md:flex-row sm:flex-col sm:items-center md:items-start sm:px-10 xl:px-48 justify-between relative'>
                <div className='max-w-[30rem] flex flex-col md:items-start sm:items-center sm:mb-14 md:mb-0 relative'>
                    <div className='absolute sm:hidden md:block -top-40 -right-20 animate-bouncing'>
                        <svg width="607" height="652" viewBox="0 0 807 852" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.5" cy="7.5" r="7.5" fill="#5352ED" />
                            <circle cx="797" cy="365" r="10" fill="#2ED573" />
                            <circle cx="415.5" cy="689.5" r="5.5" fill="#FF6348" />
                            <circle cx="352" cy="848" r="4" fill="#5352ED" />
                            <circle cx="536.5" cy="758.5" r="4.5" fill="#1E90FF" />
                        </svg>
                    </div>
                    <div className='lg:absolute top-0 lg:w-[30rem] flex flex-col md:items-start sm:items-center md:mb-0'>
                        <p className='font-hamrah text-primary mb-2'>چه خبر :)</p>
                        <p className='font-hamrah sm:text-4xl md:text-4xl lg:text-5xl mb-4'>پروژه های منو ببینید!</p>
                        <p className='font-hamrah text-gray leading-8 sm:text-center md:w-80 lg:w-96 md:text-justify mb-6'>اینجا میتونید پروژه هایی که من در طول مدت یادگیری یا فعالیتم در شرکت ها انجام دادم یا جزوی از آن ها بودم را ببینید. چالش های مختلفی که راه رو برای یادگیری هموار میکنن. من از سال 1399 یادگیری رو شروع کردم و با وجود چالش ها و موانع مختلف تداوم و انگیزه رو حفظ کردم تا بتونم پیشرفت کنم.</p>
                        <Link href="https://www.coffeebede.com/hamun" className='sm:mb-6 md:mb-0'>
                            <Coffee />
                            {/* <Image src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg" width={200} height={200} alt='buy me coffee' /> */}
                        </Link>
                    </div>
                </div>
                <div className='relative flex justify-center items-center md:-top-8 lg:-top-20 sm:w-56 lg:w-72 xl:w-auto'>
                    <div className='absolute'>
                        <svg className=' xl:-top-5 sm:w-[20rem] lg:w-[30rem]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FF705D" d="M56.9,-58.6C70,-43.9,74.1,-21.9,72.4,-1.8C70.6,18.4,62.9,36.8,49.8,52.4C36.8,68.1,18.4,80.9,0.2,80.7C-18,80.5,-35.9,67.2,-48.8,51.5C-61.7,35.9,-69.6,18,-71.7,-2C-73.7,-22,-69.9,-44.1,-57,-58.9C-44.1,-73.6,-22,-81.2,-0.1,-81.1C21.9,-81.1,43.9,-73.4,56.9,-58.6Z" transform="translate(100 100)" />
                        </svg>

                    </div>
                    <Image className='animate-bouncing' src="/media/Saly-40.png" width={350} height={350} alt='saly' />
                </div>
            </div>
        </main>
    )
}
