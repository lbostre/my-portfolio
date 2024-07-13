"use client";
import React from "../../../public/Logos/react.svg"
import PrevLanding from "../../../public/Jumpseat/prevLanding.png"
import CustomLight from "../../../public/Jumpseat/customLight.png"
import CustomDark from "../../../public/Jumpseat/customDark.png"
import SpringLight from "../../../public/Jumpseat/springLight.png"
import SpringDark from "../../../public/Jumpseat/springDark.png"
import Figma from "../../../public/Jumpseat/figmaJumpseat.png"
import page404 from "../../../public/Jumpseat/404page.png"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Image from 'next/image';
import { useState } from 'react';
import { IoArrowDown } from 'react-icons/io5';
import { ImDiamonds } from 'react-icons/im';
import { ImageDisplay } from '@/components/ImageDisplay';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

export default function JumpseatPage() {

    const [firstName, setFirstName] = useState("")

    return (
        <div className="flex flex-col bg-white text-black w-full min-h-screen mt-[75px] sm:px-96 px-4">
            <div className="flex flex-row justify-between items-end">
                <h1 className="text-4xl sm:text-6xl font-bold">Jumpseat</h1>
                <Link target="_blank" href="https://jumpseatapp.com" replace={true}
                      className="flex flex-row items-center gap-1 border-b-[2px] border-[#304c89] text-[#304c89] mr-3 opacity-75 hover:opacity-100 transition-opacity
                      ">
                    <p className="sm:text-lg">See live</p>
                    <LuArrowUpRight size={22}/>
                </Link>
            </div>
            <div className="flex flex-col">
                <div
                    className={`h-fit w-fit border-4 sm:border-8 border-black rounded-2xl sm:rounded-3xl overflow-clip bg-white self-center mt-8 shadow-2xl`}>
                    <Image
                        src="/Jumpseat/jumpseatLandingPage.png"
                        height={500}
                        width={800}
                        alt={"Deaf kids outreach logo"}
                        className="h-fit rounded-lg"
                    />
                </div>
            </div>

            <div className="hidden sm:flex flex-row mt-14 gap-32 w-full">
                <div
                    className="flex flex-row [writing-mode:vertical-lr] text-5xl font-medium self-center">
                    <h2>Overview</h2>
                </div>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-14">
                        <div>
                            <h3 className="text-2xl font-medium">Problem</h3>
                            <p>Students and parents face financial and time inefficiencies due to dynamic airline
                                pricing, disorganized shuttle services, and outdated shuttle software, resulting in
                                suboptimal travel arrangements.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">My Role</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <div>
                            <div
                                className="flex flex-row text-2xl font-medium self-center">
                                <h2>S</h2><ImDiamonds size={20}
                                                      className="mt-[7px] text-[#304c89]"/>
                                <h2>lution</h2>
                            </div>
                            <p>A modern, aesthetic website offering AI-powered insights, automated shuttle tasks, and
                                optimized schedules, helping students and parents save time and money by finding ideal
                                travel options and ride-sharing partners.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">Scope</h3>
                            <p>January 2024 - Present</p>
                            <p>Team: 15 members</p>
                            <p>WebDev Team: 4 members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden flex flex-col mt-8 gap-4 w-full">
                <div
                    className="flex text-3xl font-medium self-center">
                    <h2>Overview</h2>
                </div>
                    <div>
                        <h3 className="text-xl font-medium">Problem</h3>
                        <p>Students and parents face financial and time inefficiencies due to dynamic airline
                            pricing, disorganized shuttle services, and outdated shuttle software, resulting in
                            suboptimal travel arrangements.</p>
                    </div>
                    <div>
                        <div
                            className="flex flex-row text-xl font-medium self-center">
                            <h2>S</h2><ImDiamonds size={18}
                                                  className="mt-[4px] text-[#304c89]"/>
                            <h2>lution</h2>
                        </div>
                        <p>A modern, aesthetic website offering AI-powered insights, automated shuttle tasks, and
                            optimized schedules, helping students and parents save time and money by finding ideal
                            travel options and ride-sharing partners.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">My Role</h3>
                        <p>Full Stack Developer</p>
                    </div>
                <div>
                    <h3 className="text-xl font-medium">Scope</h3>
                    <p>January 2024 - Present</p>
                    <p>Team: 15 members</p>
                    <p>WebDev Team: 4 members</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 gap-5 sm:gap-10 pt-8">

                <ImageDisplay alt={"Figma work."}
                              description={"My work in Figma."}
                              image={Figma}/>
                <ImageDisplay alt={"Previous landing/search page."}
                              description={"Previous landing/search page. The bottom section rotates between different airlines/shuttle services that are offered on our website."}
                              image={PrevLanding}/>
                <ImageDisplay alt={"Search page with custom option for dates."}
                              description={"Search page. This page allows users to specify trip details, including custom dates as shown in the screen above."}
                              image={CustomLight}/>
                <ImageDisplay alt={"Search page with break options for dates."}
                              description={"This search page version allows users to select pre-programmed date options that align with their specific school, making the booking experience easier and less stressful."}
                              image={SpringLight}/>
                <ImageDisplay alt={"Search page with custom option for dates, dark mode."}
                              description={"Dark mode of search page in custom mode."}
                              image={CustomDark}/>
                <ImageDisplay alt={"Search page with break options for dates, dark mode."}
                              description={"Dark mode of search page in break mode."}
                              image={SpringDark}/>
                <div className="max-w-[960px]">
                    <h2 className="text-lg sm:text-xl font-medium mb-1">Example Code for Gradient Icons</h2>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa] w-[358px] sm:w-full">
                            <SyntaxHighlighter language="javascript" style={oneLight} className="sm:text-sm text-xs">
                                {"<svg width=\"0\" height=\"0\">\n" +
                                    "    <linearGradient\n" +
                                    "        id=\"blue-gradient\"\n" +
                                    "        x1=\"100%\"\n" +
                                    "        y1=\"100%\"\n" +
                                    "        x2=\"0%\"\n" +
                                    "        y2=\"0%\"\n" +
                                    "    >\n" +
                                    "        <stop stopColor=\"#1e40af\" offset=\"0%\"/>\n" +
                                    "        <stop stopColor=\"#3a84f5\" offset=\"100%\"/>\n" +
                                    "    </linearGradient>\n" +
                                    "</svg>\n" +
                                    "<BiSolidPlaneAlt\n" +
                                    "    size={90}\n" +
                                    "    style={{ fill: \"url(#blue-gradient)\" }}\n" +
                                    "    aria-hidden=\"true\"\n" +
                                    "/>"}
                            </SyntaxHighlighter>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center w-full h-full border-2 border-black rounded-2xl p-8 sm:p-[70px]">
                            <svg width="0" height="0">
                                <linearGradient
                                    id="blue-gradient"
                                    x1="100%"
                                    y1="100%"
                                    x2="0%"
                                    y2="0%"
                                >
                                    <stop stopColor="#1e40af" offset="0%"/>
                                    <stop stopColor="#3a84f5" offset="100%"/>
                                </linearGradient>
                            </svg>
                            <BiSolidPlaneAlt
                                size={90}
                                style={{ fill: "url(#blue-gradient)" }}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
                <ImageDisplay alt={"404 page"}
                              description={"404 page."}
                              image={page404}/>
            </div>
        </div>
    );
}

