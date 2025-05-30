import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Pretoria" />
      <footer>
        This project was created by{" "}
        <a
          href="https://github.com/Rorisang-Mathiba"
          target="_blank"
          rel="noreferrer"
        >
          Rorisang Mathiba
        </a>{" "}
        and is {""}
        <a
          href="https://github.com/Rorisang-Mathiba/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
