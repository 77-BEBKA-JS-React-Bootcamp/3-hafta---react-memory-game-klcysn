import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />  
      </Switch>
  </Router>
  )
}

export default App;
