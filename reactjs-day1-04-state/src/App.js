import React, { Component } from 'react';
import SubscriptionForm from './components/SubscriptionForm';
import SubscriptionSummary from './components/SubscriptionSummary';

class App extends Component {
  state = {
    "subscriptionForm": {
      "firstName": '',
      "lastName": '',
      "username": '',
      "email": '',
      "password": '',
    }
  }

  subscriptionFormHandler = (formData) => {
    console.log(formData.password);
    this.setState({
      "subscriptionForm": {
        "firstName": formData.firstName,
        "lastName": formData.lastName,
        "username": formData.username,
        "email": formData.email,
        "password": formData.password
      }
    });

  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Form Demo</h2>
        </div>
        <SubscriptionForm
          formHandler={this.subscriptionFormHandler}/>
        <SubscriptionSummary
          subscriptionData={this.state.subscriptionForm}/>
      </div>
      );
    }
  }
export default App;
