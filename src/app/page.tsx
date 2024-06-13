"use client";

import { Flower } from '@/components/Flower';
import { IoTriangle } from 'react-icons/io5';
import CourseRater from "../assets/rating_page.png"
import CourseRaterMobile from "../assets/CourseRater/course_rater_mobile.jpg"
import DKO from "../assets/DKO.png"

import ProjectDisplayWeb from '@/components/ProjectDisplayWeb';
import { CiFaceSmile } from 'react-icons/ci';
import { FaDiamond } from 'react-icons/fa6';
import { MouseTracker } from '@/components/MouseTracker';

export default function Home() {
    return (
        <main className="bg-white">
            <div className="flex flex-col min-h-screen p-5 items-center">
                <div className="flex flex-row w-[55%] text-black self-center h-[540px] mt-32">
                    <Flower/>
                    <div className="flex flex-col w-fit pl-14 h-[380px] justify-center">
                        <h1 className="font-bold text-7xl text-[#dd462c] self-start">Hello!</h1>
                        <p className="text-5xl leading-tight font-medium mt-4">
                            I'm Leyton, a <br/>
                            <span className="flex flex-row items-center">
                                c
                                <CiFaceSmile size={37}
                                             className="mt-2 mr-[-2px]"/>mputer
                            engineering</span>
                            student at
                            Purdue.
                        </p>
                    </div>
                </div>
                <ProjectDisplayWeb color="#3bb273" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                        nec feugiat nisl
                        pretium
                        fusce." icon={<IoTriangle size={36}/>} title={'Course Rater'}
                                   subtitle={'PROJECT MANAGER & FULL STACK DEVELOPER'} image={CourseRater}
                                   image2={CourseRaterMobile} url="course-rater"/>
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
                <ProjectDisplayWeb color="#dd462c" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                        nec feugiat nisl
                        pretium
                        fusce." icon={<FaDiamond size={40}/>} title={'Deaf Kids Outreach'}
                                   subtitle={'FULL STACK WEBSITE'} image={DKO}
                                   type={2} url="deaf-kids-outreach"/>
                <div className="h-[1px] w-[92%] bg-gray-300"/>
            </div>
        </main>
    );
}
