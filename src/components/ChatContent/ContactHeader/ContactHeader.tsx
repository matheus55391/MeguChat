import { faker } from "@faker-js/faker";


const ContactHeader: React.FC = () => {
    return (
        <div className=" flex flex-row p-4 space-x-2 border-b-2 border-gray-100 w-full px-6">
          <div className="min-h-12 min-w-12 bg-blue-500 rounded-full" />
          <div className="flex flex-col">
            <p className="text-lg font-bold text-black">{faker.person.fullName()}</p>
            <p className="text-sm text-black">@{faker.person.firstName()}</p>
          </div>
        </div>
    );
}

export default ContactHeader;
