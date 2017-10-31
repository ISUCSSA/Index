import React, { Component } from 'react';


class ArticleButton extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.jumpToArticle = this.jumpToArticle.bind(this);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <div
                style={{ width: "100%", fontSize: "26px", cursor: "pointer", color: this.state.hover ? "blue" : "" }}
                onClick={this.jumpToArticle}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}>
                <span>{this.props.value.title}</span>
                <br />
                <span style={{ fontSize: "18px" }}>Author: {this.props.value.author}</span>
                <hr />
            </div>
        );
    }

    jumpToArticle() {
        window.open(this.props.value.address);
    }

    handleHover() {
        this.setState({
            hover: true
        })
    }

    handleLeave() {
        this.setState({
            hover: false
        })
    }
}

export default ArticleButton;
