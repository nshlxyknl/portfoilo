"use client"
import { useTheme } from "@/context/ThemeContext"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import {  FaGithub } from "react-icons/fa"
import {  FaEye } from "react-icons/fa6"

interface Projects{
    title: string,
    gitlink:string,
    url:string,
    image: StaticImageData
}

interface ICardProps{
  items: Projects
}



const ProjectCard = ({items}: ICardProps) => {

 const  {isDark} = useTheme()

  return (
    <div>
      <div className="h-60 w-80 rounded-2xl overflow-hidden" >
<Image 
          src={items.image}
          alt={items.title}
          className="w-full h-full object-fit"
        />
</div>
       <p className="text-center text-xl font-semibold mt-4">
        {items.title}
      </p>

      <div className="flex justify-center gap-12 p-6 ">
                  <Link href={items.gitlink} target="_blank">
        <FaGithub size={40} className={`cursor-pointer transition-colors ${
    isDark 
      ? "text-white hover:text-cyan-400" 
      : "text-gray-800 hover:text-yellow-400"
  }`}/>
            </Link>

          <Link href={items.url} target="_blank">

        <FaEye size={45} className={`cursor-pointer transition-colors ${
    isDark 
      ? "text-white hover:text-cyan-400" 
      : "text-gray-800 hover:text-yellow-400"
  }`}/>
            </Link>

    </div>
    </div>
  )
}

export default ProjectCard