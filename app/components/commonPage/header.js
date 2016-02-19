import React, { Component } from 'react';
import Router from 'react-router';
const Link = Router.Link;

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar nav-pills navbar-inverse">
				<div className="container-fluid">
						<Link to="home" className="navbar-brand">
						<img src="../../other/image/DAIICT.png" height="50%" width="100%" style={{ bgcolor: '#111122' }}/>
						</Link>
				<ul className="nav navbar-nav">
				<li><Link to="exam">Exam</Link></li>
				<li><Link to="quize">Quize</Link></li>
				<li><Link to="attendance">Attendance</Link></li>
				<li><Link to="sendMail">SendMail</Link></li>
				<li><Link to="logout" style={{ marginLeft: '900%', color: 'red' }}>Logout</Link></li>
				</ul>
				</div>
			</nav>
		);
	}
}
