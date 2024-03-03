import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SearchInput from '.';
import { PiArrowsLeftRightDuotone } from 'react-icons/pi';

describe('SearchInput Component', () => {
    it('should render the component without errors', () => {
        const { getByTestId } = render(<SearchInput />);
        const searchInputElement = getByTestId('search-input');
        expect(searchInputElement).toBeInTheDocument();
    });

    it('should render the left icon default correctly when provided', () => {
        const { getByTestId } = render(
            <SearchInput />
        );
        const leftIconElement = getByTestId('left-icon-default');
        expect(leftIconElement).toBeInTheDocument();
    });

    it('should render the left icon custom correctly when provided', () => {
        const { getByTestId } = render(
            <SearchInput leftIcon={PiArrowsLeftRightDuotone} />
        );
        const leftIconElement = getByTestId('left-icon-custom');
        expect(leftIconElement).toBeInTheDocument();
    });
});
