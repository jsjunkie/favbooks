import React, { Component } from 'react';
import Card from './Card.js';
import AddCard from './AddCard.js';

export default class Home extends Component {
    render () {
        return (
        <div>
            <div style={{marginTop: 100}}>
            <h2 className="heading">Most Upvoted books</h2>
            {this.props.books.map(book => <Card {...book} 
                                              upvote={() => this.props.changeVotes(book, true)}
                                              downvote={() => this.props.changeVotes(book, false)}
                                              favorite={() => this.props.favorite(book)}/>)}
            </div>
            <span className="AddButton" data-toggle="modal" data-target="#addCard">+</span>
            
            <AddCard title={this.props.newTitle} addBook={this.props.addBook} textChange={(value) => this.props.textChange(value)} author={this.props.newAuthor} authorTextChange={value => this.props.authorTextChange(value)}/>
        </div>)
    }
}