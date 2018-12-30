import React from "react";
import Component from "react";

class LoginApp extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    console.log("button clicked");
    const newState = !this.state.loggedIn;
    this.setState({ loggedIn: newState });
  }
  render() {
    let wordDisplay;
    if (this.state.loggedIn === true) {
      wordDisplay = "Log in";
    } else {
      wordDisplay = "Log out";
    }
    return (
      <div>
        <h1>
          <button onClick={this.handleLogin}>{wordDisplay}</button>
          You are {wordDisplay}
        </h1>
      </div>
    );
  }
}

export default LoginApp;
