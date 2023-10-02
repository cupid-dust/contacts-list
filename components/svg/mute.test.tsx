import React from 'react';
import { render } from '@testing-library/react';
import { Mute } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('Mute component', () => {
  it('renders without errors', () => {
    const { container } = render(<Mute />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<Mute className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<Mute />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '19');
    expect(svgElement).toHaveAttribute('height', '21');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<Mute />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 19 21');
  });
});
