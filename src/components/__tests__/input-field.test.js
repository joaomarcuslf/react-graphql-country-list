import React from 'react';

import { render, screen } from '@testing-library/react';

import InputField from '../input-field';

test('renders the input as given (with value)', () => {
  render(
    <InputField
      id="testingField"
      text="Test Text"
      type="number"
      placeholder="Test Placeholder"
      value="Test Value"
      onChange={() => {}}
    />,
  );

  expect(screen.getByText('Test Text')).toBeInTheDocument();
  const input = screen.getByLabelText('Test Text');

  expect(input._valueTracker.getValue()).toBe('Test Value');
});

test('renders the input as given (withou value)', () => {
  render(
    <InputField
      id="testingField"
      text="Test Text"
      type="number"
      placeholder="Test Placeholder"
      value=""
      onChange={() => {}}
    />,
  );

  expect(screen.getByText('Test Text')).toBeInTheDocument();

  const input = screen.getByLabelText('Test Text');

  expect(input.placeholder).toBe('Test Placeholder');
  expect(input._valueTracker.getValue()).toBe('');
});
