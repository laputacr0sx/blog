import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
	const { data, addBlogPost } = useContext(BlogContext);

	return (
		<View style={{ flex: 1 }}>
			<Text>IndexScreen Showed</Text>
			<Button
				title='Add Post'
				onPress={() => {
					addBlogPost();
				}}></Button>
			<FlatList
				data={data}
				keyExtractor={(blogPost) => {
					return blogPost.title;
				}}
				renderItem={({ item }) => {
					return <Text style={styles.textStyle}>{item.title}</Text>;
				}}
			/>
		</View>
	);
};

export default IndexScreen;

const styles = StyleSheet.create({
	textStyle: {
		fontWeight: '300',
		fontSize: 18,
	},
});
