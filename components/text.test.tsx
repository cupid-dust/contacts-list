'use client';
import React from 'react';
import { expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import { Text } from '@app/components';
import type { Variant, SemanticElement } from './text';

const variants: Variant[] = ['text-lead', 'text-regular'];
const elements: SemanticElement[] = ['p', 'span'];

test('snapshots', () => {
  for (const variant of variants) {
    for (const element of elements) {
      const result = renderer
        .create(
          <Text variant={variant} element={element}>
            Hello World
          </Text>
        )
        .toJSON();

      expect(result).toMatchSnapshot();
    }
  }
});
