import React, { Component } from "react";
import { connect } from "react-redux";
import { editTodo, deleteTodo } from "../actions/todoAction";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVisibility: false,
      editText: "",
      buttonVisibilty: true,
      todoComplete: false,
    };
  }
  editTodoHandler = () => {
    this.setState({
      inputVisibility: !this.state.inputVisibility,
    });
  };
  editTodoSubmit = (e) => {
    e.preventDefault();
    const updateTodo = {
      key: this.props.id,
      value: this.state.editText,
    };
    const updatedTodos = this.props.todos.map((item) =>
      item.key === this.props.id ? updateTodo : item
    );

    this.props.editTodo(updatedTodos);

    this.setState({ inputVisibility: false });
  };
  deleteTodoHandler = () => {
    const data = this.props.todos.filter((item) => item.key !== this.props.id);
    this.props.deleteTodo(data);
  };
  completeTodoToggle = () => {
    this.setState({
      buttonVisibilty: !this.state.buttonVisibilty,
      inputVisibility: false,
      todoComplete: !this.state.todoComplete,
    });
  };
  cancelEditForm = (e) => {
    e.preventDefault();
    this.setState({ inputVisibility: false });
  };
  render() {
    const { buttonVisibilty, inputVisibility, todoComplete } = this.state;
    const { id, value } = this.props;
    return (
      <div className="list-item">
        {!todoComplete ? (
          <span onClick={this.completeTodoToggle}>
            <i className="check-icon"></i>
          </span>
        ) : (
          <span onClick={this.completeTodoToggle}>
            <i className="checked-icon"></i>
          </span>
        )}

        {buttonVisibilty ? (
          <h5 className="todo" id={id}>
            {value}
          </h5>
        ) : (
          <h5 className="todo mark-complete" id={id}>
            {value}
          </h5>
        )}

        {inputVisibility && (
          <form className="edit-form" onSubmit={this.editTodoSubmit}>
            <input
              autoFocus
              className="edit-input"
              type="text"
              name="editText"
              placeholder={value}
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            />

            <span className="edit-cancel" onClick={this.cancelEditForm}>
              cancel
            </span>
          </form>
        )}

        {buttonVisibilty && (
          <div className="action-button-wrapper">
            <button
              className="button-transparent"
              onClick={this.editTodoHandler}
            >
              <i className="edit-icon"></i>
            </button>
            <button
              className="button-transparent"
              onClick={this.deleteTodoHandler}
            >
              <i className="delete-icon"></i>
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todo.todoList,
});
export default connect(mapStateToProps, { editTodo, deleteTodo })(TodoItem);
