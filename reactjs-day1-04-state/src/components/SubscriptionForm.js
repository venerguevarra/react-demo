import React, { Component } from 'react';


class SubscriptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    this.props.formHandler(this.state);
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="post-container">
        <form onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                name="firstName"
                className="input"
                type="text"
                onChange={this.onChangeHandler}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                name="lastName"
                className="input"
                type="text"
                onChange={this.onChangeHandler}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                name="username"
                className="input"
                type="text"
                onChange={this.onChangeHandler}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                className="input"
                type="text"
                onChange={this.onChangeHandler}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                name="password"
                className="input"
                type="text"
                onChange={this.onChangeHandler}/>
            </div>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SubscriptionForm;