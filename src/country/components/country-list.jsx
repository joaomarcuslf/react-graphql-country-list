import React from 'react';
import { useHistory } from 'react-router-dom';

import { get } from 'lodash';

import LoadingWrapper from '../../components/loading-wrapper';

import { filterCountries } from '../helpers';

const CountryList = ({
  loading = false, message = '', countries = [], searchTerm = '', selectCountry,
}) => {
  const countriesToShow = filterCountries(countries, searchTerm);
  const history = useHistory();

  function handleClick(id) {
    selectCountry(id);
    history.push(`/country/${id}`);
  }

  return (
    <LoadingWrapper loading={loading} error={{ message }}>
      <div className="columns is-multiline">
        {countriesToShow.length > 0
          ? filterCountries(countries, searchTerm).map((country) => (
            <article
              className="column country-view"
              key={get(country, ['name'])}
              onClick={() => handleClick(get(country, ['alpha2Code']))}
            >
              <figure className="country-flag">
                <img src={get(country, ['flag', 'svgFile'])} alt={`${get(country, ['name'])} Flag`} />
              </figure>

              <div className="country-info">
                <strong className="title">{get(country, ['name'])}</strong>

                <small className="subtitle">{get(country, ['capital'])}</small>
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
    </LoadingWrapper>
  );
};
export default CountryList;
