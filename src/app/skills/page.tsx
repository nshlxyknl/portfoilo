
import { RiNextjsFill } from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaLinux,
} from "react-icons/fa";
import { SiMongodb, SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BiLogoPostgresql } from "react-icons/bi";


const Skills = () => {

  const skills = [
    {
      title: "Next.js",
      svg: <RiNextjsFill className="h-12 w-12" />,
      hover: "#78d5d0",
    },
    {
      title: "React",
      svg: <FaReact className="h-12 w-12" />,
      hover: "#60C7DE",
    },
    {
      title: "Linux",
      svg: <FaLinux className = "h-12 w-12" />,
    hover: "#ffff00",
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
  title: "PostgreSQL",
    svg: <BiLogoPostgresql className="h-12 w-12" />,
      hover: "#0064a5",
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
    <div>
      <div className="lg:h-full flex flex-col lg:flex-row ">
        <div className="lg:w-175 mt-50 lg:pl-40 ml-60 lg:ml-0 ">
          <span className="text-8xl font-serif">Skills</span> <br></br><br></br>
        </div>
        <div className="lg:w-[70%] w-full mx-auto lg:mr-10 text-center lg:text-right ">
          <HoverEffect items={skills} />
        </div>
      </div>
    </div>
    <div className="h-px scale-y-[0.3] lg:w-350 mt-25 mx-auto bg-black dark:bg-blue-200"></div>
  </div>
)
}

export default Skills
