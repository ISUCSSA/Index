import React, { Component } from 'react';
import Badge from './badge';
import Card from './card';
import WEATHERS from './weathers.es6';
import COLORS from './colors.es6';

class Halibut extends Component {
    render() {
        return (
            <div style={{ height: "100vh", }}>
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Card />
            </div>
        );
    }
}

export default Halibut;
