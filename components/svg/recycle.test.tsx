import React from 'react';
import { render } from '@testing-library/react';
import { Recycle } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('Recycle component', () => {
  it('renders without errors', () => {
    const { container } = render(<Recycle />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<Recycle className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<Recycle />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('height', '22');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<Recycle />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 16 22');
  });
});
