interface SideBarFooterProps {
    children?: React.ReactNode
}

export const SideBarFooter: React.FC<SideBarFooterProps> = ({ children }) => {
    return (
        <div
            data-testid="sidebar-footer"
            className="flex dark:bg-zinc-900 dark:text-white mt-auto "
        >
            {children}
        </div>
    )
}