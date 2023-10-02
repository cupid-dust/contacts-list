import React from 'react';
import { render } from '@testing-library/react';
import { TrashBin } from '@app/components/svg';
import '@testing-library/jest-dom';

describe('TrashBin component', () => {
  it('renders without errors', () => {
    const { container } = render(<TrashBin />);
    expect(container).toBeInTheDocument();
  });

  it('renders with the provided className', () => {
    const { container } = render(<TrashBin className="custom-class" />);
    expect(container.querySelector('svg')).toHaveClass('custom-class');
  });

  it('has the correct width and height attributes', () => {
    const { container } = render(<TrashBin />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('width', '14');
    expect(svgElement).toHaveAttribute('height', '18');
  });

  it('has the correct viewBox attribute', () => {
    const { container } = render(<TrashBin />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveAttribute('viewBox', '0 0 14 18');
  });
});
