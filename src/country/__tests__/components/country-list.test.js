import React from 'react';
import { render, screen } from '@testing-library/react';

import CountryList from '../../components/country-list';

test('renders a list', () => {
  render(<CountryList countries={[
    { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
    { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
  ]}
  />);

  expect(screen.queryByText('Country 01')).toBeInTheDocument();

  expect(screen.queryByText('Country 02')).toBeInTheDocument();
});

test('renders only the matches if search term is provided', () => {
  render(<CountryList
    countries={[
      { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
      { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
    ]}
    searchTerm="Country 01"
  />);

  expect(screen.queryByText('Country 01')).toBeInTheDocument();

  expect(screen.queryByText('Country 02')).toBeNull();
});

test('renders message if not country is present', () => {
  render(<CountryList
    countries={[]}
    searchTerm="Country 01"
  />);

  expect(screen.queryByText('Country 01')).toBeNull();

  expect(screen.queryByText('Country 02')).toBeNull();

  expect(screen.queryByText('No Country to Show')).toBeInTheDocument();
});

test('renders message if no country match the search', () => {
  render(<CountryList
    countries={[
      { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
      { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
    ]}
    searchTerm="Country 03"
  />);

  expect(screen.queryByText('Country 01')).toBeNull();

  expect(screen.queryByText('Country 02')).toBeNull();

  expect(screen.queryByText('No Country to Show')).toBeInTheDocument();
});
