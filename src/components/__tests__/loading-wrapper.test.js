import React from 'react';

import { render, screen } from '@testing-library/react';

import LoadingWrapper from '../loading-wrapper';

test('renders an loading text before showing the real component', () => {
  render(
    <LoadingWrapper loading>Test</LoadingWrapper>,
  );

  expect(screen.queryByText('Loading...')).toBeInTheDocument();
});

test('renders the error message if it is provided', () => {
  render(
    <LoadingWrapper loading={false} error={{ message: 'Error' }}>
      Test
    </LoadingWrapper>,
  );

  expect(screen.queryByText('Request Error.')).toBeInTheDocument();
  expect(screen.queryByText('Error')).toBeInTheDocument();
});

test('renders the provided child when everything is fine', () => {
  render(
    <LoadingWrapper loading={false}>Test</LoadingWrapper>,
  );
  expect(screen.queryByText('Test')).toBeInTheDocument();
});
