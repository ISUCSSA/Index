import React, { Component } from 'react';

class Func extends Component {

    constructor(props) {
        super(props);
        this.mapTabs = this.mapTabs.bind(this);
    }

    render() {
        return (
            <div style={{
                backgroundColor: "#e7e7e7",
                fontSize: "18px",
                padding: "13px",
                paddingLeft: "60px",
                boxShadowTop: "1px black",
                boxShadowBottom: "1px black",
                color: "#444"
            }}>
                {this.props.tabs ? this.props.tabs.map(this.mapTabs) : null}
            </div>
        );
    }

    mapTabs(value, index) {
        const test = () => {
            this.props.history.replace("/" + value.route)
        }
        return <a style={{ paddingRight: "40px", cursor: "pointer" }} onClick={test} key={index}>{value.tab}</a>
    }
}

export default Func;
