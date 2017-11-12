import React, { Component } from 'react';
import { Video, Banner } from 'alewife'

class IndexBanner extends Component {


    render() {
        return (
            <div style={{ backgroundColor: "rgba(204, 204, 204, 0.075)" }}>
                <Video loop
                    muted
                    src={{ src: "https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/D2_EP1_Cinemagraph_1920_21s-10-30-17.webm", type: "mp4" }}
                    poster="https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/ep-1-hero-1440.jpg">
                    <Banner>
                        <div style={{ fontSize: "3vw", color: "white", paddingTop: "8%" }} >
                            <span style={{ paddingLeft: "3vw", fontSize: "4vw" }}>Departments</span>
                            <div className="row">
                                <div className="col-sm-4">
                                    <button className="bannerButton" onClick={() => window.location.href = './career'}>Career</button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="bannerButton" onClick={() => window.location.href = './tech'}>Tech</button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="bannerButton" onClick={() => window.location.href = './example'}>Example</button>
                                </div>
                            </div>
                        </div>
                    </Banner>
                </Video>
                <div style={{ height: "0.3vh", backgroundColor: "rgb(241, 190, 72)", marginBottom: "1vh" }} />
                <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "2.5vw" }}>加入CSSA的好处</span><br />
                    <span style={{ fontSize: "1.6vw" }}>daisjdijasoid</span><br />
                    <span style={{ fontSize: "1.6vw" }}>daisjdijasoid</span><br />
                    <span style={{ fontSize: "1.6vw" }}>daisjdijasoid</span><br />
                    <span style={{ fontSize: "1.6vw" }}>daisjdijasoid</span><br />
                    <span style={{ fontSize: "1.6vw" }}>daisjdijasoid</span>
                </div>
                <div style={{ fontSize: "2vw", textAlign: "center" }}>
                    <button className="bannerButtonBlk" style={{ border: "1px solid black" }} onClick={() => window.location.href = './career'}>现在加入</button>
                </div>
                <div style={{ height: "0.3vh", backgroundColor: "rgb(241, 190, 72)", marginTop: "1.5vh" }} />
            </div>
        );
    }

}

export default IndexBanner;
