import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);

    console.log('props.gridData', props.gridData);

    this.generateCellsMatrix(props);
  }

  generateCellsMatrix(props) {
    const { rowsCount, columnsCount } = props;
    this.gridData = [];

    for (let i = 0; i < rowsCount; i++) {
      const row = [];

      for (let j = 0; j < columnsCount; j++) {
        row.push(0);
      }

      this.gridData.push(row);
    }

    // save this data to a state later
  }

  generateCells() {
    return;
  }

  renderColumns() {
    let columns = [];

    for (let i = 0; i < this.gridData[0].length; i++) {
      columns.push(
        <Column
          key={i}
          colIndex={i}
          gridData={this.gridData}
          cellComponent={this.props.cellComponent}
        />
      );
    }

    return columns;
  }

  render() {
    return (
      <div className="grid-wrapper">
        <div className="grid-container">{this.renderColumns()}</div>
      </div>
    );
  }
}

Grid.defaultProps = {
  rowsCount: 1,
  columnsCount: 1,
  cellComponent: () => {}
};

Grid.propTypes = {
  rowsCount: PropTypes.number,
  columnsCount: PropTypes.number,
  cellComponent: PropTypes.func
};

class Column extends Component {
  renderCells() {
    const { colIndex, gridData } = this.props;
    const Cell = this.props.cellComponent;

    return gridData.reduce((acc, el, i) => {
      acc.push(
        <Cell
          key={i}
          colIndex={colIndex}
          rowIndex={i}
          value={gridData[i][colIndex]}
        />
      );

      return acc;
    }, []);
  }

  render() {
    const { colIndex, gridData } = this.props;

    return <div className="grid-column">{this.renderCells()}</div>;
  }
}

Column.propTypes = {
  colIndex: PropTypes.number.isRequired,
  gridData: PropTypes.array
};

export default Grid;
