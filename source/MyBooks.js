import React, { Component } from 'react';
import './MyBooks.css';

export default class MyBooks extends Component {
    render () {
        return (<div>
            <div style={{marginTop: 100}}>
                <h2 className="heading">My Favorite Books</h2>
                {this.props.books.length === 0 ? <span>No favorite books</span> : 
                <ul class="list-group" style={{margin: 20}}>
                    {this.props.books.map(({title, votes, author}) => (
                        <li class="list-group-item d-flex justify-content-between align-items-center listItemStyle">
                            <div style={{textAlign: 'left'}}>
                                <h3>{title}</h3>
                                <span>By: {author}</span>
                            </div>
                            <div>
                                <span class="badge badge-primary badge-pill">{votes}</span>
                                <br/>
                                <small>votes</small>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>)
    }
}