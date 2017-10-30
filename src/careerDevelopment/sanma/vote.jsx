import React, { Component } from 'react';
import getColor, {WEATHERS} from '../chaetodon/import';
import propTypes from 'prop-types';

class SanmaVote extends Component {

    constructor(props){
        super(props);
        this.renderBadge = this.renderBadge.bind(this);
        this.renderVotes = this.renderVotes.bind(this);
    }

    render() {
        const colors = getColor(WEATHERS.RANDOM);
        return (
            <div style={{fontFamily: this.props.font}}>
                <div style={{height: this.props.height + "px", width: "100%"}}>
                    <div style={{width: "15%", height: "100%", float: "left"}}>
                        {colors.map(this.renderBadge)}
                    </div>
                    <div style={{width: "auto", height: "100%", float: "left", fontSize: this.props.height - 8 + "px", fontWeight: "bold", paddingLeft: "10px"}}>
                        {this.props.children}
                    </div>
                </div>
                {this.props.votes.description}
                {this.props.votes.votes.map(this.renderVotes)}
            </div>
        );
    }

    renderBadge(value, index){
        return <div key={index} style={{width: "20%", backgroundColor: "#"+value, float: "left", height: "100%"}}></div>;
    }

    renderVotes(value, index){
        const renderOptions = (value, index)=>{
            return (
            <div key={index}>
                {value.id}
                {value.name}
            </div>)
        }
        return (<div key={index}>
            {value.description}
            {value.options.map(renderOptions)}
        </div>);
    }
}

SanmaVote.propTypes = {
    height: propTypes.number,
    votes: propTypes.shape({
        description: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
        votes: propTypes.arrayOf(propTypes.shape({
            description: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
            options: propTypes.arrayOf(propTypes.shape({
                id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
                name: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired
                })).isRequired
        })).isRequired
    }).isRequired,
    font: propTypes.string
}

SanmaVote.defaultProps = {
    height: 30,
    font: ""
};

export default SanmaVote;
