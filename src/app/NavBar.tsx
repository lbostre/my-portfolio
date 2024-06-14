'use client'

import Link from 'next/link';
import { FaDiamond } from 'react-icons/fa6';
import { ReactNode, useState, useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { MdHexagon } from 'react-icons/md';
import { IoTriangle } from 'react-icons/io5';
import { ImDiamonds } from 'react-icons/im';
import { BsFillSuitDiamondFill } from 'react-icons/bs';


export function NavBar() {
    const scroll = useScroll();
    const [topPosition, setTopPosition] = useState('0');
    const [iconIndex, setIconIndex] = useState(0)

    useEffect(() => {
        if (scroll >= 300) {
            setTopPosition('-75px');
        } else {
            setTopPosition('0');
        }
    }, [scroll]);

    const icons = [
        <FaDiamond size={25} className="text-[#dd462c] cursor-pointer"
                   onClick={() => iconSwitch()}/>,
        <IoTriangle size={25} className="text-[#3bb273] cursor-pointer" onClick={() => iconSwitch()}/>,
        <BsFillSuitDiamondFill size={25} className="text-[#839ebd] cursor-pointer"
                               onClick={() => iconSwitch()}/>,
        <MdHexagon size={25} className="text-[#F5E579] cursor-pointer" onClick={() => iconSwitch()}/>,
        <ImDiamonds size={25} className="text-[#304c89] cursor-pointer" onClick={() => iconSwitch()}/>
    ]

    const iconSwitch = () => {
        console.log("breh")
        if (iconIndex == icons.length - 1) {
            setIconIndex(0)
        } else {
            setIconIndex(prev => prev + 1)
        }
    }

    return (
        <header
            className={`fixed z-10 flex flex-row h-[75px] bg-white text-black px-20 items-center justify-between w-full transition-top ease duration-300`}
            style={{ top: topPosition }}
        >
            <h2 className="font-bold text-2xl flex flex-row gap-3 items-center">
                {icons[iconIndex]}
                <Link href="/">Leyton Bostre</Link>
            </h2>
            <div className="flex flex-row items-center text-lg gap-7 font-medium">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/about">About</NavLink>
            </div>
        </header>
    )
}

type NavLinkProps = {
    href: string,
    children: ReactNode
}

function NavLink(props: NavLinkProps) {
    return (
        <Link
            className="hidden lg:block hover:text-[#747474] transition duration-200 font-semibold"
            href={props.href}
        >
            {props.children}
        </Link>
    )
}
