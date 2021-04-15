import React,{useState,useEffect} from "react"
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

import store from "./Redux/Features/Store"

import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
const   App = () => {

  return (
    <div className="App">
        
          <Router>
              <Switch>
                   <Route path="/"  exact component={Home}/>
                   <Route path="/signin" component={SignIn}/>
                   <Route path="/signup" component={SignUp}/>
              </Switch>
          </Router>
    </div>
  );
}

export default App;



