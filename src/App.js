import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Cell from './components/Cell/Cell';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Grid
          rowsCount={3}
          columnsCount={3}
          cellComponent={({ ...props }) => <Cell {...props} />}
        />
      </div>
    );
  }
}

export default App;
