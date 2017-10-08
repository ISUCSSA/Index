import React, { Component } from 'react';
import Nav from './component/nav';
import Title from './component/title';
import Func from './component/func';

class Topping extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <Nav>Directory</Nav>
                <Title>{this.props.children}</Title>
                <Func tabs={this.props.tabs} history={this.props.routes.history} />
            </div>
        );
    }
}

export default Topping;
