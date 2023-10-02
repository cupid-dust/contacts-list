import React from 'react';
import { render } from '@testing-library/react';
import { Settings } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('Settings component', () => {
  it('renders without errors', () => {
    const { container } = render(<Settings />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<Settings className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<Settings />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '20');
    expect(svgElement).toHaveAttribute('height', '20');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<Settings />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 20 20');
  });
});
