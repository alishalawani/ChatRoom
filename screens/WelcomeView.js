import React from 'react';
import { ImageBackground, StyleSheet, Platform, StatusBar } from 'react-native';
function WelcomeView(props) {
	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={styles.container}>
			{}
		</ImageBackground>
	);
}

export default WelcomeView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
