'use client';
import Image from "next/image";
import Button from "@/components/Button/Button";
import Project from "@/components/Project";
import CourseRater from "@/components/Icons/CourseRater";
import BoilerBookings from "@/components/Icons/BoilerBookings";

export default function Home() {
  return (
      <main className="bg-[#fff7f0]">
          <div className="min-h-screen p-5">
              <div className="bg-[#f5d7e7] h-[95vh] p-24">
                  <div className="w-[65%] text-[#0a2716] ">
                      <p className="text-[110px] leading-tight">Hi, my <br/> name is <span
                          className="font-bold">Leyton.</span></p>
                      <p className="text-[40px] mt-8">I am a <span
                          className="font-bold">computer engineering student</span> from Long Beach, California.</p>
                  </div>
              </div>
          </div>
          <div className="min-h-screen bg-[#fff7f0] text-[#0a2716] px-64">
                      <p className="text-[70px] font-bold mb-5">My Projects</p>
              <div className="flex flex-col gap-8">
              <Project  onClick={console.log("breh")}  description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu  turpis egestas pretium aenean. Quis varius quam quisque id diam." title="Course Rater" icon={<CourseRater/>}/>
              <Project  onClick={console.log("breh")}  description="Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu  turpis egestas pretium aenean. Quis varius quam quisque id diam." title="Boiler Bookings" icon={<BoilerBookings/>}/>
              </div>
              </div>
      </main>
  );
}
