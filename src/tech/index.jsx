import React, { Component } from 'react';
import Halibut, { WEATHERS } from 'halibuts';

class TechIndex extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Halibut weather={WEATHERS.RANDOM}>
                    <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.212)",
                        height: "100%",
                        width: "100%"
                    }}>
                        <h1 style={{ fontSize: "75px", color: "black", fontWeight: "bold" }}>
                            Hello<br />
                            World!
                        </h1>
                    </div>
                </Halibut>
                Hello.
            </div>
        );
    }
}

export default TechIndex;
