import React, { Component } from 'react';
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
        let a = new ajax("http://localhost:8081/api/career/articles");
        a.get().then((e) => {
            this.setState({
                articles: JSON.parse(e)
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.articles.map(this.renderArticles)}
            </div>
        );
    }

    renderArticles(value, index) {
        return (
            <div
                onClick={this.jumpToArticle.bind(this, value.address)} key={index}>
                <span>{value.title}</span>
            </div>
        )
    }

    jumpToArticle(q) {
        window.open(q);
    }
}

export default Articles;
