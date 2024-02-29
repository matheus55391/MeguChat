// Message.tsx
import React from "react";

interface MessageProps {
  text: string;
  isUser: boolean;
  timestamp: Date; // Alterando para receber Date
}

const Message: React.FC<MessageProps> = ({ text, isUser, timestamp }) => {
  const formattedTimestamp = timestamp.toLocaleString(); // Formatando timestamp para string

  return (
    <div
      className={`px-8 ${isUser ? "ml-auto" : "mr-auto"} flex flex-row p-4 space-x-2 ${
        isUser ? "bg-green-500 text-white" : "bg-gray-200 text-black"
      }  sm:w-[60%] rounded-2xl`}
    >
      {text}
      <p className="text-xs ml-auto">{formattedTimestamp}</p>
    </div>
  );
};

export default Message;
