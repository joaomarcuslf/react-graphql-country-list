import React from 'react';
import { render, screen } from '@testing-library/react';

import CountryList from '../../components/country-list';

test('renders a list', () => {
  render(<CountryList countries={[
    { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
    { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
  ]}
  />);

  const countryElement01 = screen.queryByText('Country 01');
  expect(countryElement01).toBeInTheDocument();

  const countryElement02 = screen.queryByText('Country 02');
  expect(countryElement02).toBeInTheDocument();
});

test('renders only the matches if search term is provided', () => {
  render(<CountryList
    countries={[
      { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
      { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
    ]}
    searchTerm="Country 01"
  />);

  const countryElement01 = screen.queryByText('Country 01');
  expect(countryElement01).toBeInTheDocument();

  const countryElement02 = screen.queryByText('Country 02');
  expect(countryElement02).toBeNull();
});

test('renders message if not country is present', () => {
  render(<CountryList
    countries={[]}
    searchTerm="Country 01"
  />);

  const countryElement01 = screen.queryByText('Country 01');
  expect(countryElement01).toBeNull();

  const countryElement02 = screen.queryByText('Country 02');
  expect(countryElement02).toBeNull();

  const messageElement = screen.queryByText('No Country to Show');
  expect(messageElement).toBeInTheDocument();
});
