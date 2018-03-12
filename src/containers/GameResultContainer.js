import { connect } from 'react-redux';
import GameResult from '../components/GameResult/GameResult';

const calcGameResult = gridData => {
  return gridData.reduce((accRows, gridRow) => {
    return (
      accRows ||
      gridRow.reduce((accCells, cell) => {
        return accCells || cell.winner;
      }, false)
    );
  }, false);
};

const mapStateToProps = state => {
  return {
    isWinner: calcGameResult(state.gridReducer)
  };
};

const GameResultContainer = connect(mapStateToProps)(GameResult);

export default GameResultContainer;
