import React from "react";

class CounterApp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(pState => {
      return {
        count: pState.count + 1
      };
    });
  }

  render() {
    console.log("in CounterApp render-----");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change me</button>
      </div>
    );
  }
}

export default CounterApp;
