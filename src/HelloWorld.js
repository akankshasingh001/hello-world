import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div className="hello-world">
        Hello World{' '}
        <span className="hello-world__tech">{this.props.tech}!</span>
      </div>
    );
  }
}

export default HelloWorld;
