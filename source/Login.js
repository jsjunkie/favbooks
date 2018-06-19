import React, { Component } from 'react';

export default class Login extends Component {
    render () {
        return (
            <form style={{position: 'fixed', zIndex: 100, top: 58, right: 105, padding: 10, background: 'white', boxShadow: '0 0 15px 1px rgba(0,0,0,.4)', minWidth: 280}}>
                <div style={{padding: 10}}>{this.props.signup ? 'Sign up for FavBooks' : 'Login to FavBooks'}</div>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    {this.props.signup ? 
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> : ''}
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                </div>
                {this.props.signup ?
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                </div> : 
                ''}
                <button type="submit" class="btn btn-primary">{this.props.signup ? 'Sign Up' : 'Login'}</button>
                <div style={{marginTop: 15, fontSize: 14}}>
                    <a href="Javascript:void(0);" onClick={() => this.props.togglePanel()}>{this.props.signup ? 'Login' : 'Sign up'}</a>
                </div>
            </form>
        )
    }
}