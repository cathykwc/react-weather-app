import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
          <li>{props.data.description}</li>
          <li><FormattedDate date={props.data.date} /></li>
        </ul>
        <div className="row mt-4">
        <div className="col-7">
          <div className="clearfix">
            <div className="float-left">
            <WeatherIcon code={props.data.icon} alt={props.data.description}/>
            </div>
            <div className="float-left">
            <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span> 
            </div>
            </div>
            </div>
        <div className="col-5">
          <ul>
            <li>Feels like: {props.data.feelsLike}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>
        </div>
        </div>
  );
}