import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Read from './Read.js';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/read">Read</Link></li>
        </ul>
          <Route exact path="/" render={props => <Main {...props} books={this.props.books} />} />
          <Route path="/read" component={Read} />
      </div>
    )
  }
}

export default App;
