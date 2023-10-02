import React from 'react';
import { render } from '@testing-library/react';
import { Heart } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('Heart component', () => {
  it('renders without errors', () => {
    const { container } = render(<Heart />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<Heart className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<Heart />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '20');
    expect(svgElement).toHaveAttribute('height', '18');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<Heart />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 20 18');
  });
});
