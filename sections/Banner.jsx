"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import Link from "next/link";
import Github from "@/components/ui/socials/Github";
import Linkedin from "@/components/ui/socials/Linkedin";
export default function Banner() {
  return (
    <main className='w-full mx-auto flex justify-center sm:my-10 md:py-24 lg:py-32'>
      <div className='w-full md:container flex md:flex-row sm:flex-col sm:items-center md:items-start sm:px-10 xl:px-48 justify-between relative'>
        <div className='max-w-[30rem] flex flex-col md:items-start sm:items-center sm:mb-14 md:mb-0 relative'>
          <div className='absolute sm:hidden md:block -top-40 -right-20 animate-bouncing'>
            <svg
              width='607'
              height='652'
              viewBox='0 0 807 852'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='7.5' cy='7.5' r='7.5' fill='#5352ED' />
              <circle cx='797' cy='365' r='10' fill='#2ED573' />
              <circle cx='415.5' cy='689.5' r='5.5' fill='#FF6348' />
              <circle cx='352' cy='848' r='4' fill='#5352ED' />
              <circle cx='536.5' cy='758.5' r='4.5' fill='#1E90FF' />
            </svg>
          </div>
          <div className='lg:absolute top-0 lg:w-[30rem] flex flex-col md:items-start sm:items-center md:mb-0'>
            <p className='font-hamrah text-primary mb-2'>
              سلام دنیا! من کی ام؟
            </p>
            <p className='font-hamrah sm:text-4xl md:text-4xl lg:text-5xl mb-4'>
              سلام! من میلادم
            </p>
            <p className='font-hamrah text-gray leading-8 sm:text-center md:w-80 lg:w-96 md:text-justify'>
              یه فول استک دولوپر در حوزه وب، عاشق برنامه نویسی، تکنولوژی،
              یادگیری مداوم، چالش های جدید و کار تیمی. از نظر خودم یکی از نقاط
              مثبتم پافشاری در حل مسئله با بهترین تکنیک است. از لحاظ سطح خودم را
              یک برنامه نویس میدلول میدانم.
            </p>
            <div className='mt-4 flex '>
              <Link href='resume/resume.pdf' locale={false}>
                <div className='px-8 py-2 bg-primary font-hamrah hover:shadow-lg transition-all ease-in-out duration-150 rounded-2xl ml-1 flex items-center'>
                  <p className='ml-1'>رزومه</p>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g id='Iconly/Light/Download'>
                      <g id='Downlaod'>
                        <path
                          id='Stroke 1'
                          d='M12.1222 15.4362L12.1222 3.39523'
                          stroke='black'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          id='Stroke 3'
                          d='M15.0382 12.5085L12.1222 15.4365L9.20621 12.5085'
                          stroke='black'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          id='Stroke 4'
                          d='M16.7549 8.12814H17.6879C19.7229 8.12814 21.3719 9.77714 21.3719 11.8131V16.6971C21.3719 18.7271 19.7269 20.3721 17.6969 20.3721L6.55695 20.3721C4.52195 20.3721 2.87195 18.7221 2.87195 16.6871V11.8021C2.87195 9.77314 4.51795 8.12814 6.54695 8.12814L7.48895 8.12814'
                          stroke='black'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </Link>
              <Link href='/contact'>
                <div className='px-8 py-2 bg-dark text-light font-hamrah hover:shadow-lg transition-all ease-in-out duration-150 rounded-2xl flex items-center'>
                  <p className='ml-1'>ارتباط</p>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='#ffffff'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g id='Iconly/Light/Send'>
                      <g id='Send'>
                        <path
                          id='Send_2'
                          d='M15.8325 8.17476L10.109 13.9593L3.59944 9.88779C2.66675 9.30427 2.86077 7.88756 3.91572 7.57905L19.3712 3.05289C20.3373 2.76975 21.2326 3.67295 20.9456 4.64212L16.3731 20.0869C16.0598 21.1433 14.6512 21.3321 14.0732 20.3954L10.106 13.9603'
                          stroke='black'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
            <div className='flex mt-6'>
              <Link href='https://github.com/miilii9'>
                <Github />
              </Link>
              <Link href='https://www.linkedin.com/in/milad-ekrami-ab0934165/'>
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className='relative flex justify-center items-center md:-top-4 lg:-top-20 '>
          <div className='absolute'>
            <svg
              className=' xl:-top-5 sm:w-[20rem] lg:w-[30rem]'
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#FF705D'
                d='M56.9,-58.6C70,-43.9,74.1,-21.9,72.4,-1.8C70.6,18.4,62.9,36.8,49.8,52.4C36.8,68.1,18.4,80.9,0.2,80.7C-18,80.5,-35.9,67.2,-48.8,51.5C-61.7,35.9,-69.6,18,-71.7,-2C-73.7,-22,-69.9,-44.1,-57,-58.9C-44.1,-73.6,-22,-81.2,-0.1,-81.1C21.9,-81.1,43.9,-73.4,56.9,-58.6Z'
                transform='translate(100 100)'
              />
            </svg>
            <div className='absolute flex font-numerals top-20 -left-4 rounded-3xl shadow-xl lg:text-lg sm:text-[10px] bg-light px-4 py-3'>
              <span className='font-numerals text-primary ml-1'>
                <CountUp delay={1} start={0} end={4} />
              </span>
              <span>سال تجربه</span>
            </div>
            <div className='absolute font-numerals bottom-20 lg:right-4 rounded-3xl shadow-xl lg:text-lg sm:text-[10px] bg-light px-4 py-3'>
              <span className='font-numerals text-primary ml-1'>
                <CountUp delay={1} start={0} end={3} />
              </span>
              <span>سابقه شغلی</span>
            </div>
          </div>
          <Image
            className='animate-jumping'
            src='/media/Saly.png'
            width={500}
            height={500}
            alt='saly'
          />
        </div>
      </div>
    </main>
  );
}
