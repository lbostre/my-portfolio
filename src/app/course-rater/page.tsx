import { WebPhoneLayout } from '@/components/WebPhoneLayout';
import CourseRater from "../../assets/rating_page.png"
import CourseRaterMobile from "../../assets/course_rater_mobile.jpg"
import { ImageDisplay } from '@/components/ImageDisplay';
import Home from "../../assets/course_rater_home.png"
import B20 from "../../assets/course_rater_b20.png"
import About from "../../assets/course_rater_about.png"
import Class from "../../assets/course_rater_class.png"
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import { IoTriangle } from 'react-icons/io5';

export default function CourseRaterPage() {
    return (
        <div className="flex flex-col bg-white text-black w-full min-h-screen mt-[75px] px-96">
            <div className="flex flex-row justify-between items-end">
                <h1 className="text-6xl font-bold">Course Rater</h1>
                <Link target="_blank" href="https://courserater.net" replace={true}
                      className="flex flex-row items-center gap-1 border-b-[2px] border-[#3bb273] text-[#3bb273] mr-3 opacity-75 hover:opacity-100 transition-opacity
                      ">
                    <p className="text-lg">See live</p>
                    <LuArrowUpRight size={22}/>
                </Link>
            </div>
            <WebPhoneLayout alt={"Course Rater Rating Page"} alt2={"Course Rater Home Page Mobile View"}
                            image={CourseRater} image2={CourseRaterMobile} padding={true}/>

            <div className="flex flex-row mt-14 gap-32 w-full ">
                <div
                    className="flex flex-row [writing-mode:vertical-lr] text-5xl font-medium self-center">
                    <h2>Over</h2><IoTriangle size={33} className="-rotate-90 ml-[4px] text-[#3bb273]"/><h2>iew</h2>
                </div>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-14">
                        <div>
                            <h3 className="text-2xl font-medium">Problem</h3>
                            <p>ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis
                                hendrerit
                                dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">My Role</h3>
                            <p>Project Manager and Full Stack Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <div>
                            <h3 className="text-2xl font-medium">Solution</h3>
                            <p>ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis
                                hendrerit
                                dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">Scope</h3>
                            <p>Ongoing project since May 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 gap-10 pt-8">
                <ImageDisplay alt={"Course rater home page"} description={"Home page for Course Rater"}
                              image={Home}/>
                <ImageDisplay alt={"Course rater bottom 20 GPA's"} description={"The bottom 20 GPA's at Purdue."}
                              image={B20} className="pb-8"/>
                <ImageDisplay alt={"Course rater home page"} description={"About page."}
                              image={About}/>
                <ImageDisplay alt={"Course rater class page"}
                              description={"A rating page for ECE 20002, a notoriously hard class."}
                              image={Class} className="pb-8"/>
            </div>
        </div>
    );
}
