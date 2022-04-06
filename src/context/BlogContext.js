import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 999999),
					title: action.payload.title,
					content: action.payload.content,
				},
			];
		case 'edit_blogpost':
			return state.map((blogPost) => {
				return blogPost.id === action.payload.id ? action.payload : blogPost;
			});
		case 'del_blogpost':
			return state.filter((post) => {
				return post.id !== action.payload;
			});
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return (title, content, callback) => {
		dispatch({
			type: 'add_blogpost',
			payload: { title: title, content: content },
		});
		if (callback) {
			callback();
		}
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'del_blogpost', payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return (id, title, content, callback) => {
		dispatch({
			type: 'edit_blogpost',
			payload: { id, title, content },
		});
		if (callback) {
			callback();
		}
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost },
	[{ title: 'TEST POST', content: 'TEST POST', id: 9394 }]
);
