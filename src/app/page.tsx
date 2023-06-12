import ChatArea from '@/components/ChatArea';
import ContactsList from '@/components/ContactsList';
import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen text-black">
      <ContactsList />
      <ChatArea />
    </main>
  );
}
