import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SideBarSearchInput } from '../components/SideBarSearchInput';

describe('SideBarSearchInput Component', () => {
    it('should render the component without errors', () => {
        const { getByTestId } = render(<SideBarSearchInput />);
        const searchInputElement = getByTestId('search-input');
        expect(searchInputElement).toBeInTheDocument();
    });

    it('should apply custom data-testid correctly', () => {
        const { getByTestId } = render(
            <SideBarSearchInput data-testid="custom-search-input" />
        );
        const customSearchInputElement = getByTestId('custom-search-input');
        expect(customSearchInputElement).toBeInTheDocument();
    });

    it('should render the left icon correctly', () => {
        const { getByTestId } = render(
            <SideBarSearchInput leftIcon={<div data-testid="left-icon" />} />
        );
        const leftIconElement = getByTestId('left-icon');
        expect(leftIconElement).toBeInTheDocument();
    });
});
