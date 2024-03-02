interface MessageInputAreaProps {
    children?: React.ReactNode
}

const MessageInputArea: React.FC<MessageInputAreaProps> = ({ children }) => {
    return (
        <div className="bg-white p-4 shadow-md flex flex-row space-x-2 justify-center items-center">
            {children}
            {/* <textarea
                value={newMessage}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="w-full p-2 border border-gray-300 rounded"
            ></textarea>

            <button
                onClick={sendMessage}
                className=" bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
            >
                Enviar
            </button> */}
        </div>
    )
}

export default MessageInputArea