import React from 'react';

import { throttle } from 'lodash';

import CountryList from '../containers/country-list';

const CountryListPage = () => {
  const [searchTerm, changeTerm] = React.useState('');

  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="is-fullwidth">
            <div className="navbar-brand is-fullwidth is-justified-center">
              <a className="navbar-item is-fullwidth  is-justified-center title" href="/">
              K2 React Test
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
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
      </div>

      <div className="hero-foot" />
    </section>
  );
};

export default CountryListPage;
