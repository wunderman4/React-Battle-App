import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Github Battle!</h1>
        <p>A place to battle your firends... or foes!</p>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}

export default Home;