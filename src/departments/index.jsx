import React, { Component } from 'react';
import DCY from 'dcy';

class Career extends Component {

    tabs = {
        route: "", full: true, component: () =>
            <div>
                <div style={{ fontSize: "3vw", height: "35vh", backgroundColor: "orange" }} >
                    <button className="bannerButton" onClick={() => window.location.href = '/career'} style={{ width: "100%", height: "100%" }}>Career / 职业发展部</button>
                </div>
                <div style={{ fontSize: "3vw", height: "35vh", backgroundColor: "blue" }} >
                    <button className="bannerButton" onClick={() => window.location.href = '/tech'} style={{ width: "100%", height: "100%" }}>Tech / 技术部</button>
                </div>
                <div style={{ fontSize: "3vw", height: "35vh", backgroundColor: "green" }} >
                    <button className="bannerButton" onClick={() => window.location.href = '/example'} style={{ width: "100%", height: "100%" }}>Example / 一个例子</button>
                </div>
            </div>
    }
    navs = [
        { nav: "isucssa.org", type: "func", click: () => { window.location.href = "http://isucssa.org" } },
        { nav: "Index", type: "route", click: "index" }
    ]
    source = { name: "ISUCSSA", link: "https://github.com/ISUCSSA/Index" };
    info = {
        sub: "Chinese Students & Scholars Association",
        email: "cssa.isu.ia@gmail.com",
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
