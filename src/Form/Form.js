import React from 'react';

const Form = (props) => {
    return (
        <form className="form-container container" onSubmit={props.getWeather}>
            <div className="row">
                <div className="four columns">
                    <input type="text" placeholder="City.." name="city" required/>
                </div>
                <div className="four columns">
                    <input type="text" placeholder="Country.." name="country" required/>
                </div>
                <div className="four columns">
                    <button>Get weather</button>
                </div>
            </div>
        </form>
    );
};

export default Form;