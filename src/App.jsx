import React, { Component } from 'react';
import Opportunities from './careerDevelopment/Opportunities';
import DogUIISUCSSA from 'dogui-isu-cssa';


class App extends Component {
  tabs = [
    { route: "", redirect: "index" },
    { tab: "INDEX", route: "index", component: () => <h2>Some News</h2> },
    { tab: "JOB OPENINGS", route: "jobs", component: Opportunities }
  ]
  render() {
    return (
      <div>
        <DogUIISUCSSA
          tabs={this.tabs}
          source={{ name: "ISUCSSA", link: "https://github.com/ISUCSSA/Index" }}
          contact={{
            email: "cssa.isu.ia@gmail.com",
            address: "2229 Lincoln Way C4 1530 Student Office",
            address2: "Memorial Union Ames, iA 50011-1130",
            wechat: "http://www.isucssa.org/24494204493902938754.html",
            weibo: "http://weibo.com/isucssa",
            facebook: "https://www.facebook.com/iaisucssa",
            instagram: "https://www.instagram.com/isucssa/"
          }}
        >
          DEPARTMENT OF CAREER DEVELOPMENT
        </DogUIISUCSSA>
      </div>
    );
  }
}

export default App;
