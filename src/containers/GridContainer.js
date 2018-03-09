import { connect } from 'react-redux';

import Grid from '../components/Grid/Grid';

const mapStateToProps = state => ({
  gridData: state.gridData
});

const GridContainer = connect(mapStateToProps)(Grid);

export default GridContainer;
