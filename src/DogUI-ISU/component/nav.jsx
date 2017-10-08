import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                backgroundColor: "#333",
                color: "#ccc",
                paddingTop: "5px",
                paddingBottom: "5px",
                fontSize: "10px"
            }}>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-8">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
