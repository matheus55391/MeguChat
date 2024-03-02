import React from "react";

interface ChatHeaderProps {
    children: React.ReactNode;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ children }) => {
    return(
        <div className="bg-white p-4 ">
            {children}
        </div>
    )
}

export default ChatHeader