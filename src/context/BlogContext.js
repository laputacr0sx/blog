import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 999999),
					title: `Blog Post #${state.length + 1}`,
				},
			];
		case 'edit_blogpost':
			return;
		case 'del_blogpost':
			return;
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: 'add_blogpost' });
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost },
	[]
);
