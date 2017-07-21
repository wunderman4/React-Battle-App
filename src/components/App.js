import Popular from "./Popular";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
//var React = require("react");
//var Popular = require("./Popular");

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/popular" Component={Popular} />
        </div>
      </Router>
    );
  }
}

export default App;
