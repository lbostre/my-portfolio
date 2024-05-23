import { ReactElement } from "react";
import { FaCalendar, FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { IoPersonSharp } from "react-icons/io5";

type ProjectProps = {
    title?: string;
    description?: string;
    onClick?: void;
    icon?: ReactElement;
    layout?: number;
    imageBackground?: string;
    imageOne: StaticImageData;
    imageTwo?: StaticImageData;
    date: string;
    job: string;
};

export default function ProjectCard({
    title,
    description,
    onClick,
    imageBackground,
    layout,
    imageOne,
    imageTwo,
    date,
    job,
}: ProjectProps) {
    return (
        <div className="flex flex-col gap-3 border p-2 rounded-md  max-w-xl bg-white shadow-[0_35px_60px_-15px_rgba(0,_0,_0,_0.1)] transition-[height] duration-300 relative overflow-hidden group">
            <div className="flex justify-center w-full me-20 bg-[#f7fbf4] rounded-md transition-[height] duration-300 h-[300px] group-hover:h-[270px] overflow-hidden">
                {layout == 1 && (
                    <div className="relative pt-5">
                        <div
                            className={`absolute inset-0 bottom-1 transition-transform duration-400 bg-gradient-to-r ${imageBackground} opacity-50 blur-xl h-[250px] mt-5 group-hover:-translate-y-1 transistion group-hover:opacity-100 group-hover:animate-tilt`}
                        />
                        <Image
                            src={imageOne}
                            height={300}
                            width={370}
                            alt="Logo"
                            className="relative rounded-lg h-fit transition-transform duration-300 shadow-[0_35px_60px_-15px_rgba(0,_0,_0,_0.1)] group-hover:-translate-y-2"
                        />
                    </div>
                )}
                {layout == 2 && (
                    <div className="flex flex-row gap-16">
                        <div className="relative pt-2">
                            <div
                                className={`absolute inset-0 bottom-1 transition-transform duration-400 bg-gradient-to-r ${imageBackground} opacity-50 blur-xl h-[240px] mt-5 group-hover:translate-y-1 transistion group-hover:opacity-100 group-hover:animate-tilt`}
                            />
                            <Image
                                src={imageOne}
                                height={230}
                                width={140}
                                alt="Logo"
                                className="relative rounded-lg h-fit transition-transform duration-300 shadow-[0_35px_60px_-15px_rgba(0,_0,_0,_0.1)] group-hover:translate-y-1"
                            />
                        </div>
                        <div className="relative pt-5">
                            <div
                                className={`absolute inset-0 bottom-1 transition-transform duration-400 bg-gradient-to-r ${imageBackground} opacity-50 blur-xl h-[240px] mt-5 group-hover:-translate-y-1 transistion group-hover:opacity-100 group-hover:animate-tilt`}
                            />
                            <Image
                                src={imageTwo!}
                                height={230}
                                width={140}
                                alt="Logo"
                                className="relative rounded-lg h-fit transition-transform duration-300 shadow-[0_35px_60px_-15px_rgba(0,_0,_0,_0.1)] group-hover:-translate-y-2"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2 px-5 pt-5 transition-[height] duration-300 rounded-md h-[190px] group-hover:h-[220px]">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row items-center gap-2 text-sm bg-[#f9fcf6] w-fit p-2 rounded-md">
                        <FaCalendar size={16} />
                        {date}
                    </div>
                    <div className="flex flex-row items-center gap-2 text-sm bg-[#f9fcf6] w-fit p-2 rounded-md">
                        <IoPersonSharp size={16} />
                        {job}
                    </div>
                </div>
                <p className="text-[30px] font-extrabold">{title}</p>
                <p className="text-lg text-[#426654]">{description}</p>
            </div>
            <div
                className="flex flex-row items-center gap-2 ml-5 absolute bottom-0 font-semibold transition-[transform,opacity] duration-300 text-emerald-700 cursor-pointer hover:text-emerald-950 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100"
                onClick={() => console.log("breh")}
            >
                <p>Learn more</p>
                <FaChevronRight size={12} className="mt-[1px]" />
            </div>
        </div>
    );
}
