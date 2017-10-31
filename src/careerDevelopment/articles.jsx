import React, { Component } from 'react';
import config from '../config';
import ArticleButton from './articleButton';
import { ajax } from 'caperjs';

class Articles extends Component {

    constructor(props) {
        super(props);
        this.renderArticles = this.renderArticles.bind(this);
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
            <ArticleButton value={value} key={index} />
        )
    }
}

export default Articles;
