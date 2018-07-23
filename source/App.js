import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Login from './Login.js';
import Search from './Search.js';
import { service } from './service.js';

import { Route } from 'react-router-dom';
import Home from './Home';
import MyBooks from './MyBooks';

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

    this.state = { 
      books: books, 
      newTitle: '', 
      showLogin: false, 
      showSignup: false, 
      searchStr: '', 
      newAuthor: '',
      email: '',
      password: '',
      confirmPassword: '',
      loggedInUser: null,
      showOptions: false
    };

    this.addBook = this.addBook.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.search = this.search.bind(this);
    this.seachInput = this.searchInput.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.authorTextChange = this.authorTextChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.doSignup = this.doSignup.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  getFavorites (loggedInUser) {
    if (loggedInUser === null) {
      return;
    }

    service.getFavorites(loggedInUser)
      .then(res => res.json())
      .then(data => {
        if (data && data.favorites && data.favorites.length > 0) {
          let favoriteBooks = data.favorites;
          let books = this.state.books
            .map(book => (favoriteBooks.indexOf(book._id) >= 0) ? Object.assign({}, book, { isFavorite: true }) : book);
          this.setState({books});
        }
      })  
      .catch(err => console.log(err));
  }

  componentDidMount () {
    service.validateLogin()
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else if (res.status === 401) {
          this.setState({loggedInUser: null});
          throw new Error('Unauthorized');
        } else {
          throw new Error('Server error');
        }
      })
      .then(({message, email}) => {
        if (message !== 'ok') {
          this.setState({loggedInUser: null});
        } else {
          let loggedInUser = email;
          this.setState({loggedInUser}, () => {
            this.getFavorites(loggedInUser);
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  changeVotes (book, incr) {
    if (incr) {
      service.upvote(book._id)
        .then(res => {
          if (res.status === 200){
            let books = this.state.books.map(item => {
              if (item._id === book._id) {
                return Object.assign({}, book, {votes: book.votes + 1});
              } else {
                return item;
              }
            });
        
            this.setState({books});
          } else {
            this.setState({showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null});
          }
        })
    } else {
      service.downvote(book._id)
        .then(res => {
          if (res.status === 200) {
            let books = this.state.books.map(item => {
              if (item._id === book._id) {
                return Object.assign({}, book, {votes: book.votes - 1 < 0 ? 0 : book.votes - 1});
              } else {
                return item;
              }
            });
        
            this.setState({books});
          } else {
            this.setState({showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null});
          } 
        })
    }
  }

  addBook () {
    if (this.state.newTitle !== '' && this.state.newAuthor !== ''){
      var newBook = { title: this.state.newTitle, author: this.state.newAuthor };
      service.addBook(newBook)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            this.setState({showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null});
            throw new Error('Unauthorized');
          }
        })
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
    this.setState({showLogin: !this.state.showLogin, showSignup: false, email: '', password: '', confirmPassword: ''});
  }

  showSignup () {
    this.setState({showSignup: !this.state.showSignup, showLogin: false, email: '', password: '', confirmPassword: ''});
  }

  togglePanel () {
    this.setState({showLogin: !this.state.showLogin, showSignup: !this.state.showSignup, email: '', password: '', confirmPassword: ''});
  }

  search () {
    service.search(this.state.searchStr)
      .then(data => data.json())
      .then(books => this.setState({books}, () => this.getFavorites(this.state.loggedInUser)))
      .catch(err => console.log(err));
  }

  searchInput (value) {
    this.setState({searchStr: value});
  }

  hideLogin (e) {
    this.setState({showLogin: false, showSignup: false, showOptions: false});
  }

  authorTextChange (newAuthor) {
    this.setState({newAuthor})
  }

  doLogin () {
    if (this.state.email === '') {
      alert('Please enter email');
    } else if (this.state.password === '') {
      alert('Please enter password');
    } else {
      service.login({email: this.state.email, password: this.state.password})
        .then(data => data.json())
        .then(res => {
          if (res.message === 'ok') {
            let loggedInUser = res.email;
            this.setState({showLogin: false, loggedInUser}, () => {
              this.getFavorites(loggedInUser);
            });
          } else {
            alert('Error: '+ res.message);
          }
        })
        .catch(err => console.log(err));
    }
  }

  doSignup () {
    if (this.state.email === '') {
      alert('Please enter email');
    } else if (this.state.password === '') {
      alert('Please enter password');
    } else if (this.state.password !== this.state.confirmPassword) {
      alert('Passwords don\'t match');
    } else {
      service.signup({email: this.state.email, password: this.state.password})
        .then(data => data.json())
        .then(res => {
          if (res.message === 'ok') {
            let loggedInUser = res.email;
            this.setState({showSignup: false, loggedInUser});
          } else {
            alert('Error: '+ res.message);
          }
        })
        .catch(err => console.log(err));
    }
  }

  changeEmail (email) {
    this.setState({email});
  }

  changePassword (password) {
    this.setState({password});
  }

  changeConfirmPassword (confirmPassword) {
    this.setState({confirmPassword});
  }

  logout () {
    service.logout(this.state.loggedInUser)
      .then(res => res.json())
      .then(({message}) => {
        if (message === 'ok') {
          let books = this.state.books.map(book => Object.assign({}, book, { isFavorite: false }));
          this.setState({loggedInUser: null, books});
        }
      })
  }

  toggleOptions () {
    this.setState({showOptions: !this.state.showOptions});
  }

  favorite (book) {
    let addOrRemove = book.isFavorite ? 'r' : 'a';
    service.addFavorite(this.state.loggedInUser, book._id, addOrRemove)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          this.setState({showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null});
          throw new Error('Unauthorized');
        } else {
          throw new Error('Server error');
        }
      })
      .then(({message}) => {
        if (message === 'ok') {
          let books = this.state.books.map(b => b._id === book._id ? Object.assign({}, b, {isFavorite: !b.isFavorite}) : b);
          this.setState({books});
        }
      })
      .catch(err => console.log(err));
  }
 
  render() {
      return (
        <div className="App" onClick={this.hideLogin}>
          <Nav login={this.showLogin} signup={this.showSignup} search={this.search} searchStr={this.state.searchStr} searchInput={value => this.searchInput(value)} loggedInUser={this.state.loggedInUser} logout={this.logout} showOptions={this.state.showOptions} toggleOptions={this.toggleOptions}/>
          {this.state.showLogin || this.state.showSignup ? <Login signup={this.state.showSignup} togglePanel={this.togglePanel} doLogin={this.doLogin} doSignup={this.doSignup}
            email={this.state.email} changeEmail={this.changeEmail}
            password={this.state.password} changePassword={this.changePassword}
            confirmPassword={this.state.confirmPassword} changeConfirmPassword={this.changeConfirmPassword}/> : ''}
          <Route exact path="/" 
            render = {props => <Home {...props} 
              books={this.state.books}
              changeVotes={(book, isUpvote) => this.changeVotes(book, isUpvote)}
              favorite={book => this.favorite(book)}
              newTitle={this.state.newTitle}
              addBook={this.addBook}
              textChange={value => this.textChange(value)}
              newAuthor={this.state.newAuthor}
              authorTextChange={value => this.authorTextChange(value)}/>}
            />
          <Route path="/mybooks" component={MyBooks} />
        </div>
      );
    
  }
}

export default App;
