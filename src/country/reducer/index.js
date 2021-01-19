import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  SELECT_COUNTRY,
  SET_MUTATIONS,
} from '../constants';

const initialState = {
  loading: false,
  error: '',
  data: [],
  selected: null,
  mutations: {},
};

const setLoading = (state) => ({ ...state, loading: true });
const fetchSuccess = (state, action) => ({ ...state, loading: false, data: action.payload });
const fetchError = (state, action) => ({ ...state, loading: false, message: action.payload });
const selectCountry = (state, action) => ({ ...state, selected: action.payload });
const setMutations = (state, action) => ({ ...state, mutations: action.payload });

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return setLoading(state, action);
    case FETCH_COUNTRIES_SUCCESS:
      return fetchSuccess(state, action);
    case FETCH_COUNTRIES_ERROR:
      return fetchError(state, action);
    case SELECT_COUNTRY:
      return selectCountry(state, action);
    case SET_MUTATIONS:
      return setMutations(state, action);
    default:
      return state;
  }
}

export default reducer;
