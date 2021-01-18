import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import './index.scss';

import CountryList from './country/pages/list';

import store from './store';

import { getCountries } from './country/actions';

store.dispatch({ type: 'LOAD_PAGE_INIT' });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <CountryList />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(getCountries());
