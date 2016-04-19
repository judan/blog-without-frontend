import React from 'react';
import PostModel from '../models/PostModel.js';

export default React.createClass({
	render: function() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<div>By: {this.props.author.firstName} {this.props.author.lastName}</div>
				<div>{this.props.postDate.substring(0,10)}</div>
				<div>{this.props.body.substring(0,200)}</div>
			</div>
		)
	}
}); 