import React, { useState } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';

function InputBox({messages, setMessages}) {
    const [newMessage, setNewMessage] = useState('Edit this message');
    const handleSend = () => {
            setMessages([...messages, newMessage]);
            setNewMessage('')
		};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<TextInput
				value={newMessage}
                style={styles.textInput}
                placeholder={'input text'}
				onChangeText={(text) => {
					setNewMessage(text);
				}}
			/>
            <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text>
                send
                </Text>
            </TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

export default InputBox;

const styles = StyleSheet.create({
	container: {
		alignSelf: 'flex-end',
		position: 'absolute',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    textInput:{
        backgroundColor:'white',
        height:50,
        width:'84%',
        borderRadius:10,
        padding:10
    },
    button:{
        backgroundColor:'dodgerblue',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        width:'16%'

    }
});
