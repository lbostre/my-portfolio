import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";

import "./ProjectDisplay.css";
import { MouseTracker } from "@/components/MouseTracker";
import { FaHandPointer } from "react-icons/fa6";

type ProjectDisplayAppProps = {
    icon: ReactElement;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    image: string | StaticImageData;
    image2?: string | StaticImageData;
    url: string;
    android?: boolean;
};

export default function ProjectDisplayApp({
    icon,
    title,
    subtitle,
    description,
    color,
    image,
    image2,
    url,
    android = false,
}: ProjectDisplayAppProps) {
    const [target, setTarget] = useState<String | null>(null);
    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-[1px] w-[92%] bg-gray-300" />
            <div className="flex flex-col text-black w-full py-10 sm:py-20 max-w-[1000px]">
                <div className="hidden sm:flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-2">
                            <span style={{ color }}>{icon}</span>
                            <h2 className="text-6xl font-bold">{title}</h2>
                        </div>
                        <p className="ml-12 mt-2 opacity-75">{subtitle}</p>
                    </div>
                    <div className="flex flex-col max-w-[460px]">
                        <p className="text-2xl">{description}</p>
                        <Link
                            href={url}
                            className="flex flex-row items-center gap-3 h-fit mt-4 cursor-pointer w-fit button button-arrow"
                            style={{ color }}
                        >
                            <span className="text-black text-lg font-semibold">
                                View Project
                            </span>
                            <svg
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="arrow-icon"
                            >
                                <g className="arrow-head">
                                    <path
                                        d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </g>
                                <g className="arrow-body">
                                    <path
                                        d="M3.5 4.5H0"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="sm:hidden flex flex-row gap-3">
                    <span style={{ color }}>{icon}</span>
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p className="text-sm opacity-75">{subtitle}</p>
                        <p className="text-lg sm:text-2xl mt-2">
                            {description}
                        </p>
                        <Link
                            href={url}
                            className="flex flex-row items-center gap-3 h-fit mt-4 cursor-pointer w-fit button button-arrow"
                            style={{ color }}
                        >
                            <span className="text-black text-lg font-semibold">
                                View Project
                            </span>
                            <svg
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="arrow-icon"
                            >
                                <g className="arrow-head">
                                    <path
                                        d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </g>
                                <g className="arrow-body">
                                    <path
                                        d="M3.5 4.5H0"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <Link href={url} className="relative">
                    {target && (
                        <MouseTracker offset={{ x: -48, y: -48 }}>
                            <FaHandPointer size={90} style={{ color }} />
                        </MouseTracker>
                    )}
                    <div className="flex flex-row justify-center sm:gap-14 gap-4">
                        <div
                            className="h-fit w-fit border-4 sm:border-[6px] border-black sm:rounded-[38px] rounded-[28px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                            onMouseEnter={() => setTarget("display")}
                            onMouseLeave={() => setTarget(null)}
                        >
                            <div>
                                {!android && (
                                    <>
                                        <div className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full" />
                                        <div className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full" />
                                    </>
                                )}
                                <Image
                                    src={image}
                                    height={490}
                                    width={255}
                                    alt={title}
                                    className="h-fit"
                                />
                            </div>
                        </div>
                        {image2 && (
                            <div
                                className="h-fit w-fit border-4 sm:border-[6px] border-black sm:rounded-[38px] rounded-[28px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                                onMouseEnter={() => setTarget("display")}
                                onMouseLeave={() => setTarget(null)}
                            >
                                <div>
                                    {!android && (
                                        <>
                                            <div className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full" />
                                            <div className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full" />
                                        </>
                                    )}
                                    <Image
                                        src={image2}
                                        height={490}
                                        width={255}
                                        alt={title}
                                        className="h-fit"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}
