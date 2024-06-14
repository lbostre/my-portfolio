import { WebPhoneLayout } from '@/components/WebPhoneLayout';
import CourseRater from "../../assets/rating_page.png"
import CourseRaterMobile from "../../assets/CourseRater/course_rater_mobile.jpg"
import { ImageDisplay } from '@/components/ImageDisplay';
import Home from "../../assets/CourseRater/course_rater_home.png"
import B20 from "../../assets/CourseRater/course_rater_b20.png"
import About from "../../assets/CourseRater/course_rater_about.png"
import Class from "../../assets/CourseRater/course_rater_class.png"
import ScheduleRater from "../../assets/CourseRater/course_rater_schedule_rater.png"
import ScheduleRaterOutput from "../../assets/CourseRater/course_rate_output_schedule_rater.png"
import Microsoft from "../../assets/CourseRater/course_rater_microsoft.png"
import NotFound from "../../assets/CourseRater/course_rater_404.png"
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import { IoTriangle } from 'react-icons/io5';
import React from "../../assets/Logos/react.svg"
import Express from "../../assets/Logos/express.png"
import Node from "../../assets/Logos/nodejs.png"
import Mongo from "../../assets/Logos/mongodb.png"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "./button.css"
import Image from 'next/image';

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
                            <p>Students face difficulties in creating optimized schedules due to a lack of comprehensive
                                course reviews and high-quality information, highlighting the need for a website
                                offering in-depth reviews and statistical insights.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">My Role</h3>
                            <p>Project Manager and Full Stack Developer</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">Tech Stack</h3>
                            <div className="flex flex-row gap-5">
                                <div className="flex flex-col items-center w-fit">
                                    <Image
                                        src={React}
                                        height={64}
                                        width={64}
                                        alt={"React logo"}
                                    />
                                    <p>React</p>
                                </div>
                                <div className="flex flex-col items-center w-fit">
                                    <Image
                                        src={Express}
                                        height={64}
                                        width={64}
                                        alt={"Express logo"}
                                    />
                                    <p>Express</p>
                                </div>
                                <div className="flex flex-col items-center w-fit">
                                    <Image
                                        src={Node}
                                        height={57}
                                        width={57}
                                        alt={"Nodejs logo"}
                                    />
                                    <p>NodeJS</p>
                                </div>
                                <div className="flex flex-col items-center w-fit">
                                    <Image
                                        src={Mongo}
                                        height={64}
                                        width={64}
                                        alt={"MongoDB logo"}
                                    />
                                    <p>MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <div>
                            <h3 className="text-2xl font-medium">Solution</h3>
                            <p>Course Rater offers in-depth course reviews and valuable statistics to help Purdue
                                students
                                create efficient and manageable schedules, saving them time and improving their academic
                                planning.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">Scope</h3>
                            <p>Ongoing project since May 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 gap-10 pt-8">
                <ImageDisplay alt={"Course rater home page"}
                              description={"Home page for Course Rater. I opted for a simple and sleek design."}
                              image={Home}/>
                <ImageDisplay alt={"Course rater Microsoft login modal"}
                              description={"Course Rater exclusively uses Microsoft login and accepts only valid Purdue emails. This ensures that all reviews on our website are created by verified Purdue students."}
                              image={Microsoft}/>
                <ImageDisplay alt={"Course rater class page"}
                              description={"A rating page for ECE 20002, a notoriously hard class. This page is available for every Purdue course, featuring grade statistics sorted by semester and professor. Each course page also allows anonymous ratings through a short form submission."}
                              image={Class} className="pb-8"/>
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-2xl font-semibold">About the design</h3>
                    <p className="indent-8">As someone who gets very invested in the aesthetics of a website, I
                        made numerous iterations during the design process. Starting with the color scheme, I wanted
                        something that would stand out, and the pink achieves just that. Initially, I considered a
                        light blue from a logo on one of my favorite t-shirts. I then put that blue color compliment
                        generator and which then suggested this pink as well as the yellow.</p>
                    <p className="indent-8">Style wise, I went for something modern and minimal. "Neobrutalism" is the
                        proper name for the style of the website. This type of style includes high contrasting colors,
                        prominent black outlines, and sharp shadows. This style also allows for extensive freedom and
                        creativity, portrayed by the button you can find further down this page. I often obsess over
                        small details like this, as I believe they really enhance the website's uniqueness and
                        appeal. If you like the design of this website, I recommend you checkout the <Link
                            target="_blank"
                            href="https://figma.com" className="underline text-[#3bb273]">Figma</Link> or&nbsp;
                        <Link target="_blank"
                              href="https://gumroad.com" className="underline text-[#3bb273]">Gumroad</Link> websites.
                    </p>
                </div>
                <ImageDisplay alt={"Rate your schedule page"}
                              description={'The "Rate Your Schedule" page. Students can input their schedule and get a detailed output back including information like expected number of midterms and the average GPA for their inputted schedule.'}
                              image={ScheduleRater}/>
                <ImageDisplay alt={"Schedule rater output"}
                              description={"A real example of the output given by the \"Rate Your Schedule\" page with the course schedule I took during my Spring '22 semester. Statistics such as average GPA are derived from our grade data, while metrics like hours per week are calculated from user reviews."}
                              image={ScheduleRaterOutput} className="pb-8"/>
                <ImageDisplay alt={"Course rater bottom 20 GPA's"}
                              description={"The bottom 20 GPA's at Purdue. Having looked through the data we have for grades, I thought it would be interesting to know which classes historically had the lowest GPA's. You can also view the lowest GPA's by semester."}
                              image={B20} className="pb-8"/>

                <div className="max-w-[960px]">
                    <h2 className="text-xl font-medium mb-1">Example Button Component from Course-Rater</h2>
                    <div className="flex flex-row items-center gap-4">
                        <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa]">
                            <SyntaxHighlighter language="javascript" style={oneLight} className="text-sm">
                                {"export const Button = ({ type = 'button', text, onClick }) => {\n" +
                                    "  return (\n" +
                                    "    <>\n" +
                                    "      <button\n" +
                                    "        type={type}\n" +
                                    "        className=\"btn btn-primary\"\n" +
                                    "        id=\"button\"\n" +
                                    "        style={{ backgroundColor: '#e35f8d' }}\n" +
                                    "        onClick={onClick}\n" +
                                    "      >\n" +
                                    "        {text}\n" +
                                    "      </button>\n" +
                                    "    </>\n" +
                                    "  );\n" +
                                    "};\n" +
                                    "\n" +
                                    "// prop types\n" +
                                    "Button.propTypes = {\n" +
                                    "  type: PropTypes.string,\n" +
                                    "  text: PropTypes.string.isRequired,\n" +
                                    "  onClick: PropTypes.func.isRequired,\n" +
                                    "};"}
                            </SyntaxHighlighter>
                        </div>
                        <div className="flex flex-col gap-4 items-center ">
                            <div
                                className="flex items-center justify-center w-full h-max border-2 border-black rounded-2xl py-[94px]">
                                <button
                                    className="p-2 border-2 border-black rounded-md h-fit w-fit"
                                    id="button"
                                    style={{ backgroundColor: "#e35f8d" }}
                                >
                                    <p>Click me!</p>
                                </button>
                            </div>
                            <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa]">
                                <SyntaxHighlighter language="javascript" style={oneLight} className="text-sm">
                                    {"#button {\n" +
                                        "  border: 2px solid black;\n" +
                                        "  box-shadow: 4px 4px #000000;\n" +
                                        "  color: black;\n" +
                                        "}\n" +
                                        "\n" +
                                        "#button:active {\n" +
                                        "  transform: translateY(2px) translateX(2px);\n" +
                                        "  box-shadow: 2px 2px #000000;\n" +
                                        "}"}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageDisplay alt={"Course rater about page"} description={"About page."}
                              image={About}/>
                <ImageDisplay alt={"Course rater page not found page"} description={"Page Not Found page."}
                              image={NotFound}/>
            </div>
        </div>
    );
}
