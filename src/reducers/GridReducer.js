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
          row.push({ value: '', locked: false, winner: false });
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

      let newGridState = state.map((gridRow, i) => {
        if (i === rowIndex) {
          return gridRow.map((cell, j) => {
            return j === colIndex
              ? { ...cell, locked: true, value: symbol }
              : cell;
          });
        }
        return gridRow;
      });

      // calc game result (should be moved to some Util)
      // row
      let winnerRow = true;
      for (let i = 0; i < newGridState[rowIndex].length; i++) {
        if (newGridState[rowIndex][i].value !== symbol) {
          winnerRow = winnerRow && false;
        }
      }

      if (winnerRow) {
        return newGridState.map((gridRow, i) => {
          if (i === rowIndex) {
            return gridRow.map((cell, j) => {
              return { ...cell, winner: true, locked: true };
            });
          }
          return gridRow.map((cell, j) => {
            return { ...cell, locked: true };
          });
        });
      }
      // col
      let winnerCol = true;
      for (let i = 0; i < newGridState.length; i++) {
        if (newGridState[i][colIndex].value !== symbol) {
          winnerCol = winnerCol && false;
        }
      }

      if (winnerCol) {
        return newGridState.map((gridRow, i) => {
          return gridRow.map((cell, j) => {
            if (j === colIndex) {
              return { ...cell, winner: true, locked: true };
            }
            return { ...cell, locked: true };
          });
        });
      }

      // diag left right
      let winnerDiagLeftRight = true;
      for (let i = 0; i < newGridState.length; i++) {
        if (newGridState[i][i].value !== symbol) {
          winnerDiagLeftRight = winnerDiagLeftRight && false;
        }
      }

      if (winnerDiagLeftRight) {
        return newGridState.map((gridRow, i) => {
          return gridRow.map((cell, j) => {
            if (j === i) {
              return { ...cell, winner: true, locked: true };
            }
            return { ...cell, locked: true };
          });
        });
      }

      // diag right left
      let winnerDiagRightLeft = true;
      for (let i = 0; i < newGridState.length; i++) {
        if (newGridState[i][newGridState[0].length - 1 - i].value !== symbol) {
          winnerDiagRightLeft = winnerDiagRightLeft && false;
        }
      }

      if (winnerDiagRightLeft) {
        return newGridState.map((gridRow, i) => {
          return gridRow.map((cell, j, gridRow) => {
            if (j === gridRow.length - 1 - i) {
              return { ...cell, winner: true, locked: true };
            }
            return { ...cell, locked: true };
          });
        });
      }

      return newGridState;
    default:
      return state;
  }
};

export default gridReducer;
