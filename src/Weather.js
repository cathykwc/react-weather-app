import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [location, setLocation] = useState(props.defaultLocation);
  const [weatherInformation, setWeatherInformation] = useState({ ready: false });
function handleResponse(response) {
  console.log(response.data);
  setWeatherInformation({
    ready: true, 
    date: new Date(response.data.dt * 1000),
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed, 
    city: response.data.name,
    feelsLike: Math.round(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    icon: response.data.weather[0].icon
  });
  
}

function search() {
 const apiKey = "145ee08408729673b53d671c97d81b6d";
  let apiUrl = 
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCitySubmitted(event) {
setLocation(event.target.value);
}

function handleCurrentForecast(event) {
     event.preventDefault();
     navigator.geolocation.getCurrentPosition(getCurrentWeather);
}

function getCurrentWeather(position) {
  let apiKey = "145ee08408729673b53d671c97d81b6d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

if (weatherInformation.ready) {
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
            <button className="w-100" onClick={handleCurrentForecast}>current 📍</button>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherInformation} />
      <br />
      <hr />
      <WeatherForecast city={weatherInformation.city} />
    </div>
  );
} else { 
  search();
  return (
    <Loader
         type="Hearts"
         color="orange"
         height={100}
         width={100}
         timeout={3000} //3 secs
 />
  );
  }
}