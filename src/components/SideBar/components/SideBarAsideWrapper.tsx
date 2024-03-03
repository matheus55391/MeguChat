interface SidebarAsideWrapperProps {
    children?: React.ReactNode;
}
// className="bg-gray-200 p-4 shadow-md w-1/4"
export const SidebarAsideWrapper: React.FC<SidebarAsideWrapperProps> = ({ children }) => {
    return (
        <aside
            data-testid="sidebar-aside-wrapper"
            className="bg-zinc-50 hidden md:block p-4 space-y-4 dark:bg-zinc-900"
        >
            {children}
        </aside>
    )
}
