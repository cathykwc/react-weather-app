import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true, 
    date: "Sunday 19:00",
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed, 
    city: response.data.name,
    feelsLike: Math.round(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  });
  
}


if (weatherData.ready) {
  return (
    <div className="Weather">
      <form className="mb-4">
        <div className="row">
          <div className="col-5">
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <button className="search-button w-100">search</button>
          </div>
          <div className="col-4">
            <button className="w-100">current 📍</button>
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.description}</li>
          <li>Last updated: {weatherData.date}</li>
        </ul>
        <div className="row mt-4">
        <div className="col-7">
          <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            /> 
            <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span> 
            </div>
            </div>
            </div>
        <div className="col-5">
          <ul>
            <li>Feels like: {weatherData.feelsLike}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/hr</li>
          </ul>
        </div>
        </div>
    </div>
  );
} else { 
  const apiKey = "145ee08408729673b53d671c97d81b6d";
  let apiUrl = 
  `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  return "Loading...";
  }
}