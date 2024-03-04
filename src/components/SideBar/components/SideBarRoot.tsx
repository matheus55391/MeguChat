import { useSidebar } from "@/contexts/SidebarContext";

interface SideBarRootProps {
    children?: React.ReactNode;
}

export const SideBarRoot: React.FC<SideBarRootProps> = ({ children }) => {
    const { isOpen, closeDrawer } = useSidebar();
    return (
        <>
            <nav
                data-testid="sidebar-aside-wrapper"
                className={`flex-col p-4 dark:text-white dark:bg-zinc-900  hidden md:flex `}
            >
                {children}
            </nav>
            <div
                data-testid="sidebar-drawer-wrapper"
                className={`fixed inset-0 overflow-hidden md:hidden ${isOpen ? 'block' : 'hidden'}`}
            >
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={closeDrawer}
                ></div>
                <div className="fixed inset-y-0 left-0 flex flex-col w-[100%]  p-4 bg-white dark:text-white dark:bg-zinc-900">
                    {children}
                </div>
            </div>
        </>
    )
}
