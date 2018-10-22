import React, { Component } from 'react';
import './App.css';
import PlainCssComponent01 from './components/PlainCssComponent01';
import InlineCssComponent02 from './components/InlineCssComponent02';
import InlineCssComponent03 from './components/InlineCssComponent03';
import CssModuleComponent04 from './components/CssModuleComponent04';
import StyledComponent05 from './components/StyledComponent05';
import StyledComponent06 from './components/StyledComponent06';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlainCssComponent01/>
        <InlineCssComponent02/>
        <InlineCssComponent03/>
        <CssModuleComponent04/>
        <StyledComponent05/>
        <StyledComponent06/>
      </div>
    );
  }
}

export default App;
