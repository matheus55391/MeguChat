import React from "react";

interface ChatHeaderProps {
    children: React.ReactNode;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ children }) => {
    return (
        <div className="bg-white p-4 dark:bg-zinc-900 flex flex-row space-x-2 items-center ">
            {children}
        </div>
    )
}

export default ChatHeader