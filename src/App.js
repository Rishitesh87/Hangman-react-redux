import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './containers/Game';
// import CreateGameButton from './components/CreateGameButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman</h1>
        </header>
        <Game/>

      </div>
    );
  }
}

export default App;
