import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import AddCard from './AddCard.js';
import { service } from './service.js';

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

    this.state = { books: books, addcard: false, newTitle: '' };
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
    this.setState({addcard: true});
  }

  addBook () {
    if (this.state.newTitle !== ''){
      var newBook = { title: this.state.newTitle };
      service.addBook(newBook)
        .then(response => response.json())
        .then(book => {
          let books = this.state.books.slice();
          books.push(book);
          this.setState({books, addcard: false, newTitle: ''});
        })
        .catch(err => console.log(err));
    }
  }

  textChange (value) {
    this.setState({newTitle: value});
  }

  render() {
      return (
        <div className="App">
          <div class="jumbotron jumbotron-fluid AppHeader">
            <div class="container">
              <h1 class="display-4 AppTitle">FavBooks</h1>
              <p class="lead">List And Vote On Your Favorite Books</p>
            </div>
          </div>
          {this.state.books.map(book => <Card {...book} 
                                              upvote={() => this.changeVotes(book, true)}
                                              downvote={() => this.changeVotes(book, false)}/>)}
          <span className="AddButton" onClick={() => this.showAddCard()}>+</span>
          {this.state.addcard ? 
            <div className="ShowAddCard">
              <div style={{position: 'relative'}}>
                <AddCard closeAddCard={() => this.setState({addcard: false})} title={this.state.newTitle} addBook={() => this.addBook()} textChange={(value) => this.textChange(value)}/>
              </div>
            </div> : ''}
        </div>
      );
    
  }
}

export default App;
