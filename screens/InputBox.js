import React, { useState } from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';
function InputBox({ messages, setMessages }) {
	const [newMessage, setNewMessage] = useState('Edit this message');
	const handleSend = () => {
		setMessages([...messages, newMessage]);
	}
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				onChangeText={(text) => setNewMessage(text)}
				value={newMessage}
				multiline
			/>
			<TouchableOpacity
				style={{
					backgroundColor: 'dodgerblue',
					width: '16%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				onPress={handleSend}>
				<Text style={{ fontSize: 20 }}>send</Text>
			</TouchableOpacity>
		</View>
	);
}

export default InputBox;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		height: 70,
		width: '100%',
		position: 'absolute',
		alignSelf: 'flex-end',
		paddingBottom: 5,
	},
	textInput: {
		height: '100%',
		width: '84%',
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: 'white',
		padding: 10,
		fontSize: 18,
		borderRadius: 10,
	},
});
