import React, { Component } from 'react';
import Halibut, { WEATHERS } from '../src/import';
import { Video } from '../alewife/src/index';
import { Logo } from 'dcy';

class TechIndex extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Video />

                <Halibut weather={WEATHERS.RANDOM} corner={() => <Logo width="120" />}>
                    <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.212)",
                        height: "100%",
                        width: "100%"
                    }}>
                        <h1 style={{ fontSize: "75px", color: "black", fontWeight: "bold" }}>
                            Hello World!
                        </h1>
                    </div>
                </Halibut>
                Hello.
            </div>
        );
    }
}

export default TechIndex;
