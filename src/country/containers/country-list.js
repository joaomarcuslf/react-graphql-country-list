import { connect } from 'react-redux';

import CountryList from '../components/country-list';

const mapStateToProps = (state) => ({
  countries: state.country.data,
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(CountryList);
