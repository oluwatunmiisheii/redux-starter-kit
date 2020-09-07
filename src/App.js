import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import Posts from "./containers/Posts/Posts";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Posts />
      </div>
    );
  }
}

export default App;
