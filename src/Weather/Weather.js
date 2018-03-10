import React from 'react';
import './Weather.css';

const Weather = (props) => {
    if (props.city && props.country) {
        return (
            <div className="weather-container">
                <div className="wdata"><span>Location</span><h3>{props.city}, {props.country}</h3></div>
                <div className="wdata"><span>Temperature</span><h3>{props.temperature} °C</h3></div>
                <div className="wdata"><span>Humidity</span><h3>{props.humidity}%</h3></div>
                <div className="wdata"><span>Conditions</span><h3>{props.conditions}</h3></div>
            </div>
        );
    } else {
        return (
            <div className="weather-container"><span className="error">{props.error}</span></div>
        );
    }
};

export default Weather;