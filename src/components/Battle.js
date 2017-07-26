import React from "react";
import PropTypes from "prop-types";

class PlayerInput extends React.Component {
  state = {
    username: ""
  };

  handleChange(event) {
    var value = event.target.value;

    this.setState(() => {
      return {
        username: value
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="github username"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
          type="text"
        />
        <button
          className="button"
          type="submit"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}
PlayerInput.PropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component {
  state = {
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null
  };

  handleSubmit(id, username) {
    this.setState(() => {
      var newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "https://github.com/" + username + ".png?size=200";
      return newState;
    });
  }

  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;

    return (
      <div>
        <div className="row">
          {!playerOneName &&
            <playerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />}

          {!playerTwoName &&
            <playerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />}
        </div>
      </div>
    );
  }
}

export default Battle;
