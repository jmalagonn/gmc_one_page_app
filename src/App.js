import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Project from "./pages/project";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/gmc_one_page_app">
          <Home />
        </Route>
        <Route path="/gmc_one_page_app/proyecto/:id" children={<Project />} />
      </Switch>
    </Router>
  );
}

export default App;
