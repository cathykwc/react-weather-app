import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultLocation="Barcelona"/>
      <footer>This project was coded by{" "}<a href="https://ca.fullscript.com/welcome/cchan" target="blank">Cathy Chan</a>  and is{" "}<a href="https://github.com/cathykwc/react-weather-app" target="blank">open-sourced on Github</a>
      </footer>
    </div>
    </div>
  );
}


