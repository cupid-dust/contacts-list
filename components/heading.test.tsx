'use client';

import React from 'react';
import { expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import { Heading } from '@app/components';
import type { Variant, SemanticElement } from './heading';

const variants: Variant[] = [
  'headline',
  'heading-one',
  'heading-two',
  'heading-three',
];

const elements: SemanticElement[] = ['h1', 'h2', 'h3'];

test('snapshots', () => {
  for (const variant of variants) {
    for (const element of elements) {
      const result = renderer
        .create(<Heading label="Heading" variant={variant} element={element} />)
        .toJSON();

      expect(result).toMatchSnapshot();
    }
  }
});
