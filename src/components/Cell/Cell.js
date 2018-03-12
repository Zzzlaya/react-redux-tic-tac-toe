import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Cell.css';

class Cell extends Component {
  onClickHandler = () => {
    const { rowIndex, colIndex, locked, onClick } = this.props;

    if (locked) {
      return null;
    }

    onClick({ rowIndex, colIndex });
  };

  render() {
    const lockedClassName = this.props.locked ? 'cell-container--locked' : '';
    const winnerClassName = this.props.winner ? 'cell-container--winner' : '';

    return (
      <div
        className={`cell-container ${lockedClassName} ${winnerClassName}`}
        onClick={this.onClickHandler}>
        {this.props.value}
      </div>
    );
  }
}

Cell.propTypes = {
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  value: PropTypes.string,
  locked: PropTypes.bool,
  winner: PropTypes.bool,
  onClick: PropTypes.func
};

export default Cell;
