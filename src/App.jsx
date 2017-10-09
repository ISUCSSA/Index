import React, { Component } from 'react';
import Opportunities from './careerDevelopment/Opportunities';
import E404 from './common/404';
import DCy from 'dcy';


class App extends Component {
  tabs = [
    { route: "", redirect: "index" },
    { tab: "INDEX", route: "index", component: () => <h2>Some News</h2> },
    { tab: "JOB OPENINGS", route: "jobs", component: Opportunities },
    { route: "*", component: E404 }
  ]
  navs = [
    { nav: "isucssa.org", type: "func", click: () => { window.location.href = "http://isucssa.org" } },
    { nav: "Index", type: "route", click: "index" }
  ]
  render() {
    return (
      <div>
        <DCy
          tabs={this.tabs}
          navs={this.navs}
          source={{ name: "ISUCSSA", link: "https://github.com/ISUCSSA/Index" }}
          info={{
            sub: "Chinese Students & Scholars Association",
            department: "department of career development",
            email: "cssa.isu.ia@gmail.com",
            address: "2229 Lincoln Way C4 1530 Student Office",
            address2: "Memorial Union Ames, IA 50011-1130",
            wechat: "http://www.isucssa.org/24494204493902938754.html",
            weibo: "http://weibo.com/isucssa",
            facebook: "https://www.facebook.com/iaisucssa",
            instagram: "https://www.instagram.com/isucssa/"
          }}
        />
      </div>
    );
  }
}

export default App;
