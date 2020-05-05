import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.goal === "") {
      console.log("Please input something first");
      return;
    }
    const newTodo = {
      key: (Math.random() * 10).toString(),
      value: this.state.goal,
    };
    this.setState({ goal: "" });
    this.props.addTodo(newTodo);
  }
  render() {
    return (
      <form className="input-wrapper" onSubmit={this.onSubmit}>
        <input
          placeholder="Type something..."
          className="input-todo"
          onChange={this.onChange}
          type="text"
          name="goal"
          value={this.state.goal}
        />
        <button className="button-add">
          <i className="add-icon"></i>
        </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(InputField);
