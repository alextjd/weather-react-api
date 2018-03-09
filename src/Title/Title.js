import React, {Component} from 'react';

const Title = () => {
    return(
        <div className="title-container">
            <div className="title">What's the weather like?</div>
            <div className="subtitle">A web application to check what's the weather like at the moment
            in any city of the world. Just type the city name and its country and we will tell
            you if you should take your umbrella with you today. </div>
            <div className="subtitle">The app is based on React, although it uses an open weather API
            and some asynchronous programming on the backend. Provided to you by a pale programmer.</div>
        </div>
    );
};

export default Title;