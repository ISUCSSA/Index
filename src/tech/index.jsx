import React, { Component } from 'react';
import Halibut, { WEATHERS } from 'halibuts';
import { Video } from '../alewife/src/index';
import { Logo } from 'dcy';

class TechIndex extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Video
                    loop
                    muted
                    src={[
                        "https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/D2_EP1_Cinemagraph_1920_21s-10-30-17.webm",
                        "https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/D2_EP1_Cinemagraph_1920_21s-10-30-17.mp4"]}
                    poster="https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/ep-1-hero-1440.jpg" />

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
