import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './GameResult.css';

class GameResult extends PureComponent {
  render() {
    return <div className="game-result-container">{this.props.text}</div>;
  }
}

GameResult.defaultProps = {
  text: ''
};

GameResult.propTypes = {
  text: PropTypes.string
};

export default GameResult;
