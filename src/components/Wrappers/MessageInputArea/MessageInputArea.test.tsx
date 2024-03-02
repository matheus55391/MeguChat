import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import MessageInputArea from "."

describe('MessageInputArea', () => {
    it('should render children correctly', () => {
        render(<MessageInputArea><div data-testid="test">Test</div></MessageInputArea>)
        const testElement = screen.getByTestId('test')
        expect(testElement).toBeInTheDocument()
    })
})