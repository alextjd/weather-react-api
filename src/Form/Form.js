import React from 'react';
import './Form.css';

const Form = (props) => {
    return (
        <form className="form-container" onSubmit={props.getWeather}>
            <input type="text" placeholder="City" name="city" required/>
            <input type="text" placeholder="Country" name="country" required/>
            <button>Get weather</button>
        </form>
    );
};

export default Form;