import React from "react";
import "./App.css";

// Components
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      month: "",
      year: "",
    };
  }
  componentDidMount() {
    const d = new Date();

    const date = d.getDate().toString();
    let month = d.getMonth().toString();
    const year = d.getFullYear().toString();

    switch (month) {
      case "0":
        month = "January";
        break;
      case "1":
        month = "February";
        break;
      case "2":
        month = "March";
        break;
      case "3":
        month = "April";
        break;
      case "4":
        month = "May";
        break;
      case "5":
        month = "June";
        break;
      case "6":
        month = "July";
        break;
      case "7":
        month = "August";
        break;
      case "8":
        month = "September";
        break;
      case "9":
        month = "October";
        break;
      case "10":
        month = "November";
        break;
      case "11":
        month = "Decemeber";
        break;
      default:
        break;
    }

    this.setState({
      date,
      month,
      year,
    });
  }

  render() {
    const { date, month, year } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <p className="mainDate">
            {month} {date}, {year}
          </p>
          <InputField />
          <TodoList />
        </div>
      </div>
    );
  }
}
export default App;
