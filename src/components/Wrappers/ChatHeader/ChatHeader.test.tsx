import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ChatHeader from "."


describe('ChatHeader', () => {
    it('should render children correctly', () => {
        render(<ChatHeader><div data-testid="test">Test</div></ChatHeader>)
        const testElement = screen.getByTestId('test')
        expect(testElement).toBeInTheDocument()
    })
})