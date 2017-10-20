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
                    <label>这次活动的名字</label><input></input>
                    <br />
                    <label>活动的说明 (请将你的文章在任意 HTML 编辑网站编辑, 并复制到此处, 比如<a href="http://html-online.com/editor/">这个网站</a>)</label>
                    <textarea></textarea>
                </div>
            </div>
        );
    }
}

export default Admin;
