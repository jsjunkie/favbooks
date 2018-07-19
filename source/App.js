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

    this.state = { books: books, newTitle: '', showLogin: false, showSignup: false, searchStr: '', newAuthor: '' };

    this.addBook = this.addBook.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.search = this.search.bind(this);
    this.seachInput = this.searchInput.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.authorTextChange = this.authorTextChange.bind(this);
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
    if (this.state.newTitle !== '' && this.state.newAuthor !== ''){
      var newBook = { title: this.state.newTitle, author: this.state.newAuthor };
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

  search () {
    console.log('searched', this.state.searchStr);
    service.search(this.state.searchStr)
      .then(data => {
        console.log(data);
        return data.json()
      })
      .then(books => this.setState({books}))
      .catch(err => console.log(err));
  }

  searchInput (value) {
    this.setState({searchStr: value});
  }

  hideLogin (e) {
    this.setState({showLogin: false, showSignup: false});
  }

  authorTextChange (newAuthor) {
    this.setState({newAuthor})
  }

  render() {
      return (
        <div className="App" onClick={this.hideLogin}>
          <Nav login={this.showLogin} signup={this.showSignup} search={this.search} searchStr={this.state.searchStr} searchInput={value => this.searchInput(value)}/>
          {this.state.showLogin || this.state.showSignup ? <Login signup={this.state.showSignup} togglePanel={this.togglePanel}/> : ''}
          <div style={{marginTop: 100}}>
          {this.state.books.map(book => <Card {...book} 
                                              upvote={() => this.changeVotes(book, true)}
                                              downvote={() => this.changeVotes(book, false)}/>)}
          </div>
          <span className="AddButton" data-toggle="modal" data-target="#addCard">+</span>
            
          <AddCard title={this.state.newTitle} addBook={this.addBook} textChange={(value) => this.textChange(value)} author={this.state.newAuthor} authorTextChange={value => this.authorTextChange(value)}/>
        </div>
      );
    
  }
}

export default App;
