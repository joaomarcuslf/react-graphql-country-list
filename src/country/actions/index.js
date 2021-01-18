import { get } from 'lodash';

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from '../constants';

import { fetchCountries } from '../services';

export const fetchCountriesRequest = () => ({ type: FETCH_COUNTRIES_REQUEST });
export const fetchCountriesSuccess = (data) => ({ type: FETCH_COUNTRIES_SUCCESS, payload: data });
export const fetchCountriesError = (data) => ({ type: FETCH_COUNTRIES_ERROR, payload: data });

export const getCountries = () => (dispatch) => {
  dispatch(fetchCountriesRequest());

  return fetchCountries()
    .then((data) => {
      dispatch(fetchCountriesSuccess(get(data, ['data', 'Country'])));

      return data;
    })
    .catch((error) => {
      dispatch(fetchCountriesError(error));
      return error;
    });
};
