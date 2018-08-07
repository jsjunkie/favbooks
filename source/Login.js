import React, { Component } from 'react';

export default class Login extends Component {
    login (e) {
        e.preventDefault();
        if (this.props.signup) {
            this.props.doSignup();
        } else {
            this.props.doLogin();
        }
    }

    render () {
        return (
            <form onClick={e => e.stopPropagation()} style={{position: 'fixed', zIndex: 100, top: 63, right: 105, padding: 10, background: 'white', boxShadow: '0 0 15px 1px rgba(0,0,0,.4)', minWidth: 280}}>
                <div style={{padding: 10}}>{this.props.signup ? 'Sign up for FavBooks' : 'Login to FavBooks'}</div>
                <div class="form-group">
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={this.props.email} onChange={e => this.props.changeEmail(e.target.value)}/>
                    {this.props.signup ? 
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> : ''}
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Password" value={this.props.password} onChange={e => this.props.changePassword(e.target.value)}/>
                </div>
                {this.props.signup ?
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Confirm Password" value = {this.props.confirmPassword} onChange={e => this.props.changeConfirmPassword(e.target.value)}/>
                </div> : 
                ''}
                <button type="submit" class="btn btn-primary" onClick={e => this.login(e)}>{this.props.signup ? 'Sign Up' : 'Login'}</button>
                <div style={{marginTop: 15, fontSize: 14}}>
                    <a href="Javascript:void(0);" onClick={() => this.props.togglePanel()}>{this.props.signup ? 'Login' : 'Sign up'}</a>
                </div>
            </form>
        )
    }
}