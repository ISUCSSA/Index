import React, { Component } from 'react';
import config from '../config';
import { ajax } from 'caperjs';

class Upcoming extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {}
        }
    }

    componentWillMount() {
        let a = new ajax(config.host + "api/career/events");
        a.get().then((e) => {
            window.adog.dhr.done();
            console.log(e);
            this.setState({
                event: JSON.parse(e)
            })
        })
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h2>{this.state.event.name}</h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.state.event.intro }}></div>
            </div>
        );
    }
}

export default Upcoming;
