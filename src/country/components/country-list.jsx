import React from 'react';

const CountryList = ({ countries = [], searchTerm = '' }) => (
  <div className="columns is-multiline">
    {countries.length > 0
      ? countries.map((country) => {
        if (searchTerm && !country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return null;
        }

        return (
          <article className="column country-view" key={country.name}>
            <figure className="country-flag">
              <img src={country.flag.svgFile} alt={`${country.name} Flag`} />
            </figure>

            <div className="country-info">
              <strong className="title">{country.name}</strong>

              <small className="subtitle">{country.capital}</small>
            </div>
          </article>
        );
      })
      : (
        <h1 className="title">
          No Country to Show
        </h1>
      )}
  </div>
);

export default CountryList;
