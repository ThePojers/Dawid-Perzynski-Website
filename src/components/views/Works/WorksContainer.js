import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import {  getData, getLoadingState } from '../../../redux/axiosRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
  loading: getLoadingState(state),
});

export default connect(mapStateToProps)(LoginPage);