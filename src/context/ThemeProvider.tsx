
"use client"

import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";


export const ThemeProvider = ({children}:{children: ReactNode}) => {
    const [isDark, setIsDark] = useState<boolean>(false);


useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
    }
  }, []);


  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  const toggleDark = () => setIsDark(prev => !prev)



  return (
    <ThemeContext.Provider value={{isDark, setIsDark, toggleDark}}>
        {children}
    </ThemeContext.Provider>
  )
}
