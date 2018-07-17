import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render () {
        return (
            <div className="Search">
                <form class="form-inline justify-content-center SearchForm">
                    <input class="form-control mr-2 SearchInput" type="search" placeholder="Find your favorite book.." aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">
                        <i class="fa fa-search SearchIcon" />
                    </button>
                </form>
            </div>
        )
    }
}