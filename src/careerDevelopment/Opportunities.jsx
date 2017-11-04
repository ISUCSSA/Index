import React, { Component } from 'react';
import config from '../config';
import { ajax } from 'caperjs';
import ApplyButton from './applyButton';

class Opportunities extends Component {

    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        this.state = {
            jobs: []
        }
    }

    componentWillMount() {
        let a = new ajax(config.host + "api/career/jobs");
        a.get().then((e) => {
            window.adog.dhr.done();
            console.log(JSON.parse(e))
            this.setState({
                jobs: JSON.parse(e)
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Avaiable Job Opportunities from CSSA</h2>
                {this.state.jobs.reverse().map(this.renderList)}
            </div>
        );
    }

    renderList(value, index) {
        return <div key={index} style={{ marginBottom: "25px", marginTop: "25px" }}>
            <h3 style={{ margin: "0px" }}>{value.name}</h3>
            <h5 style={{ margin: "0px" }}>{value.description}</h5>
            <h4 style={{ margin: "0px", marginTop: "10px" }}>Job Description</h4>
            <ul style={{ margin: "5px" }}>
                {value.detail.map(renderDescription)}
            </ul>
            <h4 style={{ margin: "0px", marginTop: "10px" }}>How to apply</h4>
            {HowToApply()} or <br />
            {applyButton()}
        </div>;

        function HowToApply() {
            switch (value.applyMethod) {
                case "email":
                    return "Send E-mail to " + value.apply;
                case "web":
                    return "Visit http://" + value.apply;
                default:
                    return null;
            }
        }

        function applyButton() {
            let clickFun;
            switch (value.applyMethod) {
                case "email":
                    clickFun = () => {
                        let a = document.createElement('a');
                        a.href = "mailto:" + value.apply;
                        a.click();
                    }
                    break;
                case "web":
                    clickFun = () => {
                        window.open("http://" + value.apply)
                    }
                    break;
                default:
                    return null;
            }
            return <ApplyButton onClick={clickFun} />

        }

        function renderDescription(value, index) {
            return <li key={index}>{value}</li>
        }
    }
}
export default Opportunities;