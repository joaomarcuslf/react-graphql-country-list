import { connect } from 'react-redux';

import CountryList from '../components/country-list';

import { selectCountry } from '../actions';

import { applyMutations } from '../helpers';

const mapStateToProps = (state) => ({
  countries: applyMutations(state.country.data, state.country.mutations),
  loading: state.country.loading,
  message: state.country.message,
  mutations: state.country.mutations,
});

const mapDispatchToProps = (dispatch) => ({
  selectCountry: (code) => {
    dispatch(selectCountry(code));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
