import React from "../../../public/Logos/react.svg"
import { ImDiamonds } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';

export default function About() {
    return (
        <div className="flex flex-col bg-white text-black w-full min-h-screen mt-3 sm:mt-[75px] sm:px-80">
            <div className="flex mt-20 w-full sm:w-[75%] self-center">
                <div className="flex flex-row">
                    <span className="hidden sm:flex "><ImDiamonds size={50}
                                                                  className="text-[#304c89] min-w-[50px] py-1"/></span>
                    <span className="flex sm:hidden "><ImDiamonds size={38}
                                                                  className="text-[#304c89] min-w-[50px] py-1"/></span>
                    <div className="flex flex-col gap-5 sm:pr-0 pr-9">
                        <h1 className="text-3xl sm:text-5xl font-semibold">About Me</h1>
                        <p className="text-xl sm:text-2xl">Hey there! I'm Leyton, a computer engineering student at
                            Purdue with
                            a
                            passion for designing and developing websites and apps. I particularly enjoy working on
                            projects that have a significant purpose and address real-world issues, all while creating
                            elegant and striking visuals in the process.
                        </p>
                        <p className="text-xl sm:text-2xl">When I'm not coding, you might find me running on the beach
                            or
                            playing games like Rocket League. Thanks for stopping by my portfolio!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
