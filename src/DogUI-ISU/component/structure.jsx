import React, { Component } from 'react';
import Nav from './nav';
import Title from './title';
import Func from './func';

class Structure extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <Nav>
                    <a style={{ paddingRight: "17px", cursor: "pointer" }}>isucssa.org</a>
                    <a style={{ paddingRight: "17px", cursor: "pointer" }}>Index</a>
                    <a style={{ paddingRight: "17px", cursor: "pointer" }}>Directory</a>
                </Nav>
                <Title>{this.props.children}</Title>
                <Func tabs={this.props.tabs} history={this.props.routes.history} />
            </div>
        );
    }
}

export default Structure;
