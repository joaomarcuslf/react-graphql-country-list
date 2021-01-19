import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

import { get } from 'lodash';

import './index.scss';

import CountryList from './country/pages/list';
import CountryShow from './country/pages/show';
import CountryEdit from './country/pages/edit';

import store from './store';

import { getCountries, selectCountry } from './country/actions';

store.dispatch({ type: 'LOAD_PAGE_INIT' });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="is-fullwidth">
              <div className="navbar-brand is-fullwidth is-justified-center">
                <Link className="navbar-item is-fullwidth title" to="/">
                  K2 React Test
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <Switch>
            <Route path="/" exact>
              <CountryList />
            </Route>

            <Route path="/country/:id/edit" exact>
              <CountryEdit />
            </Route>

            <Route path="/country/:id" exact>
              <CountryShow />
            </Route>

            <Route component={({ location }) => (
              <h3>
              Rota não encontrada
                {' '}
                <code>{location.pathname}</code>
              </h3>
            )}
            />
          </Switch>
        </div>

        <div className="hero-foot" />
      </section>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(getCountries());

if (get(window, ['location', 'href'], '').includes('/country/')) {
  const [, id] = get(window, ['location', 'href'], '').replace('/edit', '')
    .split('/country/');
  store.dispatch(selectCountry(id));
}
