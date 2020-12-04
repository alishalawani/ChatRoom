import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	StatusBar,
} from 'react-native';
import WelcomeView from './screens/WelcomeView';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<WelcomeView />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
