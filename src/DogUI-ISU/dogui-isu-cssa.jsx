import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Structure from './component/structure';
import Footer from './component/footer';

class DogUIISUCSSA extends Component {

    constructor(props) {
        super(props);
        this.mapRoutes = this.mapRoutes.bind(this);
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route path="/" component={(routes) => <Structure tabs={this.props.tabs} routes={routes}>{this.props.children}</Structure>} />
                        <div className="row">
                            <div className="col-2">
                            </div>
                            <div className="col-8">
                                {this.props.tabs ? this.props.tabs.map(this.mapRoutes) : null}
                            </div>
                        </div>

                    </div>
                </HashRouter>
                <Footer />
            </div>
        );
    }

    mapRoutes(value, index) {
        return <Route
            path={"/" + value.route}
            component={value.component}
            key={index}
        />
    }
}

export default DogUIISUCSSA;
