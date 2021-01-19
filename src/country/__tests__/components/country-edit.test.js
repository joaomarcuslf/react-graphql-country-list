import React from 'react';
import { render, screen } from '@testing-library/react';

import CountryEdit from '../../components/country-edit';

test('should render country name', () => {
  render(<CountryEdit selected={{
    name: 'Country 01',
    capital: 'Capital 01',
    area: 1000,
    populationDensity: 25.05,
    flag: { svg: '' },
    topLevelDomains: [
      { name: '.test' },
      { name: '.test.com' },
    ],
  }}
  />);

  expect(screen.getByText('Name')).toBeInTheDocument();
});

test('should render capital name', () => {
  render(<CountryEdit selected={{
    name: 'Country 01',
    capital: 'Capital 01',
    area: 1000,
    populationDensity: 25.05,
    flag: { svg: '' },
    topLevelDomains: [
      { name: '.test' },
      { name: '.test.com' },
    ],
  }}
  />);

  expect(screen.getByText('Capital')).toBeInTheDocument();
});

test('should render area', () => {
  render(<CountryEdit selected={{
    name: 'Country 01',
    capital: 'Capital 01',
    area: 1000,
    populationDensity: 25.05,
    flag: { svg: '' },
    topLevelDomains: [
      { name: '.test' },
      { name: '.test.com' },
    ],
  }}
  />);

  expect(screen.getByText('Area')).toBeInTheDocument();
});

test('should render population density', () => {
  render(<CountryEdit selected={{
    name: 'Country 01',
    capital: 'Capital 01',
    area: 1000,
    populationDensity: 25.05,
    flag: { svg: '' },
    topLevelDomains: [
      { name: '.test' },
      { name: '.test.com' },
    ],
  }}
  />);

  expect(screen.getByText('Population Density')).toBeInTheDocument();
});

test('should render back button', () => {
  render(<CountryEdit selected={{
    name: 'Country 01',
    capital: 'Capital 01',
    area: 1000,
    populationDensity: 25.05,
    flag: { svg: '' },
    topLevelDomains: [
      { name: '.test' },
      { name: '.test.com' },
    ],
  }}
  />);

  expect(screen.queryByText('Back')).toBeInTheDocument();
});

test('should render back button', () => {
  render(<CountryEdit selected={{
    name: 'Country 01',
    capital: 'Capital 01',
    area: 1000,
    populationDensity: 25.05,
    flag: { svg: '' },
    topLevelDomains: [
      { name: '.test' },
      { name: '.test.com' },
    ],
  }}
  />);

  expect(screen.queryByText('Save')).toBeInTheDocument();
});
