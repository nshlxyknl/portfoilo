"use client"

import { useTheme } from "@/context/ThemeContext";
import { MoonStarIcon, Sun } from "lucide-react";
import Link from "next/link";



export const Navbar = () => {
    const {isDark, toggleDark}= useTheme();


  return (<>
    <div className=' fixed bottom-4 left-8 z-50 flex  justify-center items-center h-16 w-16 rounded-full bg-black dark:bg-amber-50' onClick={toggleDark}>
                                {
                                    isDark ?
                                    <Sun color="#000000" strokeWidth={2} size={45}/> :
                                <MoonStarIcon color="#ffffff" strokeWidth={2} size={45}/> 
                                }
                                </div>
    <div className="fixed top-4 left-120 z-45 bg-black text-white flex h-20 w-140 rounded-4xl items-center justify-center px-10 dark:bg-white dark:text-black">
        
        <div className="flex gap-6 text-2xl font-serif ">
           <Link href="#home">Home</Link>
           <Link href="#about">About</Link>
           <Link href="#skills">Skills</Link>
           <Link href="#projects">Projects</Link>
           <Link href="#contact">Contact</Link>
        </div>
        </div>
        </>
  )
}

