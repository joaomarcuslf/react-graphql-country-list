import { get } from 'lodash';

export const filterCountries = (countries = [], searchTerm = '') => {
  if (!searchTerm) {
    return countries;
  }

  return countries.filter((country) => get(country, ['name']).toLowerCase()
    .includes(searchTerm.toLowerCase()));
};

export const getMutations = () => JSON.parse(localStorage.getItem('countriesMutation') || '{}');

export const applyMutations = (countries = [], mutations = {}) => countries.map((country) => {
  if (mutations[country.alpha2Code]) {
    return { ...country, ...mutations[country.alpha2Code] };
  }

  return country;
});
