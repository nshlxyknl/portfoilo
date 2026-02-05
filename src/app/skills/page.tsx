
import Image from "next/image";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCreativeCommonsPdAlt,
} from "react-icons/fa";
import { SiMongodb, SiNestjs, SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiTypescript } from "react-icons/si";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Skills = () => {

    const projects = [
    {
      title: "Next.js",
      svg: <RiNextjsFill className="h-12 w-12" />,
      hover: "#78d5d0",
    },
    {
      title: "React & ReactNative",
      svg: <FaReact className="h-12 w-12" />,
      hover: "#60C7DE",
    },
    {
      title: "Nest.js",
      svg: <SiNestjs className="h-12 w-12" />,
      hover: "#E92853",
    },
    {
      title: "Javascript",
      svg: <IoLogoJavascript className="h-12 w-12" />,
      hover: "#ebd744",
    },
    {
      title: "Typescript",
      svg: <SiTypescript className="h-12 w-12" />,
      hover: "#017acb",
    },
    {
      title: "NodeJS",
      svg: <FaNodeJs className="h-12 w-12" />,
      hover: "#8cc84b",
    },
    {
      title: "MySql",
      svg: <GrMysql className="h-12 w-12" />,
      hover: "rgb(0,84,107)",
    },
    {
      title: "MongoDB",
      svg: <SiMongodb className="h-12 w-12" />,
      hover: "#10AA50",
    },
    {
      title: "Prisma",
      svg: <SiPrisma className="h-12 w-12" />,
      hover: "#466391",
    },
  ];


    return (
       <div id="skills" className=" pt-40">
    {/* <div className="flex flex-col justify-center items-center min-h-screen  max-w-5xl mx-auto p-4 md:p-8" > */}
    <div>
      <div className="h-full flex ">
        {/* <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
          Tech Stack
        </h2> */}
        <div className="w-175 mt-50 pl-40">
        <span className="text-8xl font-serif">Skills</span> <br></br><br></br>
        {/* <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
          Some of the tools I use for software development.
        </p> */}
        </div>
      <div className="w-[70%] mr-10">
        <HoverEffect items={projects}  />
      </div>
      </div>
    </div>
                    <div className="h-px scale-y-[0.3] w-350 mt-25 mx-auto bg-black dark:bg-blue-200"></div>
                    </div>
    )
}



export default Skills
