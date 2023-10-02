'use client';
import React from 'react';
import { expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import { Region } from '@app/components';

test('snapshot', () => {
  const result = renderer
    .create(
      <Region>
        <p>Hello World</p>
      </Region>
    )
    .toJSON();

  expect(result).toMatchSnapshot();
});
