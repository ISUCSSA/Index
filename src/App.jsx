import React, { Component } from 'react';
import Topping from './DogUI-ISU/topping';
import { HashRouter, Route } from 'react-router-dom';


class App extends Component {
  tabs = [{ tab: "NEWS", route: "/t" }]
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route path="/" component={(routes) => <Topping tabs={this.tabs} routes={routes}>DEPARTMENT OF CAREER DEVELOPMENT</Topping>} />
            <Route path="/t" component={() => <h2>2</h2>} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
