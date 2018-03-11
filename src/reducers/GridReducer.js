const gridReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_GRID':
      const { rowsCount, colsCount } = action;

      if (rowsCount < 1 || colsCount < 1) {
        return [...state];
      }

      const gridData = [];

      for (let i = 0; i < rowsCount; i++) {
        const row = [];
        for (let j = 0; j < colsCount; j++) {
          row.push({ value: '', locked: false });
        }
        gridData.push(row);
      }

      return [...state, ...gridData];
    case 'RESET_GRID':
      return state.map(gridRow =>
        gridRow.map(cell => ({ value: '', locked: false }))
      );
    case 'SET_CELL_STATE':
      const { rowIndex, colIndex, symbol } = action;

      return state.map((gridRow, i) => {
        if (i === rowIndex) {
          return gridRow.map((cell, j) => {
            return j === colIndex
              ? { ...cell, locked: true, value: symbol }
              : cell;
          });
        }
        return gridRow;
      });
    default:
      return state;
  }
};

export default gridReducer;
