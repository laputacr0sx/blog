import React, { useState, useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [...state, { title: `Blog Post #${state.length + 1}` }];
		case 'edit_blogpost':
			return;
		case 'del_blogpost':
			return;
	}
};

export const BlogProvider = ({ children }) => {
	const [blogPosts, dispatch] = useReducer(blogReducer, []);

	const addBlogPost = () => {
		dispatch({ type: 'add_blogpost' });
	};

	return (
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
			{children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
