import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render () {
        return (
            <div className="Search">
                <form class="form-inline justify-content-center">
                    <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" style={{width: '50%'}}/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        )
    }
}