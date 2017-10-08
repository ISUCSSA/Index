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
        <DogUIISUCSSA tabs={this.tabs}>DEPARTMENT OF CAREER DEVELOPMENT</DogUIISUCSSA>
      </div>
    );
  }
}

export default App;
