import type { ReactNode } from 'react';
import Link from 'next/link';

// Components
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Icons
import { BiMenu } from 'react-icons/bi';
import { RiMenuFill } from 'react-icons/ri';


export default function NavBarMobileMenu() {
    return (
        <Popover>
            <PopoverTrigger className="ml-2.5 lg:hidden">
                <RiMenuFill className="text-2xl"/>
            </PopoverTrigger>
            <PopoverContent
                sideOffset={13} // py-3 = 0.75rem = 12px, + 1px border
                className="lg:hidden pt-20 px-3 sm:px-9 border-none w-screen h-[calc(100vh_-_57px)] flex flex-col data-[state=closed]:!zoom-out-100 data-[state=open]:!zoom-in-100 slide-in-from-top-screen"
            >
                <NavBarMenuLink href="/">
                    Home
                </NavBarMenuLink>
                <NavBarMenuLink href="/projects">
                    Projects
                </NavBarMenuLink>
                <NavBarMenuLink href="/about">
                    About
                </NavBarMenuLink>
            </PopoverContent>
        </Popover>
    )
}

type NavBarMenuLinkProps = {
    href: string,
    children: ReactNode
}

function NavBarMenuLink(props: NavBarMenuLinkProps) {
    return (
        <Link
            className="py-2 px-3 text-2xl text-black transition duration-200 font-semibold"
            href={props.href}
        >
            {props.children}
        </Link>
    )
}
