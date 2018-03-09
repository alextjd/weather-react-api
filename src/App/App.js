import React, {Component} from 'react';
import './App.css';
import Title from "../Title/Title";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="left">
                    <Title/>
                </div>
                <div className="right">
                    <Form/>
                    <Weather/>
                </div>
            </div>
        );
    }
}

export default App;
