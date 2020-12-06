import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Barcelona</h1>
        <ul>
          <li>Clear Sky</li>
          <li>Last updated: Thursday 12:25</li>
        </ul>
        <div className="row mt-4">
        <div className="col-7">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
              className="float-left"
            /> 
            <div className="float-left">
            <span className="temperature">12</span><span className="unit">°C</span> 
            </div>
            </div>
            </div>
        <div className="col-5">
          <ul>
            <li>Feels like: 12°C</li>
            <li>Humidity: 64%</li>
            <li>Wind: 8 km/hr</li>
          </ul>
        </div>
        </div>
    </div>
  );
}