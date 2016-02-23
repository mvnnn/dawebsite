import React, { Component } from 'react';
import Header from './commonPage/header';
import Router, { RouteHandler } from 'react-router';

export default class App extends Component {
  render() {
    return (
    <div>
    <Header/>
    <RouteHandler/>
    </div>
    );
  }
}
