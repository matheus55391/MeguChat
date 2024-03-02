import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SideBarTitle } from '../components/SideBarTitle';

describe('SideBarTitle Component', () => {
    it('should render the component without errors', () => {
        const { getByText } = render(<SideBarTitle>Test Title</SideBarTitle>);
        const titleElement = getByText('Test Title');
        expect(titleElement).toBeInTheDocument();
    });

});
