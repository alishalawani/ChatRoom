# React Native Workshop
Through this tutorial, we would be building a simple Chat Room app for both android and ios. We would be covering navigation in React Native, Flexbox, and using various react native APIs. No backend involved, all messages would be stored in state.

### You can either fork and clone this repository or Follow the set up to start from scratch

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

### Using hooks, let us store some an array of messages in the component's state.
1. Import `useState` and add this to before your return statement 
    ```jsx
    const [messages, setMessages] = useState(['I\'m currently studying react native', 'oh really, me too', 'it\s so fun', 'I should have learnt it sooner'])