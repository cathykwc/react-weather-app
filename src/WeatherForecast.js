import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [submitted, setSubmitted] = useState(false);
  const [weatherPrediction, setweatherPrediction] = useState(null);

function executeForecastResult(response) {
  setweatherPrediction(response.data);
  setSubmitted(true);
}
if (submitted && props.city === weatherPrediction.city.name) { 
return (
  <div className="WeatherForecast row">
      <WeatherForecastPreview data={weatherPrediction.list[0]}/>
      <WeatherForecastPreview data={weatherPrediction.list[1]}/>
      <WeatherForecastPreview data={weatherPrediction.list[2]}/>
      <WeatherForecastPreview data={weatherPrediction.list[3]}/>
      <WeatherForecastPreview data={weatherPrediction.list[4]}/>
      <WeatherForecastPreview data={weatherPrediction.list[5]}/>
  </div>
);
} else { 
  let apiKey = "145ee08408729673b53d671c97d81b6d";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
  axios.get(url).then(executeForecastResult);
  return null;
}
}