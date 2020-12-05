# React Native Workshop
Through this tutorial, we would be building a simple Chat Room app for both android and ios. We would be covering styling using Flexbox, and using various react native components. No backend involved, all messages would be stored in state.

#### You can either fork and clone this repository and checkout to the `workshop` branch or Follow the set up to start from scratch

## Setting up your development environment
1. With expo globally installed - from the command line run `expo init <NameOFApp>` in this case, `expo init ChatRoom` 
2. using your keyboard arrows to move, from the workflow options shown on the command line, under Managed Workflow, select `blank project`.
3. Change into the new directory we just created `cd ChatRoom`.
4. Create a folder named screens `mkdir screens`, in the root directory. This is were all our screens/views will be.

### Let us talk about Styling in react native.
[Layout in React Native Documentation](https://reactnative.dev/docs/flexbox)

## Create a Welcome view
### Use an image as the background
1. In the screens folder, `touch ChatRoomView.js`.
2. Create a functional component, since we would be using hooks.
3. Import the `ImageBackground` component from 'react-native' and render it.
4. This element has a `source` property which is set to the global require function with the path of the image passed in as a string argument. There is an image of your choice or the `background` image in the assets folder of this repo (you can also find the image here [](https://i.imgur.com/5VtFtoh.jpeg)). Note all media files should be in the assets folder.

    Your Welcome view component should look something like this
    ```jsx
    import React from 'react';
    import {ImageBackground } from 'react-native';
    function ChatRoomView(props) {
	    return (
		    <ImageBackground source={require('assets/background.jpg')}>
			    {}
		    </ImageBackground>
	    );
    }

    export default ChatRoomView;

5. To see what we have done so far, let's call the WelcomeView in App.js. You might see an error message about the image height, to fix that, we can simply give the ImageBackground a style property set to a container style object with a `flex:1` property.

### Buttons
Later on we would need a button so let us talk about the Button element and it's alternatives.
[Button Documentation](https://reactnative.dev/docs/button)

- Since the Button element is limitedly customizable, we would be using the `TouchableOpacity` component nesting a `Text` element that would serve as the button title.

### Displaying some messages
Using hooks, let us store some an array of messages in the component's state.
1. Import `useState` and add this to before your return statement 
    ```jsx
    	const [messages, setMessages] = useState([
            "I'm currently studying react native",
            'oh really, me too',
            'its so fun',
            'I should have learnt it sooner',
        ]);
2. Nest a `View` component inside of the `ImageBackground`.
3. Inside of the `View`, Map through the messages, returning `Text` components containing the messages.
4. Add an alignItems and a justifyContent, both given a value of `center`. To center the container of the messages.
5. Add background color, marginBottom, and padding to the `Text`.
6. Give the View component a width of 90%.
Inside of the return statement of the component should look like this:
```jsx
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
		</ImageBackground>
```
Your style sheet should look like this
```js
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	messagesContainer: { width: '90%' },
	message: {
		backgroundColor: 'white',
		padding: 10,
		marginBottom: 10,
	},
});
```
## Create an input box to send messages to the chat room
1. Inside of the screens folder, create a functional component named `InputBox`. `touch InputBox.js`.
2. In ChatRoomView, render the InputBox component under the messages, let it be the last thing in the ImageBackground.
3. Pass down the `messages` and `setMessages` hooks as props to the InputBox component.
4. In the InputBox Component, return a View component. and give it a height, width and background color, to see it's position.
5. Give the ChatRoomView main container a flexDirection of `row`.
6. Give the InputBox main container a alignSelf property with a value of `flex-end` and a absolute position, for it to stay at the bottom. 

### Adding a text input to send messages
Now that we can see the a where out input box will be placed, it's time to create it.
1. Import the `TextInput` component from react-native and nest it inside of the View, in the InputBox Component.
2. Import useState and add this hook before the return function, this would be for the new messages we post.
```js
const [newMessage, setNewMessage] = useState('Edit this message')
```
3. The TextInput component has an `onChangeText` property and a `value` property. The onChangeText property takes a callback that has the current textInput as a parameter. [View Doc for more](https://reactnative.dev/docs/textinput)

4. The TextInput tag should look like this
```jsx
<TextInput
    style={styles.textInput}
    onChangeText={(text) => setNewMessage(text)}
    value={newMessage}
    multiline
/>
```
Make your stylesheet should look like this
```jsx
const styles = StyleSheet.create({
	container: {
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
        padding:10,
        fontSize:18,
        borderRadius:10,
	},
});
```
### Send Button Functionality
 Now that we have our input box created We need to create the functionality of sending new messages.
 1. Add `flex:1` and `flexDirection:'row'` to the main Container, in the InputBox component.
 2. Import TouchOpacity and render it bellow the textInput and nest a Text that says 'send', inside of it.
 3. Give the button a color and center the text.
 Your button should look like this
 ```jsx
 <TouchableOpacity
    style={{
        backgroundColor: 'dodgerblue',
        width: '16%',
        justifyContent: 'center',
        alignItems:'center'
    }}>
    <Text style={{fontSize:20}}>send</Text>
</TouchableOpacity>
```
4. Let us create a `handleSend` function that is going to be responsible for posting new messages to the chatRoom. 
```jsx
const handleSend = () => {
	setMessages([...messages, newMessage]);
}
```
5. Now, add an onPress property to the button/touchable and set it to the handleSend function 

Chat Room Done, Time to test it out, let's send a message!

## Cool Stuff to explore
* [Navigating Between Screens](https://reactnative.dev/docs/navigation#react-navigation).
* [React Native Community hooks](https://github.com/react-native-community/hooks). 
* Working with audio. Check out this [react native community audio-toolkit](https://www.npmjs.com/package/@react-native-community/audio-toolkit).

- There are a lot more react Native communities you will find out there!

I started with this React Native tutorial by [Programming With Mosh](https://www.youtube.com/watch?v=0-S5a0eXPoc). 