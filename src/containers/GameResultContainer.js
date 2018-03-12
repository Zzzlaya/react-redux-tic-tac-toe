import { connect } from 'react-redux';
import GameResult from '../components/GameResult/GameResult';

const calcGameResult = gridData => {
  let winnerSymbol = '';

  const isWinner = gridData.reduce((accRows, gridRow) => {
    return (
      accRows ||
      gridRow.reduce((accCells, cell) => {
        if (cell.winner) {
          winnerSymbol = cell.value;
        }

        return accCells || cell.winner;
      }, false)
    );
  }, false);

  return { winnerSymbol, isWinner };
};

const mapStateToProps = state => {
  return calcGameResult(state.gridReducer);
};

const GameResultContainer = connect(mapStateToProps)(GameResult);

export default GameResultContainer;
