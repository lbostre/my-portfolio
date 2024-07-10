// Icons
import { MdHexagon } from 'react-icons/md';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="bg-white text-black">
            <div className="container px-5 sm:px-20 flex flex-col">
                <div className="text-2xl sm:text-4xl font-bold sm:mb-6 flex flex-row items-center gap-3 mt-3 sm:mt-8">
                    <MdHexagon className="sm:flex hidden text-[#F5E579]" size={40}/>
                    <MdHexagon className="sm:hidden flex text-[#F5E579]" size={30}/>
                    Contact
                </div>

                <div
                    className="flex flex-col sm:flex-row gap-x-12 gap-y-4 sm:mb-14 sm:text-lg font-semibold mt-2 sm:mt-0 ml-11 text-left sm:text-center">
                    <Link target={"_blank"} href={"https://www.linkedin.com/in/leytonbostre/"}>LinkedIn</Link>
                    <Link target={"_blank"} href={"https://github.com/lbostre"}>GitHub</Link>
                    <Link href={"mailto:ldbostre@gmail.com"}>Email</Link>
                    <Link target={"_blank"} href={"/"}>Resume</Link>
                </div>
            </div>
        </footer>
    )
}
