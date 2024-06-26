// Icons
import { MdHexagon } from 'react-icons/md';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="bg-white text-black">
            <div className="container px-20 flex flex-col">
                <div className="text-4xl font-bold mb-6 flex flex-row items-center gap-3 mt-8">
                    <MdHexagon className="text-[#F5E579]" size={40}/>Contact
                </div>

                <div className="flex flex-col sm:flex-row gap-x-12 gap-y-4 mb-14 text-lg font-semibold ml-14">
                    <Link target={"_blank"} href={"https://www.linkedin.com/in/leytonbostre/"}>LinkedIn</Link>
                    <Link target={"_blank"} href={"https://github.com/lbostre"}>GitHub</Link>
                    <Link href={"mailto:ldbostre@gmail.com"}>Email</Link>
                    <Link target={"_blank"} href={"/"}>Resume</Link>
                </div>
            </div>
        </footer>
    )
}
