import React, { Component } from 'react';
import NameForm from './components/NameForm';
import ReactSurveyForm from './components/ReactSurveyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Form Demo</h2>
        </div>
        <NameForm/>
        <ReactSurveyForm/>
      </div>
      );
    }
  }
export default App;