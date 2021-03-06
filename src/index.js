/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElem,
);
