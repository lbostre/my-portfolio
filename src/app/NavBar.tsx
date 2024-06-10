'use client'

import Link from 'next/link';
import { FaDiamond } from 'react-icons/fa6';
import { ReactNode, useState, useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';


export function NavBar() {
    const scroll = useScroll();
    const [topPosition, setTopPosition] = useState('0');

    useEffect(() => {
        if (scroll >= 300) {
            setTopPosition('-75px');
        } else {
            setTopPosition('0');
        }
    }, [scroll]);

    return (
        <header
            className={`fixed z-10 flex flex-row h-[75px] bg-white text-black px-20 items-center justify-between w-full transition-top ease duration-300`}
            style={{ top: topPosition }}
        >
            <h2 className="font-bold text-2xl flex flex-row gap-3 items-center">
                <FaDiamond size={20} className="text-[#dd462c]"/>
                <Link href="/public">Leyton Bostre</Link>
            </h2>
            <div className="flex flex-row items-center text-lg gap-7 font-medium">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">Projects</NavLink>
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
