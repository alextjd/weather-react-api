import React from 'react';
import './Title.css';

const Title = () => {
    return(
        <div className="title-container">
            <div className="title">React weather app</div>
            <p className="subtitle">A web application to check what's the weather like at the moment
            in any city of the world. Just type the city name and its country and we will tell
            you if you should take your umbrella with you today. </p>
            <p className="subtitle">The app is based on React, although it uses an open weather API
            and some asynchronous programming on the backend. Provided to you by a pale programmer.</p>
        </div>
    );
};

export default Title;