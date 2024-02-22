export interface ContactItemProps {
    name: string;
    username: string;
    lastMessageTime: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ name, username, lastMessageTime }: ContactItemProps) => {
    return (
        <div className="flex flex-row space-x-2 justify-center items-center px-2">

            <div className="flex min-h-12 min-w-12 max-w-12 max-h-12 bg-blue-600 rounded-full" />

            <div className="flex flex-col w-full m-2 overflow-hidden">
                <div className="flex flex-row items-center justify-between space-x-2 w-full">
                    <div className="flex flex-row items-center space-x-2">
                        <p className="text-lg font-bold text-black">{name}</p>
                        <p className="text-sm  text-black">@{username}</p>
                    </div>
                    <p className="text-[9px] text-black">{lastMessageTime}</p>
                </div>
                <p className="text-sm text-black truncate max-w-[80%] ">Oi podemos conversar ?Oi podemos conversar ?Oi podemos conversar ?Oi podemos conversar ?</p>


            </div>
        </div>
    );
}

export default ContactItem;