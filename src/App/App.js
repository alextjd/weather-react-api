import React, {Component} from 'react';
import './App.css';
import Title from "../Title/Title";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";


class App extends Component {

    handleGetWeather = (e) => {

    }




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
