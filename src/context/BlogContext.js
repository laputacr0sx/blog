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
			return;
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
		callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'del_blogpost', payload: id });
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
);
