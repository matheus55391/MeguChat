import Contact from '@/@types/Contact';
import React from 'react';


const contacts: Contact[] = [
  { id: 1, name: 'John Doe', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
  { id: 3, name: 'Bob Johnson', phone: '555-555-5555' },
];

function ContactsList() {
  return (
    <aside
      className={`w-1/4 bg-gray-200`}
    >
      <h2 className="text-lg font-semibold">Lista de Contatos</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ContactsList;
