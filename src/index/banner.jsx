import React, { Component } from 'react';
import { Video, Banner } from 'alewife'

class IndexBanner extends Component {


    render() {

        return (
            <Video loop
                muted
                src={{ src: "https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/D2_EP1_Cinemagraph_1920_21s-10-30-17.webm", type: "mp4" }}
                poster="https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/ep-1-hero-1440.jpg">
                <Banner>
                    <div style={{ fontSize: "4vw", color: "white", paddingTop: "5%" }} >
                        <span style={{ paddingLeft: "10vw", fontSize: "3vw" }}>Departments</span>
                        <div className="row">
                            <div className="col-sm-4">
                                <button className="bannerButton">Career</button>
                            </div>
                            <div className="col-sm-4">
                                <button className="bannerButton">Tech</button>
                            </div>
                            <div className="col-sm-4">
                                <button className="bannerButton">Example</button>
                            </div>
                        </div>
                    </div>
                </Banner>
            </Video>
        );
    }

}

export default IndexBanner;
