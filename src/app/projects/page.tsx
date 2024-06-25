"use client";

import ProjectDisplayWeb from '@/components/ProjectDisplayWeb';
import { IoTriangle } from 'react-icons/io5';
import CourseRater from "../../../public/rating_page.png"
import CourseRaterMobile from "../../../public/CourseRater/course_rater_mobile.jpg"
import DKO from "../../../public/DKO.png"
import { FaDiamond } from 'react-icons/fa6';
import { ImDiamonds } from 'react-icons/im';
import { BsFillSuitDiamondFill } from 'react-icons/bs';
import { MdHexagon } from 'react-icons/md';
import Jumpseat from "../../../public/Jumpseat/jumpseatLandingPage.png"
import JumpseatMobile from "../../../public/Jumpseat/jumpseat_blog.png"
import ProjectDisplayApp from '@/components/ProjectDisplayApp';
import CLIMELandingPage from "../../../public/CLIME/CLIME_Landing_page.png"
import TSCHome from "../../../public/EVH/TSCHome.png"


export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen p-5 items-center text-black bg-white">
            <ProjectDisplayWeb color="#3bb273" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                    nec feugiat nisl
                    pretium
                    fusce." icon={<IoTriangle size={36}/>} title={'Course Rater'}
                               subtitle={'PROJECT MANAGER & FULL STACK DEVELOPER'} image={CourseRater}
                               image2={CourseRaterMobile} url="course-rater"/>
            <ProjectDisplayWeb color="#304c89" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                    nec feugiat nisl
                    pretium
                    fusce." icon={<ImDiamonds size={40}/>} title={'Jumpseat'}
                               subtitle={'FULL STACK WEBSITE'} image={Jumpseat} image2={JumpseatMobile}
                               url={"/jumpseat"}/>
            <ProjectDisplayApp color="#839ebd" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                    nec feugiat nisl
                    pretium
                    fusce." icon={<BsFillSuitDiamondFill size={40}/>} title={'CLIME'}
                               subtitle={'APP'} image={CLIMELandingPage} image2={"/CLIME/CLIME_Chat.png"}
                               url={"/clime"}/>
            <ProjectDisplayWeb color="#F5E579" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                    nec feugiat nisl
                    pretium
                    fusce." icon={<MdHexagon size={40}/>} title={'Earth History Visualization'}
                               subtitle={'FULL STACK WEBSITE'} image={TSCHome}
                               url={"evh"} type={2}/>
            <ProjectDisplayWeb color="#dd462c" description="Eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor
                    nec feugiat nisl
                    pretium
                    fusce." icon={<FaDiamond size={40}/>} title={'Deaf Kids Outreach'}
                               subtitle={'FULL STACK WEBSITE'} image={DKO}
                               type={2} url="dko"/>
        </div>
    )
}