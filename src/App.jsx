import React, { Component } from 'react';
import Opportunities from './careerDevelopment/Opportunities';
import DogUIISUCSSA from 'dogui-isu-cssa';


class App extends Component {
  tabs = [
    { tab: "NEWS", route: "n", component: () => <h2>Some News</h2> },
    { tab: "OPPORTUNITIES", route: "t", component: Opportunities }
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
