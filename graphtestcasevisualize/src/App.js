import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Graphs from './components/Graphs.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/visualize">
              <Graphs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
