interface SideBarRootProps {
    children?: React.ReactNode;
    space?: number;
}

export const SideBarRoot: React.FC<SideBarRootProps> = ({ children, space }) => {
    return (
        <nav
            data-testid="sidebar-aside-wrapper"
            className={`flex-col p-4 dark:text-white dark:bg-zinc-900  hidden md:flex `}
        >
            {children}
        </nav>
    )
}
