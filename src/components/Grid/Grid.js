import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

class Grid extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps.gridData', nextProps.gridData);
  }

  componentDidMount() {
    const { rowsCount, colsCount } = this.props;

    this.props.onGridLoad({ rowsCount, colsCount });
  }

  renderColumns() {
    let columns = [];

    for (let i = 0; i < this.props.gridData[0].length; i++) {
      columns.push(
        <Column
          key={i}
          colIndex={i}
          onCellClick={this.props.onCellClick}
          gridData={this.props.gridData}
          cellComponent={this.props.cellComponent}
        />
      );
    }

    return columns;
  }

  render() {
    if (!this.props.gridData.length) {
      return null;
    }

    return (
      <div className="grid-wrapper">
        <div className="grid-container">{this.renderColumns()}</div>
      </div>
    );
  }
}

Grid.defaultProps = {
  rowsCount: 1,
  colsCount: 1,
  cellComponent: () => {},
  onCellClick: () => {}
};

Grid.propTypes = {
  rowsCount: PropTypes.number,
  colsCount: PropTypes.number,
  cellComponent: PropTypes.func,
  onCellClick: PropTypes.func
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
          value={gridData[i][colIndex].value}
          locked={gridData[i][colIndex].locked}
          onClick={this.props.onCellClick}
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
