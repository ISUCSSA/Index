import React, { Component } from 'react';
import { Video, Banner } from 'alewife'
import DCY from '../src/index';

class Career extends Component {

    tabs = {
        route: "", full: true, component: () => <Video loop
            muted
            src={{ src: "https://www.tesla.com/ns_videos/homepage-video-summer-2017.mp4?20170808", type: "mp4" }}

            poster="https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/home/hero/ep-1-hero-1440.jpg">
            <Banner>
                <h1 style={{ color: "white", fontSize: "5vw", textAlign: "center" }}>加入CSSA，一个人干一个部门的活！</h1>
            </Banner>
        </Video>
    }
    navs = [
        { nav: "isucssa.org", type: "func", click: () => { window.location.href = "http://isucssa.org" } },
        { nav: "Index", type: "route", click: "index" }
    ]
    source = { name: "ISUCSSA", link: "https://github.com/ISUCSSA/Index" };
    info = {
        sub: "Chinese Students & Scholars Association",
        email: "example@example.com",
        address: "2229 Lincoln Way C4 1530 Student Office",
        address2: "Memorial Union Ames, IA 50011-1130",
        wechat: "http://www.isucssa.org/24494204493902938754.html",
        weibo: "http://weibo.com/isucssa",
        facebook: "https://www.facebook.com/iaisucssa",
        instagram: "https://www.instagram.com/isucssa/"
    };

    render() {
        return (
            <DCY
                tabs={this.tabs}
                navs={this.navs}
                source={this.source}
                info={this.info}
                pre={this.props.pre}
                key="example"
            />
        );
    }
}

export default Career;
