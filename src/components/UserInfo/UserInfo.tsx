
import { faker } from "@faker-js/faker";
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const UserInfo: React.FC = () => {
    return (
        <div className="flex flex-row p-4 px-10 items-center justify-between">
            <div className="flex flex-row space-x-2">
                <div className="flex min-h-12 min-w-12 max-w-12  bg-blue-600 rounded-full" />
                <div className="flex flex-col">
                    <p className="text-base font-semibold">{faker.person.firstName()}</p>
                    <p className="text-sm ">@{faker.person.firstName()}</p>
                </div>
            </div>
            <HiOutlineDotsHorizontal className="w-6 h-6" />
        </div>
    );
}

export default UserInfo;
