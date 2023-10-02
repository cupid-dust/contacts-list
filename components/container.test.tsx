'use client';

import React from 'react';
import { expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import { Container } from '@app/components';

test('snapshot', () => {
  const result = renderer
    .create(
      <Container>
        <p>Hello World</p>
      </Container>
    )
    .toJSON();

  expect(result).toMatchSnapshot();
});
