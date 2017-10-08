import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            hover: false,
            value: ""
        }
    }

    render() {
        return (
            <div
            onMouseOver={this.handleHover}
            onMouseLeave={this.releaseHover}>
                <input
                    value={this.state.value}
                    onInput={this.handleInput}
                    style={Object.assign(
                        {
                            paddingLeft: "12px",
                            transition: "0.3s all",
                            border: "0px",
                            borderRadius: "5px",
                            height: "32px"
                        },
                        this.state.hover ?
                            { width: "100%" } :
                            { width: "70%", background: "#8b0000", color: "white" }
                    )}>
                </input>
                <span style={Object.assign(
                    {
                        paddingLeft: "5px",
                        transition: "0.3s all",
                        position: "absolute",
                        bottom: "6px",
                        fontSize: "15px"
                    },
                    this.state.hover ?
                        { left: "0px", display: "none" } :
                        { left: "30%" },
                    this.state.value ?
                        { display: "none" } :
                        {}
                )}>Search</span>
                <span style={Object.assign(
                    {
                        transition: "0.3s all",
                        position: "absolute",
                        right: "15px",
                        bottom: "8px",
                        fontSize: "15px"
                    },
                    this.state.hover ?
                        { display: "none" } :
                        {},
                )}><i className="fa fa-search" /></span>
            </div>
        );
    }

    handleInput(event) {
        this.setState({
            value: event.target.value
        })
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

export default SearchBar;
