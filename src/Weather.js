import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true, 
    date: new Date(response.data.dt * 1000),
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed, 
    city: response.data.name,
    feelsLike: Math.round(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  });
  
}

function search() {
 const apiKey = "145ee08408729673b53d671c97d81b6d";
  let apiUrl = 
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCitySubmitted(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
  return (
    <div className="Weather">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              onChange={handleCitySubmitted}
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
      <WeatherInfo data={weatherData}/>
    </div>
  );
} else { 
  search();
  return "Loading...";
  }
}