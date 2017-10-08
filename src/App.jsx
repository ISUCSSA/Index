import React, { Component } from 'react';
import DogUIISU from './DogUI-ISU/dogui-isu';


class App extends Component {
  tabs = [
    { tab: "NEWS", route: "n", component: () => <h2>123</h2> },
    { tab: "TEST", route: "t", component: () => <h2>test</h2> }
  ]
  render() {
    return (
      <div>
        <DogUIISU tabs={this.tabs}>DEPARTMENT OF CAREER DEVELOPMENT</DogUIISU>
      </div>
    );
  }
}

export default App;
