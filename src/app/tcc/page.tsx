"use client";
import React from "../../../public/Logos/react.svg";

import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";

import team from "../../../public/TCC/team.jpg";
import action from "../../../public/TCC/testing_in_action.jpg";
import googlePlay from "../../../public/TCC/google-play.png";
import figma from "../../../public/TCC/figma.png";

export default function TCCPage() {
    return (
        <div className="flex flex-col bg-white text-black w-full min-h-screen mt-[75px] sm:px-96 px-4 ">
            <h1 className="text-2xl sm:text-5xl font-bold">
                Tippy County Connect
            </h1>
            <div className="flex flex-row justify-center gap-3 sm:gap-14">
                <div className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center">
                    <div>
                        <Image
                            src="/TCC/list.png"
                            height={560}
                            width={280}
                            alt={"Tippy County Connect list page"}
                            className="h-fit"
                        />
                    </div>
                </div>
                <div className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center">
                    <div>
                        <Image
                            src="/TCC/map.png"
                            height={560}
                            width={280}
                            alt={"Map screen"}
                            className="h-fit"
                        />
                    </div>
                </div>
                <div className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center">
                    <div>
                        <Image
                            src="/TCC/resource.png"
                            height={560}
                            width={280}
                            alt={"Individual resource page"}
                            className="h-fit"
                        />
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex flex-row mt-14 gap-32 w-full">
                <div className="flex flex-row [writing-mode:vertical-lr] text-5xl font-medium self-center">
                    <h2>Overview</h2>
                </div>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-14">
                        <div>
                            <h3 className="text-2xl font-medium">Problem</h3>
                            <p>
                                Homeless individuals in Tippecanoe County
                                struggle to access reliable information about
                                available shelters, food pantries, and essential
                                resources.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">My Role</h3>
                            <p>Project Manager and Developer</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <div>
                            <div className="flex flex-row text-xl font-medium self-center">
                                <h3 className="text-2xl font-medium">S</h3>
                                <FaDiamond
                                    size={16}
                                    className="-rotate-90 mt-[8px] mr-[1px] text-[#dd462c]"
                                />
                                <h3 className="text-2xl font-medium">lution</h3>
                            </div>
                            <p>
                                A mobile app and website that provides the
                                homeless community with accessible, real-time
                                information on shelters, food pantries, and
                                other essential services.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">Scope</h3>
                            <p>January 2025 - May 2025</p>
                            <p>Team: 7 members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden flex flex-col mt-14 gap-5 w-full">
                <div className="flex flex-row text-3xl font-medium self-center">
                    <h2>Overview</h2>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <h3 className="text-xl font-medium">Problem</h3>
                        <p>
                            Homeless individuals in Tippecanoe County struggle
                            to access reliable information about available
                            shelters, food pantries, and essential resources.
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-row text-xl font-medium self-center">
                            <h3 className="text-xl font-medium">S</h3>
                            <FaDiamond
                                size={16}
                                className="-rotate-90 mt-[8px] mr-[1px] text-[#dd462c]"
                            />
                            <h3 className="text-xl font-medium">lution</h3>
                        </div>
                        <p>
                            A mobile app and website that provides the homeless
                            community with accessible, real-time information on
                            shelters, food pantries, and other essential
                            services.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">My Role</h3>
                        <p>Project Manager and Developer</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Scope</h3>
                        <p>January 2025 - May 2025</p>
                        <p>Team: 7 members</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 gap-4 sm:gap-10 pt-8">
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                        Experience as Project Manager
                    </h3>
                    <p className="sm:indent-8 indent-4">
                        As the project manager, I took on the responsibility of
                        keeping the team on track by setting clear goals,
                        assigning tasks, and regularly reviewing pull requests
                        to ensure quality and consistency. I served as a
                        reference point for team members who were newer to
                        coding, guiding them through challenges and offering
                        support when needed. Managing a team of six who were
                        focused on the website version of the project, I made
                        team decisions by facilitating discussions and
                        encouraging collaboration. Throughout this process, I
                        balanced my own solo development on the mobile app,
                        ensuring both aspects of the project progressed smoothly
                        and efficiently.
                    </p>
                </div>
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                        Video Demo's
                    </h3>
                </div>
                <div className="max-w-[960px]">
                    <div className="flex flex-col md:flex-row justify-center gap-3 sm:gap-2 w-full">
                        <div className="flex min-w-[50%] justify-center items-center">
                            <div className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center min-w-72">
                                <iframe
                                    width="100%"
                                    height="660"
                                    src={`https://youtube.com/embed/49Nxik5u2dg`}
                                    title={"YouTube video"}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="flex items-center pb-8 sm:pb-32">
                            <p className="bg-transparent mt-2 sm:mt-5 ml-1 max-w-[960px] text-sm sm:text-md">
                                <span className="font-bold">Map screen</span>:
                                This screen displays the user's location in
                                relation to all local resources. You are able to
                                filter by resource type as well as search for a
                                specific resource by name or keyword.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[960px]">
                    <div className="flex flex-col-reverse md:flex-row justify-center gap-3 sm:gap-2 w-full">
                        <div className="flex items-center pb-8 sm:pb-32">
                            <p className="bg-transparent mt-2 sm:mt-5 ml-1 max-w-[960px] text-sm sm:text-md">
                                <span className="font-bold">List screen</span>:
                                This screen displays all the available resources
                                in a list format. You are able to filter by
                                resource type as well as search for a specific
                                resource by name or keyword. You can also tap on
                                a resource to view more information about it. By
                                clicking on the map icon in the top right
                                corner, you can shortcut to the map screen.
                            </p>
                        </div>
                        <div className="flex min-w-[50%] justify-center items-center">
                            <div className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center min-w-72">
                                <iframe
                                    width="100%"
                                    height="660"
                                    src={`https://youtube.com/embed/S1ku39fSFD8`}
                                    title={"YouTube video"}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[960px]">
                    <div className="flex flex-col md:flex-row justify-center gap-3 sm:gap-2 w-full">
                        <div className="flex min-w-[50%] justify-center items-center">
                            <div className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center min-w-72">
                                <iframe
                                    width="100%"
                                    height="660"
                                    src={`https://youtube.com/embed/KEC0NNv0VU0`}
                                    title={"YouTube video"}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="flex items-center pb-8 sm:pb-32">
                            <p className="bg-transparent mt-2 sm:mt-5 ml-1 max-w-[960px] text-sm sm:text-md">
                                <span className="font-bold">Filter screen</span>
                                : This screen allows the user to find a resource
                                open on a specific day and time. The user can
                                select a day of the week and a time, and the app
                                will display all resources that are open at that
                                time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[960px]">
                    <div className="flex flex-col-reverse md:flex-row justify-center gap-3 sm:gap-2 w-full">
                        <div className="flex items-center pb-8 sm:pb-32">
                            <p className="bg-transparent mt-2 sm:mt-5 ml-1 max-w-[960px] text-sm sm:text-md">
                                <span className="font-bold">
                                    Resource screen
                                </span>
                                : This screen displays all information about an
                                individual resource. The user can view the name,
                                address, phone number, email, and hours of
                                operation. Each contact item on the screen is a
                                shortcut to the user's phone, allowing them to
                                call or email the resource directly. The user
                                can also view general information about the
                                resource and the services it provides.
                            </p>
                        </div>
                        <div className="flex min-w-[50%] justify-center items-center">
                            <div className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center min-w-72">
                                <iframe
                                    width="100%"
                                    height="660"
                                    src={`https://youtube.com/embed/g_V3cYq8Cww`}
                                    title={"YouTube video"}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                        User Testing
                    </h3>
                    <p className="bg-transparent indent-4 ml-1 max-w-[960px] text-sm sm:text-md">
                        We conducted user testing with a group of five homeless
                        volunteers from LTHC Homeless Services. The goal was to
                        collect feedback for the app and website and to learn
                        more about our real users. For our testing, we assigned
                        each user a set of tasks to complete. We then observed
                        them as they completed the tasks and took notes on their
                        feedback. An example of a task would be to find the
                        phone number for a given resource. The users were very
                        receptive to the app and website, and they provided us
                        with valuable feedback that we used to improve the
                        project. We also learned a lot about our users and their
                        needs, which helped us to better understand how to
                        design the app and website for them. Below are pictures
                        from our team visit.
                    </p>
                    <div className="flex flex-row justify-center gap-3 sm:gap-2 w-full">
                        <div
                            className={`h-fit w-fit border-2 sm:border-4 border-black sm:rounded-3xl rounded-2xl overflow-clip bg-white self-center mt-8 shadow-2xl`}
                        >
                            <Image
                                src={team}
                                height={600}
                                width={800}
                                alt={
                                    "IMS Team in front of LTHC Homeless Services"
                                }
                                className="h-fit rounded-lg"
                            />
                        </div>
                        <div
                            className={`h-fit w-fit border-2 sm:border-4 border-black sm:rounded-3xl rounded-2xl overflow-clip bg-white self-center mt-8 shadow-2xl`}
                        >
                            <Image
                                src={action}
                                height={600}
                                width={800}
                                alt={"Testing in action"}
                                className="h-fit rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                        Hosting
                    </h3>
                    <p className="bg-transparent indent-4 ml-1 max-w-[960px] text-sm sm:text-md">
                        The Tippy County Connect app is hosted on Google Play.
                        There were plans to host the app on the Apple App Store,
                        but we found that our user group uses mostly Android
                        phones. Therefore, we decided to focus on the Android
                        version of the app. Below is a photo of the app on
                        Google Play.
                    </p>
                    <div className="flex justify-center w-full">
                        <div
                            className={`h-fit w-fit border-2 sm:border-4 border-black sm:rounded-3xl rounded-2xl overflow-clip bg-white self-center mt-8 shadow-2xl`}
                        >
                            <Image
                                src={googlePlay}
                                height={600}
                                width={800}
                                alt={
                                    "IMS Team in front of LTHC Homeless Services"
                                }
                                className="h-fit rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                        Prototyping
                    </h3>
                    <p className="bg-transparent indent-4 ml-1 max-w-[960px] text-sm sm:text-md">
                        During the design phase, I used Figma to create
                        high-fidelity prototypes for both the app and website. I
                        developed initial concepts and presented them to the
                        team for feedback, which I then incorporated in an
                        iterative process. I drew inspiration from existing
                        solutions while integrating elements from our current
                        website. These prototypes allowed me to refine the
                        designs before moving into development. Below is an
                        image of the Figma prototypes.
                    </p>
                    <div className="flex justify-center w-full">
                        <div
                            className={`h-fit w-fit border-2 sm:border-4 border-black sm:rounded-3xl rounded-2xl overflow-clip bg-white self-center mt-8 shadow-2xl`}
                        >
                            <Image
                                src={figma}
                                height={600}
                                width={800}
                                alt={
                                    "IMS Team in front of LTHC Homeless Services"
                                }
                                className="h-fit rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
