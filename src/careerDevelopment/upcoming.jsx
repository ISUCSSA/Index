import React, { Component } from 'react';
import config from '../config';
import { ajax } from 'caperjs';
import { Vote } from 'sanma';

class Upcoming extends Component {

    vot = {
        description: "这是一个测试问卷调查，选中选项的功能已经被禁用",
        votes: [{
            description: "测试问题1",
            id: "testPartnet",
            options: [{
                id: "test",
                name: "测试选项1"
            }, {
                id: "test",
                name: "测试选项2"
            }]
        }, {
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
