
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Avatar from "../Avatar"

export interface UserProfileProps {
    image: string
    username: string
}

const UserProfile: React.FC<UserProfileProps> = ({ image, username }) => {
    return (
        <div className="flex flex-row p-4  space-x-4 items-center justify-between dark:bg-zinc-800 rounded-2xl w-full">

            <div className="flex flex-row space-x-2 items-center justify-between">
                <Avatar image={image} />
                <div className="flex flex-col ">
                    <p className="text-base font-medium overflow-hidden overflow-ellipsis max-w-[150px]">Olá!</p>
                    <p className="text-lg font-bold overflow-hidden overflow-ellipsis max-w-[150px]">{username}</p>
                </div>
            </div>
            <HiOutlineDotsHorizontal className="w-6 h-6 hover:cursor-pointer" />
        </div>
    )
}

export default UserProfile