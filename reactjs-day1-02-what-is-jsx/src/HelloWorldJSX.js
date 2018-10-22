import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1 className="large">Hello World</h1>
        <button onClick={this.props.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default HelloWorld;
