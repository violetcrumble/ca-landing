import React from 'react';
import Form from '../Form/Form.js';

import heroImageLg from "../../images/consumer-affairs-hero.jpg";

const heroImageStyle = {
    backgroundImage: `url(${heroImageLg})`,
}

const Hero = () => (

    <div className="hero-image" style={heroImageStyle}>
        <h2>Find&nbsp;your dream&nbsp;home.</h2>

        <div className="form-container">
            <h3>Your search<br />starts here...</h3>
            <div className="form-content">
                <Form />
            </div>
        </div>

    </div>

);

export default Hero;
