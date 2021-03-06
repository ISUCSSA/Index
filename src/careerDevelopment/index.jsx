import React, { Component } from 'react';
import DCY from 'dcy';
import Opportunities from './Opportunities';
import Articles from './articles';
import Upcoming from './upcoming';
import Admin from './admin';
import E404 from '../common/404';

class Career extends Component {

    tabs = [
        { route: "", redirect: "upcoming" },
        { tab: "UPCOMING", route: "upcoming", component: Upcoming },
        { tab: "ARTICLES", route: "articles", component: Articles },
        { tab: "JOB OPENINGS", route: "jobs", component: Opportunities },
        {
            tab: "CONTACT", route: "contact", component: () => {
                return <div>
                    <div style={{ fontSize: "25px" }}>
                        Iowa State University<br />
                        Chinese Students & Scholars Association<br />
                        Department of career development<br />
                    </div>
                    <div style={{ fontSize: "35px" }}>
                        Email: isucssacareer@gmail.com<br />
                        Phone number: 73109
                    </div>
                </div>
            }
        },
        { route: "admin", component: Admin },
        { route: "*", component: E404 }
    ]
    navs = [
        { nav: "isucssa.org", type: "func", click: () => { window.location.href = "http://isucssa.org" } },
        { nav: "Index", type: "func", click: () => { window.location.href = "http://demo.mipha.io/example" } }
    ]
    source = { name: "ISUCSSA", link: "https://github.com/ISUCSSA/Index" };
    info = {
        sub: "Chinese Students & Scholars Association",
        department: "department of career development",
        email: "isucssacareer@gmail.com",
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
                key="career"
            />
        );
    }
}

export default Career;
