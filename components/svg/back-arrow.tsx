import React from 'react';
import type { SvgProps } from '@app/components/svg';

const BackArrow = ({ className = 'fill-white' }: SvgProps): JSX.Element => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 15.625L0.375 8L8 0.375L9.075 1.45L3.25 7.25H15.625V8.75H3.25L9.075 14.55L8 15.625Z" />
    </svg>
  );
};

export default BackArrow;
