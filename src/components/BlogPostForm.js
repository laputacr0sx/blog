import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View>
			<Text style={styles.label}>Enter Title :</Text>
			<TextInput
				style={styles.inputStyle}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter Content :</Text>
			<TextInput
				style={styles.inputStyle}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button
				color={'rgb(250, 163, 7)'}
				title='Save Blog Post!'
				onPress={() => {
					onSubmit(title, content);
				}}></Button>
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: '',
	},
};

export default BlogPostForm;

const styles = StyleSheet.create({
	inputStyle: {
		fontSize: 18,
		borderRadius: 1,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 24,
		marginBottom: 5,
		marginLeft: 5,
	},
});
