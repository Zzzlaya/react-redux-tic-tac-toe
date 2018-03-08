import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Cell.css';

class Cell extends Component {
  render() {
    const { rowIndex, colIndex } = this.props;

    return (
      <div className="cell-container">
        {rowIndex}
        {colIndex}
      </div>
    );
  }
}

export default Cell;
