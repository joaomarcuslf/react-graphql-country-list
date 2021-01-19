import { get } from 'lodash';

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  SELECT_COUNTRY,
  SAVE_COUNTRY_REQUEST,
  SAVE_COUNTRY_SUCCESS,
  SET_MUTATIONS,
} from '../constants';

import { fetchCountries } from '../services';

import { getMutations } from '../helpers';

export const fetchCountriesRequest = () => ({ type: FETCH_COUNTRIES_REQUEST });
export const fetchCountriesSuccess = (data) => ({ type: FETCH_COUNTRIES_SUCCESS, payload: data });
export const fetchCountriesError = (data) => ({ type: FETCH_COUNTRIES_ERROR, payload: data });

export const saveCountryRequest = () => ({ type: SAVE_COUNTRY_REQUEST });
export const saveCountrySuccess = () => ({ type: SAVE_COUNTRY_SUCCESS });

export const setMutations = (mutations) => ({ type: SET_MUTATIONS, payload: mutations });

export const getCountries = () => (dispatch) => {
  dispatch(fetchCountriesRequest());

  return fetchCountries()
    .then((data) => {
      dispatch(fetchCountriesSuccess(get(data, ['data', 'Country'])));

      dispatch(setMutations(getMutations()));

      return data;
    })
    .catch((error) => {
      debugger;
      dispatch(fetchCountriesError(error));
      return error;
    });
};

export const saveCountry = (data, dispatch) => {
  dispatch(saveCountryRequest());

  const storageData = getMutations();

  localStorage.setItem('countriesMutation', JSON.stringify({ ...storageData, [data.alpha2Code]: data }));

  dispatch(saveCountrySuccess(data));

  dispatch(setMutations(getMutations()));
};

export const selectCountry = (data) => ({ type: SELECT_COUNTRY, payload: data.replace('/', '') });
