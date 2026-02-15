"use client"

import { useTheme } from "@/context/ThemeContext";
import { MoonStarIcon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";



export const Navbar = () => {
    const {isDark, toggleDark}= useTheme();
      const [activeSection, setActiveSection] = useState("home");

      //scroll detect garna
      useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section is near top of viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const isActive = (sectionId: string) => activeSection === sectionId;


  return (<>
    <div className=' fixed bottom-4 left-8  z-50 flex  justify-center items-center cursor-pointer h-16 w-16 rounded-full bg-black dark:bg-amber-50' onClick={toggleDark}>
                                {
                                    isDark ?
                                    <Sun color="#000000" strokeWidth={2} size={45}/> :
                                <MoonStarIcon color="#ffffff" strokeWidth={2} size={45}/> 
                                }
                                </div>
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-45 bg-black text-white flex h-20 w-140 rounded-4xl items-center justify-center dark:bg-white dark:text-black">
        
        <div className="flex gap-6 text-2xl font-serif ">
           <Link href="#home"  className={` transition ${
              isActive("home")
                ? "bg-white text-black dark:bg-black dark:text-white rounded "
                : ""
            }`}>Home</Link>
           <Link href="#about" className={` transition ${
              isActive("about")
                ? "bg-white text-black dark:bg-black dark:text-white rounded "
                : ""
            }`}>About</Link>
           <Link href="#skills" className={` transition ${
              isActive("skills")
                ? "bg-white text-black dark:bg-black dark:text-white rounded "
                : ""
            }`}>Skills</Link>
           <Link href="#projects" className={` transition ${
              isActive("projects")
                ? "bg-white text-black dark:bg-black dark:text-white rounded "
                : ""
            }`}>Projects</Link>
           <Link href="#contact" className={` transition ${
              isActive("contact")
                ? "bg-white text-black dark:bg-black dark:text-white rounded "
                : ""
            }`}>Contact</Link>
        </div>
        </div>
        </>
  )
}

