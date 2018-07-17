import React, { Component } from 'react';
import Search from './Search.js';

export default class Nav extends Component {
    login (e) {
        e.preventDefault();
        this.props.login();
    }

    signup (e) {
        e.preventDefault();
        this.props.signup();
    }

    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a class="navbar-brand col-2" href="#">FavBooks</a>
                <div class="col-6"><Search/></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ml-1 ml-xl-3 active">
                            <a class="nav-link" href="Javascript:void(0);" >Home</a>
                        </li>
                        <li class="nav-item ml-1 ml-xl-3">
                            <a class="nav-link" href="Javascript:void(0);"  >My Books</a>
                        </li>
                        <li class="nav-item ml-1 ml-xl-3">
                            <a class="nav-link" href="Javascript:void(0);" onClick={(e) => this.login(e)}>Login</a>
                        </li>
                        <li class="nav-item ml-1 ml-xl-3">
                            <a class="nav-link btn-primary" style={{color: 'white'}} href="Javascript:void(0);" onClick = {(e) => this.signup(e)}>Sign up</a>
                        </li>
                    </ul>     
                </div>
            </nav>
        )
    }
}