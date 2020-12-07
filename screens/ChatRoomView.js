import React , {useState} from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
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
			style={styles.container}
			source={require('../assets/background.jpg')}>
				<View style={styles.messagesContainer}>
					{messages.map((message)=>{
					return <Text style={styles.message}>{message}</Text>
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
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection:'row',
	},
	message: {
		backgroundColor: 'white',
		padding: 10,
		marginBottom: 10,
	},
	messagesContainer: {
		width: '90%',
	},
});
