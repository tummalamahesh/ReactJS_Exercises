import React from "react";

class FormApp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChange}
          placeholder="Last Name"
        />
        {this.state.firstName} {this.state.lastName}
      </form>
    );
  }
}

export default FormApp;
