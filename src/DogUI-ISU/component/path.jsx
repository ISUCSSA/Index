import React, { Component } from 'react';

class Path extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <path
                d={this.props.d}
                onMouseOver={this.handleHover}
                onMouseLeave={this.releaseHover}
                style={Object.assign({ transition: "0.1s all" }, this.state.hover ? { fill: "#fff" } : { fill: "#F1BE48" })}
            />
        );
    }

    handleHover() {
        this.setState({
            hover: true
        })
    }

    releaseHover() {
        this.setState({
            hover: false
        })
    }
}

export default Path;
