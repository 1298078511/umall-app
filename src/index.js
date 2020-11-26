import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/reset.css";
import "./assets/js/remScale";

import { HashRouter } from "react-router-dom"

ReactDOM.render(
  <HashRouter>
    <App /> 
</HashRouter>,
  document.getElementById('root')
);


