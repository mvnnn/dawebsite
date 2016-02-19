import React, { Component } from 'react';
import Header from './components/commonPage/header';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<RouteHandler/>
			</div>
		);
	}
};
