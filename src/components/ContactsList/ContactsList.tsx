import React from 'react';
import ContactItem from '../ContactItem';
import { ContactItemProps } from '../ContactItem/ContactItem';


const contacts: ContactItemProps[] = [
  { name: "John Doe", username: "john_doe", lastMessageTime: "Dec 15" },
  { name: "John Doe", username: "john_doe", lastMessageTime: "Dec 14" },
  { name: "John Doe", username: "john_doe", lastMessageTime: "Dec 13" },
  { name: "John Doe", username: "john_doe", lastMessageTime: "Dec 12" },
  { name: "John Doe", username: "john_doe", lastMessageTime: "Dec 11" },
];

const ContactsList: React.FC = () => {

  return (
    <div className="flex flex-col space-y-2 mt-10">
      {contacts.map((contact, index) => (
        <ContactItem key={index} {...contact} />
      ))}
    </div>
  );
}

export default ContactsList;