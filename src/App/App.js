import React, {Component} from 'react';
import './App.css';
import Title from "../Title/Title";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";

//API key of openweathermap
const API_KEY = 'ced8fd01f5874b0d9113917e0f93dce6';

class App extends Component {

    //ECMAScript6, baby: arrow functions, new constructor, etc, etc.

    //Constructor in ECMAScript6
    state = {
        "city": '',
        "country" : '',
        "temperature" : '',
        "humidity" : '',
        "conditions" : '',
        "error" : ''
    };

    //Get the weather of a specific city
    handleGetWeather = async (e) => {
        //Prevent the form from submiting the usual way
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        //Do a request to the API with this info
        //Request using Fetch with asynchronous programming (async/await)
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='
            + city + ',' + country + '&appid=' + API_KEY);

        const data = await response.json();


    };


    render() {
        return (
            <div className="App">
                <div className="left">
                    <Title/>
                </div>
                <div className="right">
                    <Form getWeather={this.handleGetWeather}/>
                    <Weather/>
                </div>
            </div>
        );
    }
}

export default App;
