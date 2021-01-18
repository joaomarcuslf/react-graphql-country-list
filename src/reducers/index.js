import { combineReducers } from 'redux';

import country from '../country/reducer';

const rootReducer = combineReducers({
  country,
});

export default rootReducer;
