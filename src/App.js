import React, { Component } from 'react';
import './App.css';
import GridContainer from './containers/GridContainer';
import ResetButtonContainer from './containers/ResetButtonContainer';
import GameResultContainer from './containers/GameResultContainer';
import Cell from './components/Cell/Cell';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Play Tic-Tac-Toe!</h1>
        <p>Click on any cell to start</p>
        <GridContainer
          rowsCount={3}
          colsCount={3}
          cellComponent={({ ...props }) => <Cell {...props} />}
        />
        <Footer>
          <GameResultContainer />
          <div>
            <ResetButtonContainer />
          </div>
        </Footer>
      </div>
    );
  }
}

export default App;
