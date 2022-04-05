// import libraries
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import screen components
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

// import Context
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
		Create: CreateScreen,
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			title: 'Blogs',
		},
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};
