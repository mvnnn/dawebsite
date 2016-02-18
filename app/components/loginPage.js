import React, { Component } from 'react';
import '../other/css/loginCSS.css';
export default class Login extends Component {
  render() {
    // let x = {random:1, njj: { k :7}};
    // let y, {njj} = x;
    return (
      <div className="login">
        <h2>Log in</h2>
      <form action="#" method="post">
          <input name="username" placeholder="Username/Email" type="text"/>
          <input name="password" placeholder="Password" type="password"/>
          <div className="remember">
            <input id="remember" name="remember" type="checkbox"/>Remember me
          </div>
          <input type="submit" value="Log in"/>
          <a className="forgot" href="#">Forgot your password??</a>
      </form>
      </div>
    );
  }
}
