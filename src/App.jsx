import React, { Component } from 'react';
import Bridge from 'bkbridge';
import Career from './careerDevelopment/index';
import Example from './example/index';
import Tech from './tech/index';
import DHR from 'dhr';


class App extends Component {

  bridges = [
    { route: "", redirect: "career" },
    { route: "career", component: Career },
    { route: "example", component: Example },
    { route: "tech", component: Tech }
  ];
  render() {
    return (
      <div>
        <DHR color="rgb(241, 190, 72)" />
        <Bridge tabs={this.bridges} />
      </div>
    );
  }
}

export default App;
