interface TitleSideBarProps {
    children: React.ReactNode;    
}

export const SideBarTitle: React.FC<TitleSideBarProps> = ({ children }: TitleSideBarProps) => {
    return (
        <h1 className={`text-4xl font-bold`}>{children}</h1>
    )
}
