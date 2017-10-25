import React, { Component } from 'react';
import Badge from './badge';
import Card from './card';

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
