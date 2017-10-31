import React, { Component } from 'react';
import propTypes from 'prop-types';

class SanmaInputOption extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <input style={{ width: "100%" }} onInput={this.handleClick} />
        );
    }

    handleClick(e) {
        this.props.onInput([this.props.args, e.target.value]);
    }
}

SanmaInputOption.propTypes = {
    onInput: propTypes.func.isRequired,
    args: propTypes.any.isRequired,
    controller: propTypes.string.isRequired,
    colors: propTypes.arrayOf(propTypes.string).isRequired
}

SanmaInputOption.defaultProps = {
    colors: ["FF0000", "FF0000", "FF0000", "FF0000", "FF0000"]
}

export default SanmaInputOption;
