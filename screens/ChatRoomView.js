import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import InputBox from './InputBox';
function ChatRoomView(props) {
	const [messages, setMessages] = useState([
		"I'm currently studying react native",
		'oh really, me too',
		'its so fun',
		'I should have learnt it sooner',
	]);

	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={styles.container}>
			<View style={styles.messagesContainer}>
				{messages.map((message, index) => {
					return (
						<Text key={index} style={styles.message}>
							{message}
						</Text>
					);
				})}
			</View>
			<InputBox messages={messages} setMessages={setMessages}/>
		</ImageBackground>
	);
}

export default ChatRoomView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	messagesContainer: { width: '90%'},
	message: {
		backgroundColor: 'white',
		padding: 10,
		marginBottom: 10,
	},
});
