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

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context);

	return (
		<View style={{ flex: 1 }}>
			<Button
				title='Add Post'
				onPress={() => {
					addBlogPost();
				}}
				color={'rgb(250, 163, 7)'}></Button>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => {
					return blogPost.id;
				}}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>
								{item.title} - {item.id}
							</Text>
							<TouchableOpacity
								onPress={() => {
									console.log(item.id);
								}}>
								<Feather name='trash-2' style={styles.icon} />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default IndexScreen;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 18,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray',
	},
	title: {
		fontWeight: '300',
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
		color: 'black',
	},
});
