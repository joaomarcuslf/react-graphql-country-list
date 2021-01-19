import React from 'react';
import { render, screen } from '@testing-library/react';

import CountryShow from '../../components/country-show';

test('should render country name', () => {
  render(<CountryShow selected={{
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

  expect(screen.queryByText('Country 01')).toBeInTheDocument();
});

test('should render capital name', () => {
  render(<CountryShow selected={{
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

  expect(screen.queryByText('Capital 01')).toBeInTheDocument();
});

test('should render area', () => {
  render(<CountryShow selected={{
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

  expect(screen.queryByText('1000')).toBeInTheDocument();
});

test('should render population density', () => {
  render(<CountryShow selected={{
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

  expect(screen.queryByText('25.05')).toBeInTheDocument();
});

test('should render population density', () => {
  render(<CountryShow selected={{
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

  expect(screen.queryByText('.test')).toBeInTheDocument();
  expect(screen.queryByText('.test.com')).toBeInTheDocument();
});

test('should render back button', () => {
  render(<CountryShow selected={{
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
  render(<CountryShow selected={{
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

  expect(screen.queryByText('Edit')).toBeInTheDocument();
});
