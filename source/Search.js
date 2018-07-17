import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

    search (e) {
        e.preventDefault();
        this.props.search();
    }

    render () {
        return (
            <div className="Search">
                <form class="form-inline justify-content-center SearchForm">
                    <input class="form-control mr-2 SearchInput" type="search" placeholder="Find your favorite book.." aria-label="Search" value={this.props.searchStr} onChange={e => this.props.searchInput(e.target.value)}/>
                    <button class="btn btn-outline-success" onClick={e => this.search(e)}>
                        <i class="fa fa-search SearchIcon" />
                    </button>
                </form>
            </div>
        )
    }
}