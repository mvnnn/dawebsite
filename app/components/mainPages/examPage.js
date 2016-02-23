import React, { Component } from 'react';
import { Link } from 'react-router';

export default class exam extends Component {
  render() {
    return (
      <div>
      <h1>Page Not Found</h1>
      <p>Whoops! Sorry, there is nothing to see here.</p>
      <p><Link to="home">Back to Home</Link></p>
      </div>
    );
  }
}
