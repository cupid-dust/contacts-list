'use client';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { collapse } from '@growthops/ext-ts';

type Size = 'regular' | 'large' | 'small';

interface AvatarProps {
  className?: string;
  size: Size;
  image?: string;
  hasBorder?: boolean;
}

const sizeClasses: Record<Size, string> = {
  large: 'h-[88px] w-[88px] ',
  regular: 'w-10 h-10',
  small: 'w-6 h-6',
};

const useClasses = (
  size: Size,
  className: string | undefined,
  hasBorder?: boolean
) =>
  useMemo(
    () => ({
      root: collapse([
        sizeClasses[size],
        className ?? '',
        'overflow-hidden rounded-full',
        hasBorder ? 'border-2 border-white' : '',
      ]),
    }),
    [size, className, hasBorder]
  );

const Avatar = ({
  className,
  size = 'large',
  image = '/images/Default.jpg',
  hasBorder = false,
}: AvatarProps): JSX.Element => {
  const classes = useClasses(size, className, hasBorder);
  return (
    <div className={classes.root}>
      <Image src={image} alt="User Avatar" width={500} height={500} />
    </div>
  );
};

export type { Size };
export default Avatar;
