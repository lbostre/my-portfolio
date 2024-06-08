import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import "./ProjectDisplay.css";

type ProjectDisplayProps = {
    icon: ReactElement;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    image: StaticImageData;
}

export default function ProjectDisplay({ icon, title, subtitle, description, color, image }: ProjectDisplayProps) {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-[1px] w-[92%] bg-gray-300"/>
            <div className="flex flex-col text-black w-full py-20 max-w-[1000px]">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-2">
                            <span style={{ color }}>{icon}</span>
                            <h2 className="text-6xl font-bold">{title}</h2>
                        </div>
                        <p className="ml-12 mt-2 opacity-75">{subtitle}</p>
                    </div>
                    <div className="flex flex-col max-w-[460px]">
                        <p className="text-2xl">{description}</p>
                        <Link href="/"
                              className="flex flex-row items-center gap-3 h-fit mt-4 cursor-pointer w-fit button button-arrow"
                              style={{ color }}>
                            <span className="text-black text-lg font-semibold">View Project</span>
                            <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="arrow-icon">
                                <g className="arrow-head">
                                    <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor"
                                          strokeWidth="1"/>
                                </g>
                                <g className="arrow-body">
                                    <path d="M3.5 4.5H0" stroke="currentColor" strokeWidth="1"/>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div
                    className="h-fit w-fit border-8 border-black rounded-3xl overflow-clip p-5 bg-white self-center mt-8 shadow-2xl">
                    <Image
                        src={image}
                        height={500}
                        width={800}
                        alt={title}
                        className="h-fit rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
