import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';

import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogPost = state.find(
		(blogPost) => blogPost.id === navigation.getParam('id')
	);

	return (
		<View style={styles.containerStyle}>
			<Text style={styles.titleStyle}>{blogPost.title}</Text>
			<Text style={styles.contentStyle}>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Edit', { id: navigation.getParam('id') });
				}}>
				<Feather name='edit' size={24} color='black' />
			</TouchableOpacity>
		),
	};
};

export default ShowScreen;

const styles = StyleSheet.create({
	containerStyle: { paddingHorizontal: 10, marginVertical: 10 },
	titleStyle: { fontSize: 24, fontWeight: 'bold', paddingBottom: 5 },
	contentStyle: {},
});
