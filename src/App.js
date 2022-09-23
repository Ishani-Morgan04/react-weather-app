import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Lens</h1>
        <Weather />
        <footer>
          This project is coded by Ishani Morgan and it is {""}
          <a
            href="https://github.com/Ishani-Morgan04/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
