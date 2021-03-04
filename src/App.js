import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home/Home"
import Game from "./Game/Game"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />  
        <Route path="/game" component={Game} />  
      </Switch>
  </Router>
  )
}

export default App;
