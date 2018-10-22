import React, { Component } from 'react';

class ReactSurveyForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
          fullname: "",
          emailaddress: "",
          password: "",
          editor: "",
          message: "",
          terms: false,
          test: ""
        };
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        console.log(name, value);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="post-container">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="emailaddress"
                      value={this.state.emailaddress}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Pick your editor</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.editor}
                        name="editor"
                        onChange={this.handleChange}>
                        <option value="vscode">VsCode</option>
                        <option value="atom">Atom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">What do you like about React</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        name="terms"
                        type="checkbox"
                        checked={this.state.terms}
                        onChange={this.handleChange}/>
                        I agree to the {" "} <a href="https://google.com">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">
                      Do you test your React code?
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="test"
                        onChange={this.handleChange}
                        value="Yes"
                        checked={this.state.test === "Yes"}
                      />
                      Yes
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="test"
                        onChange={this.handleChange}
                        value="No"
                        checked={this.state.test === "No"}
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>

                <div>
                    <pre>
                        <code>
                        <p>Full Name: {this.state.fullname}</p>
                        <p>Email Address: {this.state.emailaddress}</p>
                        <p>Password: {this.state.password}</p>
                        <p>Choice in Editor: {this.state.editor}</p>
                        <p>Why React: {this.state.message}</p>
                        <p>Terms and Condition: {this.state.terms === true ? 'Agree' : 'Disagree'}</p>
                        <p>Do you test?: {this.state.test}</p>
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default ReactSurveyForm;