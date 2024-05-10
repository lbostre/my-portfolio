"use client";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Project from "@/components/Project";
import CourseRater from "@/components/Icons/CourseRater";
import BoilerBookings from "@/components/Icons/BoilerBookings";
import Dko from "@/components/Icons/Dko";
import Clime from "@/components/Icons/Clime";
import Ehv from "@/components/Icons/Ehv";

import "./cursor.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //   useEffect(() => {
  //     const mouseMove = (e: { clientX: any; clientY: any }) => {
  //       setMousePosition({
  //         x: e.clientX,
  //         y: e.clientY,
  //       });
  //     };
  //     window.addEventListener("mousemove", mouseMove);
  //     return () => {
  //       window.removeEventListener("mousemove", mouseMove);
  //     };
  //   }, []);
  //   const variants = {
  //     default: {
  //       x: mousePosition.x - 16,
  //       y: mousePosition.y - 16,
  //     },
  //   };
  return (
    <main className="bg-[#fff7f0]">
      <div className="min-h-screen p-5">
        <div className="bg-[#f5d7e7] h-[95vh] p-24">
          <div className="w-[65%] text-[#0a2716] ">
            <p className="text-[110px] leading-tight">
              Hi, my <br /> name is <span className="font-bold">Leyton.</span>
            </p>
            <p className="text-[40px] mt-8">
              I am a{" "}
              <span className="font-bold">computer engineering student</span>{" "}
              from Long Beach, California.
            </p>
            {/* <motion.div
              className="cursor"
              variants={variants}
              animate="default"
            /> */}
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#fff7f0] text-[#0a2716] px-64 pb-10">
        <p className="text-[70px] font-bold mb-8">My Projects</p>
        <div className="flex flex-col gap-10">
          <Project
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu  turpis egestas pretium aenean. Quis varius quam quisque id diam."
            title="Course Rater"
            icon={<CourseRater />}
          />
          <Project
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu  turpis egestas pretium aenean. Quis varius quam quisque id diam."
            title="Boiler Bookings"
            icon={<BoilerBookings />}
          />
          <Project
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu  turpis egestas pretium aenean. Quis varius quam quisque id diam."
            title="Deaf Kids Code - DKO"
            icon={<Dko />}
          />
          <Project
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu  turpis egestas pretium aenean. Quis varius quam quisque id diam."
            title="Deaf Kids Code - CLIME"
            icon={<Clime />}
          />
          <Project
            description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu  turpis egestas pretium aenean. Quis varius quam quisque id diam."
            title="Earth History Visualization"
            icon={<Ehv />}
          />
        </div>
      </div>
    </main>
  );
}
