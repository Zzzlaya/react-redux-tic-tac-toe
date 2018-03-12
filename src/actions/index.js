const CellSymbols = {
  symbolX: 'X',
  symbolO: 'O'
};
let nextCellSymbol = CellSymbols.symbolO;

const getNextCellSymbol = () => {
  if (nextCellSymbol === CellSymbols.symbolX) {
    nextCellSymbol = CellSymbols.symbolO;
  } else {
    nextCellSymbol = CellSymbols.symbolX;
  }

  return nextCellSymbol;
};

const initGrid = ({ rowsCount, colsCount }) => {
  return {
    type: 'INIT_GRID',
    rowsCount,
    colsCount
  };
};

const setCellState = ({ rowIndex, colIndex }) => {
  return {
    type: 'SET_CELL_STATE',
    rowIndex,
    colIndex,
    symbol: getNextCellSymbol()
  };
};

const resetGrid = () => {
  return {
    type: 'RESET_GRID'
  };
};

export { initGrid, setCellState, resetGrid, CellSymbols };
