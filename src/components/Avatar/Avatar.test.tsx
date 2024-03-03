import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Avatar from '.';

describe('Avatar Component', () => {
    it('should render the image without errors', () => {
        const { getByTestId } = render(<Avatar image="https://picsum.photos/200" />);
        const avatarElement = getByTestId('avatar-image');
        expect(avatarElement).toBeInTheDocument();
    });
})