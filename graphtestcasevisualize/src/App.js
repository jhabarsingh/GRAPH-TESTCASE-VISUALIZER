import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Graphs from './components/Graphs.js'
import Home from './components/Home.js'
import Particless from './components/Particless.js'


const styles = {
  root: {
      fontFamily: "sans-serif",
      textAlign: "center",
      height: "100%",
      background: "#222",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      overflow: "hidden"
  }
};


function App() {
  return (
        <Router>
          <Switch>
            <Route path="/visualize">
              <Graphs />
            </Route>
            <Route path="/">
            <div style={styles.root}>
                <Home 
                  style={{
                    position: "absolute",
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    zIndex: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100% !important",
                    height: "100vh !important",
                    background: 'transparent' 
                  }}
              />
              <Particless 
                style={{
                  position: "absolute",
                  height: "100vh",
                  top: "0px"
                }}
              />
            </div>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
