import React from 'react';
import { render } from '@testing-library/react';
import { BackArrow } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('BackArrow component', () => {
  it('renders without errors', () => {
    const { container } = render(<BackArrow />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<BackArrow className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<BackArrow />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('height', '16');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<BackArrow />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 16 16');
  });
});
