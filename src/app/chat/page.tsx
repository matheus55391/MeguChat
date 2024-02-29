import ChatInput from "@/components/ChatContent/ChatInput";
import ContactHeader from "@/components/ChatContent/ContactHeader";
import MessageContainer from "@/components/ChatContent/MessageContainer";
import { IMessage } from "@/components/ChatContent/MessageContainer/MessageContainer";
import ConversationsSidebar from "@/components/ChatSideBar/ConversationsSidebar";


export default function Chat() {
  const messages: IMessage[] = [
    { 
      text: "next time you'll be awake at this hour why not now", 
      isUser: true,
      timestamp: new Date()
    },
    {
      text: "Didn't I tell you not to put your phone on charge just because it's the weekend?",
      isUser: false,
      timestamp: new Date()


    },
    { 
      text: "🥺🥺🥺", 
      isUser: true,
      timestamp: new Date()

     },
    {
      text: "i woke up calmnnn i put it on the charger the phone was turned off next to me i took it out while i was sleeping hsadfkagshdfgsajf i slept early girl i slept at 3",
      isUser: false,
      timestamp: new Date()

    },
    { 
      text: "While you win in love, you continue to win in other things dhdhdhdh", 
      isUser: false,
      timestamp: new Date()
    },
    { 
      text: "🔥🔥", 
      isUser: false,
      timestamp: new Date()

   },
  ];

  return (
    <main className="flex flex-row h-[100dvh]">
      <ConversationsSidebar />


      <div className="flex flex-col w-full ">
        <ContactHeader />

        <MessageContainer  messages={messages} />

        <ChatInput />
      </div>
    </main >
  );
}
