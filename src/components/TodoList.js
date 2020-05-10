import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // Todos mapped
    const todos = this.props.todos.length ? (
      this.props.todos.map((item) => (
        <TodoItem key={item.key} id={item.key} value={item.value} />
      ))
    ) : (
      <h2 className="emptyHeading">Your list is empty</h2>
    );

    // Todos returned
    return <div className="list-wrapper">{todos}</div>;
  }
}
const mapStateToProps = (state) => ({
  todos: state.todo.todoList,
});

export default connect(mapStateToProps, {})(TodoList);
