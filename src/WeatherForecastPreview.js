import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
function time() {
  let date = new Date(props.data.dt * 1000); 
  let hours = date.getHours();
  return `${hours}:00`;
}

function forecastTemperature() {
  let temperature = Math.round(props.data.main.temp);
  return `${temperature}°C`; 
}

  return (
    <div className="WeatherForecastPreview col">
    {time()}
    <WeatherIcon code={props.data.weather[0].icon}/>
    {forecastTemperature()}
  </div>
  );
  }