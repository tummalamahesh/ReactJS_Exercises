import React from "react";
import ToDoData from "./ToDoData";
import ToDo from "./ToDo";

class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("changed:", id);
    this.setState(prevState => {
      const updatedtodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      });
      return {
        todos: updatedtodos
      };
    });
  }

  render() {
    const todosList = this.state.todos.map(todo => {
      return (
        <ToDo
          name={todo.name}
          checked={todo.checked}
          handleChange={this.handleChange}
          id={todo.id}
        />
      );
    });
    return <div>{todosList}</div>;
  }
}

export default ToDoApp;
