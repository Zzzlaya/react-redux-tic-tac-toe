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
        gridRow.map(cell => ({ value: '', locked: false, winner: false }))
      );
    case 'SET_CELL_STATE':
      return state.map((gridRow, i) => {
        if (i === action.rowIndex) {
          return gridRow.map((cell, j) => {
            return j === action.colIndex
              ? { ...cell, locked: true, value: action.symbol }
              : cell;
          });
        }
        return gridRow;
      });
    case 'CALC_GAME_RESULT':
      const { rowIndex, colIndex, symbol } = action;
      // row
      let winnerRow = true;
      for (let i = 0; i < state[rowIndex].length; i++) {
        if (state[rowIndex][i].value !== symbol) {
          winnerRow = winnerRow && false;
        }
      }
      if (winnerRow) {
        return state.map((gridRow, i) => {
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
      for (let i = 0; i < state.length; i++) {
        if (state[i][colIndex].value !== symbol) {
          winnerCol = winnerCol && false;
        }
      }

      if (winnerCol) {
        return state.map((gridRow, i) => {
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
      for (let i = 0; i < state.length; i++) {
        if (state[i][i].value !== symbol) {
          winnerDiagLeftRight = winnerDiagLeftRight && false;
        }
      }

      if (winnerDiagLeftRight) {
        return state.map((gridRow, i) => {
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
      for (let i = 0; i < state.length; i++) {
        if (state[i][state[0].length - 1 - i].value !== symbol) {
          winnerDiagRightLeft = winnerDiagRightLeft && false;
        }
      }

      if (winnerDiagRightLeft) {
        return state.map((gridRow, i) => {
          return gridRow.map((cell, j, gridRow) => {
            if (j === gridRow.length - 1 - i) {
              return { ...cell, winner: true, locked: true };
            }
            return { ...cell, locked: true };
          });
        });
      }

      return state;
    default:
      return state;
  }
};

export default gridReducer;
