import React, { Component } from 'react';
import config from '../config';
import { ajax } from 'caperjs';

class Articles extends Component {

    constructor(props) {
        super(props);
        this.renderArticles = this.renderArticles.bind(this);
        this.jumpToArticle = this.jumpToArticle.bind(this);
        this.state = {
            articles: []
        }
    }

    componentWillMount() {
        let a = new ajax(config.host + "api/career/articles");
        a.get().then((e) => {
            this.setState({
                articles: JSON.parse(e)
            })
        })
    }

    render() {
        return (
            <div style={{ paddingTop: "15px" }}>
                <div style={{ fontSize: "30px" }}>我们的文章牛逼的一批</div>
                <hr />
                {this.state.articles.map(this.renderArticles)}
            </div>
        );
    }

    renderArticles(value, index) {
        return (
            <div
                style={{ width: "100%", fontSize: "26px", cursor: "pointer" }}
                onClick={this.jumpToArticle.bind(this, value.address)}
                key={index}>
                <span>{value.title}</span>
                <br />
                <span style={{ fontSize: "18px" }}>Author: {value.author}</span>
                <hr />
            </div>
        )
    }

    jumpToArticle(q) {
        window.open(q);
    }
}

export default Articles;
