import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import toastr from 'toastr';

const auth = false;

import '../other/css/loginCSS.css';
import routes from '../routes';

const loginRedirect = function(authflag) {
  const node = document.createElement('div');
  node.setAttribute('id', 'app');
  document.body.appendChild(node);
  if (authflag) {
    render(<Router>{routes}</Router>, node);
  }
};


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      data: [],
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  // componentDidMount() {
  // // console.log(localStorage.getItem("Token"));
  //   if (localStorage.getItem("Token") !== null) {
  //     this.auth = true;
  //     loginRedirect(this.auth);
  //   }
  // }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onChangePassword(el) {
    this.setState({ password: el.target.value });
  }

  handleClick() {
    console.log("yo");
    this.auth = true;
    loginRedirect(this.auth);
    if (this.state.username === null || this.state.password === null) {
      return toastr.error("your username or password empty");
    }
  }

  render() {
    return (
      <div>
        <div className="login">
          <h2>Log in</h2>
          <form action="#" method="post">
              <input name="username"
                type="text"
                placeholder="Username/Email"
                value = {this.state.username}
                onChange={this.onChangeUsername}
              />
              <input name="password"
                type="password"
                placeholder="Password"
                value = {this.state.password}
                onChange={this.onChangePassword}
              />
              <div className="remember">
                <input id="remember" name="remember" type="checkbox"/>Remember me
              </div>
              <input type="submit" value="Log in" onClick={this.handleClick}/>
              <div className="reminder">
                <p style= {{ color: "green" }}>Not a member?
                  <a href="#" style= {{ color: "red" }} > Sign up now</a>
                </p>
                <p><a href="#" style= {{ color: "orange" }}>Forgot password?</a></p>
              </div>
          </form>
        </div>
      </div>
    );
  }
}
