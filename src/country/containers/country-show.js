import { connect } from 'react-redux';

import CountryShow from '../components/country-show';

import { applyMutations } from '../helpers';

const mapStateToProps = (state) => ({
  id: state.country.selected,
  loading: state.country.loading,
  message: state.country.message,
  mutations: state.country.mutations,
  selected: applyMutations(
    state.country.data,
    state.country.mutations,
  ).find((country) => country.alpha2Code === state.country.selected),
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(CountryShow);
