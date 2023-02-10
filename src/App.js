import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Running in container 
        </p>
        <a
          className="App-link"
          href="https://github.com/Muzammil98/Dockerize-React-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to Containerize React application
        </a>
      </header>
    </div>
  );
}

export default App;
