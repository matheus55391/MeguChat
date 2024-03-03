interface SideBarMainProps {
    children?: React.ReactNode;
}
export const SideBarMain: React.FC<SideBarMainProps> = ({ children }) => {
    return (
        <div className="flex  overflow-y-auto space-y-2 ">
            {children}
        </div>
    )
}