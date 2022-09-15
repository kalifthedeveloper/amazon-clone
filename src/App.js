import React from "react";
import "./App.css";
import Header from './Header';
import './Header.css';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Log In</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  {
    /* need a react router */
  }

  {
    /* localhost.com/ */
  }

  {
    /* localhost.com/checkout */
  }

  {
    /* localhost.com/login */
  }
}

export default App;
