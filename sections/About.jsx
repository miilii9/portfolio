"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import TalentChips from './TalentChips'
import ExperiencesList from './ExperiencesList'
import Qualification from './Qualification'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function About() {

    let [categories] = useState([
        {
            name: "تجارب",
            title: "information"
        },
        {
            name: "مهارت ها",
            title: "talent"
        },
        {
            name: "اطلاعات",
            title: "qualification"
        },
    ])

    return (
        <main className='w-full mx-auto flex justify-center sm:mt-10 md:mb-20'>
            <div className='w-full md:container flex flex-col items-start sm:px-10 xl:px-48 justify-between relative'>
                <div className='flex flex-col items-center w-full'>
                    <h2 className='w-full flex justify-center font-hamrah text-3xl mb-4 sm:text-xl'>درباره من</h2>
                    <Image className='animate-bounce' src="/icons/chevron-down.png" width="24" height="24" alt='chevron-down' />
                </div>
                <div className='flex justify-center w-full md:mt-12 sm:mt-12 items-center py-20'>
                    <div className='sm:w-full h-full max-w-5xl sm:mb-12 md:mb-0'>
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-light p-1">
                                {categories.map((category, index) => (
                                    <Tab
                                        key={index}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2 px-4 font-medium leading-5 font-hamrah text-lg',
                                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-primary text-blue-700 shadow'
                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {category.name}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {categories.map((category, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-white py-6 px-4 h-[24rem] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-track-rounded-full',
                                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none'
                                        )}
                                    >
                                        {
                                            category.title === "information" ? <ExperiencesList />
                                                : category.title === "qualification" ? <Qualification />
                                                    : category.title === "talent" ?
                                                        < TalentChips />
                                                        : null
                                        }
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </main>
    )
}
