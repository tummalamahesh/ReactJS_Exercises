import React from "react";

class ImageApp extends React.Component {
  handleClick() {
    console.log("button was clicked");
  }

  render() {
    return (
      <div>
        <img src="https://www.fillmurray.com/200/100" />
        <br />
        <br />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ImageApp;
