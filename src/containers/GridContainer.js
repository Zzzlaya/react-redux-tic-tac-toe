import { connect } from 'react-redux';
import { initGrid, setCellState } from '../actions';
import Grid from '../components/Grid/Grid';

const mapStateToProps = state => ({
  gridData: state.gridReducer
});

const mapDispatchToProps = dispatch => {
  return {
    onGridLoad: ({ rowsCount, colsCount }) => {
      dispatch(initGrid({ rowsCount, colsCount }));
    },
    onCellClick: ({ rowIndex, colIndex }) => {
      dispatch(setCellState({ rowIndex, colIndex }));
    }
  };
};

const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default GridContainer;
