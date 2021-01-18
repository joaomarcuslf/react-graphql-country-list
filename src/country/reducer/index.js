import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from '../constants';

const initialState = {
  loading: false,
  error: '',
  data: [],
};

const setLoading = (state) => ({ ...state, loading: true });
const fetchSuccess = (state, action) => ({ ...state, loading: false, data: action.payload });
const fetchError = (state, action) => ({ ...state, loading: false, message: action.payload });

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return setLoading(state, action);
    case FETCH_COUNTRIES_SUCCESS:
      return fetchSuccess(state, action);
    case FETCH_COUNTRIES_ERROR:
      return fetchError(state, action);
    default:
      return state;
  }
}

export default reducer;
