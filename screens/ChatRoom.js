import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
function ChatRoomView(props) {
	const [messages, setMessages] = useState(['I\'m currently studying react native', 'oh really, me too', 'it\s so fun', 'I should have learnt it sooner'])

	

	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={styles.container}>

			</ImageBackground>
	);
}

export default ChatRoomView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
