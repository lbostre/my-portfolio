import { Flower } from '@/components/Flower';
import { CiFaceSmile } from 'react-icons/ci';
import { PiArrowBendUpLeftFill } from 'react-icons/pi';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="bg-white max-w-screen overflow-x-clip">
            <div className="flex flex-col min-h-screen p-5 items-center text-black">
                <div className="flex flex-col items-center mt-32 w-full gap-4">
                    <h1 className="font-bold text-7xl">Hello! I'm <span className="text-[#dd462c]">Leyton</span>,</h1>
                    <div className="flex flex-row w-[55%] self-center h-fit justify-center relative">
                        <Flower/>
                        <div className="absolute bottom-4 right-[-30px]">
                            <PiArrowBendUpLeftFill size={44} className="text-black"/>
                            <p className=" text-xl font-medium ml-2">
                                Choose a random shape or <br/> click <Link href="/projects"
                                                                           className="text-[#304c89] underline">here</Link> to
                                go to the projects page.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col text-5xl leading-tight font-medium text-center">
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
                </div>
                {/*<ProjectDisplayWeb color="#3bb273" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor*/}
                {/*        nec feugiat nisl*/}
                {/*        pretium*/}
                {/*        fusce." icon={<IoTriangle size={36}/>} title={'Course Rater'}*/}
                {/*                   subtitle={'PROJECT MANAGER & FULL STACK DEVELOPER'} image={CourseRater}*/}
                {/*                   image2={CourseRaterMobile} url="course-rater"/>*/}
                {/*<ProjectDisplay color="#304c89" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor*/}
                {/*        nec feugiat nisl*/}
                {/*        pretium*/}
                {/*        fusce." icon={<ImDiamonds size={40}/>} title={'Jumpseat'}*/}
                {/*                subtitle={'FULL STACK WEBSITE'} image={Jumpseat} image2={JumpseatMobile}/>*/}
                {/*<ProjectDisplay color="#839ebd" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor*/}
                {/*        nec feugiat nisl*/}
                {/*        pretium*/}
                {/*        fusce." icon={<BsFillSuitDiamondFill size={40}/>} title={'CLIME'}*/}
                {/*                subtitle={'APP'} image={CLIMELandingPage} image2={CLIMEChat} type="app"/>*/}
                {/*<ProjectDisplay color="#F5E579" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor*/}
                {/*        nec feugiat nisl*/}
                {/*        pretium*/}
                {/*        fusce." icon={<MdHexagon size={40}/>} title={'Earth History Visualization'}*/}
                {/*                subtitle={'FULL STACK WEBSITE'} image={TSCHome}*/}
                {/*                type="website"/>*/}
                {/*<ProjectDisplayWeb color="#dd462c" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor*/}
                {/*        nec feugiat nisl*/}
                {/*        pretium*/}
                {/*        fusce." icon={<FaDiamond size={40}/>} title={'Deaf Kids Outreach'}*/}
                {/*                   subtitle={'FULL STACK WEBSITE'} image={DKO}*/}
                {/*                   type={2} url="dko"/>*/}
                {/*<div className="h-[1px] w-[92%] bg-gray-300"/>*/}
            </div>
        </main>
    );
}
