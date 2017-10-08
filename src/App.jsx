import React, { Component } from 'react';
import DogUIISUCSSA from './DogUI-ISU/dogui-isu-cssa';


class App extends Component {
  tabs = [
    { tab: "NEWS", route: "n", component: () => <h2>123</h2> },
    { tab: "TEST", route: "t", component: () => <h2>test</h2> }
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
