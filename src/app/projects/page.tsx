"use client";

import ProjectDisplayWeb from "@/components/ProjectDisplayWeb";
import { IoTriangle } from "react-icons/io5";
import CourseRater from "../../../public/rating_page.png";
import CourseRaterMobile from "../../../public/CourseRater/course_rater_mobile.jpg";
import DKO from "../../../public/DKO.png";
import { FaDiamond } from "react-icons/fa6";
import { ImDiamonds } from "react-icons/im";
import { BsFillSuitDiamondFill } from "react-icons/bs";
import { MdHexagon } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Jumpseat from "../../../public/Jumpseat/jumpseatLandingPage.png";
import JumpseatMobile from "../../../public/Jumpseat/jumpseat_blog.png";
import ProjectDisplayApp from "@/components/ProjectDisplayApp";
import CLIMELandingPage from "../../../public/CLIME/CLIME_Landing_page.png";
import TSCHome from "../../../public/EVH/TSCHome.png";
import CLIME_Chat from "../../../public/CLIME_Chat.png";
import TCCMap from "../../../public/TCC/map.png";
import TCCList from "../../../public/TCC/list.png";

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen p-3 sm:p-5 items-center text-black bg-white pt-10">
            <ProjectDisplayWeb
                color="#3bb273"
                description="Course Rater provides in-depth reviews and statistics to help Purdue students create optimized schedules."
                icon={<IoTriangle size={36} />}
                title={"Course Rater"}
                subtitle={"FULL STACK WEBSITE"}
                image={CourseRater}
                image2={CourseRaterMobile}
                url="course-rater"
            />
            <ProjectDisplayWeb
                color="#304c89"
                description="Optimize travel planning with AI insights, automated tasks, and ride-sharing for efficient, cost-effective travel solutions."
                icon={<ImDiamonds size={40} />}
                title={"Jumpseat"}
                subtitle={"FULL STACK WEBSITE"}
                image={Jumpseat}
                image2={JumpseatMobile}
                url={"/jumpseat"}
            />
            <ProjectDisplayApp
                color="#dd462c"
                description="Connects the homeless community in Tippecanoe County to vital resources such as food pantries and shelters through intuitive, accessible interfaces."
                icon={<FaDiamond size={40} />}
                title={"Tippy County Connect"}
                subtitle={"APP"}
                image={TCCMap}
                image2={TCCList}
                url={"/tcc"}
                android={true}
            />
            <ProjectDisplayWeb
                color="#F5E579"
                description="Improve Time Scale Creator Online for geologists with enhanced accessibility and interactive features for geologic data visualization."
                icon={<MdHexagon size={40} />}
                title={"Earth History Visualization"}
                subtitle={"FULL STACK WEBSITE"}
                image={TSCHome}
                url={"evh"}
                type={2}
            />
            <ProjectDisplayApp
                color="#839ebd"
                description="App enhances factory safety with alarm detection, clear speech transmission, selective messaging, and section-specific displays for communication."
                icon={<BsFillSuitDiamondFill size={40} />}
                title={"CLIME"}
                subtitle={"APP"}
                image={CLIMELandingPage}
                image2={CLIME_Chat}
                url={"/clime"}
            />
            <ProjectDisplayWeb
                color="#3bb273"
                description="Standardize ASL in STEM education with Khan Academy, enhancing video creation and feedback for visual learning."
                icon={<GoDotFill size={40} />}
                title={"Deaf Kids Outreach"}
                subtitle={"FULL STACK WEBSITE"}
                image={DKO}
                type={2}
                url="dko"
            />
        </div>
    );
}
