import React, { Component } from 'react';

class Admin extends Component {

    render() {
        return (
            <div>
                <div>
                    <h3>链接一篇微信文章</h3>
                    <label>你要连接的微信文章地址</label><input></input>
                    <br />
                    <label>这篇文章应该显示的标题</label><input></input>
                    <hr />
                </div>
                <div>
                    <h3>展示一份工作</h3>
                    <label>你要连接的微信文章地址</label><input></input>
                    <br />
                    <label>这篇文章应该显示的标题</label><input></input>
                    <hr />
                </div>
                <div>
                    <h3>建立一次带报名和投票的活动</h3>
                    <label>你要连接的微信文章地址</label><input></input>
                    <br />
                    <label>这篇文章应该显示的标题</label><input></input>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Admin;
