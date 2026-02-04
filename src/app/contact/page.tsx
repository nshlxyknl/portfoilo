"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/context/ThemeContext"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

 const ContactPage = () => {
   const  {isDark} = useTheme()
  
  return (
         
    <div id="contact" className="pt-40">
            <div  className="h-full flex gap-50 ">

        <div className="w-175 mt-10 pl-30">
            <span className="text-8xl font-serif">Contact Me</span> <br></br>
             </div>
        <div className="font-serif text-3xl  flex flex-col gap-3">
        <Input className="w-40" placeholder="Name"/>
        <div className="flex gap-4">
        <Input className="w-80 h-18" placeholder="Message"/>
          <FaTelegramPlane size={40} className={`cursor-pointer mt-5 transition-colors ${
    isDark 
      ? "text-white hover:text-cyan-400" 
      : "text-gray-800 hover:text-yellow-400"
  }`} />
        </div>
        <div className="flex mt-40 gap-2 justify-center items-center">
          <Link href={"https://github.com/nshlxyknl"} target="_blank">
        <FaGithub size={40} className={`cursor-pointer transition-colors ${
    isDark 
      ? "text-white hover:text-cyan-400" 
      : "text-gray-800 hover:text-yellow-400"
  }`}/>
            </Link>
          <Link href={"https://www.linkedin.com/in/nischalnischal/"} target="_blank">
        <FaLinkedin size={40} className={`cursor-pointer transition-colors ${
    isDark 
      ? "text-white hover:text-cyan-400" 
      : "text-gray-800 hover:text-yellow-400"
  }`}/>
            </Link>
          <Link href={"https://x.com/ezxyant"} target="_blank">
        <FaXTwitter size={40} className={`cursor-pointer transition-colors ${
    isDark 
      ? "text-white hover:text-cyan-400" 
      : "text-gray-800 hover:text-yellow-400"
  }`}/>
            </Link>
        </div>
        <div className="text-sm flex  justify-center">
          2025 © Nischal Khanal
        </div>
        </div>

</div>
         <div className="h-px scale-y-[0.3] w-350 mt-20 mx-auto bg-black dark:bg-blue-200"></div>

</div>

  )
}

export default ContactPage