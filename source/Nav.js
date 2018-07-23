import React, { Component } from 'react';
import Search from './Search.js';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    login (e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.login();
    }

    signup (e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.signup();
    }

    logout (e) {
        e.preventDefault();
        this.setState({showOptions: false});
        this.props.logout();
    }

    toggleOptions (e) {
        e.stopPropagation();
        this.props.toggleOptions();
    }

    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a class="navbar-brand col-2" href="#">FavBooks</a>
                <div class="col-6"><Search search={this.props.search} searchStr={this.props.searchStr} searchInput={value => this.props.searchInput(value)}/></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ml-1 ml-xl-3 active">
                            <Link to="/" class="nav-link" href="Javascript:void(0);">Home</Link>
                        </li>
                        <li class="nav-item ml-1 ml-xl-3">
                            <Link to="/mybooks" class="nav-link" href="Javascript:void(0);">My Books</Link>
                        </li>
                        {this.props.loggedInUser ?
                        <li class="nav-item ml-1 ml-xl-3" style={{position: 'relative'}}>
                            <span class="nav-link" href="Javascript:void(0);" style={{pointerEvents: 'none'}}>{this.props.loggedInUser}</span>
                            <i class="fa fa-caret-down" style={{position: 'absolute', top: 10, right: -5, cursor: 'pointer'}} onClick={e => this.toggleOptions(e)}></i>
                            {this.props.showOptions ? 
                            <ul style={{position: 'absolute', top: 30, right: -5, width: 100, background: '#dedede', listStyle: 'none'}}>
                                <li style={{padding: 5, cursor: 'pointer'}} onClick={e => this.logout(e)}>Logout</li>
                            </ul> : ''}
                        </li> : ''}
                        {!this.props.loggedInUser ?
                        <li class="nav-item ml-1 ml-xl-3">
                            <a class="nav-link" href="Javascript:void(0);" onClick={(e) => this.login(e)}>Login</a>
                        </li> : ''}
                        {!this.props.loggedInUser ?
                        <li class="nav-item ml-1 ml-xl-3">
                            <a class="nav-link btn-primary" style={{color: 'white'}} href="Javascript:void(0);" onClick = {(e) => this.signup(e)}>Sign up</a>
                        </li> : ''}
                    </ul>     
                </div>
            </nav>
        )
    }
}