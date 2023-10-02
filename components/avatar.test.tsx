import React from 'react';
import { expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import { Avatar } from '@app/components';
import type { Size } from './avatar';

const sizes: Size[] = ['large', 'regular', 'small'];

test('snapshots — semantic', () => {
  for (const size of sizes) {
    const result = renderer
      .create(<Avatar size={size} image="/images/Default.jpg" />)
      .toJSON();

    expect(result).toMatchSnapshot();
  }
});
