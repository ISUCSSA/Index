import React, { Component } from 'react';
import { ajax } from 'caperjs';
import Input from '../common/input';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                article: {},
                job: {
                    detail: [""]
                },
                event: {
                    intro: ""
                }
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleIntro = this.handleIntro.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
        this.submitArticle = this.submitArticle.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
        this.submitJob = this.submitJob.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>链接一篇微信文章</h3>
                    <label>你要连接的微信文章地址</label><Input onChange={this.handleInput} args={["article", "address"]}></Input>
                    <br />
                    <label>这篇文章应该显示的标题</label><Input onChange={this.handleInput} args={["article", "title"]}></Input>
                    <br />
                    <button onClick={this.submitArticle}>提交文章</button>
                    <hr />
                </div>
                <div>
                    <h3>展示一份工作</h3>
                    <label>工作的名字</label><Input onChange={this.handleInput} args={["job", "name"]}></Input>
                    <br />
                    <label>公司介绍</label><Input onChange={this.handleInput} args={["job", "description"]}></Input>
                    <br />
                    <label>详情</label>
                    {this.state.inputs.job.detail.map((value, index) => {
                        return <Input onChange={this.handleDetail} args={index} key={index}></Input>
                    })}
                    <br />
                    <button onClick={() => {
                        this.state.inputs.job.detail.push("");
                        this.setState({
                            inputs: { ...this.state.inputs }
                        })
                    }}>添加一条详情</button>
                    <br />
                    <label>如何申请</label><Input onChange={this.handleInput} args={["job", "applyMethod"]}></Input>
                    <br />
                    <label>申请位置</label><Input onChange={this.handleInput} args={["job", "apply"]}></Input>
                    <br />
                    <button onClick={this.submitJob}>提交工作</button>
                    <hr />
                </div>
                <div>
                    <h3>建立一次带报名和投票的活动</h3>
                    <label>这次活动的名字</label><Input onChange={this.handleInput} args={["event", "name"]}></Input>
                    <br />
                    <label>活动的说明 (请将你的文章在任意 HTML 编辑网站编辑, 并复制到此处, 比如<a href="http://html-online.com/editor/">这个网站</a>)</label>
                    <textarea style={{ width: "100%", height: "400px" }} onChange={this.handleIntro}></textarea>
                    <br />
                    <button onClick={this.submitEvent}>提交活动</button>
                </div>
            </div>
        );
    }

    handleDetail(args, value) {
        this.state.inputs.job.detail[args] = value;
    }

    handleInput(args, value) {
        this.state.inputs[args[0]][args[1]] = value;
    }


    handleIntro(e) {
        this.state.inputs.event.intro = e.target.value;
    }

    submitArticle() {
        let caper = new ajax("http://localhost:8081/api/career/admin/articles");
        caper.setData(this.state.inputs.article);
        caper.post().then((a) => {
            console.log(a)
        })
    }

    submitJob() {
        let caper = new ajax("http://localhost:8081/api/career/admin/jobs");
        let job = JSON.parse(JSON.stringify(this.state.inputs.job));
        job.detail = JSON.stringify(job.detail);
        caper.setData(job);
        caper.post().then((a) => {
            console.log(a)
        })
    }

    submitEvent() {
        let caper = new ajax("http://localhost:8081/api/career/admin/articles");
        caper.setData(this.state.inputs.event);
        caper.post().then((a) => {
            console.log(a)
        })
    }
}

export default Admin;
