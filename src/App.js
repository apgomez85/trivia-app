import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-Header">
          <h1>Trivia App</h1>
        </header>
      </div>
    );
  }
}

export default App;
