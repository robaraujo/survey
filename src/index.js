/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);
rootElem.setAttribute('id', 'ys-survey');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElem,
);
