const client = require('./client');
console.log(client);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/App.scss';

window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
