import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div style={{
                textAlign: "center",
                position: "absolute",
                backgroundColor: "white",
                width: "32vw",
                minWidth: "480px",
                height: "25vh",
                minHeight: "220px",
                left: "10vh",
                bottom: "10vh"
            }}>
                <h2>404 Nothing Found</h2>
            </div>
        );
    }
}

export default Card;
