import React, {Component} from 'react';
import './App.css';
import Title from "../Title/Title";


class App extends Component {
    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="left five columns">
                        <Title/>
                    </div>
                    <div className="right seven columns">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
