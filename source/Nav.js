import React, { Component } from 'react';

export default class Nav extends Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a class="navbar-brand col-2" href="#">FavBooks</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <form class="form-inline my-2 my-lg-0 col-8">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: '60%'}}/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn-primary" style={{color: 'white'}} href="#">Sign up</a>
                        </li>
                    </ul>     
                </div>
            </nav>
        )
    }
}