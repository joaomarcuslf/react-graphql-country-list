import React from 'react';

/* @TODO: write tests for this function */
export const filterCountries = (countries = [], searchTerm = '') => {
  if (!searchTerm) {
    return countries;
  }

  return countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

const CountryList = ({ countries = [], searchTerm = '' }) => {
  const countriesToShow = filterCountries(countries, searchTerm);

  return (
    <div className="columns is-multiline">
      {countriesToShow.length > 0
        ? filterCountries(countries, searchTerm).map((country) => (
          <article className="column country-view" key={country.name}>
            <figure className="country-flag">
              <img src={country.flag.svgFile} alt={`${country.name} Flag`} />
            </figure>

            <div className="country-info">
              <strong className="title">{country.name}</strong>

              <small className="subtitle">{country.capital}</small>
            </div>
          </article>
        ))
        : (
          <div className="column has-text-centered">
            <h3 className="subtitle has-text-centered">
              No Country to Show
            </h3>
          </div>
        )}
    </div>
  );
};
export default CountryList;
