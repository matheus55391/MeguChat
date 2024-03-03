'use client'

import ChatHeader from '@/components/Wrappers/ChatHeader';
import MainChatArea from '@/components/Wrappers/MainChatArea';
import React, { useState, ChangeEvent, useEffect } from 'react';
import SideBar from '@/components/SideBar';
import ChatsMock from '@/constants/mocks/ChatMock';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';
import { LuSmile } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
interface ChatPageProps {
    params: {
        id: string;
    };
}

enum MessageSender {
    User,
}

interface Message {
    content: string;
    sender: MessageSender;
    date: Date;
}

const ChatPage: React.FC<ChatPageProps> = ({ params }: ChatPageProps) => {
    const selectedId = params.id;
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    const sendMessage = () => {

        if (newMessage.trim() !== '') {
            const newMessageObj: Message = { content: newMessage, sender: MessageSender.User, date: new Date() };
            setMessages([...messages, newMessageObj]);
            setNewMessage('');
        }
    };

    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textAreaRef.current) {
            const maxTextAreaHeight = 80; // Set your maximum height in pixels
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = Math.min(textAreaRef.current.scrollHeight, maxTextAreaHeight) + 'px';
        }
    }, [newMessage]);

    const router = useRouter()
    return (
        <div className="flex flex-row h-screen">
            <SideBar.Root>
                <SideBar.Title>MEGUCHAT</SideBar.Title>
                <SideBar.SearchInput placeholder='Search for chats' leftIcon={<FaMagnifyingGlass className="text-gray-400" />} />

                <SideBar.VerticalScroll>
                    {
                        ChatsMock.map((chat, key) => (
                            <SideBar.ChatItem
                                key={key}
                                title={chat.title}
                                lastMessage={'last message'}
                                lastMessageDate={new Date()}
                                isSelected={chat.id === selectedId}
                                onClick={() => { 
                                    router.push(`/chat/${chat.id}`)
                                }}
                            />
                        ))
                    }
                </SideBar.VerticalScroll>
            </SideBar.Root>


            <MainChatArea>

                <ChatHeader>
                    <h1 className="text-2xl font-bold dark:text-white">{
                        ChatsMock.find(chat => chat.id === selectedId)?.title
                    }</h1>
                </ChatHeader>

                <div className="flex flex-col h-full  p-4 overflow-y-scroll space-y-2  no-scrollbar">

                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`space-x-2 bg-slate-400 p-2  ${message.sender === MessageSender.User ? 'ml-auto' : 'mr-auto '} rounded-2xl flex ${message.sender === MessageSender.User ? 'text-right' : 'text-left'}`}
                        >
                            <span className='text-white'>
                                {message.content}
                            </span>
                            <span className='text-white'>
                                {message.date.toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' })}
                            </span>
                        </div>
                    ))}
                </div>


                <div className="flex flex-row bg-zinc-50 items-center p-4 px-2 space-x-2 dark:bg-zinc-900  " >
                    {/* <div className="flex flex-row space-x-2 items-center">
                        <BsImage className="w-6 h-6 text-green-400" />
                        <HiOutlineGif className="w-7 h-7 text-green-400" />
                    </div> */}
                    <div className="flex flex-1 items-center border-2 p-2 space-x-2 rounded-xl dark:border-zinc-700">
                        <textarea
                            value={newMessage}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewMessage(e.target.value)}
                            ref={textAreaRef}
                            placeholder="Type a message"
                            className="p-1 flex-1 bg-transparent focus:outline-none overflow-x-hidden overflow-y-auto resize-none no-scrollbar dark:text-white"
                            rows={1}
                        />
                        <LuSmile className="w-6 h-6 text-green-400" />
                    </div>
                    <button className='h-12 w-12 flex items-center justify-center bg-green-400 rounded-lg hover:bg-green-500 focus:outline-none  active:bg-green-600 dark:bg-green-600'>
                        <HiMiniArrowSmallRight className="w-9 h-9 text-white dark:text-black " onClick={sendMessage} />
                    </button>
                </div>


            </MainChatArea>

        </div>
    );
};

export default ChatPage;
