import React from 'react';

import { throttle } from 'lodash';

import CountryList from '../containers/country-list';

const CountryListPage = () => {
  const [searchTerm, changeTerm] = React.useState('');

  return (
    <div className="container">
      <div className="field">
            Country Search:

        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Country term"
            onChange={throttle((evt) => changeTerm(evt.target.value), 500)}
          />
        </div>
      </div>

      <CountryList searchTerm={searchTerm} />
    </div>
  );
};

export default CountryListPage;
