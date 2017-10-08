import React, { Component } from 'react';

class HoverLink extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.hrefTo = this.hrefTo.bind(this);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <div
                onClick={this.hrefTo}
                className="row"
                style={{ fontSize: "30px", paddingBottom: "10px", cursor: "pointer" }}
                onMouseOver={this.handleHover}
                onMouseLeave={this.releaseHover}>
                <div className="col-5"
                    style={Object.assign(
                        { transition: "0.1s all", textAlign: "right" },
                        this.state.hover ? { color: this.props.color } : {})}>
                    <i className={"fa fa-fw fa-" + this.props.icon} />
                </div>
                <div className="col-7"
                    style={Object.assign(
                        { transition: "0.1s all", textAlign: "left" },
                        this.state.hover ? { textDecoration: "underline" } : { textDecoration: "none" })}>
                    <span style={{ fontSize: "14px" }}>{this.props.children}</span>
                </div>
            </div>
        );
    }

    hrefTo() {
        if (this.props.href) {
            let a = document.createElement("a");
            a.href = this.props.href;
            a.click();
        }
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

export default HoverLink;
