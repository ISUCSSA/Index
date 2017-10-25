import React, { Component } from 'react';
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
                <Card />
            </div>
        );
    }

    renderColors(value, index) {
        return <Badge color={value} key={index} />
    }
}

export default Halibut;
