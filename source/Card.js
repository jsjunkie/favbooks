import React, { Component } from 'react';
import './card.css';

class Card extends Component {
	render () {
		return (
			<div className="card">
				<div className = "card-title">
					{this.props.title}
				</div>
				<div className="card-votes">{this.props.votes}</div>
				<button className="card-button button-left" onClick={() => this.props.upvote()}>Upvote</button>
				<button className="card-button button-right" onClick={() => this.props.downvote()}>Downvote</button>
			</div>);
	}
}

export default Card;