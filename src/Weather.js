import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city...."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h2>KUALA LUMPUR</h2>
      <ul>
        <li>Friday, 23rd September 2022</li>
        <li>04:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          <span className="temperature">20</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <div className="weather-description">
            <ul>
              <li>Precipitation: 12%</li>
              <li>Humidity: 60%</li>
              <li>Wind:10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
