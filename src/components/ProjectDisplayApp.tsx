import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';

import "./ProjectDisplay.css";
import { FaRegHandPointer } from 'react-icons/fa';
import { LiaHandPointer } from 'react-icons/lia';

type ProjectDisplayAppProps = {
    icon: ReactElement;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    image: StaticImageData;
    image2?: StaticImageData;
}

interface Position {
    x: number;
    y: number;
}

export default function ProjectDisplayApp({
                                              icon,
                                              title,
                                              subtitle,
                                              description,
                                              color,
                                              image,
                                              image2,
                                          }: ProjectDisplayAppProps) {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


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
                <div className="flex flex-row justify-center gap-14">
                    <div
                        className="h-fit w-fit border-[6px] border-black rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center">
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
                        className="h-fit w-fit border-[6px] border-black rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center">
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
            </div>
        </div>
    );
}
