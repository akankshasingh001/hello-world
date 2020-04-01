import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import store from './stores/index';
import ButtonGroup from './ButtonGroup';

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup
        key={2}
        technologies={['React', 'React-Redux', 'JavaScript']}
      />
    ];
  }
}

export default App;
