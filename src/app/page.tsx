"use client";

import ProjectDisplay from '@/components/ProjectDisplay';
import { Flower } from '@/components/Flower';
import { IoTriangle } from 'react-icons/io5';
import CourseRater from "../assets/rating_page.png"
import Jumpseat from "../assets/jumpseatLandingPage.png"
import CLIMELandingPage from "../assets/CLIME_Landing_page.png"
import CLIMEChat from "../assets/CLIME_Chat.png"
import { ImDiamonds } from 'react-icons/im';
import { BsFillSuitDiamondFill } from 'react-icons/bs';

export default function Home() {
    return (
        <main className="bg-white">
            <div className="flex flex-col min-h-screen p-5 items-center">
                <div className="flex flex-row w-[55%] text-black self-center h-[540px] mt-32">
                    <Flower/>
                    <div className="flex flex-col w-fit pl-14 h-[380px] justify-center">
                        <h1 className="font-bold text-7xl text-[#dd462c] self-start">Hello!</h1>
                        <p className="text-5xl leading-tight font-medium mt-4">
                            I'm Leyton, a <br/>computer engineering student at Purdue.
                        </p>
                    </div>
                </div>
                <ProjectDisplay color="#3bb273" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                        nec feugiat nisl
                        pretium
                        fusce." icon={<IoTriangle size={36}/>} title={'Course Rater'}
                                subtitle={'FULL STACK WEBSITE'} image={CourseRater}/>
                <ProjectDisplay color="#304c89" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                        nec feugiat nisl
                        pretium
                        fusce." icon={<ImDiamonds size={40}/>} title={'Jumpseat'}
                                subtitle={'FULL STACK WEBSITE'} image={Jumpseat}/>
                <ProjectDisplay color="#839ebd" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                        nec feugiat nisl
                        pretium
                        fusce." icon={<BsFillSuitDiamondFill size={40}/>} title={'CLIME'}
                                subtitle={'APP'} image={CLIMELandingPage} image2={CLIMEChat} type="app"/>
                <div className="h-[1px] w-[92%] bg-gray-300"/>
            </div>
        </main>
    );
}
