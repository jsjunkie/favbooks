import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import AddCard from './AddCard.js';

class App extends Component {
  constructor (props) {
    super(props);
    let books;
    if (props.books) {
      books = props.books;
    } else {
      books = window._initialData;
      delete window._initialData;
    }

    this.state = { books: books, addcard: false };
    
  }

  changeVotes (book, incr) {
    let books = this.state.books.map(item => {
      if (item._id === book._id) {
        return Object.assign({}, book, {votes: incr ? book.votes + 1 : book.votes - 1 < 0 ? 0 : book.votes - 1});
      } else {
        return item;
      }
    });

    this.setState({books});
  }

  showAddCard () {
    debugger;
    this.setState({addcard: true});
  }

  render() {
      return (
        <div className="App">
          <div className="AppHeader">
            <h1 className="AppTitle">My Favorite Books</h1>
          </div>
          {this.state.books.map(book => <Card {...book} 
                                              upvote={() => this.changeVotes(book, true)}
                                              downvote={() => this.changeVotes(book, false)}/>)}
          <span className="AddButton" onClick={() => this.showAddCard()}>+</span>
          {this.state.addcard ? <div className="ShowAddCard"><div style={{position: 'relative'}}><AddCard closeAddCard={() => this.setState({addcard: false})}/></div></div> : ''}
        </div>
      );
    
  }
}

export default App;
