"use client"

import { useTheme } from "@/context/ThemeContext";
import { MoonStarIcon, Sun } from "lucide-react";
import Link from "next/link";



export const Navbar = () => {
    const {isDark, toggleDark}= useTheme();


  return (
    <div className="relative bg-white flex h-25 w-full items-center justify-between px-10 dark:bg-black">
        <div className='flex  justify-center items-center h-11 w-11 rounded-full bg-black dark:bg-amber-50' onClick={toggleDark}>
                                {
                                    isDark ?
                                    <Sun color="#000000" strokeWidth={2.75} /> :
                                <MoonStarIcon color="#ffffff" strokeWidth={2.5}/> 
                                }
                                </div>
        <div className="flex gap-6 text-2xl font-serif ">
           <Link href="#about">About</Link>
           <Link href="#skills">Skills</Link>
           <Link href="#projects">Projects</Link>
           <Link href="#contact">Contact</Link>
        </div>
        </div>
  )
}
