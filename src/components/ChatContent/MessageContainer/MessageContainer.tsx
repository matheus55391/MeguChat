// MessageContainer.tsx
import React from "react";
import Message from "../Message";

export interface IMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface MessageContainerProps {
  messages: IMessage[];
}

const MessageContainer: React.FC<MessageContainerProps> = ({ messages }) => {
  return (
    <div className="flex flex-col h-full no-scrollbar overflow-y-scroll space-y-2 p-4">
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser} text={message.text} timestamp={message.timestamp} />
        ))}
        <p className="text-xs">Sat 5:10 AM</p>
      </div>
    </div>
  );
};

export default MessageContainer;
