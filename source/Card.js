import React, { Component } from 'react';
import './card.css';

class Card extends Component {
	render () {
		return (
			<div class="card" style={{width: '18rem'}}>
				<div class="card-body">
					<div style={{height: 135}}>
						<h5 class="card-title">{this.props.title}</h5>
						<p class="card-text">By: {this.props.author}</p>
					</div>
					<div className="card-votes">{this.props.votes}</div>
					<button class="btn btn-primary card-button" onClick={() => this.props.upvote()}>Upvote</button>
					<i class="fa fa-heart favorite" style={{color: this.props.isFavorite ? 'red' : 'gray'}} onClick={() => this.props.favorite()}></i>
					<button class="btn btn-primary card-button" onClick={() => this.props.downvote()}>Downvote</button>
				</div>
			</div>);
	}
}

export default Card;