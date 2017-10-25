import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from './badge';
import Card from './card';
import WEATHERS from './weathers';
import COLORS from './colors';

class Halibut extends Component {

    constructor(props) {
        super(props);
        this.renderColors = this.renderColors.bind(this);
    }

    render() {
        return (
            <div style={{ height: "100vh", }}>
                {COLORS(this.props.weather).map(this.renderColors)}
                <Card>{this.props.children}</Card>
            </div>
        );
    }

    renderColors(value, index) {
        return <Badge color={value} key={index} />
    }
}

Halibut.propTypes = {
    weather: PropTypes.oneOf([
        WEATHERS.SUN,
        WEATHERS.BREEZE,
        WEATHERS.CLOUD,
        WEATHERS.FOG,
        WEATHERS.HAIL,
        WEATHERS.RAIN,
        WEATHERS.SNOW,
        WEATHERS.STORM,
        WEATHERS.WIND
    ])
};

Halibut.defaultProps = {
    weather: WEATHERS.SUN
};

export default Halibut;
