import React, { Component } from 'react';
import Halibut, { WEATHERS } from 'halibuts';

class ERROR404 extends Component {
    render() {
        console.log(WEATHERS)
        return (
            <div style={{ textAlign: "center" }}>
                <Halibut weather="Windy">
                    <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.212)",
                        height: "100%",
                        width: "100%"
                    }}>
                        <h1 style={{ fontSize: "75px", color: "white", fontWeight: "bold", paddingTop: "6%" }}>Hello World!</h1>
                        <h2 style={{ fontSize: "30px", color: "white", fontWeight: "bold", paddingTop: "2%" }}>(Just me)</h2>
                    </div>
                </Halibut>
            </div>
        );
    }
}

export default ERROR404;
