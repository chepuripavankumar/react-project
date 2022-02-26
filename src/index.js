import React, { Component } from "react";
import ReactDOM from "react-dom";
import  "./components/styles.css";  
import "./components/util.css";
import App from "./App";
import Home from "./components/Home";
import reportWebVitals from "./reportWebVitals";

import { Button } from 'react-bootstrap'; 

ReactDOM.render (
  
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
