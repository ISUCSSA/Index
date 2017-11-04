import React, { Component } from 'react';
import { ajax } from 'caperjs';
import config from '../config';
import Input from '../common/input';

class Admin extends Component {

    password;

    constructor(props) {
        super(props);
        this.state = {
            display: false,
            success: false,
            inputs: {
                article: {},
                job: {
                    detail: [""]
                },
                event: {
                    intro: ""
                }
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleIntro = this.handleIntro.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
        this.submitArticle = this.submitArticle.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
        this.submitJob = this.submitJob.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.submitPassword = this.submitPassword.bind(this);
    }

    render() {
        return (
            <div>{
                this.state.display ? <div>
                    <div>
                        <h3>链接一篇微信文章</h3>
                        <label>你要连接的微信文章地址</label><Input onChange={this.handleInput} args={["article", "address"]}></Input>
                        <br />
                        <label>这篇文章应该显示的标题</label><Input onChange={this.handleInput} args={["article", "title"]}></Input>
                        <br />
                        <label>文章的作者</label><Input onChange={this.handleInput} args={["article", "author"]}></Input>
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
                    : this.state.success ? <div>DONE</div> : <div>
                        <label>这个页面需要密码才能查看</label><br />
                        <input onChange={this.handlePassword} type="password" style={{ width: "100%" }} />
                        <button onClick={this.submitPassword}>提交</button>
                    </div>
            }</div>
        );
    }

    submitPassword() {
        if (this.password === "123") {
            this.setState({
                display: true
            });
        }
    }

    handlePassword(e) {
        this.password = e.target.value;
    }

    handleDetail(args, value) {
        let tempstate = this.state.inputs;
        tempstate.job.detail[args] = value;
        this.setState({
            inputs: tempstate
        });
    }

    handleInput(args, value) {
        let tempstate = this.state.inputs;
        tempstate[args[0]][args[1]] = value;
        this.setState({
            inputs: tempstate
        });
    }


    handleIntro(e) {
        let tempstate = this.state.inputs;
        tempstate.event.intro = e.target.value;
        this.setState({
            inputs: tempstate
        });
    }

    submitArticle() {
        let caper = new ajax(config.host + "api/career/admin/articles");
        caper.setData(this.state.inputs.article);
        caper.post().then((a) => {
            this.setState({
                success: true,
                display: false,
            })
            console.log(a)
        })
    }

    submitJob() {
        let caper = new ajax(config.host + "api/career/admin/jobs");
        let job = JSON.parse(JSON.stringify(this.state.inputs.job));
        job.detail = JSON.stringify(job.detail);
        caper.setData(job);
        caper.post().then((a) => {
            this.setState({
                success: true,
                display: false,
            })
            console.log(a)
        })
    }

    submitEvent() {
        let caper = new ajax(config.host + "api/career/admin/events");
        caper.setData(this.state.inputs.event);
        caper.post().then((a) => {
            this.setState({
                success: true,
                display: false,
            })
            console.log(a)
        })
    }
}

export default Admin;
