import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './GameResult.css';

class GameResult extends PureComponent {
  render() {
    const text = this.props.isWinner ? 'You won!' : '';

    return <div className="game-result-container">{text}</div>;
  }
}

GameResult.defaultProps = {
  isWinner: false
};

GameResult.propTypes = {
  isWinner: PropTypes.bool
};

export default GameResult;
