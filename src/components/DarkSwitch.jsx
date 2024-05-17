"use client";
import { IoMoon } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { useTheme } from "next-themes";
/// by import useTheme we can controll the darkmode in this componenet 
//and from "useTheme" we will get them, setTheme, systemTheme info
export default function DarkSwitch() {
  const {theme, setTheme, systemTheme} = useTheme()
  const currentTheme = theme ==='systemTheme' ? systemTheme: theme
  return (
<div>
  {
    currentTheme === 'dark' ? <FaRegLightbulb onClick={()=> setTheme('light')}
    className="text-xl cursor-pointer hover:text-yellow-300" /> :
     <IoMoon onClick={()=> setTheme('dark')} className="text-xl cursor-pointer hover:text-yellow-300" />
  }
</div>
  )
}
