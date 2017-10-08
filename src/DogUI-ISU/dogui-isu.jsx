import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Topping from './component/topping';

class DogUIISU extends Component {

    constructor(props) {
        super(props);
        this.mapRoutes = this.mapRoutes.bind(this);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" component={(routes) => <Topping tabs={this.props.tabs} routes={routes}>{this.props.children}</Topping>} />
                    {this.props.tabs ? this.props.tabs.map(this.mapRoutes) : null}
                </div>
            </HashRouter>
        );
    }

    mapRoutes(value, index) {
        console.log(value);
        return <Route
            path={"/" + value.route}
            component={value.component}
            key={index}
        />
    }
}

export default DogUIISU;
