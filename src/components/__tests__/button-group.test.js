import React from 'react';

import { render, screen } from '@testing-library/react';

import ButtonGroup from '../button-group';

test('renders the buttons as given', () => {
  render(
    <ButtonGroup
      groups={[
        {
          text: 'Back',
          className: 'is-warning',
          handler: () => {},
        },
        {
          text: 'Save',
          className: 'is-info',
          type: 'submit',
          handler: () => {},
        },
      ]}
    />,
  );

  expect(screen.queryByText('Back')).toBeInTheDocument();
  expect(screen.queryByText('Save')).toBeInTheDocument();
});
