import React from 'react';
import logo from '../logo.svg';
import './App.css';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm.js';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <h1>ContactMe Sign in page</h1>
            <div>
                <Link to ="/LoginForm"><button>Sign In</button></Link>
                <Link to ="/SignUpForm"><button>Sign Up</button></Link>
            </div>
            <Route exact path="/LoginForm" component={LoginForm}></Route>
            <Route exact path="/SignUpForm" component={SignUpForm}></Route>
        </div>
    </Router>
  );
}

export default App;
