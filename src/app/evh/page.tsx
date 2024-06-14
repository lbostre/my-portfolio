import React from "../../assets/Logos/react.svg"
import LoginProto from "../../assets/DKO/loginPrototype.png"
import LoginProto2 from "../../assets/DKO/loginboxproto2.png"
import LoginPage from "../../assets/DKO/newLoginPage.png"
import SignUp from "../../assets/DKO/newSignUpPage.png"
import TSCHome from "../../assets/EVH/TSCHome.png"
import FontOptions from "../../assets/EVH/fontmenu.png"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Image from 'next/image';
import { MdHexagon } from 'react-icons/md';
import java1 from "../../assets/EVH/java1.png"
import java2 from "../../assets/EVH/java2.png"
import java3 from "../../assets/EVH/java3.png"
import About from "../../assets/EVH/EVHabout.png"
import Spec from "../../assets/EVH/AboutPageSpec.png"
import { FaArrowTurnDown } from 'react-icons/fa6';
import { ImageDisplay } from '@/components/ImageDisplay';
import { IoArrowDown } from 'react-icons/io5';

export default function EVHPage() {

    return (
        <div className="flex flex-col bg-white text-black w-full min-h-screen mt-[75px] px-96">
            <h1 className="text-6xl font-bold">Earth History Visualization</h1>
            <div className="flex flex-col">
                <div
                    className={`h-fit w-fit border-8 border-black rounded-3xl overflow-clip bg-white self-center mt-8 shadow-2xl`}>
                    <Image
                        src={TSCHome}
                        height={500}
                        width={800}
                        alt={"Deaf kids outreach logo"}
                        className="h-fit rounded-lg"
                    />
                </div>
            </div>

            <div className="flex flex-row mt-14 gap-32 w-full ">
                <div
                    className="flex flex-row [writing-mode:vertical-lr] text-5xl font-medium self-center">
                    <h2>Overview</h2>
                </div>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-14">
                        <div>
                            <div
                                className="flex flex-row text-2xl font-medium self-center">
                                <h2>Pr</h2><MdHexagon size={20}
                                                      className="mt-[7px] mr-[1px] text-[#F5E579]"/>
                                <h2>blem</h2>
                            </div>
                            <p>The Time Scale Creator software for geologists needs to be made more publicly accessible,
                                enabling users to plot and view regional geological data based on specified time periods
                                and import data packages.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">My Role</h3>
                            <p>Front End Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <div>
                            <div
                                className="flex flex-row text-2xl font-medium self-center">
                                <h2>Solution</h2>
                            </div>
                            <p>Enhance the Time Scale Creator Online web application with a user-friendly interface that
                                incorporates all necessary features, enabling users to create and modify charts and maps
                                for a deeper understanding of Earth's geologic history.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">Scope</h3>
                            <p>January 2024 - Present</p>
                            <p>Team: 8 members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 gap-10 pt-8">
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-2xl font-semibold">Context</h3>
                    <p className="indent-8">There exists an JAVA program called Time Scale Creator, which allows
                        geologists to plot and view data based on certain parameters such as time periods and import
                        each region’s specific data package. The purpose of our team is to translate the JAVA program
                        into a website. This involves creating website specific elements through React and Typescript
                        while also following the rules set by the JAVA program.
                    </p>
                    <p className="indent-8">As a newcomer to the project, one of the challenges I faced was
                        understanding how all the different aspects of the website work and interact together.
                    </p>
                </div>
                <div className="flex flex-row w-full max-w-[960px] gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-20">
                            <div
                                className={`relative border-4 border-black rounded-3xl overflow-hidden`}>
                                <Image
                                    src={java2}
                                    width={400}
                                    alt={"login prototype"}
                                    className="w-full object-cover"
                                />
                            </div>
                            <FaArrowTurnDown size={40} className="text-[#F5E579]"/>
                        </div>
                        <div className="flex flex-row items-center gap-20">
                            <div
                                className={`relative border-4 border-black rounded-3xl overflow-hidden`}>
                                <Image
                                    src={java1}
                                    width={400}
                                    alt={"login prototype"}
                                    className="w-full object-cover"
                                />
                            </div>
                            <FaArrowTurnDown size={48} className="text-[#F5E579]"/>
                        </div>
                        <div className="flex flex-row items-center gap-20">
                            <div
                                className={`relative border-4 border-black rounded-3xl overflow-hidden`}>
                                <Image
                                    src={java3}
                                    width={400}
                                    alt={"login prototype"}
                                    className="w-full object-cover"
                                />
                            </div>
                            <FaArrowTurnDown size={60} className="text-[#F5E579]"/>
                        </div>
                        <p className="bg-transparent mt-1 ml-1 max-w-[960px]">Component screenshots from the Time Scale
                            Creator Java program. These are the menu's that allow the user to customize the style of
                            text in their chart generation.</p>
                    </div>
                </div>

                <div>
                    <div
                        className={`relative border-4 border-black rounded-3xl overflow-hidden`}>
                        <Image
                            src={FontOptions}
                            width={960}
                            alt={"font options menu"}
                        />
                    </div>
                    <p className="bg-transparent mt-1 ml-1 max-w-[960px]">Font options menu made in React. Putting this
                        together involved doing research to find the best libraries that could fufill certain needs such
                        as the color picker.</p>
                </div>
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-2xl font-semibold">Design Process</h3>
                    <p className="indent-8">On this team of VIP, the design process of creating an aspect of the website
                        starts with a specification, or a spec for short. A spec (functional specification) is a
                        detailed document that outlines the design, functionality, and requirements of a software
                        program. Its purpose is to facilitate thorough design, serve as a communication tool, guide
                        project scheduling, and ensure everyone understands how the program should work, ultimately
                        saving time and preventing errors.
                    </p>
                    <p className="indent-8">Below is the spec I created before putting the about page into code. I found
                        creating this to be helpful in portraying my vision and getting feedback from the team.
                    </p>
                </div>
                <ImageDisplay image={Spec} alt={"about page"} description={"About Page"}/>

                <div className="max-w-[960px]">
                    <h2 className="text-xl font-medium mb-1">Example Code for About Page</h2>
                    <div className="flex flex-col gap-2">
                        <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa]">
                            <SyntaxHighlighter language="javascript" style={oneLight} className="text-sm">
                                {"type AboutCardProps = {\n" +
                                    "  name: string;\n" +
                                    "  role: string;\n" +
                                    "  homeTown: string;\n" +
                                    "  timeWorked: string;\n" +
                                    "  proPic: string | undefined;\n" +
                                    "};\n" +
                                    "export const AboutCard = ({ name, role, homeTown, timeWorked, proPic = defaultProPic }: AboutCardProps) => {\n" +
                                    "  return (\n" +
                                    "    <Card\n" +
                                    "      sx={{\n" +
                                    "        minWidth: 330,\n" +
                                    "        marginLeft: \".5vw\",\n" +
                                    "        marginRight: \".5vw\",\n" +
                                    "        marginTop: \".5vw\",\n" +
                                    "        marginBottom: \".5vw\"\n" +
                                    "      }}>\n" +
                                    "      <CardMedia sx={{ height: 250 }} image={proPic} title={name} />\n" +
                                    "      <CardContent>\n" +
                                    "        <Typography gutterBottom variant=\"h5\" component=\"div\">\n" +
                                    "          {name}\n" +
                                    "        </Typography>\n" +
                                    "        <Typography variant=\"body1\" color=\"text.secondary\">\n" +
                                    "          {role}\n" +
                                    "        </Typography>\n" +
                                    "        <Typography variant=\"body1\" color=\"text.secondary\">\n" +
                                    "          {homeTown}\n" +
                                    "        </Typography>\n" +
                                    "        <Typography variant=\"body1\" color=\"text.secondary\">\n" +
                                    "          {timeWorked}\n" +
                                    "        </Typography>\n" +
                                    "      </CardContent>\n" +
                                    "    </Card>\n" +
                                    "  );\n" +
                                    "};"}
                            </SyntaxHighlighter>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa] w-fit">
                                <SyntaxHighlighter language="javascript" style={oneLight} className="text-sm">
                                    {"<div\n" +
                                        "    style={{\n" +
                                        "        display: \"flex\",\n" +
                                        "        flexDirection: \"row\",\n" +
                                        "        alignItems: \"center\",\n" +
                                        "        justifyContent: \"center\",\n" +
                                        "        alignSelf: \"center\",\n" +
                                        "        width: \"90%\",\n" +
                                        "        flexWrap: \"wrap\"\n" +
                                        "    }}>\n" +
                                        "    {members.map(function (member) {\n" +
                                        "        return (\n" +
                                        "            <AboutCard\n" +
                                        "                key={member.name}\n" +
                                        "                name={member.name}\n" +
                                        "                role={member.role}\n" +
                                        "                homeTown={member.homeTown}\n" +
                                        "                timeWorked={member.timeWorked}\n" +
                                        "                proPic={member.proPic}\n" +
                                        "            />\n" +
                                        "        );\n" +
                                        "    })}\n" +
                                        "</div>"}
                                </SyntaxHighlighter>
                            </div>
                            <div className="w-[50%] flex flex-col">
                                <h5 className="font-medium">Typescript</h5>
                                <p className="bg-transparent indent-8">This project was my first experience working with
                                    TypeScript. Since I was already very familiar with JavaScript when I joined the
                                    project, picking up TypeScript wasn't too challenging. Using TypeScript almost
                                    exclusively since starting this project, I've come to appreciate the clarity
                                    provided by types, rather than viewing them as extra work.</p>
                                <h5 className="font-medium  mt-3">Putting it all Together</h5>
                                <p className="bg-transparent indent-8">After working on the specification and receiving
                                    feedback from the team, I began developing the card component and subsequently the
                                    about page. The code for the card component, which accepts customizable props, is
                                    shown above. We use this component to map an array containing all the team members'
                                    data. Below, you can see the final product.</p>
                                <IoArrowDown className="self-center mt-14 text-[#F5E579] animate-bounce" size={100}/>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageDisplay image={About} alt={"about page"}
                              description={"About Page. Using component mapping and an array to store the data makes this page easy to expand."}/>
            </div>
        </div>
    );
}

