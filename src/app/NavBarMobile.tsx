import { ReactNode, useState } from 'react';
import Link from 'next/link';

// Components
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Icons
import { RiMenuFill } from 'react-icons/ri';


export default function NavBarMobileMenu() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Popover open={open}>
            <PopoverTrigger className="ml-2.5 lg:hidden" onClick={() => setOpen(!open)}>
                <RiMenuFill className="text-2xl"/>
            </PopoverTrigger>
            <PopoverContent
                sideOffset={13} // py-3 = 0.75rem = 12px, + 1px border
                className="lg:hidden pt-20 px-3 sm:px-9 border-none w-screen h-[calc(100vh_-_57px)] flex flex-col data-[state=closed]:!zoom-out-100 data-[state=open]:!zoom-in-100 slide-in-from-top-screen"
            >
                <NavBarMenuLink href="/" onClick={() => {
                    setTimeout(() => {
                        setOpen(false);
                    }, 150);
                }}>
                    Home
                </NavBarMenuLink>
                <NavBarMenuLink href="/projects" onClick={() => {
                    setTimeout(() => {
                        setOpen(false);
                    }, 150);
                }}>
                    Projects
                </NavBarMenuLink>
                <NavBarMenuLink href="/about" onClick={() => {
                    setTimeout(() => {
                        setOpen(false);
                    }, 150);
                }}>
                    About
                </NavBarMenuLink>
            </PopoverContent>
        </Popover>
    )
}

type NavBarMenuLinkProps = {
    href: string,
    children: ReactNode,
    onClick: () => void
}

function NavBarMenuLink(props: NavBarMenuLinkProps) {
    return (
        <Link
            className="py-2 px-3 text-2xl text-black transition duration-200 font-semibold"
            href={props.href}
            onClick={props.onClick}
        >
            {props.children}
        </Link>
    )
}
