import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import AddCard from './AddCard.js';
import Nav from './Nav.js';
import Login from './Login.js';
import Search from './Search.js';
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

    this.state = { books: books, newTitle: '', showLogin: false, showSignup: false };

    this.addBook = this.addBook.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  changeVotes (book, incr) {
    if (incr) {
      service.upvote(book._id)
        .then(() => {
          let books = this.state.books.map(item => {
            if (item._id === book._id) {
              return Object.assign({}, book, {votes: book.votes + 1});
            } else {
              return item;
            }
          });
      
          this.setState({books});
        })
    } else {
      service.downvote(book._id)
        .then(() => {
          let books = this.state.books.map(item => {
            if (item._id === book._id) {
              return Object.assign({}, book, {votes: book.votes - 1 < 0 ? 0 : book.votes - 1});
            } else {
              return item;
            }
          });
      
          this.setState({books});
        })
    }
    
  }

  addBook () {
    if (this.state.newTitle !== ''){
      var newBook = { title: this.state.newTitle };
      service.addBook(newBook)
        .then(response => response.json())
        .then(book => {
          let books = this.state.books.slice();
          books.push(book);
          this.setState({books, newTitle: ''});
        })
        .catch(err => console.log(err));
    }
  }

  textChange (value) {
    this.setState({newTitle: value});
  }

  showLogin () {
    this.setState({showLogin: !this.state.showLogin, showSignup: false});
  }

  showSignup () {
    this.setState({showSignup: !this.state.showSignup, showLogin: false});
  }

  togglePanel () {
    this.setState({showLogin: !this.state.showLogin, showSignup: !this.state.showSignup});
  }

  render() {
      return (
        <div className="App">
          <Nav login={this.showLogin} signup={this.showSignup}/>
          {this.state.showLogin || this.state.showSignup ? <Login signup={this.state.showSignup} togglePanel={this.togglePanel}/> : ''}
          <Search />
          <div style={{marginTop: 60}}>
          {this.state.books.map(book => <Card {...book} 
                                              upvote={() => this.changeVotes(book, true)}
                                              downvote={() => this.changeVotes(book, false)}/>)}
          </div>
          <span className="AddButton" data-toggle="modal" data-target="#addCard">+</span>
            
          <AddCard title={this.state.newTitle} addBook={this.addBook} textChange={(value) => this.textChange(value)}/>
        </div>
      );
    
  }
}

export default App;
