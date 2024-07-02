import { Flower } from '@/components/Flower';
import { CiFaceSmile } from 'react-icons/ci';
import { PiArrowBendUpLeftFill } from 'react-icons/pi';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="bg-white max-w-screen overflow-x-clip">
            <div className="flex flex-col min-h-screen p-5 items-center text-black">
                <div className="flex flex-col items-center mt-14 sm:mt-32 w-full gap-4">
                    <h1 className="hidden sm:flex font-bold text-4xl sm:text-7xl">Hello! I'm&nbsp;<span
                        className="text-[#dd462c]">Leyton</span>,
                    </h1>
                    <div
                        className="flex flex-row w-[55%] self-center h-fit justify-center relative mr-8 sm:mr-0">
                        <Flower/>
                        <div className="hidden sm:flex absolute bottom-4 right-[-30px]">
                            <PiArrowBendUpLeftFill size={44} className="text-black"/>
                            <p className="text-xl font-medium ml-2">
                                Choose a random shape or <br/> click <Link href="/projects"
                                                                           className="text-[#304c89] underline">here</Link> to
                                go to the projects page.
                            </p>
                        </div>
                    </div>
                    <div
                        className="hidden sm:flex flex-col text-3xl sm:text-5xl leading-tight font-medium text-center">
                        <div
                            className="flex flex-row self-center items-center mt-2 w-fit">
                            <p>a&nbsp;</p>
                            <span className="flex flex-row items-center">
                            c
                                <CiFaceSmile size={37}
                                             className="mt-2 mr-[-2px]"/>
                            mputer
                            engineering student
                        </span>
                        </div>
                        <p>at Purdue University.</p>
                    </div>
                    <div
                        className="sm:hidden ml-2 flex flex-col text-3xl sm:text-5xl leading-tight font-medium text-left">
                        <p>Hello! I'm <span
                            className="text-[#dd462c] font-semibold">Leyton</span>, a computer engineering student at
                            Purdue
                            University.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
