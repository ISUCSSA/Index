import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Topping from './component/topping';

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
                        <Route path="/" component={(routes) => <Topping tabs={this.props.tabs} routes={routes}>{this.props.children}</Topping>} />
                        {this.props.tabs ? this.props.tabs.map(this.mapRoutes) : null}
                    </div>
                </HashRouter>
                <div style={{ backgroundColor: "#f3f3f3", color: "#686868", fontSize: "14px", lineHeight: "24px", paddingTop: "30px", paddingBottom: "20px" }}>
                    <div className="row">
                        <div className="col-3" style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "40px", margin: "0", color: "#c00" }}>
                                I<span style={{ fontSize: "32px" }}>OWA</span>
                                S<span style={{ fontSize: "32px" }}>TATE</span>
                            </p>
                            <p style={{ fontSize: "40px", paddingTop: "10px", margin: "0", color: "#c00" }}>
                                U<span style={{ fontSize: "32px" }}>NIVERSITY</span>
                            </p>
                            <p style={{ fontSize: "18px", margin: "0", paddingTop: "10px" }}>
                                Chinese Students &
                            </p>
                            <p style={{ fontSize: "18px", margin: "0" }}>
                                Scholars Association
                            </p>
                        </div>
                        <div className="col-3">2</div>
                        <div className="col-3">3</div>
                        <div className="col-3">
                            Copyright © 2017 WMXPY, open source under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a> License.
                        </div>
                    </div>
                </div>
            </div>
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

export default DogUIISUCSSA;
