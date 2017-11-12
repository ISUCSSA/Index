import React, { Component } from 'react';
import DCY from 'dcy';

class Career extends Component {

    tabs = {
        route: "", full: true, component: () =>
            <div style={{ fontSize: "3vw", height: "30vh", backgroundColor: "orange" }} >
                <div className="row">
                    <div className="col-sm-4">
                        <button className="bannerButton" onClick={() => window.location.href = './career'}>Career / 职业发展部</button>
                    </div>
                    <div className="col-sm-4">
                        <button className="bannerButton" onClick={() => window.location.href = './tech'}>Tech / 技术部</button>
                    </div>
                    <div className="col-sm-4">
                        <button className="bannerButton" onClick={() => window.location.href = './example'}>Example / 例子部</button>
                    </div>
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
