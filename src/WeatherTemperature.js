import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

function changeToCelsius(event) {
  event.preventDefault();
  setUnit("celsius");
}

function fahrenheitTemperature() {
  return (props.celsius * 9)/5 + 32; 
}

  if (unit === "celsius") {
return (  
   <div className="WeatherTemperature">
   <span className="temperature">{Math.round(props.celsius)}
   </span>
   <span className="unit">°C |<a href="/" onClick={changeToFahrenheit}>°F</a></span>  
   </div>
 ); 
  } else { 
    return (  
   <div className="WeatherTemperature">
   <span className="temperature">{Math.round(fahrenheitTemperature())}
   </span>
   <span className="unit"><a href="/" onClick={changeToCelsius}>°C |</a>°F</span>  
   </div>
 ); 
  }
}