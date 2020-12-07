import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ChatRoomView from './screens/ChatRoomView';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ChatRoomView />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	text: {
		color: 'red',
	},
});
