import React from "react";

class ToDo extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const checkedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    };
    return (
      <div className="contact-card">
        <h2>
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={event => {
              this.props.handleChange(this.props.id);
            }}
          />
          <p style={this.props.checked ? checkedStyle : null}>
            {this.props.name}
          </p>
        </h2>
      </div>
    );
  }
}

export default ToDo;
