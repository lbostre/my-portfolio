import React from "../../../public/Logos/react.svg";
import { ImDiamonds } from "react-icons/im";
import { BiWorld } from "react-icons/bi";

export default function About() {
    return (
        <div className="flex flex-col bg-white text-black w-full min-h-screen mt-3 sm:mt-[75px] sm:px-80">
            <div className="flex mt-20 w-full sm:w-[75%] self-center">
                <div className="flex flex-row">
                    <span className="hidden sm:flex ">
                        <ImDiamonds
                            size={50}
                            className="text-[#304c89] min-w-[50px] py-1"
                        />
                    </span>
                    <span className="flex sm:hidden ">
                        <ImDiamonds
                            size={38}
                            className="text-[#304c89] min-w-[50px] py-1"
                        />
                    </span>
                    <div className="flex flex-col gap-5 sm:pr-0 pr-9">
                        <h1 className="text-3xl sm:text-5xl font-semibold">
                            About Me
                        </h1>
                        <p className="text-xl sm:text-2xl">
                            Hi, I’m Leyton — a recent Computer Engineering
                            graduate from Purdue University with a passion for
                            building thoughtful, user-facing websites and apps.
                            I especially enjoy working on projects that solve
                            real-world problems and create meaningful impact. My
                            favorite work blends elegant visuals with intuitive
                            design, turning complex challenges into engaging,
                            accessible experiences.
                        </p>
                        <p className="text-xl sm:text-2xl">
                            When I'm not coding, you might find me running on
                            the beach or playing games like Rocket League.
                            Thanks for stopping by my portfolio!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
