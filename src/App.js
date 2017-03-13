import React, { Component } from 'react';
import './App.css';
import { ActivatedTile } from "./Components/Tile.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActivatedTile depth="0"/>
      </div>
    );
  }
}

export default App;
