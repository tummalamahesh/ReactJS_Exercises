import React from "react";

class ApiApp extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      chars: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          chars: data,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.loading ? "<h3>Loading....</h3>" : this.state.chars.name}
      </div>
    );
  }
}

export default ApiApp;
