import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={100} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />

              <div className="description text-capitalize">
                {props.data.description}
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="weather-description">
            <ul>
              <li>Humidity 💧: {props.data.humidity} %</li>
              <li>Wind 💨 : {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
