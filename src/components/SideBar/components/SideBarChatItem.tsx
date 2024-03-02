interface SideBarChatItemProps {
    title: string
    lastMessage?: string
    lastMessageDate: Date
    isSelected: boolean
    onClick?: () => void
}

export const SideBarChatItem: React.FC<SideBarChatItemProps> = ({ title, lastMessage, lastMessageDate, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex flex-row  items-center p-2 hover:cursor-pointer ${isSelected && 'bg-gray-200 rounded-2xl'}  hover:bg-gray-200 hover:rounded-2xl hover:transition-all `}
            data-testid="sidebar-chat-item"
        >
            <div className="flex min-h-12 min-w-12 max-w-12 max-h-12 bg-blue-600 rounded-full" />
            <div className="flex flex-col w-full m-2 overflow-hidden">
                <h1 data-testid="sidebar-chat-item-title" className="text-lg font-bold text-black">{title}</h1>
                {/* preciso limitar o tamanho exibido da mensagem para uma linha */}
                <p data-testid="sidebar-chat-item-last-message" className="text-sm line-clamp-1">{lastMessage}{lastMessage}{lastMessage}{lastMessage}</p>
            </div>

            <p data-testid="sidebar-chat-item-last-message-date">{lastMessageDate?.toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' })}</p>
        </div>
    )
}