var React = require('react');

import {Link} from 'react-router'; //es2015
var About = React.createClass({
	render : function(){
		return (
			<div >
				<Link to={'/'}>Home</Link>
				<h2>All About Praveen</h2>
			</div>
		);
	}
});

module.exports = About;