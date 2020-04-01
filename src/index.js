import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './stores/index';

const render = () => ReactDOM.render(<App />, document.querySelector('#root'));
render();
store.subscribe(render);
