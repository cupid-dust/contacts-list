import React from 'react';
import { render } from '@testing-library/react';
import { More } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('More component', () => {
  it('renders without errors', () => {
    const { container } = render(<More />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<More className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<More />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('height', '4');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<More />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 16 4');
  });
});
