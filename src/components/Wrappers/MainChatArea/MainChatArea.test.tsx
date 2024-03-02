import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import MainChatArea from "."


describe('MainChatArea', () => {
    it('should render children correctly', () => {
        render(<MainChatArea><div data-testid="test">Test</div></MainChatArea>)
        const testElement = screen.getByTestId('test')
        expect(testElement).toBeInTheDocument()
    })
})