import React from 'react';
import { render } from '@testing-library/react';
import { Sun } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('Sun component', () => {
  it('renders without errors', () => {
    const { container } = render(<Sun />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<Sun className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<Sun />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '22');
    expect(svgElement).toHaveAttribute('height', '22');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<Sun />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 22 22');
  });
});
