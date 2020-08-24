import React from 'react';

// Significa que vamos utilizar o react para web
// DOM é a árvore de elementos do HTML
import ReactDOM from 'react-dom';
import App from './App';

// Fala para o ReactDom renderizar o App na nossa div com id = 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
