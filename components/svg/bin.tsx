import React from 'react';
import type { SvgProps } from '@app/components/svg';

const Bin = ({ className = 'fill-white' }: SvgProps): JSX.Element => {
  return (
    <svg
      className={className}
      width="14"
      height="18"
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.3 15.9998H10.7C10.7667 15.9998 10.8333 15.9665 10.9 15.8998C10.9667 15.8331 11 15.7665 11 15.6998V5.9998H3V15.6998C3 15.7665 3.03333 15.8331 3.1 15.8998C3.16667 15.9665 3.23333 15.9998 3.3 15.9998ZM0.625 3.2998V1.7998H3.6L4.6 0.799805H9.4L10.4 1.7998H13.375V3.2998H0.625ZM3.3 17.4998C2.8 17.4998 2.375 17.3248 2.025 16.9748C1.675 16.6248 1.5 16.1998 1.5 15.6998V4.4998H12.5V15.6998C12.5 16.1998 12.325 16.6248 11.975 16.9748C11.625 17.3248 11.2 17.4998 10.7 17.4998H3.3ZM3 15.9998H11C11 15.9998 10.9667 15.9998 10.9 15.9998C10.8333 15.9998 10.7667 15.9998 10.7 15.9998H3.3C3.23333 15.9998 3.16667 15.9998 3.1 15.9998C3.03333 15.9998 3 15.9998 3 15.9998Z" />
    </svg>
  );
};

export default Bin;
