import React from 'react';
import { render } from 'react-dom';
import Login from './components/loginPage';
// import App from './App';
// import component from './components';
const node = document.createElement('div');
node.setAttribute('id', 'node');
document.body.appendChild(node);

render(<Login/>, node);
