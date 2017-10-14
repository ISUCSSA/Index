import React, { Component } from 'react';
import Bridge from './srcb/bkbridge';
import Career from './careerDevelopment/index';
import Tech from './tech/index';
import DHR from 'dhr';


class App extends Component {

  bridges = [
    { route: "", redirect: "career" },
    { route: "career", component: Career },
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
