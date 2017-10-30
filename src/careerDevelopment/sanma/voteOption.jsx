import React, { Component } from 'react';
import propTypes from 'prop-types';

class SanmaVoteOption extends Component {

    constructor(props){
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            hover: false
        };
    }

    render() {
        return (
            <div style={{width: "100%", cursor: "pointer"}}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
            onClick={this.handleClick}>
                <i className="fa fa-circle-o fa-fw" style={{color: this.state.hover?"red":"black"}}/>
                <span>{this.props.children}</span>
            </div>
        );
    }

    handleClick(){

    }

    handleHover(){
        this.setState({
            hover: true
        });
    }

    handleLeave(){
        this.setState({
            hover: false
        });
    }
}

SanmaVoteOption.propTypes = {
    onClick: propTypes.func.isRequired,
    args: propTypes.any.isRequired
}

export default SanmaVoteOption;
