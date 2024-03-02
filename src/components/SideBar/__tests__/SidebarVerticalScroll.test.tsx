import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SidebarVerticalScroll } from '../components/SidebarVerticalScroll';

describe('SidebarVerticalScroll Component', () => {
  it('should render the component without errors with multiple children', () => {
    const { getByTestId, getAllByTestId } = render(
      <SidebarVerticalScroll>
        <div data-testid="scroll-content-1">Scroll Content 1</div>
        <div data-testid="scroll-content-2">Scroll Content 2</div>
        <div data-testid="scroll-content-3">Scroll Content 3</div>
      </SidebarVerticalScroll>
    );

    const scrollElements = getAllByTestId(/^scroll-content-/);
    expect(scrollElements).toHaveLength(3);

    scrollElements.forEach((element, index) => {
      expect(element).toHaveTextContent(`Scroll Content ${index + 1}`);
    });
  });
});
