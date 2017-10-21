import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    render() {
        return (
            <input onChange={this.handleInput}></input>
        );
    }

    handleInput(e) {
        this.props.onChange(this.props.args, e.target.value)
    }
}

export default Input;
