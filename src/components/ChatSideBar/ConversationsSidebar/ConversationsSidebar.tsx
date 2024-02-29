import React from 'react';
import ContactsList from '../ContactsList';
import MessagesInput from '../MessagesInput';
import SiteTitle from '../SiteTitle';
import UserInfo from '../UserInfo';

const ConversationsSidebar: React.FC = () => {
    return (
        <div className="bg-zinc-50 h-full hidden max-w-[18%] overflow-hidden sm:flex sm:flex-col">
            <SiteTitle />
            <div className="flex flex-col p-4 mt-14 h-full">
                <h1 className="text-2xl font-bold">Messages</h1>
                <MessagesInput />
                <ContactsList />
            </div>
            <UserInfo />
        </div>
    );
}

export default ConversationsSidebar;
