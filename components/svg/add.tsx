import React from 'react';
import type { SvgProps } from '@app/components/svg';

const Add = ({ className = 'fill-white' }: SvgProps): JSX.Element => {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.25 13.75V7.75H0.25V6.25H6.25V0.25H7.75V6.25H13.75V7.75H7.75V13.75H6.25Z" />
    </svg>
  );
};

export default Add;
