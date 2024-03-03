"use client";

import useTheme from "@/hooks/useThemeHook";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className="relative w-16 h-8 flex items-center dark:bg-gray-800 bg-cyan-500 cursor-pointer rounded-full p-1 border-1"
            onClick={toggleTheme}
            style={{ transition: "background 0.3s ease-in-out" }}
        >
            <BsSunFill
                className=" text-yellow-200 font-bold"
                size={18}
            />
            <div
                className="absolute bg-white dark:bg-gray-600 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300"
                style={{
                    transform: theme === Theme.DARK ? "translateX(-5%)" : "translateX(185%)",
                    transition: "transform 0.3s ease-in-out",
                }}
            />
            <FaMoon
                className="text-white ml-auto"
                size={18}
            />

        </div>
    )
}

export default ThemeToggleButton