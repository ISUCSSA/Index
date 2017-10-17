import React, { Component } from 'react';


class Articles extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div className="row">
                    <div className="col-md-6"><img src="http://www.desktopwallpaperhd.net/wallpapers/8/7/xiaogoukuanping-animal-tupian-85399.jpg" style={{ height: "100px", width: "100px" }} /></div>
                    <div className="col-md-6">
                        <h2><a href="https://mp.weixin.qq.com/s?__biz=MjM5MzU5Nzc4NA==&mid=2652136072&idx=1&sn=bb8b34113ce77f5ce6639e1e0e180e51&chksm=bd7452bf8a03dba9265645eea7445cb99a773e64b3427845dabd70f00b97b1419194ab37fd61#rd">推文1</a></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6"><img src="http://www.desktopwallpaperhd.net/wallpapers/8/7/xiaogoukuanping-animal-tupian-85399.jpg" style={{ height: "100px", width: "100px" }} /></div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                        <a href="https://mp.weixin.qq.com/s?__biz=MjM5MzU5Nzc4NA==&mid=2652136072&idx=1&sn=bb8b34113ce77f5ce6639e1e0e180e51&chksm=bd7452bf8a03dba9265645eea7445cb99a773e64b3427845dabd70f00b97b1419194ab37fd61#rd">推文1</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Articles;
