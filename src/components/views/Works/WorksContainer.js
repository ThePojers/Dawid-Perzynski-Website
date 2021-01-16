import { connect } from 'react-redux';
import Works from './Works';
import {  getData } from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
});

export default connect(mapStateToProps)(Works);