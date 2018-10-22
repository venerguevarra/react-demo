import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import Timeline from './components/Timeline/Timeline';
import './App.css';
import './styles/index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld/>
        <br/>
        <Timeline/>
      </div>
    );
  }
}

export default App;
