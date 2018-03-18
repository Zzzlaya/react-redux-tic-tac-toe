import * as actions from './index';

describe('grid actions', () => {
  it('resetGrid action should create RESET_GRID action', () => {
    expect(actions.resetGrid()).toEqual({
      type: 'RESET_GRID'
    });
  });

  it('initGrid action should create INIT_GRID action', () => {
    expect(actions.initGrid({ rowsCount: 3, colsCount: 4 })).toEqual({
      type: 'INIT_GRID',
      rowsCount: 3,
      colsCount: 4
    });
  });

  it('setCellState action should create SET_CELL_STATE action', () => {
    expect(
      actions.setCellState({ rowIndex: 10, colIndex: 20, symbol: 'X' })
    ).toEqual({
      type: 'SET_CELL_STATE',
      rowIndex: 10,
      colIndex: 20,
      symbol: 'X'
    });
  });
});
