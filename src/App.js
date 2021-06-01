import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.js";
import "./App.css";

const HatsPage = function () {
  return (
    <div>
      <h1> HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
