import React from 'react';
import { render } from '@testing-library/react';
import { Search } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('Search component', () => {
  it('renders without errors', () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<Search className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<Search />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '18');
    expect(svgElement).toHaveAttribute('height', '18');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<Search />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 18 18');
  });
});
