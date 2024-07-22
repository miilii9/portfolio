import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function MobileMenu({ open, hide }) {

    const navLinks = [
        {
            name: 'خانه',
            href: '/'
        },
        {
            name: 'پروژه ها',
            href: '/projects'
        },
        {
            name: 'ارتباط',
            href: '/contact'
        },
    ]

    return (
        <div className={`md:hidden h-screen shadow-md fixed top-0 z-30 bg-light w-full transition ease-in-out duration-300 ${open ? "translate-y-0 opacity-100 visible" : "-translate-y-[500px] opacity-0 invisible"}`}>
            <div className='w-full bg-secondary h-full'>
                <ul className='flex flex-col w-full items-center justify-center h-full gap-4 mb-6 -bottom-10'>
                    {
                        navLinks.map(({ name, href }, index) => (
                            <Link key={index} href={href}>
                                <li onClick={hide}>{name}</li>
                            </Link>
                        ))
                    }
                    <li>
                        <Image onClick={hide} src="/icons/close.png" width={35} height={35} alt='close' />
                    </li>
                </ul>
            </div>
        </div>
    )
}