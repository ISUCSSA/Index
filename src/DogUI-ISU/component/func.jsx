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
                paddingTop: "13px",
                paddingBottom: "13px",
                boxShadowTop: "1px black",
                boxShadowBottom: "1px black",
                color: "#444"
            }}>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-8">
                        {this.props.tabs ? this.props.tabs.map(this.mapTabs) : null}
                    </div>
                </div>
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
