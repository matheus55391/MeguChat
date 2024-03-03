import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import ChatItemCard from '.';

describe('ChatItemCard Component', () => {
    const mockOnClick = jest.fn();

    it('should render the component without errors', () => {
        const { getByTestId } = render(
            <ChatItemCard
                title="Chat Title"
                lastMessage="Last Message"
                lastMessageDate={new Date('2022-01-01')}
                isSelected={false}
                onClick={mockOnClick}
            />
        );

        const chatItemElement = getByTestId('sidebar-chat-item');
        expect(chatItemElement).toBeInTheDocument();
    });

    it('should render the title correctly', () => {
        const { getByTestId } = render(
            <ChatItemCard
                title="Chat Title"
                lastMessage="Last Message"
                lastMessageDate={new Date('2022-01-01')}
                isSelected={false}
                onClick={mockOnClick}
            />
        );

        const titleElement = getByTestId('sidebar-chat-item-title');
        expect(titleElement).toHaveTextContent('Chat Title');
    });

    it('should render the last message correctly', () => {
        const { getByTestId } = render(
            <ChatItemCard
                title="Chat Title"
                lastMessage="Last Message"
                lastMessageDate={new Date('2022-01-01')}
                isSelected={false}
                onClick={mockOnClick}
            />
        );

        const lastMessageElement = getByTestId('sidebar-chat-item-last-message');
        expect(lastMessageElement).toHaveTextContent('Last Message');
    });

    it('should render the last message date correctly', () => {
        const { getByTestId } = render(
            <ChatItemCard
                title="Chat Title"
                lastMessage="Last Message"
                lastMessageDate={new Date('2022-01-01')}
                isSelected={false}
                onClick={mockOnClick}
            />
        );

        const lastMessageDateElement = getByTestId('sidebar-chat-item-last-message-date');
        expect(lastMessageDateElement).toHaveTextContent(new Date('2022-01-01').toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' }));
    });

    it('should calls onClick when clicked', () => {
        const { getByTestId } = render(
            <ChatItemCard
                title="Chat Title"
                lastMessage="Last Message"
                lastMessageDate={new Date('2022-01-01')}
                isSelected={false}
                onClick={mockOnClick}
            />
        );

        const chatItemElement = getByTestId('sidebar-chat-item');
        expect(chatItemElement).toBeInTheDocument();
        fireEvent.click(chatItemElement);
        expect(mockOnClick).toHaveBeenCalled();
    })

});
