import React, { Component } from 'react';
import { render } from 'react-dom';
// import component from './components';
import Router from 'react-router';
import toastr from 'toastr';
import './loginCSS.css';
import routes from './routes';
import Header from './components/commonPage/header';
const node = document.createElement('div');
node.setAttribute('id', 'node');
document.body.appendChild(node);

let auth = false;
const loginRedirect = function(authflag) {
  // location.reload();
  console.log(authflag);
  if (authflag) {
    // render(<Header/>, node);
    render(<Router>{routes}</Router>, node);
  }
};

class Login extends Component {
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


  componentDidMount() {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      this.auth = true;
      localStorage.removeItem("token");
      loginRedirect(this.auth);
    }
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onChangePassword(el) {
    this.setState({ password: el.target.value });
  }

  handleClick() {
    console.log("yo");
    this.auth = true;
    localStorage.setItem('token', 'aa');
    loginRedirect(this.auth);
    // if (this.state.username === null || this.state.password === null) {
    //   return toastr.error("your username or password empty");
    // }
  }

  render() {
    return (
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
    );
  }
}

render(<Login/>, node);
