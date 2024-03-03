"use client";

import { useEffect, useState } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const useTheme = () => {

  const [theme, setTheme] = useState<Theme>(
    window?.localStorage?.getItem("theme") === Theme.DARK ? Theme.DARK : Theme.LIGHT
  );

  useEffect(() => {
    const storedTheme = window?.localStorage?.getItem("theme");

    switch (storedTheme) {
      case Theme.LIGHT:
        setTheme(Theme.LIGHT);
        break;
      case Theme.DARK:
        setTheme(Theme.DARK);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add("dark");
      window?.localStorage?.setItem("theme", Theme.DARK);
    } else {
      document.documentElement.classList.remove("dark");
      window?.localStorage?.setItem("theme", Theme.LIGHT);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };

  return { theme, toggleTheme };
};

export default useTheme;
