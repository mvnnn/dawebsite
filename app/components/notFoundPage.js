"use strict";

import React from 'react';
import React from 'react-router';

var NotFoundPage = React.createClass({
	render() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Whoops! Sorry, there is nothing to see here.</p>
				<p><Link to="home">Back to Home</Link></p>
			</div>
		);
	}
});

exports NotFoundPage;
