import React, {Component} from 'react';
import './App.css';
import back from '../back.jpg';
import Title from "../Title/Title";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";

//API key of openweathermap
const API_KEY = 'ced8fd01f5874b0d9113917e0f93dce6';

class App extends Component {

    //ECMAScript6, baby: arrow functions, new constructor, etc, etc.

    //Constructor in ECMAScript6
    state = {
        "city": undefined,
        "country": undefined,
        "temperature": undefined,
        "humidity": undefined,
        "conditions": undefined,
        "error": undefined
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
            + city + ',' + country + '&appid=' + API_KEY + '&units=metric');
        const data = await response.json();

        //Check if the response is correct or not
        if (data.name && data.sys.country) {
            let conditions = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1) + '.';
            this.setState({
                "city": data.name,
                "country": data.sys.country,
                "temperature": data.main.temp,
                "humidity": data.main.humidity,
                "conditions": conditions,
                "error": undefined
            });
        } else {
            //Failed request or wrong input
            const msg = data.cod === 404 ?
                'Something went wrong looking for that city.' : 'Please check if you are entering correct values.';

            this.setState({
                "city": undefined,
                "country": undefined,
                "temperature": undefined,
                "humidity": undefined,
                "conditions": undefined,
                "error": msg
            });
        }
    };

    //Render function
    render() {
        return (
            <div className="App">
                <div className="left" style={{backgroundImage: "url(" + back + ")"}}  >
                    <Title/>
                </div>
                <div className="right">
                    <Form getWeather={this.handleGetWeather}/>
                    <Weather city={this.state.city}
                             country={this.state.country}
                             temperature={this.state.temperature}
                             humidity={this.state.humidity}
                             conditions={this.state.conditions}
                             error={this.state.error}/>
                    <div className="footer"><p>Made with ️ 🥑 by <a href="https://github.com/alextjd">Alex</a> using React.</p></div>
                </div>
            </div>
        );
    }
}

export default App;
