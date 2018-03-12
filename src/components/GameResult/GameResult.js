import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './GameResult.css';

class GameResult extends PureComponent {
  render() {
    const text = this.props.isWinner ? `'${this.props.winnerSymbol}' won!` : '';

    return <div className="game-result-container">{text}</div>;
  }
}

GameResult.defaultProps = {
  isWinner: false,
  winnerSymbol: ''
};

GameResult.propTypes = {
  isWinner: PropTypes.bool,
  winnerSymbol: PropTypes.string
};

export default GameResult;
