import React, { Component } from 'react';
import './App.css';
import MountingComponent from './components/MountingComponent';
import UpdatingComponent from './components/UpdatingComponent';

class App extends Component {

  constructor() {
    super();
    this.state = {
      "activity" : ''
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input name="activity" type="text" onChange={this.handleOnChange}/>
        </div>
        <MountingComponent/>
        <UpdatingComponent activity={this.state.activity}/>
      </div>
    );
  }
}

export default App;
