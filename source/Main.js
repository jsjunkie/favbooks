import React, { Component } from 'react';
import Card from './Card.js';
import './Main.css';

class Main extends Component {
    constructor (props) {
        super(props);
        let books;
        if (props.books) {
          books = props.books;
        } else {
          books = window._initialData;
          delete window._initialData;
        }
    
        //this.state = { books: books };
        this.state = { books: [{_id: 1, title: "a", votes: 2}]};
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
    
      render() {
          return (
            <div className="Main">
              <h1>My favorite books</h1>
              {this.state.books.map(book => <Card {...book} 
                                                  upvote={() => this.changeVotes(book, true)}
                                                  downvote={() => this.changeVotes(book, false)}/>)}
            </div>
          );
        
      }
}

export default Main;