import ThemeToggleButton from "@/components/ThemeToggleButton";

interface TitleSideBarProps {
    children: React.ReactNode;
}

export const SideBarTitle: React.FC<TitleSideBarProps> = ({ children }: TitleSideBarProps) => {
    return (
        <div className="flex flex-row justify-between items-center dark:text-white">
            <h1 className={`text-3xl font-bold`}>{children}</h1>
            <ThemeToggleButton />
        </div>
    )
}
