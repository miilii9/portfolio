import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuButton from './ui/buttons/menu/MenuButton'
export default function MainNavigation({ toggleMenu, open }) {

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
        <nav id='navbar' className=' w-full mx-auto flex justify-center bg-secondary'>
            <div className='h-28 bg-secondary w-full md:container sm:px-10 flex items-center xl:px-48 justify-between '>
                <MenuButton open={open} toggleMenu={toggleMenu} />
                <div className='flex items-center'>
                    <div className='rounded-full overflow-hidden ml-10 sm:hidden md:block shadow-lg'>
                        <Image src="/media/profile.jpg" alt="profile" width={50} height={50} />
                    </div>
                    <ul className='sm:hidden md:flex '>
                        {
                            navLinks.map(({ name, href }, index) => (
                                <Link key={index} href={href}>
                                    <li className='ml-10 text-primary text-xl font-hamrah hover:text-dark ease-in-out transition-all duration-150'>{name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='sm:w-10 md:w-auto'>
                    <Image src="/media/logo.png" alt="logo" width={150} height={150} />
                </div>

            </div>
        </nav>
    )
}
