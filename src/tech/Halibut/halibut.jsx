import React, { Component } from 'react';
import Badge from './badge';
import Card from './card';
import WEATHERS from './weathers.es6';
import COLORS from './colors.es6';

class Halibut extends Component {

    constructor(props) {
        super(props);
        this.renderColors = this.renderColors.bind(this);
        console.log(COLORS);
    }

    render() {
        return (
            <div style={{ height: "100vh", }}>
                {COLORS(this.props.weather).map(this.renderColors)}
                <Card />
            </div>
        );
    }

    renderColors(value, index) {
        return <Badge color={value} />
    }
}

export default Halibut;
