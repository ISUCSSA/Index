import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                backgroundColor: "#333",
                color: "#ccc",
                padding: "4px",
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "10px"
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default Nav;
