import React, { Component } from 'react';
import Search from './Search.js';
import { Route, Link } from 'react-router-dom';
import './Nav.css';

const MenuLink = ({label, to, activeOnlyWhenExact}) => (
    <Route 
        path={to}
        exact={activeOnlyWhenExact}
        children={({match}) => (
            <div>
            <Link to={to} class="nav-link navitemstyle" href="Javascript:void(0);">{label}</Link>
            {match ?
            <div style={{
                background: '#FFF',
                height: 3,
                marginTop: -5,
                width: to === '/' ? 48 : 78,
                marginLeft: 6}}
            ></div> : ''}
            </div>
        )}
    />
        
)

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
            <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top navstyle">
                <a class="navbar-brand col-2 navitemstyle navbrand" href="#">FavBooks</a>
                <div class="col-6"><Search search={this.props.search} searchStr={this.props.searchStr} searchInput={value => this.props.searchInput(value)}/></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ml-1 ml-xl-3">
                            <MenuLink to="/" label="Home" activeOnlyWhenExact={true} />
                        </li>
                        <li class="nav-item ml-1 ml-xl-3">
                            <MenuLink to="/mybooks" label="My Books"/>
                        </li>
                        {this.props.loggedInUser ?
                        <li class="nav-item ml-1 ml-xl-3" style={{position: 'relative'}}>
                            <span class="nav-link navitemstyle" href="Javascript:void(0);" style={{pointerEvents: 'none'}}>{this.props.loggedInUser}</span>
                            <i class="fa fa-caret-down" style={{position: 'absolute', top: 10, right: -5, cursor: 'pointer', color: '#fff'}} onClick={e => this.toggleOptions(e)}></i>
                            {this.props.showOptions ? 
                            <ul className="logoutOptions">
                                <li style={{padding: 5, cursor: 'pointer', userSelect: 'none'}} onClick={e => this.logout(e)}>Logout</li>
                            </ul> : ''}
                        </li> : ''}
                        {!this.props.loggedInUser ?
                        <li class="nav-item ml-1 ml-xl-3">
                            <a class="nav-link navitemstyle" href="Javascript:void(0);" onClick={(e) => this.login(e)}>Login</a>
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