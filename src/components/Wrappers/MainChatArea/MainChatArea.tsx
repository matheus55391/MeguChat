interface MainChatAreaProps {
    children: React.ReactNode;
}

const MainChatArea: React.FC<MainChatAreaProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 w-full dark:bg-zinc-800 ">
            {children}
        </div>
    )
}

export default MainChatArea