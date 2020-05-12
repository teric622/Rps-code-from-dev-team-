import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/LoginContainer/Login.js";
import SignUp from "./components/SignUpContainer/SignUp.js";
import WelcomeScreen from "./components/WelcomeContainer/WelcomeScreen.js";
import UserHome from './components/UserHomeContainer/UserHome.js';
import NavBar from './components/NavbarContainer/NavBar.js';




function App() {
  return (<Router>
    <div className="App">
       <NavBar />
          
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={WelcomeScreen} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/userhome" component={UserHome} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

// const Layout = props => <Container>{props.children} </Container>;