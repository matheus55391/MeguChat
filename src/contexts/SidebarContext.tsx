"use client"
import React, { createContext, useContext, useState } from 'react';

interface SidebarContextProps {
    isOpen: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
    openDrawer: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    const openDrawer = () => {
        setIsOpen(true);
    };

    return (
        <SidebarContext.Provider value={{ isOpen, toggleDrawer, closeDrawer, openDrawer }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }

    return context;
};
