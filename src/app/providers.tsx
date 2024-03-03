"use client"

import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}