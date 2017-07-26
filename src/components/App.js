import React from "react";
import Popular from "./Popular";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Battle from "./Battle";
//var React = require("react");
//var Popular = require("./Popular");

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route
              render={() => {
                return <p className="not-found">404 I'm a litte tea pot...</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
