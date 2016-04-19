import React from 'react';
import PostCollection from '../collections/PostCollection.js';
import PreviewComponent from './Preview.js';

export default React.createClass({
	getInitialState: function() {
		let posts = new PostCollection();
		return {
			posts: posts
		}
	},
	componentDidMount: function() {
		this.state.posts.on('update', () => {
			this.setState({
				posts: this.state.posts
			});
		});
		this.state.posts.fetch();
	},
	render: function() {
		let postElements = this.state.posts.map((post, index, array) => {
			return (
				<PreviewComponent
					title = {post.get('title')}
					author = {post.get('author')}
					postDate = {post.get('createdAt')}
					body = {post.get('body'.substring(0,200))}
				/>
			);
		}); 
		return (
			<div>
				<h1>This Here Bloggedy Blog</h1>
				<p>(A Seth Godin Ripoff)</p>
				{postElements}
			</div>
		);
	},
});