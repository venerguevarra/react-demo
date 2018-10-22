import React, { Component } from 'react';
import HelloWorld from './HelloWorld'
import HelloWorldJSX from './HelloWorldJSX'
import './App.css';

class App extends Component {
  clickHandler = () => {
    alert("Button Clicked!");
  }

  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloWorldJSX clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
