import React, { Component } from 'react';
import './App.css';
import GridContainer from './containers/GridContainer';
import Cell from './components/Cell/Cell';
import Button from './components/Button/Button.js';
import GameResult from './components/GameResult/GameResult.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Play Tic-Tac-Toe!</h1>
        <p>Click on any cell to start</p>
        <GridContainer
          rowsCount={3}
          columnsCount={3}
          cellComponent={({ ...props }) => <Cell {...props} />}
        />
        <GameResult />
        <div>
          <Button
            text="Reset"
            onClick={() => {
              console.log('clicked');
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
