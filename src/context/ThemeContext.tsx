"use client"

import { createContext, useContext } from "react";

export type ThemeContextType = {
  isDark: boolean;
  toggleDark: () => void;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

 const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = ()=>{
const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;}

export default ThemeContext;