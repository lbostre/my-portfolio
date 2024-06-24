import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

import "./ProjectDisplay.css";
import { MouseTracker } from '@/components/MouseTracker';
import { FaHandPointer } from 'react-icons/fa6';

type ProjectDisplayAppProps = {
    icon: ReactElement;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    image: StaticImageData | String;
    image2?: StaticImageData | String;
    url: string;
}


export default function ProjectDisplayApp({
                                              icon,
                                              title,
                                              subtitle,
                                              description,
                                              color,
                                              image,
                                              image2,
                                              url
                                          }: ProjectDisplayAppProps) {
    const [target, setTarget] = useState<String | null>(null);
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
                        <Link href={url}
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
                <Link href={url} className="relative">
                    {target && <MouseTracker offset={{ x: -48, y: -48 }}>
                        <FaHandPointer size={90} style={{ color }}/></MouseTracker>}
                    <div className="flex flex-row justify-center gap-14">
                        <div
                            className="h-fit w-fit border-[6px] border-black rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                            onMouseEnter={() => setTarget('display')}
                            onMouseLeave={() => setTarget(null)}>
                            <div>
                                <div
                                    className="h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <Image
                                    src={image}
                                    height={490}
                                    width={255}
                                    alt={title}
                                    className="h-fit"
                                />
                            </div>
                        </div>
                        <div
                            className="h-fit w-fit border-[6px] border-black rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                            onMouseEnter={() => setTarget('display')}
                            onMouseLeave={() => setTarget(null)}>
                            <div>
                                <div
                                    className="h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <Image
                                    src={image2!}
                                    height={490}
                                    width={255}
                                    alt={title}
                                    className="h-fit"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
