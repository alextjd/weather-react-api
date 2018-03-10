import React from 'react';

const Form = (props) => {
    return (
        <form className="form-container container">
            <div className="row">
                <div className="four columns">
                    <input type="text" placeholder="City.."/>
                </div>
                <div className="four columns">
                    <input type="text" placeholder="Country.."/>
                </div>
                <div className="four columns">
                    <button onClick={props.getWeather()}>Get weather</button>
                </div>
            </div>
        </form>
    );
};

export default Form;