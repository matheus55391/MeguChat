import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { SidebarAsideWrapper } from '../components/SideBarAsideWrapper';

describe('SidebarAsideWrapper Component', () => {
  it('renders correctly with children', () => {
    const { getByTestId } = render(
      <SidebarAsideWrapper>
        <div data-testid="child-component">Child Component</div>
      </SidebarAsideWrapper>
    );

    const asideElement = getByTestId('sidebar-aside-wrapper');
    expect(asideElement).toBeInTheDocument();
    
    const childComponent = getByTestId('child-component');
    expect(childComponent).toBeInTheDocument();
  });

});
