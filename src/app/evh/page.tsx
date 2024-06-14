import React from "../../assets/Logos/react.svg"
import LoginProto from "../../assets/DKO/loginPrototype.png"
import LoginProto2 from "../../assets/DKO/loginboxproto2.png"
import LoginPage from "../../assets/DKO/newLoginPage.png"
import SignUp from "../../assets/DKO/newSignUpPage.png"
import DKO from "../../assets/DKO.png"
import TSCHome from "../../assets/EVH/TSCHome.png"
import FontOptions from "../../assets/EVH/fontmenu.png"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Image from 'next/image';
import { IoArrowDown } from 'react-icons/io5';
import { MdHexagon } from 'react-icons/md';
import java1 from "../../assets/EVH/java1.png"
import java2 from "../../assets/EVH/java2.png"
import java3 from "../../assets/EVH/java3.png"
import { FaArrowTurnDown } from 'react-icons/fa6';

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
                    <h3 className="text-2xl font-semibold">Background</h3>
                    <p className="indent-8">Deaf Kids Outreach was the first "real world" project that I worked on. I
                        got this opportunity through the Engineering Projects in Community Service program at Purdue
                        University. This was the first project where I used React along with other website developing
                        tools like flexbox and CSS grid.
                    </p>
                    <p className="indent-8">Having been very inexperienced at the time, my responsibilities were to
                        create the login and signup pages.
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
                            Creator Java program. These are menu's that allow the user to customize the style of text in
                            their chart generation.</p>
                    </div>
                    {/*<div className="w-[50%] flex flex-col">*/}
                    {/*    <h5 className="font-medium">Login Prototype #1</h5>*/}
                    {/*    <p className="bg-transparent indent-8"> At this stage of*/}
                    {/*        development, we decided*/}
                    {/*        against*/}
                    {/*        using any authentication libraries. Instead, we planned to store usernames directly and hash*/}
                    {/*        passwords for security purposes.</p>*/}
                    {/*    <h5 className="font-medium  mt-3">Login Prototype #2</h5>*/}
                    {/*    <p className="bg-transparent indent-8">At this stage, we had completed our first design review,*/}
                    {/*        presenting our progress and future plans to our partners and other reviewers. One reviewer*/}
                    {/*        suggested using an authentication library, which we then discussed as a team and agreed was*/}
                    {/*        a good idea. We chose Google's authentication due to its large user base. As a result, I*/}
                    {/*        implemented Google login and sign-up buttons on the login page.</p>*/}
                    {/*    <IoArrowDown className="self-center mt-14 text-[#dd462c] animate-bounce" size={100}/>*/}
                    {/*</div>*/}
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
                    <p className="bg-transparent mt-1 ml-1 max-w-[960px]">Font options menu made in React.</p>
                </div>
                <div>
                    <div
                        className={`relative border-4 border-black rounded-3xl overflow-hidden`}>
                        <Image
                            src={LoginPage}
                            width={960}
                            alt={"login page"}
                        />
                    </div>
                    <p className="bg-transparent mt-1 ml-1 max-w-[960px]">Final Login page</p>
                </div>
                <div className="max-w-[960px]">
                    <h2 className="text-xl font-medium mb-1">Example Input Code from Sign Up Page</h2>
                    <div className="flex flex-row items-center gap-4">
                        <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa]">
                            <SyntaxHighlighter language="javascript" style={oneLight} className="text-sm">
                                {".textInput {\n" +
                                    "    width: 15vw;\n" +
                                    "    height: 5vh;\n" +
                                    "    border-radius: 10px;\n" +
                                    "    border: solid 2px #00cceb;\n" +
                                    "    outline: none;\n" +
                                    "    font-size: 16px;\n" +
                                    "    padding-left: .3vw;\n" +
                                    "    padding-right: .3vw;\n" +
                                    "}\n" +
                                    "\n" +
                                    ".textInputLabel {\n" +
                                    "    font-size: 14px;\n" +
                                    "    display: block;\n" +
                                    "    margin-left: .5vw;\n" +
                                    "}"}
                            </SyntaxHighlighter>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <div
                                className="flex flex-col items-center justify-center w-full h-max border-2 border-black rounded-2xl py-[70px]">
                                <div className="flex flex-col items-start">
                                    <label>First Name</label>
                                </div>
                            </div>
                            <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa]">
                                <SyntaxHighlighter language="javascript" style={oneLight} className="text-sm">
                                    {"<div className=\"flex flex-col items-start\">\n" +
                                        "    <label>First Name</label>\n" +
                                        "    <input className=\"textInput\" type=\"text\" placeholder={\"\"} value={firstName}\n" +
                                        "    onChange={(e) => setFirstName(e.target.value)}/>\n" +
                                        "</div>"}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`relative border-4 border-black rounded-3xl overflow-hidden`}>
                        <Image
                            src={SignUp}
                            width={960}
                            alt={"login prototype 2"}
                        />
                    </div>
                    <p className="bg-transparent mt-1 ml-1 max-w-[960px]">Sign up page, one of the first pages I
                        completed using CSS Grid.</p>
                </div>
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-2xl font-semibold">Takeaways</h3>
                    <p className="indent-8">Taking this class in my first year of college significantly contributed to
                        my learning throughout my college career. It was my first experience working with a large group
                        on a sizable coding project. I gained valuable insights into various programming practices in
                        web development and, more importantly, greatly enhanced my communication skills.
                    </p>
                    <p className="indent-8">As a young and ambitious student, I learned that large-scale projects
                        require time and patience. Initially, I saw projects as ambitious goals to tackle head-on with
                        friends, spending hours daily on contributions but rarely completing them. This project taught
                        me the importance of planning, documentation, and, most importantly in my opinion, iteration.
                    </p>
                </div>
            </div>
        </div>
    );
}
