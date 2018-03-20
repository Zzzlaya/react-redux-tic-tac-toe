import gridReducer from './gridReducer';

describe('grid reducer', () => {
  it('should return initial state', () => {
    expect(gridReducer(undefined, {})).toEqual([]);
  });

  it('should handle INIT_GRID', () => {
    expect(
      gridReducer(undefined, { type: 'INIT_GRID', rowsCount: 0, colsCount: 1 })
    ).toEqual([]);

    expect(
      gridReducer(undefined, { type: 'INIT_GRID', rowsCount: 2, colsCount: 1 })
    ).toEqual([
      [{ value: '', locked: false, winner: false }],
      [{ value: '', locked: false, winner: false }]
    ]);
  });

  it('should handle RESET_GRID', () => {
    expect(
      gridReducer(
        [
          [{ value: 'X', locked: true, winner: false }],
          [{ value: '', locked: false, winner: false }]
        ],
        { type: 'RESET_GRID' }
      )
    ).toEqual([
      [{ value: '', locked: false, winner: false }],
      [{ value: '', locked: false, winner: false }]
    ]);
  });

  it('should handle SET_CELL_STATE', () => {
    expect(
      gridReducer(
        [
          [{ value: 'X', locked: true, winner: false }],
          [{ value: '', locked: false, winner: false }]
        ],
        {
          type: 'SET_CELL_STATE',
          rowIndex: 1,
          colIndex: 0,
          symbol: 'O'
        }
      )
    ).toEqual([
      [{ value: 'X', locked: true, winner: false }],
      [{ value: 'O', locked: true, winner: false }]
    ]);
  });

  it('should handle CALC_GAME_RESULT ', () => {
    expect(
      gridReducer(
        [
          [
            { value: 'X', locked: true, winner: false },
            { value: 'X', locked: true, winner: false },
            { value: 'X', locked: true, winner: false }
          ],
          [
            { value: 'X', locked: true, winner: false },
            { value: 'O', locked: true, winner: false },
            { value: 'O', locked: true, winner: false }
          ],
          [
            { value: 'O', locked: true, winner: false },
            { value: '', locked: false, winner: false },
            { value: '', locked: false, winner: false }
          ]
        ],
        {
          type: 'CALC_GAME_RESULT',
          rowIndex: 0,
          colIndex: 2,
          symbol: 'X'
        }
      )
    ).toEqual([
      [
        { value: 'X', locked: true, winner: true },
        { value: 'X', locked: true, winner: true },
        { value: 'X', locked: true, winner: true }
      ],
      [
        { value: 'X', locked: true, winner: false },
        { value: 'O', locked: true, winner: false },
        { value: 'O', locked: true, winner: false }
      ],
      [
        { value: 'O', locked: true, winner: false },
        { value: '', locked: true, winner: false },
        { value: '', locked: true, winner: false }
      ]
    ]);

    expect(
      gridReducer(
        [
          [
            { value: 'X', locked: true, winner: false },
            { value: 'X', locked: true, winner: false },
            { value: '', locked: false, winner: false }
          ],
          [
            { value: 'X', locked: true, winner: false },
            { value: 'O', locked: true, winner: false },
            { value: 'O', locked: true, winner: false }
          ],
          [
            { value: '', locked: false, winner: false },
            { value: '', locked: false, winner: false },
            { value: '', locked: false, winner: false }
          ]
        ],
        {
          type: 'CALC_GAME_RESULT',
          rowIndex: 0,
          colIndex: 2,
          symbol: 'X'
        }
      )
    ).toEqual([
      [
        { value: 'X', locked: true, winner: false },
        { value: 'X', locked: true, winner: false },
        { value: '', locked: false, winner: false }
      ],
      [
        { value: 'X', locked: true, winner: false },
        { value: 'O', locked: true, winner: false },
        { value: 'O', locked: true, winner: false }
      ],
      [
        { value: '', locked: false, winner: false },
        { value: '', locked: false, winner: false },
        { value: '', locked: false, winner: false }
      ]
    ]);
  });
});
