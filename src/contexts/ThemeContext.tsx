'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage?.getItem('theme');
        return storedTheme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
    });


    useEffect(() => {
        if (theme === Theme.DARK) {
            document.documentElement.classList.add('dark');
            localStorage?.setItem('theme', Theme.DARK);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage?.setItem('theme', Theme.LIGHT);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

