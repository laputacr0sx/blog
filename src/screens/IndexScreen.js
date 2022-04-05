import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
	TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';

import { Context, Provider } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost } = useContext(Context);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => {
					return blogPost.id;
				}}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Show', {
									id: item.id,
								});
							}}>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity
									onPress={() => {
										deleteBlogPost(item.id);
									}}>
									<Feather name='trash-2' style={styles.icon} />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Create');
				}}>
				<Feather name='plus-square' style={styles.icon} />
			</TouchableOpacity>
		),
	};
};

export default IndexScreen;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 18,
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderColor: 'gray',
	},
	title: {
		fontWeight: '300',
		fontSize: 18,
	},
	icon: {
		fontSize: 20,
		color: 'black',
	},
});
