import React from 'react';

import { useHistory } from 'react-router-dom';

const LoadingWrapper = ({
  loading,
  error = {},
  data = {},
  children,
  loadingMessage = 'Loading...',
  errorMessage = 'Request Error.',
}) => {
  const history = useHistory();

  if (loading) {
    return (
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <h3 className="subtitle has-text-centered">
              {loadingMessage}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  if ((error && error.message) || data.message) {
    return (
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <div className="title is-danger">{errorMessage}</div>
          </div>

          <div className="column is-12 has-text-centered">
            <h2 className="subtitle">{error.message || data.message}</h2>
          </div>

          <div className="column is-12 has-text-centered">
            <button
              type="button"
              className="button is-warning is-medium"
              disabled={loading}
              onClick={() => history.goBack()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default LoadingWrapper;
