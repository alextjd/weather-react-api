import React, {Component} from 'react';
import './App.css';
import Title from "../Title/Title";
import Form from "../Form/Form";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="left">
                    <Title/>
                </div>
                <div className="right">
                    <Form/>
                </div>
            </div>
        );
    }
}

export default App;
