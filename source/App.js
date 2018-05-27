import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  constructor () {
    super();

    this.state = {
      books: [
        { key: 1, title: "Harry Potter", votes: 10 },
        { key: 2, title: "The Art of War", votes: 11 },
        { key: 3, title: "Think and Grow Rich", votes: 12 },
        { key: 4, title: "The Guide to Travelling", votes: 14 }
      ]
    }
  }

  changeVotes (book, incr) {
    let books = this.state.books.map(item => {
      if (item.key === book.key) {
        return Object.assign({}, book, {votes: incr ? book.votes + 1 : book.votes - 1});
      } else {
        return item;
      }
    });

    this.setState({books});
  }

  render() {
    return (
      <div className="App">
        <h1>My favorite books</h1>
        {this.state.books.map(book => <Card {...book} 
                                            upvote={() => this.changeVotes(book, true)}
                                            downvote={() => this.changeVotes(book, false)}/>)}
      </div>
    );
  }
}

export default App;
