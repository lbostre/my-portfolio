"use client";
import ProjectCard from "@/components/ProjectCard";
import ratingsPage from "@/assets/rating_page.png";
import climeLanding from "@/assets/landingPage.png";
import climeChat from "@/assets/chat.png";
import jumpseatLandingPage from "@/assets/jumpseatLandingPage.png";
import tscHome from "@/assets/TSCHome.png";
import DKO from "@/assets/DKO.png";

export default function Home() {
    return (
        <main className="bg-[#f9fcf6]">
            <div className="min-h-screen p-5">
                <div className="bg-emerald-800 h-[95vh] p-24">
                    <div className="w-[65%] text-white ">
                        <p className="text-[110px] leading-tight">
                            Hi, my <br /> name is{" "}
                            <span className="font-bold">Leyton.</span>
                        </p>
                        <p className="text-[40px] mt-8">
                            I am a{" "}
                            <span className="font-bold">
                                computer engineering student
                            </span>{" "}
                            from Long Beach, California.
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-white text-emerald-950 px-64 pb-10">
                <h1 className="text-[50px] font-bold">Projects</h1>
                <p className="text-lg  mb-8">
                    Various projects for organizations like EPICS @ Purdue and
                    personal projects like Course Rater.
                </p>
                <div className="flex flex-row flex-wrap gap-8 justify-center">
                    <div className="flex flex-col gap-8">
                        <ProjectCard
                            description="A platform where Purdue University students can evaluate courses and access course analytics."
                            title="Course Rater"
                            imageBackground="bg-gradient-to-r from-[#5ed0de] via-[#e45e8c] to-[#e1b65e]"
                            layout={1}
                            imageOne={ratingsPage}
                            date="June 2022 - Present"
                            job="Project Manager, Full Stack Developer"
                            link="/course-rater"
                        />
                        <ProjectCard
                            onClick={() => console.log("breh")}
                            description="A mobile application prioritizing factory safety through audio classification and streamlining communication processes."
                            title="Deaf Kids Code - CLIME"
                            imageBackground="bg-gradient-to-br from-[#081b2c] via-[#3977a8] to-[#fecd40]"
                            layout={2}
                            imageOne={climeLanding}
                            imageTwo={climeChat}
                            date="Jan. 2024 - Present"
                            job="Frontend Team Lead, Full Stack Developer"
                        />
                        <ProjectCard
                            onClick={() => console.log("breh")}
                            description="Advocate for ASL on Khan Academy and standardize video creation, submission, review, and approval processes."
                            title="Deaf Kids Code - DKO"
                            imageBackground="bg-gradient-to-b from-[#08c9ee] to-[#fe7c29]"
                            layout={1}
                            imageOne={DKO}
                            date="Aug. 2021 - May 2022"
                            job="Full Stack Developer, Web Master"
                        />
                    </div>
                    <div className="flex flex-col gap-8 mt-28">
                        <ProjectCard
                            onClick={() => console.log("breh")}
                            description="Optimal flights to Purdue synced with shuttles, friend connections, and cost-saving flight monitoring."
                            title="Jumpseat"
                            imageBackground="bg-gradient-to-t from-blue-800 to-blue-500"
                            layout={1}
                            imageOne={jumpseatLandingPage}
                            date="Jan. 2024 - Present"
                            job="Full Stack Developer"
                        />

                        <ProjectCard
                            onClick={() => console.log("breh")}
                            description="Enhancing accessibility to Earth's history through an evolved TimeScale Creator visualization tool."
                            title="Earth History Visualization"
                            imageBackground="bg-gradient-to-t from-[#27476e] to-[#2c327a]"
                            layout={1}
                            imageOne={tscHome}
                            date="Jan. 2024 - Present"
                            job="Full Stack Developer"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
