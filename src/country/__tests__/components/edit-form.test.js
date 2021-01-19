import React from 'react';
import { render, screen } from '@testing-library/react';

import EditForm from '../../components/edit-form';

/**
 * Same Tests of country.list.js
 */

test('should render country name', () => {
  render(<EditForm selected={{
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
  render(<EditForm selected={{
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
  render(<EditForm selected={{
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
  render(<EditForm selected={{
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
  render(<EditForm selected={{
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
  render(<EditForm selected={{
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
