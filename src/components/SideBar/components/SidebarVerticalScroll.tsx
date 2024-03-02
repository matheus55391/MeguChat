interface SidebarVerticalScrollProps {
    children: React.ReactNode;
}
export const SidebarVerticalScroll: React.FC<SidebarVerticalScrollProps> = ({ children }) => {
    return (
        <div className="overflow-y-auto space-y-2">
            {children}
        </div>
    )
}