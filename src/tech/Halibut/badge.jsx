import React, { Component } from 'react';


class Badge extends Component {
    render() {
        return (
            <div style={{
                transform: "all 2s",
                height: "100%",
                float: "left",
                width: "20%",
                backgroundColor: "#" + this.props.color,
                paddingTop: "10vh"
            }} />
        );
    }
}

export default Badge;
