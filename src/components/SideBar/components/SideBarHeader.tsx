interface SideBarHeaderProps {
    children: React.ReactNode;
}

export const SideBarHeader: React.FC<SideBarHeaderProps> = ({ children }) => {
    return (
        <div
            data-testid="sidebar-header"
            className="flex flex-col space-y-4 "
        >
            {children}
        </div>
    )
}