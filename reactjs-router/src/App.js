import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React Router Demo</h1>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
