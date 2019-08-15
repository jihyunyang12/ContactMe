import React from 'react';
import logo from '../logo.svg';
import './App.css';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm.js';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <h1>Welcome! abc</h1>
            <div>
                <Route exact path="/LoginForm" component={LoginForm}></Route>
                <Route exact path="/SignUpForm" component={SignUpForm}></Route>
            </div>
        </div>
    </Router>
  );
}

export default App;
