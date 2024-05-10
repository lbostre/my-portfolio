import Button from "@/components/Button/Button";
import CourseRater from "@/components/Icons/CourseRater";
import { ReactElement } from "react";

type ProjectProps = {
  title: string;
  description: string;
  onClick?: void;
  icon: ReactElement;
};

export default function Project({
  title,
  description,
  onClick,
  icon,
}: ProjectProps) {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex justify-center items-center w-[50%] min-w-[320px] me-20">
        {icon}
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-[40px] font-bold">{title}</p>
        <p className="text-[20px] mb-5">{description}</p>
        <Button onClick={onClick} text="Learn more" />
      </div>
    </div>
  );
}
