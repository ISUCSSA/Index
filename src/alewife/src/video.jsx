import React, { Component } from 'react';
import propTypes from 'prop-types';

class AlewifeVideo extends Component {
    render() {
        return (
            <video playsInline autoPlay muted loop width="100%" height="auto" poster="/content/dam/atvi/bungie/destiny2/home/hero/ep-1-hero-1440.jpg">
                <source src="https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/D2_EP1_Cinemagraph_1920_21s-10-30-17.webm" type="video/webm" />
                <source src="https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/D2_EP1_Cinemagraph_1920_21s-10-30-17.mp4" type="video/mp4" />
            </video>
        );
    }
}

AlewifeVideo.propTypes = {
    width: propTypes.oneOfType(propTypes.string, propTypes.number),
    height: propTypes.oneOfType(propTypes.string, propTypes.number),
    src: propTypes.oneOfType(
        propTypes.arrayOf(propTypes.string),
        propTypes.string,
        propTypes.arrayOf(
            propTypes.shape({
                src: propTypes.string.isRequired,
                type: propTypes.string.isRequired
            })),
        propTypes.shape({
            src: propTypes.string.isRequired,
            type: propTypes.string.isRequired
        })).isRequired,
    autoPlay: propTypes.bool,
    muted: propTypes.bool,
    loop: propTypes.bool,
    playsInline: propTypes.bool
}

export default AlewifeVideo;
