import React, {Component} from 'react';

const Weather = (props) => {
    return(
        <div className="weather-container">
            <div className="wdata"><span>Location</span></div>
            <div className="wdata"><span>Temperature</span></div>
            <div className="wdata"><span>Humidity</span></div>
            <div className="wdata"><span>Conditions</span></div>
        </div>
    );
};

export default Weather;