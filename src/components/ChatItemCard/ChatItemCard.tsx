import Avatar from "../Avatar"

interface SideBarChatItemProps {
    title: string
    lastMessage?: string
    lastMessageDate: Date
    isSelected: boolean
    image?: string
    onClick?: () => void
}

const ChatItemCard: React.FC<SideBarChatItemProps> = ({ title, lastMessage, lastMessageDate, isSelected, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex flex-row  items-center p-2 hover:cursor-pointer ${isSelected && 'bg-zinc-200 dark:bg-zinc-800 rounded-2xl'} hover:bg-gray-200 hover:rounded-2xl hover:transition-all dark:hover:bg-gray-700  `}
            data-testid="sidebar-chat-item"
        >
            <Avatar image={image || ''} />
            <div className="flex flex-col w-full m-2 overflow-hidden">
                <h1 data-testid="sidebar-chat-item-title" className="text-lg font-bold text-black dark:text-white">{title}</h1>
                <p data-testid="sidebar-chat-item-last-message" className="text-sm line-clamp-1 dark:text-white">{lastMessage}</p>
            </div>

            <p data-testid="sidebar-chat-item-last-message-date" className="dark:text-white">{lastMessageDate?.toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' })}</p>
        </div>
    )
}

export default ChatItemCard