import React from "react";
import "./App.css";

// Components
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Date from "./components/Date";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Date />
          <InputField />
          <TodoList />
        </div>
      </div>
    );
  }
}
export default App;
