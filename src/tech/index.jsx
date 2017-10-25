import React, { Component } from 'react';
import Halibut from 'halibuts';

class ERROR404 extends Component {
    render() {

        return (
            <div style={{ textAlign: "center" }}>
                <Halibut weather="Hailing">
                    <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.212)",
                        height: "100%",
                        width: "100%"
                    }}>
                        <h1>:D</h1>
                    </div>
                </Halibut>
            </div>
        );
    }
}

export default ERROR404;
