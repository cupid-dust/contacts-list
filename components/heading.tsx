'use client';

import React from 'react';
import { collapse } from '@growthops/ext-ts';

type Variant = 'headline' | 'heading-one' | 'heading-two' | 'heading-three';

type SemanticElement = 'h1' | 'h2' | 'h3';

type HeadingProps = {
  variant: Variant;
  label: string;
  element?: SemanticElement;
  className?: string;
};

const Heading = ({
  variant,
  label,
  element = 'h1',
  className = '',
}: HeadingProps): JSX.Element => {
  const sharedProps = {
    className: collapse([variant, className]),
  };

  switch (element) {
    case 'h1':
      return <h1 {...sharedProps}>{label}</h1>;
    case 'h2':
      return <h2 {...sharedProps}>{label}</h2>;
    case 'h3':
      return <h3 {...sharedProps}>{label}</h3>;
    default:
      // Ensure exhaustive case handling.
      ((_: never): never => {
        throw new Error('Unhandled');
      })(element);
  }
};

export default Heading;

export type { Variant, SemanticElement, HeadingProps };
