import React, { Component } from 'react';
import config from '../config';
import { ajax } from 'caperjs';
import { Vote } from './sanma/import';

class Upcoming extends Component {

    vot = {
        description: 123,
        votes: [{
            description: "test",
            id: "testPartnet",
            options: [{
                id: "test",
                name: "test"
            }, {
                id: "test",
                name: "test"
            }]
        }]
    }

    constructor(props) {
        super(props);
        this.state = {
            event: {}
        }
    }

    componentWillMount() {
        let a = new ajax(config.host + "api/career/events");
        // a.get().then((e) => {
        //     window.adog.dhr.done();
        //     console.log(e);
        //     this.setState({
        //         event: JSON.parse(e)
        //     })
        // })
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h2>{this.state.event.name}</h2>
                </div>
                {/**<div dangerouslySetInnerHTML={{ __html: this.state.event.intro }}></div>*/}
                <Vote votes={this.vot} onSelect={(e) => console.log(e)} selectable={false}>问卷调查</Vote>
            </div>
        );
    }
}

export default Upcoming;
