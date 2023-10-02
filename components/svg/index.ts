import React from 'react';

export { default as Mute } from './mute';
export { default as HeadPhones } from './head-phones';
export { default as More } from './more';
export { default as Settings } from './settings';
export { default as Heart } from './heart';
export { default as TrashBin } from './bin';
export { default as Add } from './add';
export { default as BackArrow } from './back-arrow';
export { default as Recycle } from './recycle';
export { default as Search } from './search';
export { default as Sun } from './sun';

interface SvgProps extends React.ComponentProps<'svg'> {
  className?: string;
}

export type { SvgProps };
