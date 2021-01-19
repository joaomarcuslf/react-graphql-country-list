import React from 'react';

import LoadingWrapper from '../../components/loading-wrapper';

import EditForm from './edit-form';

const CountryShow = ({
  loading = false, message = '', selected = {}, saveCountry,
}) => (
  <LoadingWrapper loading={loading} error={{ message }}>
    <EditForm selected={selected} saveCountry={saveCountry} />
  </LoadingWrapper>
);
export default CountryShow;
