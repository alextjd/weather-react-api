import React, {Component} from 'react';

const Form = () => {
    return(
        <div className="form-container container">
        <div className="row">
            <div className="four columns">
                <input type="text" placeholder="City.."/>
            </div>
            <div className="four columns">
                <input type="text" placeholder="Country.."/>
            </div>
            <div className="four columns">
                <button>Get weather</button>
            </div>
        </div>
        </div>
    );
};

export default Form;