import React from 'react';
import ContactsList from '../ContactsList';
import MessagesInput from '../MessagesInput';
import SiteTitle from '../SiteTitle';

const ConversationsSidebar: React.FC = () => {
    return (
        <div className="bg-slate-50 h-full hidden max-w-[25%] overflow-hidden sm:flex sm:flex-col">
            <SiteTitle />
            <div className="flex flex-col p-4 mt-14 h-full">
                <h1 className="text-2xl font-bold">Messages</h1>
                <MessagesInput />
                <ContactsList /> 
            </div>
        </div>
    );
}

export default ConversationsSidebar;
