import React, { Component } from 'react';


class ApplyButton extends Component {

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
            <button
                onMouseOver={this.handleHover}
                onMouseOut={this.releaseHover}
                style={Object.assign({
                    border: "0px",
                    color: "white",
                    width: "150px",
                    fontSize: "16px",
                    height: "25px",
                    cursor: "pointer",
                }, { backgroundColor: this.state.hover ? "rgb(255, 136, 0)" : "rgb(204, 0, 0)" })}>Click Me to Apply</button>
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

export default ApplyButton;
