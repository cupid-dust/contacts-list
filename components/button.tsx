/* eslint-disable react/display-name */
'use client';

import React, { forwardRef, useMemo } from 'react';
import { isNil } from 'remeda';
import { collapse } from '@growthops/ext-ts';

type Variant = 'primary' | 'secondary' | 'tertiary';

type Size = 'small' | 'regular' | 'large';

type IconAlignment = 'left' | 'right' | 'center';

type Icon = {
  svg: React.ElementType;
  alignment?: IconAlignment;
  className?: string;
};

type BaseButtonProps = {
  label?: string;
  className?: string;
  variant?: Variant;
  size?: Size;
  icon?: Icon;
};

type SemanticButtonProps = BaseButtonProps &
  React.ComponentPropsWithoutRef<'button'>;

type LinkButtonProps = BaseButtonProps & React.ComponentPropsWithoutRef<'a'>;

const baseClasses =
  'inline-flex items-center space-x-2 transition-all ease-in-out duration-300 hover:cursor-pointer';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-g-60 h-10 hover:bg-g-50 focus:bg-g-40 rounded-lg',
  secondary:
    'custom-gradient hover:hover-gradient focus:pressed-gradient rounded-full',
  tertiary: 'h-10 hover:bg-g-90 focus:bg-g-80 rounded-lg',
};

const sizeClasses: Record<Size, string> = {
  large: 'py-2 px-4 button-text ',
  regular: 'px-6 py-4 button-text',
  small: 'p-3 button-text',
};

const iconClasses: Record<Size, string> = {
  large: 'w-6',
  regular: 'w-5',
  small: 'w-4',
};

const generateIcon = (
  icon: Icon | undefined,
  alignment: IconAlignment,
  classes: string,
  alignmentAdjustmentClasses: string
) => {
  if (!isNil(icon) && (icon?.alignment ?? 'left') === alignment) {
    const IconComponent: any = icon.svg;
    return (
      <IconComponent
        className={collapse([classes, alignmentAdjustmentClasses])}
      />
    );
  }
};

const useClasses = (
  variant: Variant,
  size: Size,
  className: string | undefined,
  icon: Icon | undefined
) =>
  useMemo(
    () => ({
      root: collapse([
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className ?? '',
      ]),
      icon: collapse([iconClasses[size], icon?.className ?? '']),
      label: collapse([
        variant === 'secondary' ? 'md:inline-block hidden' : '',
      ]),
    }),
    [variant, size, className, icon?.className]
  );

const useIcons = (icon: Icon | undefined, classes: string) =>
  useMemo(
    () => ({
      left: generateIcon(icon, 'left', classes, '-ml-2'), // -ml-* here to visually weight the icon appropriately.
      right: generateIcon(icon, 'right', classes, '!-mr-2'), // !-mr-* here to visually weight the icon appropriately.
      center: generateIcon(icon, 'center', classes, 'm-0'), // to align icon in center.
    }),
    [icon, classes]
  );

const Semantic = ({
  label,
  variant = 'primary',
  size = 'regular',
  className,
  icon,
  ...intrinsicButtonProps
}: SemanticButtonProps): JSX.Element => {
  const classes = useClasses(variant, size, className, icon);
  const icons = useIcons(icon, classes.icon);

  return (
    <button className={classes.root} {...intrinsicButtonProps}>
      {icons.left}
      {icons.center}
      {!isNil(label) && <span className={classes.label}>{label}</span>}
      {icons.right}
    </button>
  );
};

const Link = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      label,
      variant = 'primary',
      size = 'regular',
      className,
      icon,
      ...intrinsicAnchorProps
    }: LinkButtonProps,
    ref
  ): JSX.Element => {
    const classes = useClasses(variant, size, className, icon);
    const icons = useIcons(icon, classes.icon);

    return (
      <a
        ref={ref}
        className={classes.root}
        {...intrinsicAnchorProps}
        rel="noreferrer"
      >
        {icons.left}
        <span>{label}</span>
        {icons.right}
      </a>
    );
  }
);

const Button = {
  Semantic,
  Link,
};

export default Button;

export type {
  Variant,
  Size,
  IconAlignment,
  Icon,
  BaseButtonProps,
  SemanticButtonProps,
  LinkButtonProps,
};
