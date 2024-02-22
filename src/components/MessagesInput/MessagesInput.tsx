import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const MessagesInput: React.FC = () => {
  return (
    <div className="flex p-2 items-center space-x-2 border-2 border-gray-300 rounded-full mt-6 px-4">
      <FaMagnifyingGlass className="h-5 w-5 text-gray-400" />
      <input type="text" className="bg-transparent" placeholder="Search people or message" />
    </div>
  );
}

export default MessagesInput;
