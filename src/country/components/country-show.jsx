import React from 'react';
import { useHistory } from 'react-router-dom';

import { get } from 'lodash';

import LoadingWrapper from '../../components/loading-wrapper';
import ButtonGroup from '../../components/button-group';

const CountryShow = ({ loading = false, message = '', selected }) => {
  const history = useHistory();

  const goToEdit = () => {
    history.push(
      (`${get(window, ['location', 'pathname'])}/edit`).replace('//', '/'),
    );
  };

  return (
    <LoadingWrapper loading={loading} error={{ message }}>
      <>
        <div className="columns is-multiline">
          <article className="column is-5 is-flex is-justified-center" key={get(selected, ['name'])}>
            <figure className="country-flag">
              <img src={get(selected, ['flag', 'svgFile'])} alt={`${get(selected, ['name'])} Flag`} />
            </figure>
          </article>

          <div className="column">
            <div className="label">
              Name:
              <strong>{get(selected, ['name'])}</strong>
            </div>

            <div className="label">
              Capital:
              <strong>{get(selected, ['capital'])}</strong>
            </div>

            <div className="label">
              Area:
              <strong>{get(selected, ['area'])}</strong>
            </div>

            <div className="label">
              Population Density:
              <strong>{get(selected, ['populationDensity'])}</strong>
            </div>

            <div className="label">
              Top Level Domain:
              <strong>
                {get(selected, ['topLevelDomains'], []).map((domain) => (
                  <span
                    className="tag is-light"
                    key={domain.name}
                  >
                    {domain.name}
                  </span>
                ))}
              </strong>
            </div>
          </div>
        </div>

        <ButtonGroup
          groups={[
            {
              text: 'Back',
              className: 'is-warning',
              handler: () => history.goBack(),
            },
            {
              text: 'Edit',
              className: 'is-info',
              handler: () => goToEdit(),
            },
          ]}
        />
      </>
    </LoadingWrapper>
  );
};
export default CountryShow;

/**
alpha2Code: "AF"
alpha3Code: "AFG"
alternativeSpellings: (2) [{…}, {…}]
area: 652230
callingCodes: [{…}]
capital: "Kabul"
currencies: [{…}]
demonym: "Afghan"
flag: {emoji: "🇦🇫", emojiUnicode: "U+1F1E6 U+1F1EB", svgFile: "https://restcountries.eu/data/afg.svg"}
gini: 27.8
location: {latitude: 33, longitude: 65}
name: "Afghanistan"
nativeName: "افغانستان"
officialLanguages: (3) [{…}, {…}, {…}]
population: 27657145
populationDensity: 42.40397559143247
regionalBlocs: [{…}]
subregion: {name: "Southern Asia", region: {…}}
topLevelDomains: [{…}]
 */
